import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import AddProduct from './pages/AddProduct'
import Categories from './pages/Categories'
import AddCategory from './pages/AddCategory'
import Orders from './pages/Orders'
import Users from './pages/Users'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'products', element: <Products /> },
      { path: 'products/add', element: <AddProduct /> },
      { path: 'categories', element: <Categories /> },
      { path: 'categories/add', element: <AddCategory /> },
      { path: 'orders', element: <Orders /> },
      { path: 'users', element: <Users /> },
    ],
  },
  { path: '*', element: <div className="p-8">Page not found</div> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
