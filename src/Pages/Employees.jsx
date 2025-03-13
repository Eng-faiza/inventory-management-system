import React from 'react';
import { useState } from "react";

const Employees =()=>{
    return (
        <>
      <section className='ml-[3%] mt-[8%]   cursor-pointer flex-cols space-y-3.5 md:flex gap-x-1  '>
        
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg mt-[-10%]  ml-[-25%]">
        <h2 className="text-2xl font-semibold text-center mb-6">register employee</h2>
        <form className="space-y-4" onSubmit={(event)=>onsubmit(event)} autoComplete='off'>
          <input id='Name' type="text"  placeholder=" Name" className="w-full p-2 border rounded"required onChange={(event)=>handlechange(event)} />
          <input id='email' type="email"   placeholder="email" className="w-full p-2 border rounded"required  onChange={(event)=>handlechange(event)} />
          <input id='addrees' type="text"placeholder="addrees" className="w-full p-2 border rounded"required onChange={(event)=>handlechange(event)} />
          <input id='phone' type="number"placeholder="phone" className="w-full p-2 border rounded"required onChange={(event)=>handlechange(event)} />
          <input id='salery' type="number"placeholder="salery" className="w-full p-2 border rounded"required onChange={(event)=>handlechange(event)} />
          <button   type='submit' className="w-full p-2 bg-blue-800 text-white rounded">Add product</button>
        </form>
       
      </div>
    
     <div className="rght-side w-[75%] p-3  mt-[-10%] ">
     <div className="  bg-[#fff] text-black py-2 px-2  ">

    <h1 className="mb-5  text-2xl font-medium capitalize">employess</h1>

           
        <table className="border-collapse w-[100%] border border-gray-700   text-left capitalize ">
           
        <thead>
              <tr className=" text-xl ">
                <th className="border border-gray-700  p-2 ">name</th>
                <th className="border border-gray-700  p-2 ">email</th>
                <th className="border border-gray-700   p-2">address</th>
                <th className="border border-gray-700  p-2 ">phone</th>
                <th className="border border-gray-700   p-2">salery</th>
                
                
              </tr>
            </thead>
            
            <tbody className='text-md'>
            {/* {productsData?.map((Product,index)=>{

return(
 <tr key={index} className=" hover:bg-gray-800 hover:text-white " >
 <td className="border border-gray-700 p-3">{Product?.Pname}</td>
  <td className="border border-gray-700  p-3">{Product?.Category}</td>
 <td className="border border-gray-700  p-3">{Product?.Pprice}</td> 
 <td className="border border-gray-700  p-3">{Product?.Pprice}$</td> 
 <td className="border border-gray-700  p-3">{Product?.Pname}</td> 
 
</tr>
)

})} */}
             
            </tbody>
            
          </table>
    </div>

      </div>
            
      </section>
       
        </>
    )


}

export default Employees






