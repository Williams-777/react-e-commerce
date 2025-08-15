import React from 'react'
import { useParams, Link } from 'react-router-dom'

const products = [
  { id: 1, name: 'Product A', price: 50, description: 'High-quality Product A' },
  { id: 2, name: 'Product B', price: 75, description: 'Durable and reliable Product B' },
  { id: 3, name: 'Product C', price: 100, description: 'Premium quality Product C' }
]

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return <h2>Product not found</h2>
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <Link to="/products">Back to Products</Link>
    </div>
  )
}
