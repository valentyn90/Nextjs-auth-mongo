import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { NextPage } from 'next';

import { theme } from 'styled/theme';
import { GlobalStyle } from 'styled/global-style';
import { wrapper } from 'redux/store';
import Layout from 'components/Layout';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default wrapper.withRedux(MyApp);
