import { RiMenu2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { IoSearch, IoLogOutOutline  } from "react-icons/io5";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";




import { Link } from "react-router-dom";
import { useState } from "react";


const Navbar = ({setIsOpen}) => {
  
  const [search, setSearch] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  };

 

  return (
    <>
    <nav className="flex-col   bg-blue-300 px-3 md:px-6 lg:px-8">
        <div className="flex justify-between h-14">

        <div className="flex items-center gap-2">
            <button onClick={toggleSidebar} className="p-2 rounded-md  hover:bg-gray-200 ">
                <span className=" text-2xl "> <BsReverseLayoutTextSidebarReverse /></span>
            </button>
            <span className="text-2xl font-semibold ">Sukanya</span>
            
        </div>
        <div className="flex gap-5 md:gap-6 ">

        <div className="flex items-center justify-self-end">
            <input type="text" placeholder="Search " className="" />
            <button className="text-xl" onClick={() =>  {setSearch(prev => !prev)}}><IoSearch /></button>
            
        </div>

        <div className="flex items-center gap-1 ">
            
            <span className="hidden sm:block text-lg ">Logout</span>
            <span className="text-2xl"><IoLogOutOutline /></span>
            
        </div>
        </div>
        </div>
    </nav>
    <div className={search?(" flex-col justify-between items-center absolute top-0 left-0 w-screen  h-[55px] bg-gray-800 sm:hidden"):("hidden")}>
            <div className="flex h-[55px] w-screen mb-2 items-center">
                <div className=" flex items-center mx-2 w-screen rounded-3xl h-10  bg-gray-100">
                    <input type="text" placeholder="Search " className="bg-transparent w-7/8 outline-none ml-4 text-md"/>
                    <button type="submit" className="text-xl  px-2 justify-end"><IoSearch /></button> 
                </div>
                <button className= "mr-3 text-2xl text-gray-50" onClick={() => setSearch(false)}><RxCross2 /></button> 
            </div>
            <div className="flex-col  bg-gray-200 w-[95%] justify-self-center rounded-xl ">
                <div className="h-13 flex items-center justify-center ">
                    <Link to='/'>
                    {/* <img src="" alt="" height="35px" className=""/> */}
                    <span className="text-lg">Product Name </span>
                    </Link> 
                </div>
                <hr className="mx-2"/>

                 <div className="h-13 flex items-center justify-center ">
                    <Link to='/'>
                    {/* <img src="" alt="" height="35px" className=""/> */}
                    <span>Product Name </span>
                    </Link>
                </div>
                <hr />

                 <div className="h-13 flex items-center justify-center ">
                    <Link to='/'>
                    {/* <img src="" alt="" height="35px" className=""/> */}
                    <span>Product Name </span>
                    </Link>
                </div>
                <hr />
                
            </div>
    </div>
    </>
  );
};

export default Navbar;