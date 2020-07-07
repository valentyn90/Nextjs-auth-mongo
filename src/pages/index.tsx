import { Fragment } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>HomePage</h1>
    </Fragment>
  );
};

export default HomePage;
