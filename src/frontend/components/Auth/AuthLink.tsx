import Link from 'next/link';
import { Typography, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  linkAnchor: {
    marginTop: theme.spacing(1),
    float: 'right',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

interface Props {
  href: string;
  children: NonNullable<React.ReactNode>;
}

const AuthLink: React.FC<Props> = ({ href, children }: Props) => {
  const clasess = useStyles();
  return (
    <Link href={href} passHref>
      <Typography
        className={clasess.linkAnchor}
        variant="body2"
        component="a"
        noWrap
        color="inherit"
      >
        {children}
      </Typography>
    </Link>
  );
};

export default AuthLink;
