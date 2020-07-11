import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';

import { AppState } from 'redux/root-reducer';
import { signOutStart } from 'redux/auth/actions';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { viewer } = useSelector((state: AppState) => state.auth);

  const onSignOutClick = () => {
    dispatch(signOutStart());
  };

  return (
    <header>
      <Link href="/">
        <a>HOME</a>
      </Link>
      {viewer ? (
        <Link href="/profile">
          <a>Profile</a>
        </Link>
      ) : (
        <Link href="/auth/signin">
          <a>Sign In</a>
        </Link>
      )}
      {viewer ? (
        <button onClick={onSignOutClick}>Sign Out</button>
      ) : (
        <Link href="/auth/signup">
          <a>Sign Up</a>
        </Link>
      )}
    </header>
  );
};

export default Header;
