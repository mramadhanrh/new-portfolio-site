import { FC } from 'react';
import { Col, Row, ModalProps } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import Overlay from 'components/atoms/Overlay';
import ProductImageSlider from '../ProductImageSlider';

import {
  CloseButton,
  Container,
  ContentCol,
  CoverImage,
  CreationDate,
  Description,
  ImageOverlay,
  ModalWrapper,
  ProductName,
  ProductRow,
  ProductTech,
} from './style';

interface ProductModalProps extends ModalProps {
  description?: string;
}

const ProductModal: FC<ProductModalProps> = ({ description, ...props }) => (
  <Container width="100%" footer={null} {...props}>
    <ProductRow>
      <Col xs={24} lg={11}>
        <ProductImageSlider />
      </Col>
      <ContentCol xs={24} lg={13}>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </Description>
        <Row align="middle" justify="space-between">
          <Col>
            <CreationDate>2021</CreationDate>
            <ProductTech>Web Development - Landing Page</ProductTech>
          </Col>
          <Col>
            <ProductName>FOLIO</ProductName>
          </Col>
        </Row>
      </ContentCol>
    </ProductRow>
  </Container>
);

export default ProductModal;
