import React from "react";
import { Link } from "react-router-dom";

const products = [
  { id : 'p1', title: "Product 1"},
  { id : 'p2', title: "Product 2"},
  { id : 'p3', title: "Product 3"},
  { id : 'p4', title: "Product 4"},
]


function Product() {
  return (
    <>
      <div>This is Products page.</div>
      <Link to="/" >Home Page.</Link> //// There are lot of ways to return to Home page need to analyse this

      <ul>
        {products.map( product => <li><Link id={product.id} to={product.id} >{product.title}</Link></li>)}
      </ul>
    </>
  );
}

export default Product;
