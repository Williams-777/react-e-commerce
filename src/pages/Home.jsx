import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h2>Welcome to My E-Commerce Store</h2>
      <p>Find the best products at amazing prices!</p>
      <Link to="/products">Browse Products</Link>
    </div>
  )
}
