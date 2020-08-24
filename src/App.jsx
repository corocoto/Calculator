import React from 'react';
import classes from './App.module.css';

import Calculator from './components/containers/Calculator/Calculator';

/**
 * @function
 * @module /src/containers
 * @description App component
 * @example ReactDOM.render(<App />, document.getElementById('root'));
 */
const App = () => (
    <div className={classes.App}>
        <Calculator/>
    </div>
);


export default App;
