import Head from 'next/head';
import { NextPage } from 'next';
import { Fragment } from 'react';

import SignIn from 'components/Auth/SignIn';
import { withViewer } from 'utils/withViewerRedirect';

const SignInPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>My App | Sign In</title>
      </Head>
      <SignIn />
    </Fragment>
  );
};

export default withViewer(SignInPage);
