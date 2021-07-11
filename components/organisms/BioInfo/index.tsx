import { FC } from 'react';
import { Row, Col } from 'antd';

import {
  BioTagline,
  RowContainer,
  TextBackdrop,
  BioDescription,
  Testimony,
} from './style';

interface BioInfoProps {}

const BioInfo: FC<BioInfoProps> = () => (
  <RowContainer justify="space-around" align="middle">
    <Col xs={20} lg={10}>
      <TextBackdrop>Experience</TextBackdrop>
      <Row justify="start">
        <Col xl={5} span={8}>
          <Testimony>
            <span>4+</span>
            <br />
            Years of experience
          </Testimony>
        </Col>
        <Col xl={5} span={8}>
          <Testimony>
            <span>20+</span>
            <br />
            Satisfied Clients.
          </Testimony>
        </Col>
      </Row>
    </Col>
    <Col xs={20} lg={10}>
      <BioTagline>
        When creativity met logic <br /> that’s when the magic happens
      </BioTagline>
      <BioDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </BioDescription>
    </Col>
  </RowContainer>
);

export default BioInfo;
