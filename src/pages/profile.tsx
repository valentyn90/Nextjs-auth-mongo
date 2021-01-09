import { Fragment } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';

import { withAuthSync } from 'utils/withAuthSync';
import { Profile } from 'frontend/components/Profile';

const ProfilePage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>My App | ProfilePage</title>
      </Head>
      <Profile />
    </Fragment>
  );
};

export default withAuthSync(ProfilePage);
