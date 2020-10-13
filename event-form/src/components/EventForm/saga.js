import { reset } from 'redux-form';
import {
    all,
    call,
    put,
    takeLatest
} from 'redux-saga/effects';

import create from '../../services/create';
//import getAll from '../../services/getAll';

import * as constants from './constants';
import * as actions from './actions';

export default function* eventFormSaga() {
    yield all([
        takeLatest(
            constants.ON_FORM_SUBMIT,
            onFormSubmitSaga
        )
    ])
}

export function* onFormSubmitSaga({ params }) {
    try {
        console.log('params in saga', params)
        const response = yield call(create, { newObject: params })
        yield put(actions.onFormSubmitSuccess())
        console.log('saga resonse', response); //never happens
        yield put(reset(constants.EVENT_FORM))
    } catch (error) {
        yield put(actions.onFormSubmitFail(error.message))
    }

}