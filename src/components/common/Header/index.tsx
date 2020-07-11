import { useSelector, useDispatch } from 'react-redux';
import { Button, AppBar, Toolbar } from '@material-ui/core';
import EcoOutlinedIcon from '@material-ui/icons/EcoOutlined';
import { makeStyles } from '@material-ui/styles';
import HomeIcon from '@material-ui/icons/Home';

import { AppState } from 'redux/root-reducer';
import { signOutStart } from 'redux/auth/actions';
import HeaderButton from './HeaderButton';

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
        <HeaderButton
          component="a"
          href="/"
          variant="contained"
          color="secondary"
          startIcon={<HomeIcon />}
        >
          HOME
        </HeaderButton>
        {viewer ? (
          <HeaderButton component="a" href="/profile" color="secondary">
            Profile
          </HeaderButton>
        ) : (
          <HeaderButton component="a" href="/auth/signin" color="secondary">
            Sign In
          </HeaderButton>
        )}
        {viewer ? (
          <Button onClick={onSignOutClick} color="secondary">
            Sign Out
          </Button>
        ) : (
          <HeaderButton component="a" href="/auth/signup" color="secondary">
            Sign Up
          </HeaderButton>
        )}
        <EcoOutlinedIcon className={classes.logoStyles} color="secondary" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
