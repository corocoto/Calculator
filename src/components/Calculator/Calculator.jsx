import React, {Component} from 'react';
import styles from './Calculator.module.css';

import Display from '../Display/Display';
import Button from '../Button/Button';

export default class Calculator extends Component {
    /**
     * @constructor
     * @param {object} props - props object
     */
    constructor(props) {
        super(props);
        this.state = this.initialState();
    }

    componentDidMount() {
        // this.addEventListener();
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

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // if (nextState.currentVal !== this.state.currentVal) {
            return true;
        // }
        // if (nextState.operation) {
        //
        // }
        // return false;
    }


    componentWillUnmount() {
        // this.removeEventListener();
    }


    /**
     * @method
     * @description
     * @returns {Object} - initial state
     */
    initialState() {
        return {
            operation: null,
            currentVal: 0,
            result: 0,
            math: null
        }
    }

    /**
     * @method
     * @description
     * @param {number | string} symbol
     */
    writeNum(symbol){
        const value = (symbol === '.' || this.state.currentVal)
            ? this.state.currentVal + symbol
            : symbol;
        this.setState({currentVal: value});
    }

    /**
     * @method
     * @description
     */
    setPrevNumState(){
        this.setState({currentVal: this.state.currentVal.slice(0, -1)});
    }

    /**
     * @method
     * @param {string} symbol
     */
    choiceOperation(symbol){
        let {operation, currentVal, result} = this.state;
        if (['√','x²'].includes(symbol)){
            currentVal = this.calcOperations[symbol](currentVal);
            this.setState({currentVal});
            return;
        }
        if (operation){
            currentVal = this.calcOperations[operation](result, currentVal);
        }
        this.setState({
            currentVal: symbol=== '=' ? currentVal : 0,
            result: currentVal,
            operation: symbol
        });
    }

    /**
     * @method
     * @description
     * @param {string | number} symbol
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
        const btnsVal = [
            'C', '√', 'x²', '/',
            '7', '8', '9', '*',
            '4', '5', '6', '-',
            '1', '2', '3', '+',
            '.', '0', 'Del', '='
        ];
        const btnsArr = btnsVal.map((val, index) => {
            return <Button
                key={`${index}-${val}`}
                value={val}
                onClick={() => this.clickEventHandler(val)}
            />
        });
        return (
            <div className={styles.Calculator}>
                <Display
                    math={this.math}
                    result={this.state.currentVal}
                />
                <div className={styles.btnsBlock}>
                    {btnsArr}
                </div>
            </div>
        )
    }
}