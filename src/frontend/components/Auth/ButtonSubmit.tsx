import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    marginTop: theme.spacing(0.5),
  },
}));

interface Props {
  loading: boolean;
  children: React.ReactNode;
}

export const ButtonSubmit: React.FC<Props> = ({ loading, children }: Props) => {
  const classes = useStyles();
  return (
    <Button className={classes.button} type="submit" fullWidth variant="contained" color="primary">
      {loading ? 'Loading...' : children}
    </Button>
  );
};
