/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { forwardRef, useState } from 'react';
import { Col, Row } from 'antd';
import { WorkItem } from 'interfaces/landing';
import ProductItem from 'components/molecules/ProductItem';
import { Title, Subtitle, GridContainer } from './style';
import ProductModal from '../ProductModal';

interface ProductListProps {
  data: WorkItem[];
}

const ProductList = forwardRef<HTMLDivElement, ProductListProps>(
  ({ data }, ref) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [activeProductIndex, setActiveProductIndex] = useState(0);

    const toggleModalVisible = () => setModalVisible((val) => !val);

    const handleProductClick = (idx: number): void => {
      setActiveProductIndex(idx);
      setModalVisible(true);
    };

    return (
      <>
        <ProductModal
          data={data[activeProductIndex]}
          onCancel={toggleModalVisible}
          visible={modalVisible}
        />
        <Row
          ref={ref}
          justify="center"
          align="middle"
          style={{ marginBottom: 90 }}
        >
          <Col span={22}>
            <Title>Check My Work Collection!</Title>
            <Subtitle>
              Featured projects, which my best projects to show
            </Subtitle>
          </Col>
          <Col span={22}>
            <GridContainer>
              {data.map(({ title, thumbnail, tags }, i) => (
                <ProductItem
                  key={i.toString()}
                  title={title}
                  src={thumbnail}
                  tags={tags}
                  onClick={() => handleProductClick(i)}
                />
              ))}
            </GridContainer>
          </Col>
        </Row>
      </>
    );
  },
);

export default ProductList;
