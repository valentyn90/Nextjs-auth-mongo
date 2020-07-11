import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, AppBar, Toolbar } from '@material-ui/core';
import EcoOutlinedIcon from '@material-ui/icons/EcoOutlined';
import { makeStyles } from '@material-ui/styles';

import { AppState } from 'redux/root-reducer';
import { signOutStart } from 'redux/auth/actions';
import HeaderLink from './HeaderLink';

const useStyles = makeStyles(() => ({
  logoStyles: {
    marginLeft: 'auto',
  },
}));

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { viewer } = useSelector((state: AppState) => state.auth);

  const onSignOutClick = () => {
    dispatch(signOutStart());
  };

  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <HeaderLink href="/" variant="contained" color="secondary">
          HOME
        </HeaderLink>
        {viewer ? (
          <HeaderLink href="/profile" color="inherit">
            Profile
          </HeaderLink>
        ) : (
          <HeaderLink href="/auth/signin" color="inherit">
            Sign In
          </HeaderLink>
        )}
        {viewer ? (
          <Button onClick={onSignOutClick} color="inherit">
            Sign Out
          </Button>
        ) : (
          <HeaderLink href="/auth/signup" color="inherit">
            Sign Up
          </HeaderLink>
        )}
        <EcoOutlinedIcon className={classes.logoStyles} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
