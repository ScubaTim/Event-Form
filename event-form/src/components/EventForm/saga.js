import React from 'react';
import { reset } from 'redux-form';
import {
    all,
    call,
    put,
    take,
    takeLatest
} from 'redux-saga/effects';

import create from '../../services/eventForm';

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

export function* onFormSubmitSaga(params) {
    try {
        const response = yield call(create, { newObject: params })
        yield put(actions.onFormSubmitSuccess())
        console.log(response);
        yield put(reset(constants.EVENT_FORM))
    } catch (error) {
        yield put(actions.onFormSubmitFail(error.message))
    }

}