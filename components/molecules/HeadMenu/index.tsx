import { FC } from 'react';
import { Row, Col } from 'antd';
import Button from 'components/atoms/Button';
import NavButton from 'components/atoms/NavButton';

const HeadMenu: FC = () => (
  <>
    <Row justify="end">
      <Col md={0} lg={24}>
        <Row justify="end">
          <Col>
            <Button variant="text">Services</Button>
          </Col>
          <Col>
            <Button variant="text">Work</Button>
          </Col>
          <Col>
            <Button variant="text">Blog</Button>
          </Col>
          <Col>
            <Button variant="text">Contact</Button>
          </Col>
        </Row>
      </Col>
      <Col md={24} lg={0}>
        <Row justify="end">
          <Col>
            <NavButton />
          </Col>
        </Row>
      </Col>
    </Row>
  </>
);

export default HeadMenu;
