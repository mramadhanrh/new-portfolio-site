import { forwardRef } from 'react';
import { Row, Col } from 'antd';
import InquiryCard from 'components/molecules/InquiryCard';
import InquiryDetail from 'components/molecules/InquiryDetail';

const WorkInquiry = forwardRef<HTMLDivElement>((_, ref) => (
  <>
    <Row ref={ref} align="middle" justify="center">
      <Col xs={20} md={18}>
        <InquiryCard />
      </Col>
    </Row>
    <Row align="middle" justify="center" style={{ marginBottom: 150 }}>
      <Col span={24}>
        <InquiryDetail />
      </Col>
    </Row>
  </>
));

export default WorkInquiry;
