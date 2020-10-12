import * as actionTypes from '../actions/actionTypes';

const initialState = {
    operation: null,
    currentValue: 0,
    result: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD:
            return addOperation(state, action);
        case actionTypes.SUBTRACT:
            return subtractOperation(state, action);
        case actionTypes.MULTIPLY:
            return multiplyOperation(state, action);
        case actionTypes.DIVIDE:
            return divideOperation(state, action);
        case actionTypes.GET_RESULT:
            return getResult(state, action);
        case actionTypes.CLEAR_ALL:
            return clearAll();
        case actionTypes.BACKSPACE:
            return backspace(state, action.value);
        default:
            return state;
    }
};

const calc = (state, action) => {
    switch (state.operation) {
        case actionTypes.ADD:
            return state.result + action.value;
        case actionTypes.SUBTRACT:
            return state.result - action.value;
        case actionTypes.MULTIPLY:
            return state.result * action.value;
        case actionTypes.DIVIDE:
            return state.result / action.value;
        default:
            return action.value;
    }
};

const backspace = (state, value) => ({
    ...state,
    currentValue: value.substring(0, value.length - 1),
});

const addOperation = (state, action) => ({
    ...state,
    operation: actionTypes.ADD,
    currentValue: action.value,
    result: calc(state, action)
});

const subtractOperation = (state, action) => ({
    ...state,
    operation: actionTypes.SUBTRACT,
    currentValue: action.value,
    result: calc(state, action)
});

const multiplyOperation = (state, action) => ({
    ...state,
    operation: actionTypes.MULTIPLY,
    result: calc(state, action)
});

const divideOperation = (state, action) => ({
    ...state,
    operation: actionTypes.DIVIDE,
    currentValue: action.value,
    result: calc(state, action)
});

const getResult = (state, action) => ({
    ...state,
    operation: null,
    currentValue: action.value,
    result: calc(state, action)
});

const clearAll = () => ({
    ...initialState
});

export default reducer;