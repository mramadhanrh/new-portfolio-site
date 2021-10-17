import { FC } from 'react';
import withThemes from 'components/hoc/withThemes';
import Hero from 'components/organisms/Hero';
import Footer from 'components/organisms/Footer';
import Header from 'components/organisms/Header';
import BioInfo from 'components/organisms/BioInfo';
import ProductList from 'components/organisms/ProductList';
import WorkInquiry from 'components/organisms/WorkInquiry';
import { Container } from 'styles/HomeStyle';

const Home: FC = () => (
  <Container>
    <Header />
    <Hero src="/illustration.png" />
    <BioInfo />
    <ProductList />
    <WorkInquiry />
    <Footer />
  </Container>
);

export default withThemes(Home);
