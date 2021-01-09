import { useSelector, useDispatch } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { AppState } from 'frontend/redux/root-reducer';
import { setDarkMode, setLightMode } from 'frontend/redux/theme-mode/actions';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  trigger: {
    marginLeft: 'auto',
  },
});

export const ThemeModeSwitch: React.FC = () => {
  const dispatch = useDispatch();
  const { paletteType } = useSelector((state: AppState) => state.themeMode);

  const onToggleThemeMode = () => {
    const action = paletteType === 'light' ? setDarkMode() : setLightMode();
    dispatch(action);
  };
  const classes = useStyles();

  return (
    <IconButton
      className={classes.trigger}
      color="inherit"
      onClick={onToggleThemeMode}
      aria-label="Toggle light/dark theme"
    >
      {paletteType === 'light' ? <Brightness4Icon /> : <Brightness5Icon />}
    </IconButton>
  );
};
