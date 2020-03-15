import React from 'react';
import styles from './App.module.css';

import Calculator from '../components/Calculator/Calculator';

/**
 * @function
 * @module /src/containers
 * @description App component
 * @example ReactDOM.render(<App />, document.getElementById('root'));
 */
function App() {
  return (
    <div className={styles.App}>
      <Calculator/>
    </div>
  );
}

export default App;
