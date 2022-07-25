import { FC } from 'react';
import ButtonIcon from 'components/atoms/ButtonIcon';
import { Container, MediaWrapper } from './style';

const InquiryDetail: FC = () => (
  <Container>
    <h4>Bandung, West Java</h4>
    <h2>hi.mramadhanrh@gmail.com</h2>
    <MediaWrapper>
      <a
        href="https://linkedin.com/in/mramadhanrh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ButtonIcon src="/linkedin-icon.svg" size={50} />
      </a>
      <a
        href="https://github.com/mramadhanrh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ButtonIcon src="/github-icon.svg" size={50} />
      </a>
      <a
        href="https://twitter.com/mramadhanrh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ButtonIcon src="/twitter-icon.svg" size={50} />
      </a>
    </MediaWrapper>
  </Container>
);

export default InquiryDetail;
