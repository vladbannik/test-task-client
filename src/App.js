import './App.css';
import React, { useEffect, useState } from 'react';
import * as axios from 'axios'
import Form from './Form';

function App() {
  const [appState, setAppState] = useState({ colors: null });

  useEffect(() => {
    const apiUrl = "http://localhost:8080/color"
    axios.get(apiUrl).then((resp) => {
      const colors = resp.data
      setAppState(colors)
    });
  }, [setAppState]);

  return (
    <div className='App'>
      <Form colors={appState.colors} />
    </div>
  );
}

export default App;
