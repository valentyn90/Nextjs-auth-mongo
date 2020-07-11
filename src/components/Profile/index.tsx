import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { AppState } from 'redux/root-reducer';
import PageTitle from 'components/common/PageTitle';
import ProfileItem from './ProfileItem';

const Profile: React.FC = () => {
  const { viewer } = useSelector((state: AppState) => state.auth);

  if (!viewer) return null;

  return (
    <Fragment>
      <PageTitle>Home Page</PageTitle>
      <ProfileItem text="Your name:" data={viewer.firstName} />
      <ProfileItem text="Your email:" data={viewer.email} />
      <ProfileItem text="Your id:" data={viewer.id} />
    </Fragment>
  );
};

export default Profile;
