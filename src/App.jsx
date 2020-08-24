import React from 'react';
import classes from './App.module.css';

import Calculator from './components/containers/Calculator/Calculator';

/**
 * App component.
 * It's main component that contains all another exist components.
 * @function
 * @module /src/
 * @example ```jsx <App />```
 */
const App = () => (
    <div className={classes.App}>
        <Calculator/>
    </div>
);

export default App;
