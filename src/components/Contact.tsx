import { Button, Form, Input, Typography } from 'antd';

const { Title } = Typography;

export default function Contact() {
 /* const onFinish = (values: any) => {
    const serviceId = 'service_s1m0b6i';
    const templateId = 'template_oqm2nwk';
    const publicKey = 'qOB7DmrSD_o9JBc_o'; // früher: userID

    emailjs.send(serviceId, templateId, values, publicKey)
      .then(() => {
        antdMessage.success('Nachricht erfolgreich gesendet!');
      })
      .catch(() => {
        antdMessage.error('Fehler beim Senden der Nachricht.');
      });
  };
  */
//onFinish={onFinish}
  return (
    <section id="contact" style={{ marginBottom: 80, maxWidth: 600, margin: 'auto' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: 40 }}>Kontakt</Title>
      <Form layout="vertical" >
        <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Bitte Ihren Namen eingeben' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="E-Mail" rules={[
          { type: 'email', message: 'Bitte gültige E-Mail' },
          { required: true, message: 'Bitte E-Mail eingeben' }
        ]}>
          <Input />
        </Form.Item>
        <Form.Item name="message" label="Nachricht" rules={[{ required: true, message: 'Bitte Nachricht eingeben' }]}>
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>Nachricht senden</Button>
        </Form.Item>
      </Form>
    </section>
  );
}
