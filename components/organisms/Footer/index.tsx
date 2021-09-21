import { Row, Col } from 'antd';
import Logo from 'components/atoms/Logo';
import { FooterInfoRow, ColorBlock, LicenseText } from './style';

const Footer = () => (
  <>
    <FooterInfoRow align="middle" justify="space-between">
      <Col span={12} push={1}>
        <Logo />
      </Col>
      <Col span={12} pull={1}>
        <LicenseText>© 2021 ALL RIGHTS RESERVED</LicenseText>
      </Col>
    </FooterInfoRow>
    <Row>
      <Col span={15}>
        <ColorBlock color="primary" />
      </Col>
      <Col span={9}>
        <ColorBlock color="secondary" />
      </Col>
    </Row>
  </>
);

export default Footer;
