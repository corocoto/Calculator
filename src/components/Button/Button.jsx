import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = (props) =>{
    return <button
        className={styles.Button}
        onClick={props.onClick}
        aria-label={props.value}
    >{props.value}
    </button>
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export default Button;