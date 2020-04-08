import React, { useEffect, useState } from 'react';

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

const App = () => {
  const [data, setData] = useState({});
  const products = Object.values(data);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/products.json');
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);

  return (
    <ul>
      {products.map(product => <li key={product.sku}>{product.title}</li>)}
    </ul>
  );
};

export default App;
