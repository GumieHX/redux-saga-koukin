// import { call, fork, put, takeEvery, take } from 'redux-saga/effects'
import { call, fork, put, take } from '../saga-koukin/effects';
import loginNetwork from '../network/loginNetwork';

function* fetchUser(action) {
   try {
      const user = yield call(loginNetwork.login, action.payload);
      yield put({type: "LOGIN_SUCCESS", payload: user});
   } catch (e) {
      yield put({type: "LOGIN_FAILED", payload: e});
   }
}

function* userSaga() {

  while(true) {
    const action = yield take("USER_LOGIN");
    yield fork(fetchUser, action);
  }

//   yield takeEvery("USER_LOGIN", fetchUser);
}

export default userSaga;