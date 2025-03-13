import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

  

function Pro() {
 const url = "http://localhost:3004";
  const [values,setvalues] = useState(
    // {
    //   Pname: "",
    //   Pprice: "",
    //   Category: ""
    // }
  )
  const handlechange =(event)=>{
      setvalues({...values,[event.target.id]:event.target.value})
      
  }
  
  const onsubmit = async (e) => {
    e.preventDefault()
    console.log(values)
    const data = await axios.post(`${url}/pr`,values)
    console.log(data);
    

    if(data.status == true){
      toast(data.massage)
    }else{
      toast.error("error"+ data.massage)
      
    }
    
   
};

  return (
    <>
    <div className="flex min-h-screen items-center  w-[100%]   ml-[10%] ">
      <ToastContainer />
      <div className="w-full  p-8 bg-white shadow-lg rounded-lg mt-[-20%]  ">
        <h2 className="text-2xl font-semibold text-center mb-6">register product</h2>
        <form className="space-y-4" onSubmit={(event)=>onsubmit(event)} autoComplete='off'>
          <input id='Pname' type="text"  placeholder="product Name" className="w-full p-2 border rounded"required onChange={(event)=>handlechange(event)} />
          <input id='Pprice' type="number"   placeholder="product Price" className="w-full p-2 border rounded"required  onChange={(event)=>handlechange(event)} />
          <input id='Category' type="text"placeholder="product Category" className="w-full p-2 border rounded"required onChange={(event)=>handlechange(event)} />
          <button   type='submit' className="w-full p-2 bg-blue-800 text-white rounded">Add product</button>
        </form>
       
      </div>
    </div>
    </>
  );
}



export default Pro;

