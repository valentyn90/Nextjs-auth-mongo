import { Fragment } from 'react';
import { Avatar } from './Avatar';
import { SignOutButton } from './SignOutButton';

export const ViewerView: React.FC = () => {
  return (
    <Fragment>
      <Avatar />
      <SignOutButton />
    </Fragment>
  );
};
