import React, {useState, useEffect, useCallback} from 'react';
import styles from './Calculator.module.css';

import Display from '../../Display/Display';
import Button from '../../UI/Button/Button';

/**
 * @class
 * @module /src/components/Calculator
 * @description Calculator component
 * @example ```jsx <Calculator/>```
 */
const Calculator = (props) => {
    const [operation, setOperation] = useState(null);
    const [currentVal, setCurrentVal] = useState(0);
    const [prevVal, setPrevVal] = useState(0);
    const btnsVal = [
            'C', '√', 'x²', '/',
            '7', '8', '9', '*',
            '4', '5', '6', '-',
            '1', '2', '3', '+',
            '.', '0', 'Del', '='
    ];

    const btnsArr = btnsVal.map((val, index) =>
        <Button
            key={`${index}-${val}`}
            value={val}
            onClick={() => clickEventHandler(val)}
        />
    );

    const calcOperations = {
        '/': (prevValue, currentValue) => prevValue / currentValue,
        '*': (prevValue, currentValue) => prevValue * currentValue,
        '+': (prevValue, currentValue) => Number(prevValue) + Number(currentValue),
        '-': (prevValue, currentValue) => prevValue - currentValue,
        '=': currentValue => currentValue,
        '√': currentValue => Math.sqrt(currentValue),
        'x²': currentValue => currentValue**2
    };

    useEffect(() => {
        document.addEventListener('keydown', keydownEventHandler);
        return () => document.removeEventListener('keydown', keydownEventHandler);
    });

    /**
     * @method
     * @description Event handler, that allows input data using keyboard
     * @param {string} key - name of button, that has been clicked
     */
    const keydownEventHandler = useCallback(({key}) => {
        if (btnsVal.includes(key) ){
            clickEventHandler(key);
        }else if (key === 'Backspace'){
            clickEventHandler('Del');
        }else if (key === ','){
            clickEventHandler('.');
        }else if (key === 'Enter'){
            clickEventHandler('=');
        }
    }, [btnsVal]);

    useEffect(() => {
        !currentVal && setCurrentVal('0');
        !prevVal && setPrevVal('0');
    }, [currentVal, prevVal]);

    /**
     * @method
     * @description Method, that changes value of `currentVal` state variable
     * @param {number | string} symbol - symbol, that we want to add for `currentVal` state variable
     */
    const writeNum = (symbol) => {
        const value = (symbol === '.' || currentVal.toString() !== '0')
            ? currentVal  + symbol
            : symbol;
        if (Array.from(value).filter(item => item === '.').length < 2){
            setCurrentVal(value);
        }
    }

    /**
     * @method
     * @description Set prevent value of `currentVal` state variable
     */
    const setPrevNumState = () => setCurrentVal(`${currentVal}`.slice(0, -1));

    /**
     * @method
     * @description Method, that find necessary operation for running math operation and changing current state
     * @param {string} symbol - current choose math operation
     */
    const choiceOperation = (symbol) => {
        if (['√','x²'].includes(symbol)){
            const currVal = calcOperations[symbol](Number(currentVal) || prevVal);
            operation === '=' && setOperation(null);
            setCurrentVal(currVal);
            return;
        } else if (operation){
            setPrevVal(calcOperations[operation](prevVal, currentVal));
        }else {
            setPrevVal(currentVal);
        }
        setCurrentVal(0);
        setOperation(symbol);
    }

    /**
     * @method
     * @description Running necessary method proceeding what button has been clicked.
     * This necessary for changing state in the future
     * @param {string | number} symbol - name of button, that has been clicked
     */
    const clickEventHandler = (symbol) => {
        if (/(\d|\.)/.test(symbol)) {
            writeNum(symbol);
        }else if (symbol === 'Del') {
            setPrevNumState();
        }else if (symbol === 'C') {
            setOperation(null);
            setCurrentVal(0);
            setPrevVal(0);
        }else{
            choiceOperation(symbol);
        }
    }

    return (
        <div className={styles.Calculator}>
            <Display result={operation === '=' ? prevVal : currentVal}/>
            <div className={styles.btnsBlock}>{btnsArr}</div>
        </div>
    );
}

export default Calculator;