import Button from '@material-ui/core/Button';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      marginTop: theme.spacing(0.5),
    },
    progress: {
      color: theme.palette.common.white,
    },
  }),
);

interface Props {
  loading: boolean;
  children: React.ReactNode;
}

export const ButtonSubmit: React.FC<Props> = ({ loading, children }: Props) => {
  const classes = useStyles();
  return (
    <Button className={classes.button} type="submit" fullWidth variant="contained" color="primary">
      {loading ? <CircularProgress className={classes.progress} size={20} /> : children}
    </Button>
  );
};
