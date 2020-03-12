import React, {Component} from 'react';
import styles from './Calculator.module.css';

import Display from '../Display/Display';
import Button from '../Button/Button';

export default class Calculator extends Component{
    constructor(props) {
        super(props);
        this.state = {
            result: 0,
            current: 0,
            operation: null,
        };
    }

    clickEventHandler(symbol){
        if (this.state.operation && Number.isNaN(symbol) && !this.state.current){
            this.changeOperation(symbol);
        }else if (Number.isNaN(symbol)){

        }else{
            const value = this.state.current ? this.state.current + String(symbol) : symbol>0 && symbol;
            this.setState({
                current: value
            })
        }
    }

    changeOperation(operation){
        switch (operation) {
            case 'C':
                this.setState({
                    result: 0,
                    current: 0,
                    operation: null
                });
                break;
            case '=':
                this.setState({
                    current: 0,
                    operation: null
                });
                break;
            case 'Del':
                return;
                break;
            default:
                this.setState({
                    operation
                });
        }
    }


    render() {
        const btnsVal = [
            'C', '√', 'x²', '/',
             7, 8, 9, '*',
             4, 5, 6, '-',
             1, 2, 3, '+',
            '.', 0, 'Del','='
        ];
        const btnsArr = btnsVal.map((val,index)=>{
            return <Button
                key={`${index}-${val}`}
                value={val}
                onClick={()=>this.clickEventHandler(val)}
            />
        });
        return (
            <div className={styles.Calculator}>
                <Display
                    math={this.state.operation
                        ? `${this.state.result} ${this.state.operation} ${this.state.current}`
                        : this.state.result > 0 && this.state.result
                    }
                    result={this.state.result}
                />
                <div className={styles.btnsBlock}>
                    {btnsArr}
                </div>
            </div>
        )
    }
}