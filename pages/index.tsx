import { FC } from 'react';
import Hero from 'components/organisms/Hero';
import Header from 'components/organisms/Header';
import BioInfo from 'components/organisms/BioInfo';
import withThemes from 'components/hoc/withThemes';
import { Container } from 'styles/HomeStyle';

const Home: FC = () => (
  <Container>
    <Header />
    <Hero />
    <BioInfo />
  </Container>
);

export default withThemes(Home);
