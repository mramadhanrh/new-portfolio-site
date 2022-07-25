import { FC } from 'react';
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import 'antd/dist/antd.css';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

export default App;
