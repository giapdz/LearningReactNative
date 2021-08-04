import { call, all, fork } from 'redux-saga/effects';
import { watchFetchMovies } from './movieSagas';
import { watchAddNewMovie } from './movieSagas';
export default function* rootSaga() {
    yield all([
        fork(watchFetchMovies),
        fork(watchAddNewMovie),
    ]);             
}