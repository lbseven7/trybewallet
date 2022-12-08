import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { createGlobalStyle } from 'styled-components';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import './css/login.css';
// import './css/wallet.css';

// const GlobalStyle = createGlobalStyle`
//   * {
//     padding: 0px;
//     font-family: sans-serif;
//     margin: 0px;
//   }
// `;

function App() {
  return (
    <Switch>
      <Route path="/" exact component={ Login } />
      <Route path="/carteira" exact component={ Wallet } />
    </Switch>
  );
}

export default App;
