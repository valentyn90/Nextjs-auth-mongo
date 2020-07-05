import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { SagaIterator } from 'redux-saga';
import { AuthActionTypes } from './action-types';
import { signUpSuccess, authFailure } from './actions';
import { Viewer } from './interfaces';

function* signUp() {
  try {
    const { status, data }: AxiosResponse<Viewer> = yield call(axios.get, '/api/signup');
    if (status === 201) {
      yield put(signUpSuccess(data));
    }
  } catch (error) {
    yield put(authFailure(error));
  }
}

function* onSignUpStart() {
  yield takeLatest(AuthActionTypes.signUpStart, signUp);
}

export function* authSagas(): SagaIterator<void> {
  yield all([
    call(onSignUpStart),
    // call(onCreatePostStart),
    // call(onUpdatePostStart),
    // call(onDeletePostStart),
  ]);
}
