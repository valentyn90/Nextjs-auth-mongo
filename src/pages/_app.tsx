import { AppProps } from 'next/app';
import { useEffect, Fragment } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { theme } from 'styled/theme';
import { wrapper } from 'redux/store';
import Layout from 'components/common/Layout';
import { getViewerStart } from 'redux/auth/actions';
import { AppState } from 'redux/root-reducer';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  const dispatch = useDispatch();
  const { viewer } = useSelector((state: AppState) => state.auth);

  useEffect(() => {
    if (viewer === undefined) {
      dispatch(getViewerStart());
    }
  }, [dispatch, viewer]);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <title>My App</title>
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Fragment>
  );
};

export default wrapper.withRedux(MyApp);
