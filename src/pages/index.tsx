import { Fragment } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';

import { PageTitle } from 'styled/styles';

const HomePage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
      </Head>
      <PageTitle>Home Page</PageTitle>
    </Fragment>
  );
};

export default HomePage;
