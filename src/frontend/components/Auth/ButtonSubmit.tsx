import { Button, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    marginTop: theme.spacing(0.5),
  },
}));

interface Props {
  loading: boolean;
  children: React.ReactNode;
}

const ButtonSubmit: React.FC<Props> = ({ loading, children }: Props) => {
  const classes = useStyles();
  return (
    <Button className={classes.button} type="submit" fullWidth variant="contained" color="primary">
      {loading ? 'Loading...' : children}
    </Button>
  );
};

export default ButtonSubmit;
