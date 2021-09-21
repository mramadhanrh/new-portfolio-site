import { FC } from 'react';
import Tag from 'components/atoms/Tag';
import { Row, Col } from 'antd';
import { Container, Wrapper, Title, TagContainer } from './style';

const WorkItemToast: FC = () => (
  <Container>
    <Wrapper justify="start">
      <Col span={24}>
        <Title>Art Magazine</Title>
      </Col>
      <Col span={24}>
        <TagContainer>
          <Tag backgroundColor="primary" shadowColor="pizzaz">
            Web Development
          </Tag>
          <Tag backgroundColor="black" shadowColor="ecstasy">
            Web Development
          </Tag>
        </TagContainer>
      </Col>
    </Wrapper>
  </Container>
);

export default WorkItemToast;
