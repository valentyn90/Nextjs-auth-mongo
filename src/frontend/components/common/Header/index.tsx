import { useSelector, useDispatch } from 'react-redux';
import { Button, AppBar, Toolbar, Theme, ButtonGroup } from '@material-ui/core';
import EcoOutlinedIcon from '@material-ui/icons/EcoOutlined';
import { makeStyles } from '@material-ui/styles';
import HomeIcon from '@material-ui/icons/Home';
import { AppState } from 'frontend/redux/root-reducer';
import { signOutStart } from 'frontend/redux/auth/actions';
import HeaderButton from './HeaderButton';

const useStyles = makeStyles((theme: Theme) => ({
  logoStyles: {
    marginLeft: 'auto',
  },
  buttonGroup: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
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
          color="default"
          startIcon={<HomeIcon />}
        >
          HOME
        </HeaderButton>
        <ButtonGroup className={classes.buttonGroup}>
          {viewer ? (
            <HeaderButton component="a" href="/profile" variant="contained" color="secondary">
              Profile
            </HeaderButton>
          ) : (
            <HeaderButton component="a" href="/auth/signin" color="inherit">
              Sign In
            </HeaderButton>
          )}
          {viewer ? (
            <Button onClick={onSignOutClick} variant="contained" color="secondary">
              Sign Out
            </Button>
          ) : (
            <HeaderButton component="a" href="/auth/signup" color="inherit">
              Sign Up
            </HeaderButton>
          )}
        </ButtonGroup>
        <EcoOutlinedIcon className={classes.logoStyles} color="inherit" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
