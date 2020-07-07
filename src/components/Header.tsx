import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { AppState } from 'redux/root-reducer';
import { signOutStart, getViewerStart } from 'redux/auth/actions';

const StyledHeader = styled.header`
  padding: 0.5rem 1.8rem;
  width: 100%;
  display: flex;
  background-color: #fff;
`;

const StyledNav = styled.nav`
  flex: 5;
  display: flex;
  justify-content: space-around;
`;

const StyledAnchorHome = styled.a`
  flex: 1;
`;

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
    <StyledHeader>
      <Link href="/" passHref>
        <StyledAnchorHome>HOME</StyledAnchorHome>
      </Link>
      <span>{viewer ? viewer.id : 'You are not signed in'}</span>
      <StyledNav>
        {viewer ? (
          <button onClick={onSignOutClick}>Sign Out</button>
        ) : (
          <Link href="/auth/signin">
            <a>Sign In</a>
          </Link>
        )}
        <button onClick={onGetViewerClick}>Get Viewer</button>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
