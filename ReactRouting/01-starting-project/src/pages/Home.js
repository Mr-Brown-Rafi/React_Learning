import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div>Welcome to Home page.</div>
    <Link to={'/products'}>Products Page.</Link>
    </>
  )
}

export default Home