import { Row, Col } from 'antd';
import { ColorBlock, TagText, LicenseText } from './style';

const Footer = () => (
  <>
    <Row align="middle" justify="space-between">
      <Col span={12} push={1}>
        <TagText>RAMA</TagText>
      </Col>
      <Col span={12} pull={1}>
        <LicenseText>© 2021 ALL RIGHTS RESERVED</LicenseText>
      </Col>
    </Row>
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
