import { Action } from 'redux';
import { ErrorResponse, SignUpInput, SignInInput, Viewer } from 'shared/interfaces';

export enum AuthActionTypes {
  signUpStart = 'signUpStart',
  signUpSuccess = 'signUpSuccess',
  getViewerStart = 'getViewerStart',
  getViewerSuccess = 'getViewerSuccess',
  signInStart = 'signInStart',
  signInSuccess = 'signInSuccess',
  signOutStart = 'signOutStart',
  signOutSuccess = 'signOutSuccess',
  authFailure = 'authFailure',
}

export interface SignUpStart extends Action<string> {
  type: AuthActionTypes.signUpStart;
  signUpInput: SignUpInput;
}
export interface SignUpSuccess extends Action<string> {
  type: AuthActionTypes.signUpSuccess;
  viewer: Viewer;
}
export interface GetViewerStart extends Action<string> {
  type: AuthActionTypes.getViewerStart;
}
export interface GetViewerSuccess extends Action<string> {
  type: AuthActionTypes.getViewerSuccess;
  viewer: Viewer | null;
}
export interface SignInStart extends Action<string> {
  type: AuthActionTypes.signInStart;
  signInInput: SignInInput;
}
export interface SignInSuccess extends Action<string> {
  type: AuthActionTypes.signInSuccess;
  viewer: Viewer;
}
export interface SignOutStart extends Action<string> {
  type: AuthActionTypes.signOutStart;
}
export interface SignOutSuccess extends Action<string> {
  type: AuthActionTypes.signOutSuccess;
  status: boolean;
}
export interface AuthFailure extends Action<string> {
  type: AuthActionTypes.authFailure;
  errorResponse: ErrorResponse;
}

export type AuthAction =
  | SignUpStart
  | SignUpSuccess
  | GetViewerStart
  | GetViewerSuccess
  | SignInSuccess
  | SignInStart
  | SignOutStart
  | SignOutSuccess
  | AuthFailure;
