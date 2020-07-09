import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';

import { AppState } from 'redux/root-reducer';
import { signOutStart } from 'redux/auth/actions';
import * as Styled from './styles';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { viewer } = useSelector((state: AppState) => state.auth);

  const onSignOutClick = () => {
    dispatch(signOutStart());
  };

  return (
    <Styled.Header>
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
    </Styled.Header>
  );
};

export default Header;
