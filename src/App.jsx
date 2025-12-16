import { useState } from 'react'
import Navbar from './components/Navbar'
import SidebarMenu from './components/SidebarMenu'
import './App.css'
import { Outlet } from 'react-router-dom'
import Login from './pages/Login'

function App() {
  
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  

  return (
    <div className="min-h-screen bg-gray-50">
      <SidebarMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />

      {/* mobile overlay - clicking outside the sidebar will close it on small screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden
        />
      )}

      <div className="ml-0 md:ml-60 transition-all">
        <div className="">
          <Navbar setIsOpen={setIsOpen} />
        </div>

        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  
  )
}

export default App
