import { FC } from 'react';
import Hero from 'components/organisms/Hero';
import Header from 'components/organisms/Header';
import BioInfo from 'components/organisms/BioInfo';
import withThemes from 'components/hoc/withThemes';
import { Container } from 'styles/HomeStyle';
import WorkCollection from 'components/organisms/WorkCollection';
import WorkInquiry from 'components/organisms/WorkInquiry';
import Footer from 'components/organisms/Footer';

const Home: FC = () => (
  <Container>
    <Header />
    <Hero />
    <BioInfo />
    <WorkCollection />
    <WorkInquiry />
    <Footer />
  </Container>
);

export default withThemes(Home);
