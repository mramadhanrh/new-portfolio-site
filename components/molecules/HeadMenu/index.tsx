import { FC } from 'react';
import { Row, Col } from 'antd';
import Button from 'components/atoms/Button';

const HeadMenu: FC = () => {
  return (
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
  );
};

export default HeadMenu;
