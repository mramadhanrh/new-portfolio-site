import { Col, Row } from 'antd';
import { FC } from 'react';
import Button from 'components/atoms/Button';
import {
  Illustration,
  RowContainer,
  Subtitle,
  Title,
  Description,
} from './style';

interface HeroProps {
  src?: string;
}

const XsHero: FC<HeroProps> = ({ src }) => (
  <>
    <Col id="info" xs={24} lg={0}>
      <Illustration src={src} />
    </Col>
    <Col span={20}>
      <Title>Hi, it&apos;s me Rama</Title>
      <Subtitle>
        <span>Software Engineer </span>
        <span>based in Bandung</span>
      </Subtitle>
      <Description>
        My name is Muhammad Ramadhan Rahmat, i am a creative and passionate
        developer based in Bandung, specialize frontend for web, mobile, and
        game.
      </Description>
    </Col>
  </>
);

const LgHero: FC<HeroProps> = ({ src }) => (
  <>
    <Col id="info" xs={0} lg={11}>
      <Title>Hi, it&apos;s me Rama</Title>
      <Subtitle>
        <span>Software Engineer </span>
        <span>based in Bandung</span>
      </Subtitle>
      <Description>
        My name is Muhammad Ramadhan Rahmat, i am a creative and passionate
        developer based in Bandung, specialize frontend for web, mobile, and
        game.
      </Description>

      <Button variant="primary" size="lg">
        Get in touch with me 👋
      </Button>
    </Col>
    <Col xs={0} lg={9}>
      <Illustration src={src} />
    </Col>
  </>
);

const Hero: FC<HeroProps> = (props) => (
  <Row>
    <Col xs={0} lg={24}>
      <RowContainer justify="space-around" align="middle">
        <LgHero {...props} />
      </RowContainer>
    </Col>
    <Col xs={24} lg={0}>
      <RowContainer justify="center" align="middle">
        <XsHero {...props} />
      </RowContainer>
    </Col>
  </Row>
);

export default Hero;
