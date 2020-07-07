import { all, call } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { authSagas } from './auth/sagas';

export function* rootSaga(): SagaIterator<void> {
  yield all([call(authSagas)]);
}
