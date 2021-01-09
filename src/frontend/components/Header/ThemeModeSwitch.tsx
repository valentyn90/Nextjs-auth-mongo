import IconButton from '@material-ui/core/IconButton';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useToggleTheme } from './hooks/useToggleTheme';

const useStyles = makeStyles({
  trigger: {
    marginLeft: 'auto',
  },
});

export const ThemeModeSwitch: React.FC = () => {
  const { onToggleTheme, appPaletteType } = useToggleTheme();

  const classes = useStyles();

  return (
    <IconButton
      className={classes.trigger}
      color="inherit"
      onClick={onToggleTheme}
      aria-label="Toggle light/dark theme"
    >
      {appPaletteType === 'light' ? <Brightness4Icon /> : <Brightness5Icon />}
    </IconButton>
  );
};
