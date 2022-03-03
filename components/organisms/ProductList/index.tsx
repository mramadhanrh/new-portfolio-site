/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { FC, useState } from 'react';
import { Col, Row } from 'antd';
import ProductItem from 'components/molecules/ProductItem';
import { Title, Subtitle, GridContainer } from './style';
import ProductModal from '../ProductModal';

const ProductList: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModalVisible = () => setModalVisible((val) => !val);

  return (
    <>
      <ProductModal onCancel={toggleModalVisible} visible={modalVisible} />
      <Row justify="center" align="middle" style={{ marginBottom: 90 }}>
        <Col span={22}>
          <Title>Check My Works Collection!</Title>
          <Subtitle>Featured projects, which my best projects to show</Subtitle>
        </Col>
        <Col span={22}>
          <GridContainer>
            {new Array(20)
              .fill('https://source.unsplash.com/random')
              .map((url, i) => (
                <ProductItem
                  key={i.toString()}
                  src={`${url}?id=${i}`}
                  onClick={() => setModalVisible(true)}
                />
              ))}
          </GridContainer>
        </Col>
      </Row>
    </>
  );
};

export default ProductList;
