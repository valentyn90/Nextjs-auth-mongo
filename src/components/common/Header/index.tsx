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
      <Styled.Nav>
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
          <Styled.Input type="button" value="Sign Out" onClick={onSignOutClick} />
        ) : (
          <Link href="/auth/signup">
            <a>Sign Up</a>
          </Link>
        )}
      </Styled.Nav>
    </Styled.Header>
  );
};

export default Header;
