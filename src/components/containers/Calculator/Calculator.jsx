import React, {Component} from 'react';
import styles from './Calculator.module.css';

import Display from '../../UI/Display/Display';
import Button from '../../UI/Button/Button';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
import * as actionTypes from '../../../store/actions/actionTypes';

/**
 * @class
 * @module /src/components/Calculator
 * @description Calculator component
 * @example ```<Calculator/>``
 */
class Calculator extends Component {
    /**
     * @constructor
     * @description Place where state, variables and etc are initialize.
     * @param {object} props - props object
     */
    constructor(props) {
        super(props);
        this.btnsVal = [
            'C', '√', 'x²', '/',
            '7', '8', '9', '*',
            '4', '5', '6', '-',
            '1', '2', '3', '+',
            '.', '0', 'Del', '='
        ];
        this.keydownEventHandler = this.keydownEventHandler.bind(this);
    }

    /**
     * @method keydownEventHandler
     * @description Event handler that allows input data using keyboard.
     * @param {string} key - name of button, that has been clicked
     * @return {void}
     */
    keydownEventHandler({key}) {
        if (this.btnsVal.includes(key)) {
            this.clickEventHandler(key);
        } else if (key === 'Backspace') {
            this.props.onBackspace();
        } else if (key === ',') {
            this.clickEventHandler('.');
        } else if (key === 'Enter') {
            this.props.onGetResult();
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.keydownEventHandler);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.keydownEventHandler);
    }

    /**
     * @method clickEventHandler
     * @description Running necessary method proceeding what button has been clicked.
     *
     * This necessary for changing state in the future.
     * @param {string | number} symbol - name of button, that has been clicked
     * @return {void}
     */
    clickEventHandler(symbol) {
        if (/(\d|\.)/.test(symbol)) {
            this.props.onWriteSymbol(symbol);
        } else if (symbol === 'Del') {
            this.props.onBackspace();
        } else if (symbol === 'C') {
            this.props.onClear();
        } else if (symbol === 'x²') {
            this.props.onPow();
        } else if (symbol === '√') {
            this.props.onSquareRoot();
        } else if (symbol === '+') {
            this.props.onAdd();
        } else if (symbol === '-') {
            this.props.onSubtract();
        } else if (symbol === '*') {
            this.props.onMultiply();
        } else if (symbol === '/') {
            this.props.onDivide();
        } else if (symbol === '='){
            this.props.onGetResult();
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
                    result={this.props.operation === actionTypes.GET_RESULT ? this.props.result : this.props.currentValue}
                />
                <div className={styles.btnsBlock}>
                    {btnsArr}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    operation: state.operation,
    currentValue: state.currentValue,
    result: state.result
});

const mapDispatchToProps = dispatch => ({
    onAdd: () => dispatch(actions.add()),
    onSubtract: () => dispatch(actions.subtract()),
    onMultiply: () => dispatch(actions.multiply()),
    onDivide: () => dispatch(actions.divide()),
    onPow: () => dispatch(actions.exponentiation()),
    onClear: () => dispatch(actions.clearAll()),
    onBackspace: () => dispatch(actions.backspace()),
    onGetResult: () => dispatch(actions.getResult()),
    onWriteSymbol: symbol => dispatch(actions.writeSymbol(symbol)),
    onSquareRoot: () => dispatch(actions.squareRoot())
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);