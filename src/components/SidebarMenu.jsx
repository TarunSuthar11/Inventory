import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaBox, FaList, FaShoppingBag, FaUsers, FaPlus, FaSignInAlt } from "react-icons/fa";

const Sidebar = ({ isOpen, onClose }) => {
  const handleLinkClick = () => {
    // close sidebar on small screens when a link is clicked
    if (typeof onClose === 'function' && window.innerWidth < 768) onClose()
  }

  return (
    <div
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 fixed top-0 left-0 h-full w-60 bg-blue-300 border-r border-gray-400 shadow-sm transform transition-all duration-300 z-50`}
    >
      <div className="p-4 h-14 font-bold text-xl border-b border-gray-400">Menu</div>

      <nav className="flex flex-col mt-2 text-gray-700">
        <NavLink onClick={handleLinkClick} to="/" className="px-5 py-3 hover:bg-gray-100 flex items-center gap-3">
          <FaTachometerAlt /> Dashboard
        </NavLink>
        <NavLink onClick={handleLinkClick} to="/products" className="px-5 py-3 hover:bg-gray-100 flex items-center gap-3">
          <FaBox /> Products
        </NavLink>
        <NavLink onClick={handleLinkClick} to="/categories" className="px-5 py-3 hover:bg-gray-100 flex items-center gap-3">
          <FaList /> Categories
        </NavLink>
        <NavLink onClick={handleLinkClick} to="/orders" className="px-5 py-3 hover:bg-gray-100 flex items-center gap-3">
          <FaShoppingBag /> Orders
        </NavLink>
        <NavLink onClick={handleLinkClick} to="/users" className="px-5 py-3 hover:bg-gray-100 flex items-center gap-3">
          <FaUsers /> Users
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;