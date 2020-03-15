import React from 'react';
import styles from './Display.module.css';
import PropTypes from 'prop-types';


const Display = (props) =>{
    return (
        <div className={styles.Display}>
            <span className={styles.result}>{props.result}</span>
        </div>
    )
};

Display.propTypes = {
    result: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

export default Display