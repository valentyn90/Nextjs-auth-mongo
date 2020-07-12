import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { logout } from 'utils/withAuthSync';
import { ErrorResponse, Viewer } from 'shared/interfaces';
import { AuthActionTypes, SignUpStart, SignInStart } from './action-types';
import {
  signUpSuccess,
  getViewerSuccess,
  signInSuccess,
  signOutSuccess,
  signUpFailure,
  getVieweFailure,
  signInFailure,
  signOutFailure,
} from './actions';

function* signUp({ signUpInput }: SignUpStart) {
  try {
    const response: AxiosResponse<Viewer> = yield call(axios.post, '/api/auth/signup', signUpInput);
    const { status, data } = response;
    if (status === 201) {
      yield put(signUpSuccess(data));
    }
  } catch (error) {
    yield put(signUpFailure((error.response as AxiosResponse<ErrorResponse>).data));
  }
}

function* getViewer() {
  try {
    const { status, data }: AxiosResponse<{ viewer: Viewer | null }> = yield call(
      axios.get,
      '/api/auth/viewer',
    );
    if (status === 200) {
      yield put(getViewerSuccess(data));
    }
  } catch (error) {
    yield put(getVieweFailure((error.response as AxiosResponse<ErrorResponse>).data));
  }
}

function* signIn({ signInInput }: SignInStart) {
  try {
    const { status, data }: AxiosResponse<Viewer> = yield call(
      axios.post,
      '/api/auth/signin',
      signInInput,
    );
    if (status === 200) {
      yield put(signInSuccess(data));
    }
  } catch (error) {
    yield put(signInFailure((error.response as AxiosResponse<ErrorResponse>).data));
  }
}

function* signOut() {
  try {
    const { status, data }: AxiosResponse<boolean> = yield call(
      axios.post,
      '/api/auth/signout',
      null,
    );
    if (status === 200) {
      yield put(signOutSuccess(data));
      yield call(logout);
    }
  } catch (error) {
    yield put(signOutFailure((error.response as AxiosResponse<ErrorResponse>).data));
  }
}

function* onSignUpStart() {
  yield takeLatest(AuthActionTypes.signUpStart, signUp);
}
function* onGetViewerStart() {
  yield takeLatest(AuthActionTypes.getViewerStart, getViewer);
}
function* onSignInStart() {
  yield takeLatest(AuthActionTypes.signInStart, signIn);
}
function* onSignOutStart() {
  yield takeLatest(AuthActionTypes.signOutStart, signOut);
}

export function* authSagas(): Generator {
  yield all([
    call(onSignUpStart),
    call(onGetViewerStart),
    call(onSignInStart),
    call(onSignOutStart),
  ]);
}
