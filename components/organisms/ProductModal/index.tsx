import { FC } from 'react';
import Overlay from 'components/atoms/Overlay';
import { Col, Row } from 'antd';
import {
  Container,
  ContentWrapper,
  CoverImage,
  CreationDate,
  Description,
  FooterWrapper,
  ImageOverlay,
  ModalWrapper,
  ProductName,
  ProductTech,
} from './style';

const ProductModal: FC = () => (
  <Container>
    <Overlay />
    <ModalWrapper>
      <Row align="middle">
        <Col span={11}>
          <ImageOverlay />
          <CoverImage src="/sample-modal-pic.png" />
        </Col>
        <Col span={13}>
          <ContentWrapper>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
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
    </ModalWrapper>
  </Container>
);

export default ProductModal;
