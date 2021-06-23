import { FC } from 'react';
import GlobalStyle from '../styles/GlobalStyle';
import 'antd/dist/antd.css';

interface AppProps {
  Component: FC;
  pageProps: Record<string, any>;
}

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

export default App;
