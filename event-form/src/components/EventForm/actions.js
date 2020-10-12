import * as constants from './constants';

export const onFormSubmit = (params) => ({
    type: constants.ON_FORM_SUBMIT,
    params
})

export const onFormSubmitSuccess = () => ({
    type: constants.ON_FORM_SUBMIT_SUCCESS,
})

export const onFormSubmitFail = (error) => ({
    type: constants.ON_FORM_SUBMIT_FAIL,
    error
})