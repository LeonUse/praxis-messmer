
import { Button, Col, Modal, Row } from 'antd';
import { useState } from 'react';
import styles from './Gallery.module.css';

import img1 from '../assets/gallery1.jpg';
import img2 from '../assets/gallery2.jpg';
import img3 from '../assets/gallery3.jpg';
import img4 from '../assets/gallery4.jpg';
import img5 from '../assets/gallery5.jpg';
import img6 from '../assets/gallery6.jpg';
const images = [img1, img2, img3, img4, img5, img6];
const HEADER_HEIGHT = 80; // Höhe der HeaderBar anpassen

export default function Gallery() {
  const [visible, setVisible] = useState(false);

  const openGallery = () => setVisible(true);
  const closeGallery = () => setVisible(false);

  return (
    <>
      <section id="gallery" style={{ textAlign: 'center', margin: '40px 0' }}>
        {/* Vorschau-Grid */}
        <div className={styles.gridContainer} onClick={openGallery}>
          {images.slice(0, 4).map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Vorschau ${idx + 1}`}
              className={styles.gridImage}
            />
          ))}
          {images.length > 4 && (
            <div className={styles.moreOverlay} onClick={openGallery}>
              +{images.length - 4}
            </div>
          )}
        </div>
      </section>

      {/* Modal mit voller Galerie */}
      <Modal
        visible={visible}
        onCancel={closeGallery}
        footer={<Button onClick={closeGallery}>Schließen</Button>}
        width="80%"
        style={{ top: HEADER_HEIGHT }}
        bodyStyle={{ padding: '16px', maxHeight: `calc(100vh - ${HEADER_HEIGHT}px)`, overflowY: 'auto' }}
        centered
      >
        <Row gutter={[16, 16]}>
          {images.map((src, idx) => (
            <Col key={idx} xs={24} sm={12} md={8} lg={6} xl={4}>
              <img src={src} alt={`Bild ${idx + 1}`} className={styles.modalImage} />
            </Col>
          ))}
        </Row>
      </Modal>
    </>
  );
}