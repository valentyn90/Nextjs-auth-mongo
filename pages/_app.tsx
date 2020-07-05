import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { NextPage } from 'next';

import { theme } from 'frontend/styled/theme';
import { GlobalStyle } from 'frontend/styled/global-style';
import { wrapper } from 'frontend/redux/store';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default wrapper.withRedux(MyApp);
