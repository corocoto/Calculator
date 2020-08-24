import React from 'react';
import classes from './Button.module.css';
import PropTypes from 'prop-types';

/**
 * @function
 * @module /src/components/Button
 * @description Button component
 * @param {object} props - props object
 * @example ```jsx <Button value="Calculate" onClick={() => this.clickEventHandler("Calculate")} />
 */
const Button = (props) => (
    <button
        className={classes.Button}
        onClick={props.onClick}
        aria-label={props.value}
    >{props.value}</button>
);

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export default Button;