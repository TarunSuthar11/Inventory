import React from 'react'

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow">Total Products: <strong>12</strong></div>
        <div className="p-4 bg-white rounded shadow">Total Orders: <strong>34</strong></div>
        <div className="p-4 bg-white rounded shadow">Total Users: <strong>8</strong></div>
      </div>
    </div>
  )
}

export default Dashboard
