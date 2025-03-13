import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
// import { ToastContainer, toast } from 'react-toastify';

  

function SignUp() {
 const url = "http://localhost:3004";
  const [values,setvalues] = useState()
  const handlechange =(event)=>{
      setvalues({...values,[event.target.id]:event.target.value})
      
  }
  
  const onsubmit = async (e) => {
    e.preventDefault()
    // console.log(values)
    const {data} = await axios.post(`${url}/users`,values)
    // console.log(data);
    

    if(data.status == true){
      alert(data.massage)
    }else{
      alert("error"+ data.massage)
    }
    
   
};

  return (
    <>
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      {/* <ToastContainer /> */}
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <form className="space-y-4" onSubmit={(event)=>onsubmit(event)}>
          <input id='name' type="text" placeholder="Username" className="w-full p-2 border rounded"required onChange={(event)=>handlechange(event)} />
          <input id='email' type="email" placeholder="Email" className="w-full p-2 border rounded"required  onChange={(event)=>handlechange(event)} />
          <input id='password' type="password" placeholder="Password" className="w-full p-2 border rounded"required onChange={(event)=>handlechange(event)} />
          <button  type='submit' className="w-full p-2 bg-green-800 text-white rounded">Sign Up</button>
        </form>
        <p className="mt-4 text-center">
          Already have an account? <Link to="/SignIn" className="text-green-800 cursor-pointer">Sign In</Link>
        </p>
      </div>
    </div>
    </>
  );
}



export default SignUp;

