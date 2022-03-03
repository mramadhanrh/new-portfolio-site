import { FC } from 'react';
import Image from 'next/image';
import { Container, Overlay } from './style';
import ProductItemToast from '../ProductItemToast';

interface WorkItemProps {
  src?: string;
  onClick?(): void;
}

const ProductItem: FC<WorkItemProps> = ({ src, onClick = () => {} }) => (
  <>
    <Container onClick={onClick}>
      <Overlay>
        <ProductItemToast />
      </Overlay>
      <Image layout="fill" src={src} />
    </Container>
  </>
);

export default ProductItem;
