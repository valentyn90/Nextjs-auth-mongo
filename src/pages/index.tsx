import { Fragment } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { PageTitle } from 'frontend/components/common/PageTitle';

const HomePage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>My App | Home</title>
      </Head>
      <PageTitle>Home Page</PageTitle>
    </Fragment>
  );
};

export default HomePage;
