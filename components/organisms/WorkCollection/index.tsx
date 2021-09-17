/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import { Col, Row } from 'antd';
import WorkItem from 'components/molecules/WorkItem';
import { Title, Subtitle, GridContainer } from './style';

const WorkCollection: FC = () => (
  <Row justify="center" align="middle" style={{ marginBottom: 90 }}>
    <Col span={22}>
      <Title>Check My Works Collection!</Title>
      <Subtitle>Featured projects, which my best projects to show</Subtitle>
    </Col>
    <Col span={22}>
      <GridContainer>
        {new Array(100)
          .fill('https://source.unsplash.com/random')
          .map((url, i) => (
            <WorkItem key={i.toString()} src={`${url}?id=${i}`} />
          ))}
      </GridContainer>
    </Col>
  </Row>
);

export default WorkCollection;
