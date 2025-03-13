import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
// import { ToastContainer, toast } from 'react-toastify';

const SignIn = () => {
   const url = "http://localhost:3004";

    const [allvalues, setAllvalues] = useState();
  
    const handlechange = (e) => {
      setAllvalues({ ...allvalues, [e.target.id]: e.target.value });
    };
  
    const onsubmitted = async (e) => {
        e.preventDefault();
        console.log(allvalues);
       const {data} = await axios.post(`${url}/users/login`,allvalues)
       console.log(data);

       if(data.status == true){
        localStorage.setItem("token",data.token)
        // alert(data.massage)
        toast(data.massage)
      }else{
        toast.error( data.massage)
      }
       
    
       
    };
  
  return (
    <>
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
    <ToastContainer />
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Submit</h2>
        <form className="space-y-4"onSubmit={(e)=>onsubmitted(e)} >
          <input id='email' type="email" placeholder="Email" className="w-full p-2 border rounded" required onChange={(e)=>handlechange(e)} />
          <input id='password' type="password" placeholder="Password" className="w-full p-2 border rounded"required onChange={(e)=>handlechange(e)} />
          <button type='submit' className="w-full p-2 bg-[#343434] text-white rounded">Sign In</button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account? <Link to="/signUp" className="text-[#E2C7A1] cursor-pointer">Sign Up</Link>
        </p>
      </div>
    </div>
    </>
  )
}

export default SignIn



