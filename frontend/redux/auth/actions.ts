import { SerializedError } from 'backend/errors/custom-error';
import {
  AuthActionTypes,
  SignUpStart,
  SignUpSuccess,
  SignInStart,
  SignInSuccess,
  SignOutStart,
  SignOutSuccess,
  GetViewerStart,
  GetViewerSuccess,
  AuthFailure,
} from './action-types';
import { SignUpInput, Viewer, SignInInput } from './interfaces';

export const signUpStart = (signUpInput: SignUpInput): SignUpStart => ({
  type: AuthActionTypes.signUpStart,
  signUpInput,
});
export const signUpSuccess = (viewer: Viewer): SignUpSuccess => ({
  type: AuthActionTypes.signUpSuccess,
  viewer,
});
export const signInStart = (signInInput: SignInInput): SignInStart => ({
  type: AuthActionTypes.signInStart,
  signInInput,
});
export const signInSuccess = (viewer: Viewer): SignInSuccess => ({
  type: AuthActionTypes.signInSuccess,
  viewer,
});
export const signOutStart = (): SignOutStart => ({
  type: AuthActionTypes.signOutStart,
});
export const signOutSuccess = (status: boolean): SignOutSuccess => ({
  type: AuthActionTypes.signOutSuccess,
  status,
});
export const getViewerStart = (): GetViewerStart => ({
  type: AuthActionTypes.getViewerStart,
});
export const getViewerSuccess = (viewer: Viewer): GetViewerSuccess => ({
  type: AuthActionTypes.getViewerSuccess,
  viewer,
});
export const authFailure = (errors: SerializedError[]): AuthFailure => ({
  type: AuthActionTypes.authFailure,
  errors,
});
