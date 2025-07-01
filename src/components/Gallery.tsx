import { Carousel, Image } from 'antd';


import gallery1 from '../assets/gallery/gallery1.png';

const images = [

  gallery1,

];

export default function Gallery() {
  return (
    <Carousel autoplay>
      {images.map((src, index) => (
        <div key={index}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: "50vh",
       
            }}
          >
            <Image
              src={src}
              preview={false}
              style={{
                maxHeight: '100%',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
}
