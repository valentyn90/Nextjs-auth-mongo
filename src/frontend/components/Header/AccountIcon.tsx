import { Theme } from '@material-ui/core/styles/createMuiTheme';
import IconButton from '@material-ui/core/IconButton';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LinkLink from '../common/LinkLink';

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
    <LinkLink
      nextLinkProps={{ href: '/profile' }}
      muiLinkProps={{ color: 'inherit', className: `${classes.icon}` }}
    >
      <IconButton color="inherit" aria-label="Profile Link">
        <AccountCircleIcon />
      </IconButton>
    </LinkLink>
  );
};

export default AccountIcon;
