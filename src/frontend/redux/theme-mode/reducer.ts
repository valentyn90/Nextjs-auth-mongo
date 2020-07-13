import { ThemeMode } from './interfaces';
import { ThemeModeAction, ThemeActionTypes } from './action-types';

export const initialState: ThemeMode = {
  paletteType: 'light',
};

export const themeModeReducer = (
  state: ThemeMode = initialState,
  action: ThemeModeAction,
): ThemeMode => {
  switch (action.type) {
    case ThemeActionTypes.setDarkMode:
      return {
        ...state,
        paletteType: 'dark',
      };

    case ThemeActionTypes.setLightMode:
      return {
        ...state,
        paletteType: 'light',
      };

    default:
      return state;
  }
};
