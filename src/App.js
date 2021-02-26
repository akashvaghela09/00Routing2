import React from 'react';
import styles from  './App.module.css';
import {Navbar} from './Components/Navbar';
import {AllRoutes} from './Routes/AllRoutes';

function App() {
  return (
    <div className={styles.App}>
      <div>
        <Navbar/>
      </div>
      <h3>{process.env.REACT_APP_TOKEN}</h3>
      <h3>{`Base URL: ${process.env.REACT_APP_REQUEST_BASE_URL}`}</h3>
      <AllRoutes />
    </div>
  );
}

export default App;
