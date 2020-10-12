/*
 *
 * Global RunLevel reducer
 */

import * as constants from '../constants/runLevel';

let environment = constants.PRODUCTION;

if (/localhost/.test(window.location.hostname)) {
    environment = constants.LOCAL;
}

export const initialState = environment;

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.SET_CURRENT_RUN_LEVEL:
            return action.runLevel;

        default:
            return state;
    }
};