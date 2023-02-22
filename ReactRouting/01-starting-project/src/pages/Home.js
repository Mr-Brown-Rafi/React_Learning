import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div>Welcome to Home page.</div>
    
    <a href="/products">Products Page</a><br/>

    <Link to={'/products'}>Products Page.</Link>
    </>
  )
}

export default Home