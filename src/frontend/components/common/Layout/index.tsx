import { Box, Paper, makeStyles, Theme } from '@material-ui/core';
import Header from '../Header';

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  const classes = useStyles();
  return (
    <Paper style={{ height: '100vh' }}>
      <Header />
      <Box component="main" className={classes.main}>
        {children}
      </Box>
    </Paper>
  );
};

export default Layout;
