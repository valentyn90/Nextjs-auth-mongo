import { ThemeActionTypes, SetDarkMode, SetLightMode } from './action-types';

export const setDarkMode = (): SetDarkMode => ({
  type: ThemeActionTypes.setDarkMode,
});
export const setLightMode = (): SetLightMode => ({
  type: ThemeActionTypes.setLightMode,
});
