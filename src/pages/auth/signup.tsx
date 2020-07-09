import Head from 'next/head';
import { Fragment } from 'react';
import { NextPage } from 'next';

import SignUp from 'components/Auth/Signup';
import { withViewer } from 'utils/withViewer';

const SignUpPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Sign Up</title>
      </Head>
      <SignUp />
    </Fragment>
  );
};

export default withViewer(SignUpPage);
