import React from 'react';
import styles from './Display.module.css';


const Display = (props) =>{
    return (
        <div className={styles.Display}>
            <span className={styles.math}>{props.math}</span>
            <span className={styles.result}>{props.result}</span>
        </div>
    )
};

export default Display