import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('categories') || 'null')
    if (saved && Array.isArray(saved)) setCategories(saved)
    else setCategories([{ id: 1, name: 'Default' }])
  }, [])

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Categories</h1>
        <Link to="/categories/add" className="bg-green-600 text-white px-4 py-2 rounded">Add Category</Link>
      </div>

      <div className="bg-white rounded shadow overflow-hidden">
        <ul className="divide-y">
          {categories.map(c => (
            <li key={c.id} className="p-3">{c.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Categories
