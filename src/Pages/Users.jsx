import React, { useState } from 'react';
import { useEffect } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Users =()=>{
   const [UserData,setUserData] = useState([])
    const url ="http://localhost:3004"
    const [values,setvalues] = useState(
    
    )
    const handlechange =(event)=>{
        setvalues({...values,[event.target.id]:event.target.value})
        
    }
    
    const onsubmit = async (e) => {
      e.preventDefault()
      console.log(values)
      const data = await axios.post(`${url}/users`,values)
      // console.log(data);
      
  
      if(data.status == true){
        alert('ji')
        toast(data.massage)
      }else{
        toast.error("error"+ data.massage)
        
      }
      
     
  };
  
    useEffect (()=>{
  
    async  function onload(){
        try {
          const {data} = await  axios.get(`${url}/users`)
          setUserData(data);
          console.log(data);
          (data);
          
        } catch (error) {
          console.log(error.message);
          
          
        }
        
      }
      onload()
  
  
    },[])

   
    return (
        <>
      <section className=' mt-[8%]    cursor-pointer grid grid-cols-1 md:grid-cols-2 space-y-3.5 gap-x-1  '>
        
      <div className=" p-8 h-[380px] bg-white shadow-lg rounded-lg mt-[-10%]  ml-[5%]">
        <h2 className="text-2xl font-semibold text-center mb-6">create user</h2>
        <form className="space-y-4" onSubmit={(event)=>onsubmit(event)} autoComplete='off'>
          <input id='name' type="text"  placeholder=" Name" className="w-full p-2 border rounded"required onChange={(event)=>handlechange(event)} />
          <input id='password' type="password"   placeholder="password" className="w-full p-2 border rounded"required  onChange={(event)=>handlechange(event)} />
          <input id='email' type="email"placeholder="email" className="w-full p-2 border rounded"required onChange={(event)=>handlechange(event)} />
          <input id='role' type="text"placeholder="role" className="w-full p-2 border rounded"required onChange={(event)=>handlechange(event)} />          <button   type='submit' className="w-full p-2 bg-blue-800 text-white rounded">Add product</button>
        </form>
       
      </div>
    
     <div className="rght-side  p-3  mt-[-10%] ">
     <div className="  bg-[#fff] text-black py-2 px-2  ">

    <h1 className="mb-5  text-2xl font-medium capitalize">users</h1>

           
        <table className="border-collapse w-[100%] border border-gray-700   text-left capitalize ">
           
        <thead>
              <tr className=" text-xl ">
                <th className="border border-gray-700  p-2 ">name</th>
                {/* <th className="border border-gray-700  p-2 ">password</th> */}
                <th className="border border-gray-700   p-2">email</th>
                <th className="border border-gray-700  p-2 ">role</th>
                
                
                
              </tr>
            </thead>
            
            <tbody className='text-md'>
            {UserData?.map((user,index)=>{

return(
 <tr key={index} className=" hover:bg-gray-800 hover:text-white " >
 <td className="border border-gray-700 p-3">{user?.name}</td>
  {/* <td className="border border-gray-700  p-3">{user?.password}</td> */}
 <td className="border border-gray-700  p-3">{user?.email}</td> 
 <td className="border border-gray-700  p-3">{user?.role}$</td> 

 
</tr>
)

})}
             
            </tbody>
            
          </table>
    </div>

      </div>
            
      </section>
       
        </>
    )


}

export default Users






