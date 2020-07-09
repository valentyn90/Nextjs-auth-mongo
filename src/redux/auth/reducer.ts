import { Auth } from './interfaces';
import { AuthAction, AuthActionTypes } from './action-types';

export const initialState = {
  viewer: undefined,
  signUpErrors: [],
  getViewerErrors: [],
  signInErrors: [],
  signOutErrors: [],
  loading: false,
};

export const authReducer = (state: Auth = initialState, action: AuthAction): Auth => {
  switch (action.type) {
    case AuthActionTypes.signUpStart:
      return {
        ...state,
        signUpErrors: [],
        loading: true,
      };

    case AuthActionTypes.getViewerStart:
      return {
        ...state,
        getViewerErrors: [],
        loading: true,
      };

    case AuthActionTypes.signInStart:
      return {
        ...state,
        signInErrors: [],
        loading: true,
      };

    case AuthActionTypes.signOutStart:
      return {
        ...state,
        signOutErrors: [],
        loading: true,
      };

    case AuthActionTypes.signUpSuccess:
      return {
        ...state,
        viewer: action.viewer,
        loading: false,
      };

    case AuthActionTypes.getViewerSuccess:
      return {
        ...state,
        viewer: action.viewer,
        loading: false,
      };

    case AuthActionTypes.signInSuccess:
      return {
        ...state,
        viewer: action.viewer,
        loading: false,
      };

    case AuthActionTypes.signOutSuccess:
      return {
        ...state,
        viewer: null,
        loading: false,
      };

    case AuthActionTypes.signUpFailure:
      return {
        ...state,
        signUpErrors: action.errorResponse.errors || [],
        loading: false,
      };

    case AuthActionTypes.getViewerFailure:
      return {
        ...state,
        getViewerErrors: action.errorResponse.errors || [],
        loading: false,
      };

    case AuthActionTypes.signInFailure:
      return {
        ...state,
        signInErrors: action.errorResponse.errors || [],
        loading: false,
      };

    case AuthActionTypes.signOutFailure:
      return {
        ...state,
        signOutErrors: action.errorResponse.errors || [],
        loading: false,
      };

    default:
      return state;
  }
};
