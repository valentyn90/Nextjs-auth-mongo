import { Theme } from '@material-ui/core/styles/createMuiTheme';
import IconButton from '@material-ui/core/IconButton';
import makeStyles from '@material-ui/core/styles/makeStyles';
import MuiLink from '@material-ui/core/Link';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NextLink from 'next/link';

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
    },
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}));

const AccountIcon: React.FC = () => {
  const classes = useStyles();

  return (
    <NextLink href="/profile" passHref>
      <MuiLink color="inherit" className={classes.icon}>
        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </MuiLink>
    </NextLink>
  );
};

export default AccountIcon;
