import React, {Component} from 'react';
import styles from './Calculator.module.css';

import Display from '../Display/Display';
import Button from '../Button/Button';

/**
 * @class
 * @module /src/components/Calculator
 * @description Calculator component
 * @example
 * return (
 *  <div className={styles.App}>
 *      <Calculator/>
 *  </div>
 * );
 */
export default class Calculator extends Component {
    /**
     * @constructor
     * @description Place, where initialization of state, variables and etc.
     * @param {object} props - props object
     */
    constructor(props) {
        super(props);
        this.state = this.initialState();
        this.btnsVal = [
            'C', '√', 'x²', '/',
            '7', '8', '9', '*',
            '4', '5', '6', '-',
            '1', '2', '3', '+',
            '.', '0', 'Del', '='
        ];
    }

    /**
     * @method
     * @description Event handler, that allows input data using keyboard
     * @param {string} key - name of button, that has been clicked
     */
    keydownEventHandler({key}){
        if (this.btnsVal.includes(key) ){
            this.clickEventHandler(key);
        }else if (key === 'Backspace'){
            this.clickEventHandler('Del');
        }else if (key === ','){
            this.clickEventHandler('.');
        }else if (key === 'Enter'){
            this.clickEventHandler('=');
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.keydownEventHandler.bind(this));
        this.calcOperations = {
            '/': (prevValue, currentValue) => prevValue / currentValue,
            '*': (prevValue, currentValue) => prevValue * currentValue,
            '+': (prevValue, currentValue) => Number(prevValue) + Number(currentValue),
            '-': (prevValue, currentValue) => prevValue - currentValue,
            '=': currentValue => currentValue,
            '√': currentValue => Math.sqrt(currentValue),
            'x²': currentValue => currentValue**2
        };
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.keydownEventHandler.bind(this));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        !this.state.currentVal && this.setState({currentVal: '0'});
        !this.state.result && this.setState({result: '0'});
    }

    /**
     * @method
     * @description Method, that returns initial state
     * @returns {Object} - initial state
     */
    initialState() {
        return {
            operation: null,
            currentVal: 0,
            prevVal: 0,
        }
    }

    /**
     * @method
     * @description Method, that changes value of `currentVal` state variable
     * @param {number | string} symbol - symbol, that we want to add for `currentVal` state variable
     */
    writeNum(symbol){
        const value = (symbol === '.' || `${this.state.currentVal}` !== '0')
            ? this.state.currentVal  + symbol
            : symbol;
        Array.from(value).filter(item => item === '.').length<2 && this.setState({currentVal: value});
    }

    /**
     * @method
     * @description Set prevent value of `currentVal` state variable
     */
    setPrevNumState(){
        this.setState(state => {
            return {
                currentVal: `${state.currentVal}`.slice(0, -1)
            }
        });
    }

    /**
     * @method
     * @description Method, that find necessary operation for running math operation and changing current state
     * @param {string} symbol - current choose math operation
     */
    choiceOperation(symbol){
        let {operation, currentVal, prevVal} = this.state;
        if (['√','x²'].includes(symbol)){
            currentVal = this.calcOperations[symbol](Number(currentVal) || prevVal);
            operation === '=' ? this.setState({operation: null, currentVal}) : this.setState({currentVal});
            return;
        }
        if (operation){
            currentVal = this.calcOperations[operation](prevVal, currentVal);
        }
        this.setState({
            currentVal: 0,
            prevVal: currentVal,
            operation: symbol
        });
    }

    /**
     * @method
     * @description Running necessary method proceeding what button has been clicked.
     * This necessary for changing state in the future
     * @param {string | number} symbol - name of button, that has been clicked
     */
    clickEventHandler(symbol) {
        if (/(\d|\.)/.test(symbol)) {
            this.writeNum(symbol);
        }else if (symbol === 'Del') {
            this.setPrevNumState();
        }else if (symbol === 'C') {
            this.setState(this.initialState());
        }else{
            this.choiceOperation(symbol);
        }
    }

    render() {
        const btnsArr = this.btnsVal.map((val, index) => {
            return <Button
                key={`${index}-${val}`}
                value={val}
                onClick={() => this.clickEventHandler(val)}
            />
        });
        return (
            <div className={styles.Calculator}>
                <Display
                    result={this.state.operation === '=' ? this.state.prevVal : this.state.currentVal}
                />
                <div className={styles.btnsBlock}>
                    {btnsArr}
                </div>
            </div>
        )
    }
}