import fs from 'fs';
import path from 'path';

import { createRef, FC, RefObject, useRef } from 'react';
import { useRouter } from 'next/router';
import withThemes from 'components/hoc/withThemes';
import Hero from 'components/organisms/Hero';
import Footer from 'components/organisms/Footer';
import Header from 'components/organisms/Header';
import BioInfo from 'components/organisms/BioInfo';
import ProductList from 'components/organisms/ProductList';
import WorkInquiry from 'components/organisms/WorkInquiry';
import { Container } from 'styles/HomeStyle';
import { LandingData } from 'interfaces/landing';
import { HeadMenuList } from 'interfaces';

interface HomeProps {
  data: LandingData;
}

const Home: FC<HomeProps> = ({ data }) => {
  const headMenuRef = useRef<Record<HeadMenuList, RefObject<HTMLDivElement>>>(
    Object.keys(HeadMenuList).reduce(
      (prev, curr) => ({ ...prev, [curr]: createRef<HTMLDivElement>() }),
      {},
    ) as Record<HeadMenuList, RefObject<HTMLDivElement>>,
  );
  const { hero } = data;

  const handleMenuClick = (item: HeadMenuList) => {
    headMenuRef.current[item].current.scrollIntoView();
  };

  return (
    <Container>
      <Header
        menuUrl={{ Blog: 'https://google.com' }}
        onMenuClick={handleMenuClick}
      />
      <Hero {...hero} />
      <BioInfo ref={headMenuRef.current.Services} />
      <ProductList ref={headMenuRef.current.Work} />
      <WorkInquiry ref={headMenuRef.current.Contact} />
      <Footer />
    </Container>
  );
};

export async function getStaticProps() {
  const dir = path.join(process.cwd(), 'json', 'landing.json');
  const data = JSON.parse(
    await fs.promises.readFile(dir, 'utf-8'),
  ) as LandingData;

  return {
    props: {
      data,
    },
  };
}

export default withThemes(Home);
