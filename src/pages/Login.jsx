import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center bg-gray-700 px-4">
      <div className="w-full max-w-md bg-gray-50 border border-gray-300 shadow-lg rounded-lg p-8">
        
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
          Welcome Admin
        </h2>

        <form className="space-y-5">

          {/* USERNAME */}
          <div className="space-y-1">
            <label className="text-gray-500 text-md">Email</label>
            <div className="flex items-center border border-gray-300 rounded-lg my-1 px-3 py-2 focus-within:border-gray-600 transition">
              <FaUser className="text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Enter username"
                className="w-full ml-2 focus:outline-none text-gray-700"
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div className="space-y-1">
            <label className="text-gray-500 text-md">Password</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 my-1 focus-within:border-gray-600 transition">
              <FaLock className="text-gray-400 text-sm" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full ml-2 focus:outline-none text-gray-700"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-xs text-gray-500 hover:text-gray-700"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* BUTTON */}
          <button
            className="w-full bg-green-600 text-white py-2.5 text-lg rounded-lg mt-4 font-medium hover:bg-green-700"
          >
            Login
          </button>

          {/* LINKS */}
          <div className="flex justify-between text-md text-gray-600">
            <a href="#" className=" text-red-500 ">Wrong Password</a>
            <a href="#" className="hover:underline">Forgot Password?</a>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;