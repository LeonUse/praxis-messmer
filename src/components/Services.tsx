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
    description: ``
  },
  {
    key: 'heilfastenkurse',
    title: 'Heilfastenkurse',
    icon: faPeopleGroup,
    description: ``
  },
  {
    key: 'sauerstofftherapie',
    title: 'Sauerstofftherapie',
    icon: faLungs,
    description: ``
  },
  {
    key: 'infusionstherapie',
    title: 'Infusionstherapie',
    icon: faSyringe,
    description: ``
  },
  {
    key: 'bioresonanz',
    title: 'Bio',
    icon: faHeartbeat,
    description: ``
  },
  {
    key: 'labordiagnostik',
    title: 'Labordiagnostik',
    icon: faVials,
    description: ``
  },
  {
    key: 'seminare',
    title: 'Seminare',
    icon: faChalkboardTeacher,
    description: ``
  },
  {
    key: 'kuraufenthalte',
    title: 'Kuraufenthalte',
    icon: faBed,
    description: ``
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
