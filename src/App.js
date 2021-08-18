import React from 'react';
import Provider from './context/Provider';
import './App.css';
import Main from './pages/Main';

function App() {
  return (
    <Provider>
      <Main />
    </Provider>
  );
}

export default App;
