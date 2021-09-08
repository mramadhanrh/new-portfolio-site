import { Col } from 'antd';
import { FC } from 'react';
import Button from 'components/atoms/Button';
import {
  Illustration,
  RowContainer,
  Subtitle,
  Title,
  Description,
} from './style';

const Hero: FC = () => (
  <RowContainer justify="space-around" align="middle">
    <Col id="info" span={10}>
      <Title>Hi, call Me Ramadhan</Title>
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
    <Col span={10}>
      <Illustration src="/illustration.png" />
    </Col>
  </RowContainer>
);

export default Hero;
