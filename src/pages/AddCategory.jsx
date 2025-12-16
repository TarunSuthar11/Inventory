import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddCategory = () => {
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const saved = JSON.parse(localStorage.getItem('categories') || '[]')
    const id = saved.length ? Math.max(...saved.map(c => c.id)) + 1 : 1
    const next = [{ id, name }, ...saved]
    localStorage.setItem('categories', JSON.stringify(next))
    navigate('/categories')
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Add Category</h1>
      <form onSubmit={handleSubmit} className="max-w-md space-y-4 bg-white p-4 rounded shadow">
        <div>
          <label className="block text-sm">Name</label>
          <input value={name} onChange={e => setName(e.target.value)} className="w-full border p-2 rounded" />
        </div>
        <div className="flex gap-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
          <button type="button" onClick={() => navigate('/categories')} className="px-4 py-2 border rounded">Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default AddCategory
