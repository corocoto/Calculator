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

    componentDidUpdate(prevProps, prevState, snapshot) {
        !this.state.currentVal && this.setState({currentVal: '0'});
        !this.state.result && this.setState({result: '0'});
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
            prevVal: 0,
        }
    }

    /**
     * @method
     * @description
     * @param {number | string} symbol
     */
    writeNum(symbol){
        const value = (symbol === '.' || `${this.state.currentVal}` !== '0')
            ? this.state.currentVal  + symbol
            : symbol;
        Array.from(value).filter(item => item === '.').length<2 && this.setState({currentVal: value});
    }

    /**
     * @method
     * @description
     */
    setPrevNumState(){
        this.setState({
            currentVal: `${this.state.currentVal}`.slice(0, -1)
        });
    }

    /**
     * @method
     * @description
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
                    result={this.state.operation === '=' ? this.state.prevVal : this.state.currentVal}
                />
                <div className={styles.btnsBlock}>
                    {btnsArr}
                </div>
            </div>
        )
    }
}