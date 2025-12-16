import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const saved = JSON.parse(localStorage.getItem('products') || '[]')
    const id = saved.length ? Math.max(...saved.map(p => p.id)) + 1 : 1
    const product = { id, name, category, price: parseFloat(price) || 0 }
    const next = [product, ...saved]
    localStorage.setItem('products', JSON.stringify(next))
    navigate('/products')
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit} className="max-w-md space-y-4 bg-white p-4 rounded shadow">
        <div>
          <label className="block text-sm">Name</label>
          <input value={name} onChange={e => setName(e.target.value)} className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block text-sm">Category</label>
          <input value={category} onChange={e => setCategory(e.target.value)} className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block text-sm">Price</label>
          <input value={price} onChange={e => setPrice(e.target.value)} className="w-full border p-2 rounded" />
        </div>
        <div className="flex gap-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
          <button type="button" onClick={() => navigate('/products')} className="px-4 py-2 border rounded">Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default AddProduct
