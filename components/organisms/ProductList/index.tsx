/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { forwardRef, useState } from 'react';
import { Col, Row } from 'antd';
import ProductItem from 'components/molecules/ProductItem';
import { Title, Subtitle, GridContainer } from './style';
import ProductModal from '../ProductModal';

const ProductList = forwardRef<HTMLDivElement>((_, ref) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModalVisible = () => setModalVisible((val) => !val);

  return (
    <>
      <ProductModal onCancel={toggleModalVisible} visible={modalVisible} />
      <Row
        ref={ref}
        justify="center"
        align="middle"
        style={{ marginBottom: 90 }}
      >
        <Col span={22}>
          <Title>Check My Work Collection!</Title>
          <Subtitle>Featured projects, which my best projects to show</Subtitle>
        </Col>
        <Col span={22}>
          <GridContainer>
            {new Array(20)
              .fill('https://source.unsplash.com/search/photos?query=tech')
              .map((url, i) => (
                <ProductItem
                  key={i.toString()}
                  src={`${url as string}?id=${i}`}
                  onClick={() => setModalVisible(true)}
                />
              ))}
          </GridContainer>
        </Col>
      </Row>
    </>
  );
});

export default ProductList;
