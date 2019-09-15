import { takeEvery, select, call, put } from 'redux-saga/effects';

import { IMAGES } from '../constants';
import fetchImages from '../api/index';
import { setImage, setError } from './../actions/index';

// watcher
const imagesSaga = function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
};

// get page number from redux state
const getPage = state => state.nextPage;

// worker
function* handleImagesLoad() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        yield put(setImage(images));
    } catch (error) {
        // dispatch error
        yield put(setError(error.toString()));
    }
}

export default imagesSaga;
