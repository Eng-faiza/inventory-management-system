import { jwtDecode } from 'jwt-decode';
import React, {useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom'




const Side_header = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(()=>{
        function  checkToken(){
          const token  = localStorage.getItem('token')
        
        const decoded = jwtDecode(token)
          console.log(decoded);
          
    
        }
        checkToken()
      },[])
    return (
        <>
        <div className="container-fiuld     left-0   top-0   flex justify-between  ">

        <aside className={`bg-[#122543] fixed w-[50%]  md:w-[250px]   text-white pl-3 pr-2 pb-3 pt-7 transform ${ isOpen ? "translate-x-0" : "-translate-x-full "
          } md:translate-x-0 transition-transform duration-300 ease-in-out z-50 h-screen `}
       >

        {/* <!-- profile --> */}

        <div className="profile flex border-b-[1px] border-gray-400 pb-3 ">
            {/* <img src="images/rightsideimage.png" alt="" className="w-[50px] h-[50px] rounded-full mr-3"> */}
            <div className="info ">
            <i className="fa fa-user  mb-2 mr-4  text-2xl bg-gray-200 p-3 rounded-full" ></i>
                <span className="text-gray-400 font-medium block">admin</span>
                <h2 className="font-bold">faiza mahdi</h2>
            </div>
        </div>

      

        {/* <!-- menus --> */}

        <div className="menus">

            <h1 className="mt-5 text-2xl capitalize mb-10  ">menus</h1>
            <ul className="text-md capitalize pl-3 flex-col space-y-6">
                <li className="mb-6">
                 
                <Link to="/dashboard/home" className=" text-md  hover:text-violate-600"><i className="fa fa-clipboard mr-4" ></i>dashboard</Link>
                 </li>
                <li className="mb-6">
                 
                <Link to="/dashboard/products" className=" text-md  hover:text-violate-600"><i className="fa fa-clipboard mr-4" ></i>products</Link>
                 </li>

                <li className="mb-6"> 
                <Link to="/dashboard/Pro" className=" text-md  hover:text-violate-600"><i className="fa fa-clipboard mr-4" ></i>Add products</Link>
                 </li>
                <li className="mb-6"> 
                <Link to="/dashboard/employees" className=" text-md  hover:text-violate-600"><i className="fa fa-clipboard mr-4" ></i>employees</Link>
                 </li>

                 <li className="mb-6">
                <Link to="/dashboard/Customers" className=" text-md  hover:text-violate-600"> <i className="fa fa-clipboard mr-4" ></i>Customers</Link>
                 </li>
                 <li className="mb-6">
                <Link to="/dashboard/users" className=" text-md  hover:text-violate-600"> <i className="fa fa-clipboard mr-4" ></i>users</Link>
                 </li>
                <li className="mb-6">
                <Link to="/sales"className=" text-md  hover:text-violate-600"><i className="fa fa-clipboard mr-4" ></i>sales</Link>
                 </li>
                <li className="mb-6">
                <Link to="/signIn"className=" text-md  hover:text-violate-600"><i className="fa fa-clipboard mr-4" ></i>signUp</Link>
                 </li>
                 
             
                 </ul>

                 </div>
     </aside>


     <header className=" z-index-4  shadow-sm   w-[50%]  text-black w-full fixed right-0  md:w-[82%] absolute   md:left-[18%] py-4 px-8  flex justify-end items-center">

      {/* Menu Toggle Button */}
      <button
      className=" md:hidden "
      onClick={() => setIsOpen(!isOpen)}
      >
   <i className="fa fa-bars text-3xl  ml-95 text-[#122543] "></i>
   </button>

    <div className="right flex items-center  relative  hidden md:inline">
     {/* <i className="fa-solid fa-moon mr-4 text-2xl"> </i> */}
     <i className="fa-solid fa-user  mr-4 text-2xl"></i>
     </div>


   </header>


  <section className='mt-[6%]   '>
<Outlet/>
  </section>

        
        
        
        </div>
        </>
    );
};

export default Side_header;
