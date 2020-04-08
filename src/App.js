import React, { useEffect, useState } from 'react';
import 'rbx/index.css';
import { Button, Tile, Card, Column, Container, Title } from 'rbx';

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

const Product = ({ product }) => (
  <Card>
    <center>
      <img src={"data/products/" + product.sku + "_1.jpg"}></img>
      <h1>{ product.title }</h1>
      <br></br>
      <h1>{ product.currencyFormat }{ product.price } { product.currencyId }</h1>
      <Button.Group align="centered">
        <Button rounded="true">S</Button>
        <Button rounded="true">M</Button>
        <Button rounded="true">L</Button>
        <Button rounded="true">XL</Button>
      </Button.Group>
    </center>
    
  </Card>
);

const ProductList = ({ products }) => (
  <Column.Group multiline="true">
      {products.map(product => 
      <Column size="one-quarter">
        <Product key={product.sku} product={ product } />
      </Column>
      )}
  </Column.Group>
);

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
    <Container>
      <ProductList products={ products } />
    </Container>
  );
};


export default App;
