import * as actionTypes from "./actionTypes";

export const getResult = () => ({
    type: actionTypes.GET_RESULT
});

export const backspace = () => ({
    type: actionTypes.BACKSPACE
});

export const clearAll = () => ({
   type: actionTypes.CLEAR_ALL
});

export const writeSymbol = symbol => ({
    type: actionTypes.WRITE_SYMBOL,
    symbol
});