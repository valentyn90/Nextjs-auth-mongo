import { Fragment } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
      </Head>
      <h1>Home Page</h1>
    </Fragment>
  );
};

export default HomePage;
