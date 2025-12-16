import React, { useEffect, useState } from 'react'

const Orders = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('orders') || 'null')
    if (saved && Array.isArray(saved)) setOrders(saved)
    else setOrders([
      { id: 1, product: 'Sample Product 1', qty: 2, total: 39.98, user: 'John' },
      { id: 2, product: 'Sample Product 2', qty: 1, total: 29.99, user: 'Jane' },
    ])
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Orders</h1>
      <div className="bg-white rounded shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Product</th>
              <th className="p-3">Qty</th>
              <th className="p-3">Total</th>
              <th className="p-3">User</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(o => (
              <tr key={o.id} className="border-t">
                <td className="p-3">{o.id}</td>
                <td className="p-3">{o.product}</td>
                <td className="p-3">{o.qty}</td>
                <td className="p-3">${o.total}</td>
                <td className="p-3">{o.user}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Orders
