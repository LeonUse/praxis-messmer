import { Carousel, Typography, Card, Rate } from 'antd';

const { Title, Paragraph } = Typography;

const reviews = [
  {
    author: 'Anna Becker',
    text: 'Die Kombination aus Gesprächstherapie und Bioresonanz hat mir wirklich geholfen. Ich fühle mich wieder im Gleichgewicht.',
    rating: 5
  },
  {
    author: 'Lukas Hartmann',
    text: 'Die Colon-Hydro-Therapie war zunächst ungewohnt, aber danach fühlte ich mich so viel leichter und energiegeladener!',
    rating: 4
  },
  {
    author: 'Claudia Sommer',
    text: 'Sehr einfühlsame Betreuung. Besonders die Heilhypnose hat mir bei meinen Schlafproblemen geholfen.',
    rating: 5
  },
  {
    author: 'Markus Weber',
    text: 'Ich war skeptisch, aber die Infusionstherapie hat meine Erschöpfung deutlich verbessert.',
    rating: 4
  },
  {
    author: 'Nina Schuster',
    text: 'Das Fastenseminar war top organisiert. Ich nehme so viele positive Impulse mit in meinen Alltag.',
    rating: 5
  },
  {
    author: 'Thomas Klein',
    text: 'Angenehme Atmosphäre und professionelle Beratung. Man nimmt sich wirklich Zeit für die Patienten.',
    rating: 5
  },
  {
    author: 'Laura König',
    text: 'Die Labordiagnostik war sehr gründlich und hat neue Ansätze in meiner Behandlung ermöglicht.',
    rating: 5
  },
  {
    author: 'Sebastian Vogel',
    text: 'Die Akupunktur hat bei meinen chronischen Rückenschmerzen erstaunlich gut geholfen.',
    rating: 4
  },
  {
    author: 'Miriam Ziegler',
    text: 'Ich bin begeistert von der ganzheitlichen Herangehensweise – nicht nur Symptome, sondern Ursachen wurden behandelt.',
    rating: 5
  },
  {
    author: 'Jonas Fuchs',
    text: 'Die Vegacheck-Analyse war sehr aufschlussreich. Endlich konkrete Hinweise, wie ich meinen Alltag gesünder gestalten kann.',
    rating: 5
  },
  {
    author: 'Sabine Lenz',
    text: 'Tolles Team, angenehme Räumlichkeiten und eine sehr gute Betreuung während meiner Kur.',
    rating: 5
  },
  {
    author: 'Daniel Bergmann',
    text: 'Ich habe schon vieles ausprobiert – aber hier habe ich mich zum ersten Mal wirklich verstanden gefühlt.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        marginBottom: 80,
        background: '#fff',
        padding: '30px',
        borderRadius: 8,
        textAlign: 'center'
      }}
    >
      <Title
  level={2}
  lang="de"
  style={{
    marginBottom: 40,
    fontSize: '2rem',
    hyphens: 'auto',
    overflowWrap: 'break-word',
    wordBreak: 'normal',
  }}
>
  Erfahrungsberichte
</Title>
      <Carousel autoplay autoplaySpeed={15000}>
        {reviews.map((r, i) => (
          <Card
            key={i}
            bordered={false}
            style={{
              maxWidth: 600,
              margin: '0 auto',
              textAlign: 'center',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              borderRadius: 12
            }}
          >
            <Rate disabled defaultValue={r.rating} style={{ marginBottom: 16 }} />
            <Paragraph style={{ fontStyle: 'italic', fontSize: '16px' }}>&quot;{r.text}&quot;</Paragraph>
            <Paragraph strong style={{ marginTop: 12 }}>– {r.author}</Paragraph>
          </Card>
        ))}
      </Carousel>
    </section>
  );
}
