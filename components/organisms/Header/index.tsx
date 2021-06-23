import { FC } from 'react';
import { Col, Row } from 'antd';
import HeadMenu from 'components/molecules/HeadMenu';
import { Logo } from './style';

const Header: FC = () => (
  <Row justify="space-around">
    <Col span={10}>
      <Logo src="/logo.jpg" />
    </Col>
    <Col span={10}>
      <HeadMenu />
    </Col>
  </Row>
);

export default Header;
