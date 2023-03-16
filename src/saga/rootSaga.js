import { all } from '../saga-koukin/effects';
import userSaga from './index';

export default function* rootSaga() {
    yield all([userSaga()])
}