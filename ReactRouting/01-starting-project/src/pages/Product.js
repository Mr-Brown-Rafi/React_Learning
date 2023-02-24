import React from "react";
import { Link } from "react-router-dom";

function Product() {
  return (
    <>
      <div>This is Products page.</div>
      <Link to={"/"}>Home Page.</Link>

      <ul>
        <li>
          <Link to="/products/1">Product 1</Link>
        </li>
        <li>Product 2</li>
        <li>Product 3</li>
        <li>Product 4</li>
        <li>Product 5</li>
      </ul>
    </>
  );
}

export default Product;
