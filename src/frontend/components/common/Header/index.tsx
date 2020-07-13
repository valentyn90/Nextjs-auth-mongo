import { useSelector, useDispatch } from 'react-redux';
import { AppBar, Toolbar, Theme, ButtonGroup, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import HomeIcon from '@material-ui/icons/Home';
import { AppState } from 'frontend/redux/root-reducer';
import { signOutStart } from 'frontend/redux/auth/actions';
import HeaderButton from './HeaderButton';
import ThemeModeSwitch from './ThemeModeSwitch';

const useStyles = makeStyles((theme: Theme) => ({
  margins: {
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
    <AppBar position="sticky">
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
        {viewer ? (
          <ButtonGroup className={classes.margins}>
            <HeaderButton component="a" href="/profile" variant="contained" color="secondary">
              Profile
            </HeaderButton>
            <Button onClick={onSignOutClick} variant="contained" color="secondary">
              Sign Out
            </Button>
          </ButtonGroup>
        ) : (
          <HeaderButton
            className={classes.margins}
            component="a"
            href="/auth/signin"
            color="inherit"
          >
            Sign In
          </HeaderButton>
        )}
        <ThemeModeSwitch />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
