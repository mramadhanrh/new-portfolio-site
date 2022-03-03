import { FC } from 'react';
import { Col, Row, ModalProps } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import Overlay from 'components/atoms/Overlay';
import ProductImageSlider from '../ProductImageSlider';

import {
  CloseButton,
  Container,
  ContentWrapper,
  CoverImage,
  CreationDate,
  Description,
  ImageOverlay,
  ModalWrapper,
  ProductName,
  ProductTech,
} from './style';

interface ProductModalProps extends ModalProps {
  description?: string;
}

const ProductModal: FC<ProductModalProps> = ({ description, ...props }) => (
  <Container width="100%" footer={null} {...props}>
    <Row>
      <Col span={11}>
        <ProductImageSlider />
      </Col>
      <Col span={13}>
        <ContentWrapper>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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
        </ContentWrapper>
      </Col>
    </Row>
  </Container>
);

export default ProductModal;
