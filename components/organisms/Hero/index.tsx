import { Col, Row } from 'antd';
import { FC } from 'react';
import Button from 'components/atoms/Button';
import {
  Illustration,
  RowContainer,
  Subtitle,
  Title,
  Description,
  Emoji,
} from './style';

interface HeroProps {
  title?: string;
  roles?: string;
  location?: string;
  description?: string;
  src?: string;
  buttonText?: string;
  buttonEmoji?: string;
}

const XsHero: FC<HeroProps> = ({
  title,
  roles,
  location,
  description,
  src,
  buttonText,
  buttonEmoji,
}) => (
  <>
    <Col id="info" xs={24} lg={0}>
      <Illustration src={src} />
    </Col>
    <Col span={20}>
      <Title>{title}</Title>
      <Subtitle>
        <span>{roles} </span>
        <span>based in {location}</span>
      </Subtitle>
      <Description>{description}</Description>
      <Button variant="primary" size="sm">
        {buttonText} <Emoji>{buttonEmoji}</Emoji>
      </Button>
    </Col>
  </>
);

const LgHero: FC<HeroProps> = ({
  title,
  roles,
  location,
  description,
  src,
  buttonText,
  buttonEmoji,
}) => (
  <>
    <Col id="info" xs={0} lg={11}>
      <Title>{title}</Title>
      <Subtitle>
        <span>{roles} </span>
        <span>based in {location}</span>
      </Subtitle>
      <Description>{description}</Description>

      <Button variant="primary" size="lg">
        {buttonText} <Emoji>{buttonEmoji}</Emoji>
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
