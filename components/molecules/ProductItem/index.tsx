import { FC } from 'react';
import Image from 'next/image';
import { WorkItem } from 'components/organisms/ProductList/style';
import { WorkTag } from 'interfaces/landing';
import { Container, Overlay } from './style';
import ProductItemToast from '../ProductItemToast';

interface WorkItemProps {
  title?: string;
  tags?: WorkTag[];
  src?: string;
  onClick?(): void;
}

const ProductItem: FC<WorkItemProps> = ({
  title = '',
  tags = [],
  src = '',
  onClick = () => {},
}) => (
  <>
    <Container onClick={onClick}>
      <Overlay>
        <ProductItemToast title={title} tags={tags} />
      </Overlay>
      <WorkItem>
        <Image layout="fill" objectFit="contain" src={src} />
      </WorkItem>
    </Container>
  </>
);

export default ProductItem;
