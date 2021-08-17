import { FC } from 'react';
import Hero from 'components/organisms/Hero';
import Header from 'components/organisms/Header';
import BioInfo from 'components/organisms/BioInfo';
import withThemes from 'components/hoc/withThemes';
import { Container } from 'styles/HomeStyle';
import WorkCollection from 'components/organisms/WorkCollection';

const Home: FC = () => (
  <Container>
    <Header />
    <Hero />
    <BioInfo />
    <WorkCollection />
  </Container>
);

export default withThemes(Home);
