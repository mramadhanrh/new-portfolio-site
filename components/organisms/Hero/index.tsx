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
  title?: string;
  roles?: string;
  location?: string;
  description?: string;
  src?: string;
  buttonText?: string;
  buttonEmoji?: string;
  onClick?(): void;
}

const Hero: FC<HeroProps> = ({
  title,
  roles,
  location,
  description,
  src,
  buttonText,
  onClick,
}) => (
  <Row>
    <Col span={24}>
      <RowContainer justify="space-around" align="middle">
        <Col xs={24} lg={0}>
          <Illustration src={src} />
        </Col>

        <Col id="info" lg={11}>
          <Row justify="center">
            <Col xs={20} lg={24}>
              <Title>{title}</Title>
              <Subtitle>
                <span>{roles} </span>
                <span>based in {location}</span>
              </Subtitle>
              <Description>{description}</Description>
            </Col>

            <Col xs={24} lg={0}>
              <Button variant="primary" size="sm" onClick={onClick}>
                {buttonText}
              </Button>
            </Col>

            <Col xs={0} lg={24}>
              <Button variant="primary" size="lg" onClick={onClick}>
                {buttonText}
              </Button>
            </Col>
          </Row>
        </Col>

        <Col xs={0} lg={9}>
          <Illustration src={src} />
        </Col>
      </RowContainer>
    </Col>
  </Row>
);

export default Hero;
