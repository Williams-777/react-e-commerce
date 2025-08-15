import React from 'react'
import { Link } from 'react-router-dom'

const products = [
  { id: 1, name: 'Product A', price: 50 },
  { id: 2, name: 'Product B', price: 75 },
  { id: 3, name: 'Product C', price: 100 }
]

export default function Products() {
  return (
    <div>
      <h2>Our Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`/product/${p.id}`}>
              {p.name} - ${p.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
      }
