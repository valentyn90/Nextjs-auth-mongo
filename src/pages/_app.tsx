import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';

import { theme } from 'styled/theme';
import { GlobalStyle } from 'styled/global-style';
import { wrapper } from 'redux/store';
import Layout from 'components/common/Layout';
import { getViewerStart } from 'redux/auth/actions';
import { AppState } from 'redux/root-reducer';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  const { viewer } = useSelector((state: AppState) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!viewer) {
      dispatch(getViewerStart());
    }
  }, [dispatch, getViewerStart, viewer]);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default wrapper.withRedux(MyApp);
