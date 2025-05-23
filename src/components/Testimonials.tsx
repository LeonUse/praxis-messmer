import { Carousel, Typography, Card } from 'antd';

const { Title, Paragraph } = Typography;

const reviews = [
  { author: 'M. Müller', text: 'Die Darmsanierung hat mein Leben verändert. Kompetente Betreuung!' },
  { author: 'S. Schneider', text: 'Toller Fastenkurs – fühlte mich danach wie neugeboren.' },
  { author: 'J. Fischer', text: 'Einfach top: freundliches Team und professionelle Therapien.' }
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ marginBottom: 80, background: '#fff', padding: '50px', borderRadius: 8 }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: 40 }}>Erfahrungsberichte</Title>
      <Carousel autoplay>
        {reviews.map((r, i) => (
          <Card key={i} style={{ maxWidth: 600, margin: 'auto', textAlign: 'center' }}>
            <Paragraph style={{ fontStyle: 'italic' }}>&quot;{r.text}&quot;</Paragraph>
            <Paragraph strong>- {r.author}</Paragraph>
          </Card>
        ))}
      </Carousel>
    </section>
  );
}