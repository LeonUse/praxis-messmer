import { useState } from 'react';
import { Row, Col, Typography, Modal, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBacteria,
  faPeopleGroup,
  faLungs,
  faSyringe,
  faHeartbeat,
  faVials,
  faChalkboardTeacher,
  faBed
} from '@fortawesome/free-solid-svg-icons';

const { Title, Paragraph } = Typography;

// Service-Liste mit Icons und Beschreibungen
const services = [
  {
    key: 'darmsanierung',
    title: 'Darmsanierung',
    icon: faBacteria,
    description: `Unsere Darmsanierung umfasst eine individuelle Ernährungsberatung sowie den Einsatz von Probiotika und präbiotischen Fasern, um Ihre Darmflora nachhaltig aufzubauen und Beschwerden wie Blähungen oder Unwohlsein zu lindern.`
  },
  {
    key: 'heilfastenkurse',
    title: 'Heilfastenkurse',
    icon: faPeopleGroup,
    description: `Erleben Sie unsere geführten Heilfastenkurse in Gruppen: sanftes Fasten unter ärztlicher Begleitung, tägliche Bewegungseinheiten und kulinarische Workshops für den nachhaltigen Gesundheitseffekt.`
  },
  {
    key: 'sauerstofftherapie',
    title: 'Sauerstofftherapie',
    icon: faLungs,
    description: `Mit hochdosierter Sauerstofftherapie fördern wir die Zellregeneration und verbessern Ihre Leistungsfähigkeit. Ideal bei chronischen Erkrankungen oder zur Unterstützung der Wundheilung.`
  },
  {
    key: 'infusionstherapie',
    title: 'Infusionstherapie',
    icon: faSyringe,
    description: `Unsere Infusionstherapien liefern Vitamine, Mineralstoffe und Spurenelemente direkt in Ihren Blutkreislauf. Perfekt bei Erschöpfung, Immunschwäche oder zur Regeneration nach Sport und Stress.`
  },
  {
    key: 'bioresonanz',
    title: 'Bio',
    icon: faHeartbeat,
    description: `Die Biotherapie analysiert und harmonisiert energetische Frequenzen Ihres Körpers. Unterstützend bei Allergien, Hautproblemen oder zur allgemeinen Energiebalance.`
  },
  {
    key: 'labordiagnostik',
    title: 'Labordiagnostik',
    icon: faVials,
    description: `Unser umfassendes Labordiagnostik-Portfolio deckt Blut-, Stuhl- und Speichelanalysen ab, um Gesundheitsparameter exakt zu bestimmen und individuelle Therapiekonzepte zu entwickeln.`
  },
  {
    key: 'seminare',
    title: 'Seminare',
    icon: faChalkboardTeacher,
    description: `In regelmäßigen Seminaren vermitteln wir Wissen zu Ernährung, Fasten, Stressmanagement und Naturheilverfahren – praxisnah und interaktiv für Ihre Gesundheit.`
  },
  {
    key: 'kuraufenthalte',
    title: 'Kuraufenthalte',
    icon: faBed,
    description: `Planen Sie Ihren individuellen Kuraufenthalt mit Unterkunft, Therapieprogramm und Wellnessangeboten. Ganzheitliche Entspannung in naturnaher Umgebung.`
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
