import Head from 'next/head';
import { Fragment } from 'react';
import { NextPage } from 'next';

import SignUp from 'components/Auth/Signup';

const SignUpPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Sign Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Sign Up</h1>
      <SignUp />
    </Fragment>
  );
};

export default SignUpPage;
