/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import { Col, Row } from 'antd';
import { Title, Subtitle, GridContainer, WorkItem } from './style';

const mockImages = [
  'https://cdn.dribbble.com/users/59947/screenshots/16251880/media/5173333634e05e2c04a3d1af004fedc2.jpg?compress=1&resize=1200x900',
  'https://i.pinimg.com/564x/96/d5/4e/96d54e8876c353d348db3ae34c15121f.jpg',
  'https://i.pinimg.com/564x/3f/a9/c7/3fa9c70c18159b05c9c4156acec13bdb.jpg',
  'https://i.pinimg.com/564x/f2/dc/67/f2dc67f0edc2425b9e9290c886df2ff8.jpg',
  'https://cdn.dribbble.com/users/59947/screenshots/16251880/media/5173333634e05e2c04a3d1af004fedc2.jpg?compress=1&resize=1200x900',
  'https://i.pinimg.com/564x/96/d5/4e/96d54e8876c353d348db3ae34c15121f.jpg',
  'https://i.pinimg.com/564x/3f/a9/c7/3fa9c70c18159b05c9c4156acec13bdb.jpg',
  'https://i.pinimg.com/564x/f2/dc/67/f2dc67f0edc2425b9e9290c886df2ff8.jpg',
  'https://cdn.dribbble.com/users/59947/screenshots/16251880/media/5173333634e05e2c04a3d1af004fedc2.jpg?compress=1&resize=1200x900',
  'https://i.pinimg.com/564x/96/d5/4e/96d54e8876c353d348db3ae34c15121f.jpg',
  'https://i.pinimg.com/564x/3f/a9/c7/3fa9c70c18159b05c9c4156acec13bdb.jpg',
  'https://i.pinimg.com/564x/f2/dc/67/f2dc67f0edc2425b9e9290c886df2ff8.jpg',
  'https://cdn.dribbble.com/users/59947/screenshots/16251880/media/5173333634e05e2c04a3d1af004fedc2.jpg?compress=1&resize=1200x900',
  'https://i.pinimg.com/564x/96/d5/4e/96d54e8876c353d348db3ae34c15121f.jpg',
  'https://i.pinimg.com/564x/3f/a9/c7/3fa9c70c18159b05c9c4156acec13bdb.jpg',
  'https://i.pinimg.com/564x/f2/dc/67/f2dc67f0edc2425b9e9290c886df2ff8.jpg',
];

const WorkCollection: FC = () => (
  <Row justify="center" align="middle">
    <Col span={22}>
      <Title>Check My Works Collection!</Title>
      <Subtitle>Featured projects, which my best projects to show</Subtitle>
    </Col>
    <Col span={22}>
      <GridContainer>
        {mockImages.map((url, i) => (
          <WorkItem key={i.toString()} background={url}>
            <img src={url} />
          </WorkItem>
        ))}
      </GridContainer>
    </Col>
  </Row>
);

export default WorkCollection;
