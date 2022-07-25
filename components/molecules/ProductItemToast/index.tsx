import { FC } from 'react';
import Tag from 'components/atoms/Tag';
import { Col } from 'antd';
import { WorkTag } from 'interfaces/landing';
import { Container, Wrapper, Title, TagContainer } from './style';

interface ProductItemToastProps {
  title?: string;
  tags?: WorkTag[];
}

const ProductItemToast: FC<ProductItemToastProps> = ({
  title = '',
  tags = [],
}) => (
  <Container>
    {console.log(tags)}
    <Wrapper justify="start">
      <Col span={24}>
        <Title>{title}</Title>
      </Col>
      <Col span={24}>
        <TagContainer>
          {tags.map(({ name, color, shadow_color: shadow }, i) => (
            <Tag
              key={i.toString()}
              backgroundColor={color}
              shadowColor={shadow}
            >
              {name}
            </Tag>
          ))}
        </TagContainer>
      </Col>
    </Wrapper>
  </Container>
);

export default ProductItemToast;
