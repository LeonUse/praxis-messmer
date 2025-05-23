import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <section style={{ textAlign: 'center', marginBottom: 0}}>
      <Title level={2}>Willkommen in der Kur- und Naturheilpraxis Meßmer</Title>
      <Paragraph style={{ maxWidth: 800, margin: 'auto', fontSize: 16, color: '#555' }}>
        In unserer Praxis verbinden wir moderne Diagnosemethoden mit natürlichen Heilverfahren. Unser Ziel ist es,
        Ihre Gesundheit ganzheitlich zu fördern und Ihnen Raum für Erholung zu bieten. Entdecken Sie unsere Leistungen und lassen Sie sich gerne individuell beraten.
      </Paragraph>
    </section>
  );
}
