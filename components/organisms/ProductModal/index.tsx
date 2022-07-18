import { FC } from 'react';
import { Col, Row, ModalProps } from 'antd';
import ProductImageSlider from '../ProductImageSlider';

import {
  ModalContainer,
  ContentCol,
  CreationDate,
  Description,
  ProductName,
  ProductRow,
  ProductTech,
} from './style';

interface ProductModalProps extends ModalProps {
  description?: string;
}

const ProductModal: FC<ProductModalProps> = ({
  description = '',
  ...props
}) => (
  <ModalContainer width="100%" footer={null} destroyOnClose {...props}>
    <ProductRow>
      <Col xs={24} lg={11}>
        <ProductImageSlider />
      </Col>
      <ContentCol xs={24} lg={13}>
        <Description>{description}</Description>
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
  </ModalContainer>
);

export default ProductModal;
