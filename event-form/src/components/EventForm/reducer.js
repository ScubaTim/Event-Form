import { fromJS } from 'immutable';

import * as constants from './constants';

export const initialState = fromJS({
    formIsSubmitting: false,
    error: null
});

const eventFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.ON_FORM_SUBMIT:
            return state.set('formIsSubmitting', true)
        case constants.ON_FORM_SUBMIT_SUCCESS:
            return state.set('formIsSubmitting', false)
        case constants.ON_FORM_SUBMIT_FAIL:
            return state.set('error', action.error)
        default:
            return state;
    };
};

export default eventFormReducer;