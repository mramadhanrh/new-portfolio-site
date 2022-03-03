import { FC } from 'react';
import Button from 'components/atoms/Button';
import { Card, ChatButton, InfoWrapper } from './style';
import { Col } from 'antd';

const InquiryCard: FC = () => (
  <Card align="middle" justify="space-between">
    <InfoWrapper xs={24} md={14} lg={16}>
      <h1>Work Inquiry</h1>
      <h3>Let's work together, and I'll do my best for your business</h3>
    </InfoWrapper>
    <Col xs={24} md={8} lg={6}>
      <a
        href="mailto:hi.mramadhanrh@gmail.com"
        target="_self"
        rel="noopener noreferrer"
      >
        <ChatButton variant="primary" size="lg">
          Let's chat
        </ChatButton>
      </a>
    </Col>
  </Card>
);

export default InquiryCard;
