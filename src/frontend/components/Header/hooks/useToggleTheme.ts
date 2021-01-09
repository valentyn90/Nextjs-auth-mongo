import { useSelector, useDispatch } from 'react-redux';
import { PaletteType } from '@material-ui/core';
import { AppState } from 'frontend/redux/root-reducer';
import { setDarkMode, setLightMode } from 'frontend/redux/theme-mode/actions';

export const useToggleTheme = (): {
  onToggleTheme: () => void;
  appPaletteType: PaletteType;
} => {
  const dispatch = useDispatch();
  const { appPaletteType } = useSelector((state: AppState) => state.themeMode);

  const onToggleTheme = () => {
    const action = appPaletteType === 'light' ? setDarkMode() : setLightMode();
    dispatch(action);
  };

  return { onToggleTheme, appPaletteType };
};
