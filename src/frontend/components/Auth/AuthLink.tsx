import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { LinkLink } from '../common/LinkLink';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    linkAnchor: {
      marginTop: theme.spacing(1),
      float: 'right',
    },
  }),
);

interface Props {
  href: string;
  children: NonNullable<React.ReactNode>;
}

export const AuthLink: React.FC<Props> = ({ href, children }: Props) => {
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
