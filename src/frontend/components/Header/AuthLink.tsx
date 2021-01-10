import { Theme } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useRouter } from 'next/router';
import { routes } from 'frontend/routes';
import { LinkButton } from '../common/LinkButton';

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

export const AuthLink: React.FC = () => {
  const classes = useStyles();
  const { pathname } = useRouter();

  const { href, label } =
    pathname === routes.authSignin
      ? { href: routes.authSignup, label: 'Sign Up' }
      : { href: routes.authSignin, label: 'Sign In' };

  return (
    <LinkButton className={classes.margins} href={href} color="inherit">
      {label}
    </LinkButton>
  );
};
