import { FC } from 'react';
import { Col, Row } from 'antd';
import HeadMenu from 'components/molecules/HeadMenu';
import Logo from 'components/atoms/Logo';
import { HeadMenuList } from 'interfaces';

interface HeaderProps {
  menuUrl?: Partial<Record<HeadMenuList, string>>;
  onMenuClick?(item: HeadMenuList): void;
}

const Header: FC<HeaderProps> = ({ menuUrl = {}, onMenuClick = () => {} }) => (
  <Row align="middle" justify="center">
    <Col xs={10} lg={11}>
      <Logo />
    </Col>
    <Col xs={10} lg={11}>
      <HeadMenu menuUrl={menuUrl} onMenuClick={onMenuClick} />
    </Col>
  </Row>
);

export default Header;
