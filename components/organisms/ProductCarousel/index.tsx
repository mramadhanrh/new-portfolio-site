import { FC } from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import { Container } from './style';
import illustration from '../../../public/illustration.png';

const carouselStyle: React.CSSProperties = {
  height: '100%',
  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
};
const contentStyle: React.CSSProperties = {
  height: '100%',
  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
};

const ProductCarousel: FC = () => (
  <Container>
    <Carousel autoplay style={carouselStyle}>
      {new Array(3)
        .fill(`https://source.unsplash.com/800x1600/?random`)
        .map((url: string, i) => (
          <Image
            key={i.toString()}
            alt={url}
            src={illustration}
            layout="fill"
            objectFit="contain"
            placeholder="blur"
            blurDataURL="https://source.unsplash.com/10x10/?random"
          />
        ))}
    </Carousel>
  </Container>
);

export default ProductCarousel;
