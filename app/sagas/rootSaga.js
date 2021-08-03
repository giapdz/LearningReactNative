import { call, all } from 'redux-saga/effects';
import { watchFetchMovies } from './movieSagas';

export default function* rootSaga() {
    yield call(watchFetchMovies);              
}