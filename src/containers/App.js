import React from 'react';
import styles from './App.module.css';

import Calculator from '../components/Calculator/Calculator';
function App() {
  return (
    <div className={styles.App}>
      <Calculator/>
    </div>
  );
}

export default App;
