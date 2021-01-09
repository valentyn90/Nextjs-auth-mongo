import { ThemeMode } from './interfaces';
import { ThemeModeAction, ThemeActionTypes } from './action-types';

export const initialState: ThemeMode = {
  appPaletteType: 'light',
};

export const themeModeReducer = (
  state: ThemeMode = initialState,
  action: ThemeModeAction,
): ThemeMode => {
  switch (action.type) {
    case ThemeActionTypes.setDarkMode:
      return {
        ...state,
        appPaletteType: 'dark',
      };

    case ThemeActionTypes.setLightMode:
      return {
        ...state,
        appPaletteType: 'light',
      };

    default:
      return state;
  }
};
