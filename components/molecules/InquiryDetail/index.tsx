import { FC } from 'react';
import ButtonIcon from 'components/atoms/ButtonIcon';
import { Container, MediaWrapper } from './style';

const InquiryDetail: FC = () => (
  <Container>
    <h4>Bandung, West Java</h4>
    <h2>hi.mramadhanrh@gmail.com</h2>
    <MediaWrapper>
      <ButtonIcon src="/linkedin-icon.png" size={50} />
      <ButtonIcon src="/github-icon.png" size={50} />
      <ButtonIcon src="/twitter-icon.png" size={50} />
    </MediaWrapper>
  </Container>
);

export default InquiryDetail;
