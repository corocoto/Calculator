import reducer from './rootReducer';
import * as actionTypes from '../actions/actionTypes';


describe('rootReducer', () => {
    it('should return "initialState" value', () => expect(reducer(undefined, {})).toEqual({
        operation: null,
        currentValue: 0,
        result: 0,
    }));

    describe('add operation', () => {
        const action = {
            type: actionTypes.ADD
        };
        it('should contains "ADD" operation and 4 number as result (currentValue should contains 0)', () => {
            const store = {
                operation: null,
                currentValue: 4,
                result: 0
            };

            expect(reducer(store, action)).toEqual({
                operation: actionTypes.ADD,
                currentValue: 0,
                result: 4
            })
        });

        it('should multiply "currentValue" on "result" value. update operation property on "ADD" and clear "currentValue" after it', () => {
            const store = {
                operation: actionTypes.MULTIPLY,
                currentValue: 4,
                result: 5
            };
            expect(reducer(store, action)).toEqual({
                operation: actionTypes.ADD,
                currentValue: 0,
                result: 20
            });
        });

        it('should sum "currentValue" on "result" value. update operation property on "ADD" and clear "currentValue" after it', () => {
            const store = {
                operation: actionTypes.ADD,
                currentValue: 4,
                result: 5
            };
            expect(reducer(store, action)).toEqual({
                operation: actionTypes.ADD,
                currentValue: 0,
                result: 9
            });
        });

        it('should divide "currentValue" on "result" value. update operation property on "ADD" and clear "currentValue" after it', () => {
            const store = {
                operation: actionTypes.DIVIDE,
                currentValue: 4,
                result: 5
            };
            expect(reducer(store, action)).toEqual({
                operation: actionTypes.ADD,
                currentValue: 0,
                result: 1.25
            });
        });

        it('should subtract "currentValue" on "result" value. update operation property on "ADD" and clear "currentValue" after it', () => {
            const store = {
                operation: actionTypes.SUBTRACT,
                currentValue: 4,
                result: 5
            };
            expect(reducer(store, action)).toEqual({
                operation: actionTypes.ADD,
                currentValue: 0,
                result: 1
            });
        });
    });

    describe('subtract operation', () => {
        const action = {
            type: actionTypes.SUBTRACT
        };

        it('should contains "SUBTRACT" operation and 4 number as result (currentValue should contains 0)', () => {
            const store = {
                operation: null,
                currentValue: 4,
                result: 0
            };

            expect(reducer(store, action)).toEqual({
                operation: actionTypes.SUBTRACT,
                currentValue: 0,
                result: 4
            });
        });

    });
});