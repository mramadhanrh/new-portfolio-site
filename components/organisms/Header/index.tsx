import { FC } from 'react';
import { Col, Row } from 'antd';
import HeadMenu from 'components/molecules/HeadMenu';
import Logo from 'components/atoms/Logo';

const Header: FC = () => (
  <Row align="middle" justify="center">
    <Col xs={10} lg={11}>
      <Logo />
    </Col>
    <Col xs={10} lg={11}>
      <HeadMenu />
    </Col>
  </Row>
);

export default Header;
