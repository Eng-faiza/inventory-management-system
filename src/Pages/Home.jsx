import React, { useState } from 'react';
import { useEffect } from "react";
import axios from 'axios';


const Home =()=>{
    const url ="http://localhost:3004"

   const [productsData,setProductsData] = useState([])
    const [UserData,setUserData] = useState([])
     const [CustomersData,setCustomersData] = useState([])
  
  
    useEffect (()=>{
  
    async  function onload(){
        try {
          const {data} = await  axios.get(`${url}/products`)
          setProductsData(data);
          console.log(data);
          (data);
          
        } catch (error) {
          console.log(error.message);
          
          
        }
        
      }
      onload()
  
  
    },[])

    // users
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

      useEffect (()=>{
  
        async  function onload(){
            try {
              const {data} = await  axios.get(`${url}/customer`)
              setCustomersData(data);
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

      <div className="  w-[100%] py-3  min-h-screen     mt-2  md:w-full px-10 ml-[20%]   ">
        <div className="top-boxes  grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 ">
        <div className="box bg-white text-[#122543] px-6 py-6  rounded-xl  flex  md:flex  items-center justify-between  hover:text-white hover:bg-[#122543] transition cursor-pointer">
          <div className="text   ">
          <h2 className='text-4xl font-medium mb-1'>{productsData.length}</h2>
          <p className='font-normal text-2xl'>products</p>
          </div>
          <i className='fa fa-cart-shopping  text-5xl font-bold bg-[#375688] p-5  text-white rounded-full ' ></i>
        </div>

        <div className="box bg-white  text-[#122543] px-6 py-6  rounded-xl  flex  md:flex  items-center justify-between  hover:text-white hover:bg-[#122543] transition cursor-pointer">
          <div className="text   ">
          <h2 className='text-4xl font-medium mb-1'>{UserData.length}</h2>
          <p className='font-normal text-2xl'>users</p>
          </div>
          <i className='fa fa-user  text-5xl font-bold bg-[#375688] p-5  text-white rounded-full' ></i>
        </div>

        <div className="box bg-white   text-[#122543] px-6 py-6  rounded-xl  flex  md:flex  items-center justify-between  hover:text-white hover:bg-[#122543] transition cursor-pointer">
          <div className="text   ">
          <h2 className='text-4xl font-medium mb-1'>200</h2>
          <p className='font-normal text-2xl'>sells</p>
          </div>
          <i className='fa fa-dollar-sign  text-5xl font-bold bg-[#375688] p-5  text-white rounded-full' ></i>
        </div>
        <div className="box bg-white   text-[#122543] px-6 py-6  rounded-xl  flex  md:flex  items-center justify-between  hover:text-white hover:bg-[#122543] transition cursor-pointer">
          <div className="text   ">
          <h2 className='text-4xl font-medium mb-1'>{CustomersData.length}</h2>
          <p className='font-normal text-2xl'>customers</p>
          </div>
          <i className='fa fa-user text-5xl font-bold bg-[#375688] p-5  text-white rounded-full' ></i>
        </div>
     
       
     

       

        </div>

        {/* end of 4boxes */}

      <div className="  my-8 grid grid-cols-1 md:grid-cols-2 gap-3">

       <div className="  table-container  bg-white pl-8 py-4 rounded-sm">
       <h1 className='text-2xl text-[#122543] font-bold  mb-10 '>users</h1>
        
       <table className='w-100'>
         
          <tr className='w-full border-b-1 border-gray-200 text-xl capitalize  text-gray-600 text-left'>
            <th  className=' px-3.5 py-2  '>name</th>
            <th className=' px-4.5 py-2'>email</th>
            <th className=' px-4.5  py-2'> role</th>
            
         </tr>
       

         <tbody  className='border-b-1 border-gray-200 px-10 px-4 py-2 text-left'>

          {UserData?.map((user,index)=>{

return(
 <tr key={index} className=" hover:bg-gray-800 hover:text-white " >
 <td className="border border-gray-700 p-3">{user?.name}</td>
  {/* <td className="border border-gray-700  p-3">{user?.password}</td> */}
 <td className="border border-gray-700  p-3">{user?.email}</td> 
 <td className="border border-gray-700  p-3">{user?.role}</td> 

 
</tr>
)

})}
        
         </tbody>
        </table>
      
       </div>
      
      
      
      
         {/* list */}
         <div className="list-container  bg-white px-3 py-4 rounded-sm">
          <h1 className='text-2xl text-[#122543] font-bold  mb-3 '>Recent added Customers</h1>
        
          <ul>
        {CustomersData?.map((customer,index)=>{

return(
  <li key={index} className='flex space-x-3 hover:bg-blue-[122543] px-2 cursor-pointer mb-4'>
     <img className='w-15  h-15 rounded-full text-[#122543] ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzpztEZ2ykCnjQGcdYsKIMaj4Skvv_w9PPQ&s" alt="" />
     <div className="info">
     <h2 className='font-medium capitalize text-xl '>{customer?.name}</h2>
     <h2 className='text-gray-500 font-medium'>{customer?.address}</h2>

     </div>

 

 </li>
)

})}

          <li className='flex space-x-3 hover:bg-blue-[122543] px-2 cursor-pointer mb-4'>
            <img className='w-15  h-15 rounded-full text-[#122543] ' src="data:image/jpeg;base64,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" alt="" />
           <div className="info">
           <h2 className='font-medium capitalize text-xl '>ali hassan</h2>
           <span className='text-gray-500 font-medium'>mogadishu</span>
           </div>
          </li>
           
           

        </ul>
        </div>




      </div>

      
        {/* Recently Added Products */}

        <div className="Recently-Products bg-white px-3 py-4 rounded-sm mb-10">
          <h1 className='text-2xl text-[#122543] font-bold  mb-3 '>Recently Added Products</h1>
        
       
       <table className='w-[100%] '>
        <tr  className='border-b-1 py-2 border-gray-200 px-10'>
          <th>#</th>
          <th className='font-medium capitalize text-xl  text-gray-700 text-left'>product</th>
          <th className='font-medium capitalize text-xl  text-gray-700 text-left'>price</th>
        </tr>

        <tbody>

{productsData?.slice(-5).map((Product,index)=>{

 return(
  <tr key={index} className=" hover:bg-gray-800 hover:text-white  font-medium" >
  <td className="border border-gray-700 p-3">{index}</td>
  <td className="border border-gray-700 p-3">{Product?.Pname}</td>
  <td className="border border-gray-700  p-3">${Product?.Pprice}</td>  
</tr>
 )

})}



</tbody>
      
       </table>
       
        </div>

        {/* Recently sales */}

        <div className="Recently-Products bg-white px-3 py-4 rounded-sm">
          <h1 className='text-2xl text-[#122543] font-bold  mb-3  capitalize'>Recently sales</h1>
        
       
      <table className='w-[100%] '>
        <tr  className='border-b-1 py-2 border-gray-200 px-10'>
          <th>#</th>
          <th className='font-medium capitalize text-xl  text-gray-700 text-left'>customer</th>
          <th className='font-medium capitalize text-xl  text-gray-700 text-left'>status</th>
          <th className='font-medium capitalize text-xl  text-gray-700 text-left'>grand  Total</th>
          <th className='font-medium capitalize text-xl  text-gray-700 text-left'>paid</th>
          <th className='font-medium capitalize text-xl  text-gray-700 text-left'>due</th>
        </tr>

        <tr  className='border-b-1 py-2 border-gray-200 px-10'>
          <td>1</td>
          <td className='font-medium capitalize text-md  text-black text-left'>asli</td>
          <td className='font-medium capitalize text-md  text-black text-left'>in comlpeted</td>
          <td className='font-medium capitalize text-md  text-black  text-left'>$12000  Total</td>
          <td className='font-medium capitalize text-md  text-black  text-left'>#12000</td>
          <td className='font-medium capitalize text-md  text-black  text-left'>000</td>
         
        </tr>
    

       
       </table>
       
        </div>



      </div>
    
    

    </>
    )
}

export default Home