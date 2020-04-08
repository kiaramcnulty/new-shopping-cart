import React from 'react';
import logo from './logo.svg';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA7iUmHBQvbOZr0ga8haB95shBjf8XMWEY",
  authDomain: "new-shopping-cart-a16c2.firebaseapp.com",
  databaseURL: "https://new-shopping-cart-a16c2.firebaseio.com",
  projectId: "new-shopping-cart-a16c2",
  storageBucket: "new-shopping-cart-a16c2.appspot.com",
  messagingSenderId: "36715289431",
  appId: "1:36715289431:web:8cbf007e47dc923ed63c12",
  measurementId: "G-EM6H8L7Q6X"
};

firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
