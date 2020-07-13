import { combineReducers, AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

import { authReducer, initialState as authState } from './auth/reducer';
import { themeModeReducer, initialState as themeModeState } from './theme-mode/reducer';

import { Auth } from './auth/interfaces';
import { ThemeMode } from './theme-mode/interfaces';

export interface AppState {
  auth: Auth;
  themeMode: ThemeMode;
}

export const appInitialState: AppState = {
  auth: authState,
  themeMode: themeModeState,
};

export const appReducer = combineReducers({
  auth: authReducer,
  themeMode: themeModeReducer,
});

export const rootReducer = (state: Readonly<AppState> | undefined, action: AnyAction): AppState => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    default:
      return appReducer(state, action);
  }
};
