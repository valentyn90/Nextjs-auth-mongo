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

    case AuthActionTypes.getViewerSuccess:
      return {
        ...state,
        viewer: action.viewer,
      };

    case AuthActionTypes.signInSuccess:
      return {
        ...state,
        viewer: action.viewer,
      };

    case AuthActionTypes.signOutSuccess:
      return {
        ...state,
        viewer: null,
      };

    case AuthActionTypes.authFailure:
      return {
        ...state,
        errors: action.errorResponse.errors || [],
      };

    default:
      return state;
  }
};
