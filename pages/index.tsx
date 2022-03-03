import fs from 'fs';
import path from 'path';

import { FC } from 'react';
import withThemes from 'components/hoc/withThemes';
import Hero from 'components/organisms/Hero';
import Footer from 'components/organisms/Footer';
import Header from 'components/organisms/Header';
import BioInfo from 'components/organisms/BioInfo';
import ProductList from 'components/organisms/ProductList';
import WorkInquiry from 'components/organisms/WorkInquiry';
import { Container } from 'styles/HomeStyle';
import { LandingData } from 'interfaces/landing';

interface HomeProps {
  data: LandingData;
}

const Home: FC<HomeProps> = ({ data }) => {
  const { hero } = data;
  return (
    <Container>
      <Header />
      <Hero {...hero} />
      <BioInfo />
      <ProductList />
      <WorkInquiry />
      <Footer />
    </Container>
  );
};

export async function getStaticProps() {
  const dir = path.join(process.cwd(), 'json', 'landing.json');
  const data = JSON.parse(await fs.promises.readFile(dir, 'utf-8'));

  return {
    props: {
      data,
    },
  };
}

export default withThemes(Home);
