import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';

import { AppState } from 'redux/root-reducer';
import { signOutStart, getViewerStart } from 'redux/auth/actions';
import * as Styled from './styles';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { viewer } = useSelector((state: AppState) => state.auth);

  const onGetViewerClick = () => {
    dispatch(getViewerStart());
  };

  const onSignOutClick = () => {
    dispatch(signOutStart());
  };

  return (
    <Styled.Header>
      <Styled.Box>
        <Link href="/">
          <a>HOME</a>
        </Link>
        <Styled.ViewerInfo active={!!viewer}>
          {viewer ? viewer.email : 'You are not signed in'}
        </Styled.ViewerInfo>
      </Styled.Box>
      <Styled.Nav>
        {viewer ? (
          <button onClick={onSignOutClick}>Sign Out</button>
        ) : (
          <React.Fragment>
            <Link href="/auth/signin">
              <a>Sign In</a>
            </Link>
            <Link href="/auth/signup">
              <a>Sign Up</a>
            </Link>
          </React.Fragment>
        )}
        <button onClick={onGetViewerClick}>Get Viewer</button>
        <Link href="/profile">
          <a>Profile</a>
        </Link>
      </Styled.Nav>
    </Styled.Header>
  );
};

export default Header;
