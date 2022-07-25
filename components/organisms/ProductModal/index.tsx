import { FC } from 'react';
import { Col, Row, ModalProps } from 'antd';
import { WorkItem } from 'interfaces/landing';
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
  data?: WorkItem;
}

const ProductModal: FC<ProductModalProps> = ({ data = {}, ...props }) => {
  const {
    title,
    subtitle,
    description,
    creation_date: creationDate,
    image_list: imageList,
  } = data as WorkItem;
  return (
    <ModalContainer width="100%" footer={null} destroyOnClose {...props}>
      <ProductRow>
        <Col xs={24} lg={8}>
          <ProductImageSlider data={imageList} />
        </Col>
        <ContentCol xs={24} lg={16}>
          <Row>
            <Col>
              <Description>{description}</Description>
            </Col>
          </Row>
          <Row align="middle" justify="space-between">
            <Col>
              <CreationDate>{creationDate}</CreationDate>
              <ProductTech>{subtitle}</ProductTech>
            </Col>
            <Col>
              <ProductName>{title}</ProductName>
            </Col>
          </Row>
        </ContentCol>
      </ProductRow>
    </ModalContainer>
  );
};

export default ProductModal;
