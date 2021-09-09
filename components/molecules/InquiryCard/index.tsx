import { FC } from 'react';
import Button from 'components/atoms/Button';
import { Card } from './style';

const InquiryCard: FC = () => (
  <Card>
    <div>
      <h1>Work Inquiry</h1>
      <h3>Let’s work together, and I’ll do my best for your business</h3>
    </div>
    <Button variant="primary" size="lg">
      Let&apos;s chat
    </Button>
  </Card>
);

export default InquiryCard;
