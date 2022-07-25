import { Col, Row } from 'antd';
import { FC } from 'react';
import Button from 'components/atoms/Button';
import {
  RowContainer,
  Subtitle,
  Title,
  Description,
  HeroPicture,
} from './style';

interface HeroProps {
  title?: string;
  roles?: string;
  location?: string;
  description?: string;
  src?: string;
  href?: string;
  buttonText?: string;
  onClick?(): void;
}

const Hero: FC<HeroProps> = ({
  title,
  roles,
  location,
  description,
  src,
  href,
  buttonText,
  onClick,
}) => (
  <Row>
    <Col span={24}>
      <RowContainer justify="space-around" align="middle">
        <Col xs={24} lg={0}>
          <HeroPicture src={src} />
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
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="lg" onClick={onClick}>
                  {buttonText}
                </Button>
              </a>
            </Col>
          </Row>
        </Col>

        <Col xs={0} lg={9}>
          <HeroPicture src={src} />
        </Col>
      </RowContainer>
    </Col>
  </Row>
);

export default Hero;
