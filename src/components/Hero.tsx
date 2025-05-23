import { Typography, Button } from 'antd';
import gardenImg from '../assets/kneipp-garden.jpg';

const { Title, Paragraph } = Typography;

export default function Hero() {
  return (
    <div style={{ position: 'relative', height: 400, marginBottom: 50, borderRadius: 8, overflow: 'hidden' }}>
      <img src={gardenImg} alt="Kneipp-Kurgarten" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(70%)' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', textAlign: 'center' }}>
        <Title style={{ color: '#fff', fontSize: '3rem', marginBottom: 16 }}>Herzlich Willkommen</Title>
        <Paragraph style={{ fontSize: '1.2rem', marginBottom: 24 }}>Raum für Gesundheit, Heilung und Erholung</Paragraph>
        <Button type="primary" size="large" href="#services">Mehr erfahren</Button>
      </div>
    </div>
  );
}
