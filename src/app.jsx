import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <header style={{ padding: '1rem', background: '#282c34', color: 'white' }}>
        <h1>My E-Commerce Store</h1>
        <nav>
          <Link to="/" style={{ margin: '0 1rem', color: 'white' }}>Home</Link>
          <Link to="/products" style={{ margin: '0 1rem', color: 'white' }}>Products</Link>
        </nav>
      </header>

      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>

      <footer style={{ padding: '1rem', background: '#f1f1f1', marginTop: '2rem', textAlign: 'center' }}>
        <p>&copy; 2025 My E-Commerce Store</p>
      </footer>
    </div>
  )
}
