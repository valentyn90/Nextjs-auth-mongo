import Typography from '@material-ui/core/Typography';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';
import LinkLink from '../common/LinkLink';

const useStyles = makeStyles((theme: Theme) => ({
  linkAnchor: {
    marginTop: theme.spacing(1),
    float: 'right',
  },
}));

interface Props {
  href: string;
  children: NonNullable<React.ReactNode>;
}

const AuthLink: React.FC<Props> = ({ href, children }: Props) => {
  const clasess = useStyles();
  return (
    <LinkLink
      nextLinkProps={{ href }}
      muiLinkProps={{ className: `${clasess.linkAnchor}`, color: 'inherit' }}
    >
      <Typography>{children}</Typography>
    </LinkLink>
  );
};

export default AuthLink;
