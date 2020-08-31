import React from 'react';
import Main from './components/Main';
import './App.css';
import { BrowserRouter } from 'react-router-dom';


function App(props) {
    return (
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
      </BrowserRouter>
    );
  }

export default App;
