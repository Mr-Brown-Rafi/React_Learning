import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails(){
  const params = useParams();

  return (
    <>
      <h3>Product Details</h3>
      <p>{params.productId}</p>
    </>
  );
};

export default ProductDetails;
