import { FC } from 'react';
import Image from 'next/image';
import { Container, Overlay } from './style';
import ProductItemToast from '../ProductItemToast';

interface WorkItemProps {
  src: string;
}

const ProductItem: FC<WorkItemProps> = ({ ...props }) => (
  <>
    <Container>
      <Overlay>
        <ProductItemToast />
      </Overlay>
      <Image layout="fill" {...props} />
    </Container>
  </>
);

export default ProductItem;
