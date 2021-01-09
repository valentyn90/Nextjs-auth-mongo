import { Theme } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
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

export const SignInLink: React.FC = () => {
  const classes = useStyles();

  return (
    <LinkButton className={classes.margins} href="/auth/signin" color="inherit">
      Sign In
    </LinkButton>
  );
};
