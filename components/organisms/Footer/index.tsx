import { Row, Col } from 'antd';
import { ColorBlock } from './style';

const Footer = () => (
  <Row>
    <Col span={15}>
      <ColorBlock color="primary" />
    </Col>
    <Col span={9}>
      <ColorBlock color="secondary" />
    </Col>
  </Row>
);

export default Footer;
