import Head from 'next/head';
import { Fragment } from 'react';
import { NextPage } from 'next';

import { SignUp } from 'frontend/components/Auth/SignUp';
import { withViewer } from 'utils/withViewerRedirect';

const SignUpPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>My App | Sign Up</title>
      </Head>
      <SignUp />
    </Fragment>
  );
};

export default withViewer(SignUpPage);
