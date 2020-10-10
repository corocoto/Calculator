import * as actionTypes from "./actionTypes";

export const getResult = value => ({
    type: actionTypes.GET_RESULT,
    value
});

export const backspace = value => ({
    type: actionTypes.BACKSPACE,
    value
});

export const clearAll = () => ({
   type: actionTypes.CLEAR_ALL
});