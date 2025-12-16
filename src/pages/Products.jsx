import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('products') || 'null')
    if (saved && Array.isArray(saved)) setProducts(saved)
    else setProducts([
      { id: 1, name: 'Sample Product 1', category: 'Default', price: 19.99 },
      { id: 2, name: 'Sample Product 2', category: 'Default', price: 29.99 },
    ])
  }, [])

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Products</h1>
        <Link to="/products/add" className="bg-green-600 text-white px-4 py-2 rounded">Add Product</Link>
      </div>

      <div className="bg-white rounded shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id} className="border-t">
                <td className="p-3">{p.name}</td>
                <td className="p-3">{p.category}</td>
                <td className="p-3">${p.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Products
