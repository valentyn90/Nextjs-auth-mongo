import { Action } from 'redux';
import { ErrorResponse, SignUpInput, SignInInput, Viewer } from 'shared/interfaces';

export enum AuthActionTypes {
  signUpStart = 'signUpStart',
  signUpSuccess = 'signUpSuccess',
  signUpFailure = 'signUpFailure',
  getViewerStart = 'getViewerStart',
  getViewerSuccess = 'getViewerSuccess',
  getViewerFailure = 'getViewerFailure',
  signInStart = 'signInStart',
  signInSuccess = 'signInSuccess',
  signInFailure = 'signInFailure',
  signOutStart = 'signOutStart',
  signOutSuccess = 'signOutSuccess',
  signOutFailure = 'signOutFailure',
}

export interface SignUpStart extends Action<string> {
  type: AuthActionTypes.signUpStart;
  signUpInput: SignUpInput;
}
export interface SignUpSuccess extends Action<string> {
  type: AuthActionTypes.signUpSuccess;
  viewer: Viewer;
}
export interface SignUpFailure extends Action<string> {
  type: AuthActionTypes.signUpFailure;
  errorResponse: ErrorResponse;
}

export interface GetViewerStart extends Action<string> {
  type: AuthActionTypes.getViewerStart;
}
export interface GetViewerSuccess extends Action<string> {
  type: AuthActionTypes.getViewerSuccess;
  viewer: Viewer | null;
}
export interface GetViewerFailure extends Action<string> {
  type: AuthActionTypes.getViewerFailure;
  errorResponse: ErrorResponse;
}

export interface SignInStart extends Action<string> {
  type: AuthActionTypes.signInStart;
  signInInput: SignInInput;
}
export interface SignInSuccess extends Action<string> {
  type: AuthActionTypes.signInSuccess;
  viewer: Viewer;
}
export interface SignInFailure extends Action<string> {
  type: AuthActionTypes.signInFailure;
  errorResponse: ErrorResponse;
}

export interface SignOutStart extends Action<string> {
  type: AuthActionTypes.signOutStart;
}
export interface SignOutSuccess extends Action<string> {
  type: AuthActionTypes.signOutSuccess;
  status: boolean;
}
export interface SignOutFailure extends Action<string> {
  type: AuthActionTypes.signOutFailure;
  errorResponse: ErrorResponse;
}

export type AuthAction =
  | SignUpStart
  | SignUpSuccess
  | SignUpFailure
  | GetViewerStart
  | GetViewerSuccess
  | GetViewerFailure
  | SignInStart
  | SignInSuccess
  | SignInFailure
  | SignOutStart
  | SignOutSuccess
  | SignOutFailure;
