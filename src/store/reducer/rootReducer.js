import * as actionTypes from '../actions/actionTypes';

const initialState = {
    operation: null,
    currentValue: 0,
    result: 0,
};

const reducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case actionTypes.ADD:
            return addOperation(state);
        case actionTypes.SUBTRACT:
            return subtractOperation(state);
        case actionTypes.MULTIPLY:
            return multiplyOperation(state);
        case actionTypes.DIVIDE:
            return divideOperation(state);
        case actionTypes.SQUARE_ROOT:
            return squareRoot(state);
        case actionTypes.EXPONENTIATION:
            return exponentiation(state);
        case actionTypes.GET_RESULT:
            return getResult(state);
        case actionTypes.CLEAR_ALL:
            return clearAll();
        case actionTypes.BACKSPACE:
            return backspace(state);
        case actionTypes.WRITE_SYMBOL:
            return writeSymbol(state, action.symbol)
        default:
            return state;
    }
};

const calc = state => {
    switch (state.operation) {
        case actionTypes.ADD:
            return Number(state.result) + Number(state.currentValue);
        case actionTypes.SUBTRACT:
            return state.result - state.currentValue;
        case actionTypes.MULTIPLY:
            return state.result * state.currentValue;
        case actionTypes.DIVIDE:
            return state.result / state.currentValue;
        default:
            return state.result;
    }
};

const exponentiation = state => {
    if (state.result && !state.currentValue) {
        return {...state, result: state.result ** 2}
    } else {
        return {...state, currentValue: state.currentValue ** 2}
    }
};

const squareRoot = state => {
    if (state.result && !state.currentValue) {
        return {...state, result: Math.sqrt(state.result)}
    } else {
        return {...state, currentValue: Math.sqrt(state.currentValue)}
    }
};

const backspace = state => ({
    ...state,
    currentValue: `${state.currentValue}`.length === 1 ? 0 : state.currentValue.slice(0, -1),
});

const writeSymbol = (state, symbol) => {
    const value = symbol === '.' || `${state.currentValue}` !== '0'
        ? state.currentValue + symbol
        : symbol;
    const shouldUpdate = Array.from(value).filter(item => item === '.').length < 2;
    return {
        ...state,
        currentValue: shouldUpdate ? Number(value) : Number(state.currentValue)
    };
};

const addOperation = state => ({
    ...state,
    operation: actionTypes.ADD,
    currentValue: 0,
    result: state.operation ? calc(state) : state.currentValue
});

const subtractOperation = state => ({
    ...state,
    operation: actionTypes.SUBTRACT,
    currentValue: 0,
    result: state.operation ? calc(state) : state.currentValue
});

const multiplyOperation = state => ({
    ...state,
    operation: actionTypes.MULTIPLY,
    currentValue: 0,
    result: state.operation ? calc(state) : state.currentValue
});

const divideOperation = state => ({
    ...state,
    operation: actionTypes.DIVIDE,
    currentValue: 0,
    result: state.operation ? calc(state) : state.currentValue
});

const getResult = state => ({
    ...state,
    operation: actionTypes.GET_RESULT,
    currentValue: 0,
    result: calc(state)
});

const clearAll = () => ({
    ...initialState
});

export default reducer;