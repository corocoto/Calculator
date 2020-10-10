import * as actionTypes from './actionTypes';

export const add = value => ({
    type: actionTypes.ADD,
    value
});

export const subtract = value => ({
   type: actionTypes.SUBTRACT,
   value
});

export const divide = value => ({
   type: actionTypes.DIVIDE,
   value
});

export const multiply = value => ({
   type: actionTypes.MULTIPLY,
   value
});

export const exponentiation = value => ({
    type: actionTypes.EXPONENTIATION,
    value
});

export const getResult = () => ({
    type: actionTypes.GET_RESULT
});