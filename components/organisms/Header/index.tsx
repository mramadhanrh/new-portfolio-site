import { FC } from 'react';
import { Col, Row } from 'antd';
import HeadMenu from 'components/molecules/HeadMenu';
import { TagText } from './style';

const Header: FC = () => (
  <Row align="middle" justify="space-around">
    <Col span={10}>
      <TagText>RAMA</TagText>
    </Col>
    <Col span={10}>
      <HeadMenu />
    </Col>
  </Row>
);

export default Header;
