import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function navigateHandiler() {
    navigate("/products");
  }

  return (
    <>
      <div>Welcome to Home page.</div>
      <Link to="/products">Products Page.</Link>
      <p><button onClick={navigateHandiler}>products</button></p>
    </>
  );
}

export default Home;
