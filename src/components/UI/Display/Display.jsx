import React from 'react';
import classes from './Display.module.css';
import PropTypes from 'prop-types';

/**
 * @function
 * @module /src/components/Display
 * @description Display component
 * @param {object} props - props object
 * @example <Display result="12345"/>
 */
const Display = (props) =>{
    const ariaLabel = "Current value is " + props.result;
    return (
        <div className={classes.Display}>
            <span
                className={classes.result}
                role="main"
                aria-label={ariaLabel}
            >{props.result}</span>
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