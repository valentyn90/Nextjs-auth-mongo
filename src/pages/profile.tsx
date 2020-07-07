import { Fragment } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { withAuthSync } from 'utils/auth';
import { useSelector } from 'react-redux';

import { AppState } from 'redux/root-reducer';

const ProfilePage: NextPage = () => {
  const { viewer } = useSelector((state: AppState) => state.auth);
  return (
    <Fragment>
      <Head>
        <title>ProfilePage</title>
      </Head>
      <h1>Profile Page</h1>
      <p>{`Your email: ${viewer?.email}`}</p>
      <p>{`Your secret id: ${viewer?.id}`}</p>
    </Fragment>
  );
};

export default withAuthSync(ProfilePage);
