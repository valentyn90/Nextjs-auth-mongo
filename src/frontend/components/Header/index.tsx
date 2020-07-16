import { useSelector, useDispatch } from 'react-redux';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import HomeIcon from '@material-ui/icons/Home';
import { AppState } from 'frontend/redux/root-reducer';
import { signOutStart } from 'frontend/redux/auth/actions';
import { Fragment } from 'react';
import LinkButton from '../common/LinkButton';
import ThemeModeSwitch from './ThemeModeSwitch';
import AccountIcon from './AccountIcon';

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
        <LinkButton href="/" variant="contained" color="default" startIcon={<HomeIcon />}>
          HOME
        </LinkButton>
        {viewer ? (
          <Fragment>
            <AccountIcon />
            <Button onClick={onSignOutClick} variant="contained" color="secondary">
              Sign Out
            </Button>
          </Fragment>
        ) : (
          <LinkButton className={classes.margins} href="/auth/signin" color="inherit">
            Sign In
          </LinkButton>
        )}
        <ThemeModeSwitch />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
