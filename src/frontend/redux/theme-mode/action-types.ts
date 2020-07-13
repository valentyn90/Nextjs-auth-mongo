import { Action } from 'redux';

export enum ThemeActionTypes {
  setDarkMode = 'setDarkMode',
  setLightMode = 'setLightMode',
}

export interface SetDarkMode extends Action<string> {
  type: ThemeActionTypes.setDarkMode;
}
export interface SetLightMode extends Action<string> {
  type: ThemeActionTypes.setLightMode;
}

export type ThemeModeAction = SetDarkMode | SetLightMode;
