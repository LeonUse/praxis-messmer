import {
  faBacteria,
  faBed,
  faComments,
  faFileLines,
  faHeartbeat,
  faPeopleGroup,
  faSyringe,
  faVials
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Col, Modal, Row, Typography } from 'antd';
import { useState } from 'react';

const { Title, Paragraph } = Typography;

// Service-Liste mit Icons und Beschreibungen
const services = [
  {
    key: 'darmsanierung',
    title: 'Colon-Hydro-Therapie',
    icon: faBacteria,
    description: `Die Colon-Hydro-Therapie ist eine Form der Darmspülung.
Dabei wird der Dickdarm mithilfe eines speziell dafür entwickelten Geräts mit Wasser gespült. Dies erfolgt mit dem Ziel, den Darm zu reinigen und die Darmtätigkeit zu unterstützen.
`
  },
  {
    key: 'fastenkurse',
    title: 'Fastenkurse',
    icon: faPeopleGroup,
    description: `Mehrmals im Jahr bieten wir 4x4 Fastenkurse an: An 4 gemeinsamen Abenden vermitteln wir Ihnen Wissen rund um das Thema Fasten.
Der Kurs wird ergänzt durch frisch gepresste Säfte, Suppen sowie begleitende Nahrungsergänzungsmittel.
`
  },
  {
    key: 'vegaCheck',
    title: 'VegaCheck',
    icon: faFileLines,
    description: `Der VegaCheck ist ein Verfahren aus der Komplementärmedizin.
Hierbei werden schmerzfreie Reize auf bestimmte Körperregionen ausgeübt und die darauffolgenden Reaktionen des Körpers erfasst.
Anwender nutzen den VegaCheck, um Hinweise auf energetische Regulationsstörungen zu erhalten.
`
  },
  {
    key: 'infusionstherapie',
    title: 'Infusionstherapie',
    icon: faSyringe,
    description: `Bei der Infusionstherapie werden Flüssigkeiten wie Elektrolyte oder Nährstoffe intravenös (über die Vene) verabreicht. 
Diese Anwendungen werden dabei individuell und nach Bedarf zusammengestellt
`
  },
  {
    key: 'bioresonanz',
    title: 'Bioresonanz',
    icon: faHeartbeat,
    description: `Bei der Bioresonanztherapie sollen mithilfe von Elektroden körpereigene Schwingungen erfasst und reguliert werden.
Es handelt sich hierbei um eine Behandlungsform der Komplementärmedizin, die schulmedizinisch nicht anerkannt ist.
Es wird von Anwendern zur Unterstützung der Selbstheilungskräfte genutzt
`
  },
  {
    key: 'labordiagnostik',
    title: 'Labordiagnostik',
    icon: faVials,
    description: `Unsere Naturheilpraxis arbeitet mit einem externen Labor zusammen, um fundierte Blutbilder und Laboranalysen erstellen zu lassen.`
  },
  {
    key: 'gesprächstherapie',
    title: 'Gesprächstherapie',
    icon: faComments,
    description: `In der Gesprächstherapie schaffen wir gemeinsam einen geschützten Raum, in dem Ihre Gedanken und Gefühle wertfrei wahrgenommen werden.
Ziel ist es, innere Klarheit zu gewinnen, neue Perspektiven zu entwickeln und persönliche Ressourcen zu stärken.
`
  },
  {
    key: 'kuraufenthalte',
    title: 'Kuraufenthalte',
    icon: faBed,
    description: `In unserer angrenzenden Kurpension genießen Sie einen sorgenfreien Aufenthalt im malerischen Hegau.
Die ruhige Umgebung und persönliche Betreuung schaffen optimale Bedingungen für Erholung und Gesundheitsförderung.
`
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleOpen = (key: string) => setSelectedService(key);
  const handleClose = () => setSelectedService(null);

  const service = services.find(s => s.key === selectedService);

  return (
    <section id="services" style={{ marginBottom: 80, textAlign: 'center' }}>
      <Title level={2} style={{ marginBottom: 40 }}>Leistungen</Title>
      <Row gutter={[24, 24]} justify="center">
        {services.map(s => (
          <Col
            key={s.key}
            xs={24}
            sm={12}
            md={8}
            lg={6}
            xl={4}
            xxl={3}
            style={{ marginBottom: 30 }}
          >
            <div
              onClick={() => handleOpen(s.key)}
              style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transition: 'transform 0.2s',
              }}
            >
              <div
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  border: '2px solid #5f663b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#fff'
                }}
              >
                <FontAwesomeIcon icon={s.icon} style={{ fontSize: '2rem', color: '#05212A' }} />
              </div>
              <div style={{ marginTop: 12, fontSize: '1rem', fontWeight: 500 }}>{s.title}</div>
            </div>
          </Col>
        ))}
      </Row>

      {service && (
        <Modal
          title={service.title}
          visible={true}
          onCancel={handleClose}
          footer={[
            <Button key="close" onClick={handleClose} type="primary">
              Schließen
            </Button>
          ]}
          bodyStyle={{ textAlign: 'left' }}
        >
          <Paragraph>{service.description}</Paragraph>
        </Modal>
      )}
    </section>
  );
}
