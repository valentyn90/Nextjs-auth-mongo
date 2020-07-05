import { Auth } from './interfaces';
import { AuthAction, AuthActionTypes } from './action-types';

export const initialState = {
  viewer: null,
  errors: [],
};

export const authReducer = (state: Auth = initialState, action: AuthAction): Auth => {
  switch (action.type) {
    case AuthActionTypes.signUpSuccess:
      return {
        ...state,
        viewer: action.viewer,
      };

    case AuthActionTypes.authFailure:
      return {
        ...state,
        errors: action.errors,
      };

    default:
      return state;
  }
};
