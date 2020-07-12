import { all, call } from 'redux-saga/effects';
import { authSagas } from './auth/sagas';

export function* rootSaga(): Generator {
  yield all([call(authSagas)]);
}
