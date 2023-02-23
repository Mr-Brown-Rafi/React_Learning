import React from 'react'
import { Link } from 'react-router-dom'

function Product() {
  return (
    <>
    <div>This is Products page.</div>
    <Link to={'/'}>Home Page.</Link>
    </>
  )
}

export default Product