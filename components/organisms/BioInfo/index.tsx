import { FC } from 'react';
import { Row, Col } from 'antd';

import SkillCard from 'components/atoms/SkillCard';
import {
  BioTagline,
  BioRowContainer,
  TextBackdrop,
  BioDescription,
  Testimony,
  CardRow,
} from './style';

interface BioInfoProps {}

const BioInfo: FC<BioInfoProps> = () => (
  <>
    <BioRowContainer justify="space-around" align="middle">
      <Col xs={20} lg={10}>
        <TextBackdrop>Experience</TextBackdrop>
        <Row justify="start">
          <Col xs={12} sm={10} md={8} lg={7}>
            <Testimony>
              <span>4+</span>
              <br />
              Years of experience
            </Testimony>
          </Col>
          <Col
            xs={{ span: 10 }}
            sm={10}
            md={8}
            lg={{ span: 7, push: 6 }}
            xl={{ push: 4 }}
          >
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </BioDescription>
      </Col>
    </BioRowContainer>

    <CardRow justify="center" align="middle">
      <Col xs={{ span: 22 }} md={{ span: 6 }}>
        <SkillCard>{`Web\nDevelopment`}</SkillCard>
      </Col>
      <Col xs={{ span: 22 }} md={{ span: 6, offset: 1 }}>
        <SkillCard>{`App\nDevelopment`}</SkillCard>
      </Col>
      <Col xs={{ span: 22 }} md={{ span: 6, offset: 1 }}>
        <SkillCard>{`Games\nDevelopment`}</SkillCard>
      </Col>
    </CardRow>
  </>
);

export default BioInfo;
