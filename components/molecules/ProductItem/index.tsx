import { FC } from 'react';
import Image from 'next/image';
import { WorkItem } from 'components/organisms/ProductList/style';
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
      <WorkItem>
        <Image layout="fill" objectFit="contain" src={src} />
      </WorkItem>
    </Container>
  </>
);

export default ProductItem;
