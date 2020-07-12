import { ErrorResponse, SignUpInput, SignInInput, Viewer } from 'shared/interfaces';
import {
  AuthActionTypes,
  SignUpStart,
  SignUpSuccess,
  SignUpFailure,
  GetViewerStart,
  GetViewerSuccess,
  GetViewerFailure,
  SignInStart,
  SignInSuccess,
  SignInFailure,
  SignOutStart,
  SignOutSuccess,
  SignOutFailure,
} from './action-types';

export const signUpStart = (signUpInput: SignUpInput): SignUpStart => ({
  type: AuthActionTypes.signUpStart,
  signUpInput,
});
export const signUpSuccess = (viewer: Viewer): SignUpSuccess => ({
  type: AuthActionTypes.signUpSuccess,
  viewer,
});
export const signUpFailure = (errorResponse: ErrorResponse): SignUpFailure => ({
  type: AuthActionTypes.signUpFailure,
  errorResponse,
});

export const getViewerStart = (): GetViewerStart => ({
  type: AuthActionTypes.getViewerStart,
});
export const getViewerSuccess = ({ viewer }: { viewer: Viewer | null }): GetViewerSuccess => ({
  type: AuthActionTypes.getViewerSuccess,
  viewer,
});
export const getVieweFailure = (errorResponse: ErrorResponse): GetViewerFailure => ({
  type: AuthActionTypes.getViewerFailure,
  errorResponse,
});

export const signInStart = (signInInput: SignInInput): SignInStart => ({
  type: AuthActionTypes.signInStart,
  signInInput,
});
export const signInSuccess = (viewer: Viewer): SignInSuccess => ({
  type: AuthActionTypes.signInSuccess,
  viewer,
});
export const signInFailure = (errorResponse: ErrorResponse): SignInFailure => ({
  type: AuthActionTypes.signInFailure,
  errorResponse,
});

export const signOutStart = (): SignOutStart => ({
  type: AuthActionTypes.signOutStart,
});
export const signOutSuccess = (status: boolean): SignOutSuccess => ({
  type: AuthActionTypes.signOutSuccess,
  status,
});
export const signOutFailure = (errorResponse: ErrorResponse): SignOutFailure => ({
  type: AuthActionTypes.signOutFailure,
  errorResponse,
});
