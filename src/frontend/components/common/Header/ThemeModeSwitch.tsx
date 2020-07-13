import { useSelector, useDispatch } from 'react-redux';
import { IconButton, makeStyles } from '@material-ui/core';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { AppState } from 'frontend/redux/root-reducer';
import { setDarkMode, setLightMode } from 'frontend/redux/theme-mode/actions';

const useStyles = makeStyles({
  trigger: {
    marginLeft: 'auto',
  },
});

const ThemeModeSwitch: React.FC = () => {
  const dispatch = useDispatch();
  const { paletteType } = useSelector((state: AppState) => state.themeMode);

  const onToggleThemeMode = () => {
    if (paletteType === 'light') {
      dispatch(setDarkMode());
    } else {
      dispatch(setLightMode());
    }
  };
  const classes = useStyles();

  return (
    <IconButton className={classes.trigger} color="inherit" onClick={onToggleThemeMode}>
      {paletteType === 'light' ? <Brightness4Icon /> : <Brightness5Icon />}
    </IconButton>
  );
};

export default ThemeModeSwitch;
