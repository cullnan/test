import React from "react"
import { Routes, Route } from "react-router-dom";
import { Product } from './components/Product';
import { Cart } from './components/Cart';
import { Layout } from "./Layout";

import './App.css';

function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
          <Product />
        }/>
        <Route path="korzina" element={
            <Cart />
        }/>  
        <Route path="product/:id" element={<Product />}/> 
      </Route>
      <Route path="*" element={<>404</>} />
    </Routes>
  </>
  );
}

export default App;
