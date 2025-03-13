import React, { useState } from 'react';
import { useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Products =()=>{
    const [productsData,setProductsData] = useState([])
  const url ="http://localhost:3004"

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
    return (
        <>
      <section className='cursor-pointer flex-cols  p-5    w-screen mr-10'>
        
        <Link to="/dashboard/Pro" className='text-white  text-xl px-3 py-2 bg-blue-950  align-end'>add new</Link>

        <div className=" w-[80%] mt-6   bg-[#fff] text-black py-8 pl-5  ">
      <h1 className="mb-5  text-2xl font-medium capitalize">our products</h1>

                   
                <table className="border-collapse border border-gray-700 w-[100%]  text-left capitalize ">
                   
                <thead>
                      <tr className=" text-xl ">
                        <th className="border border-gray-700  p-3 ">name</th>
                        <th className="border border-gray-700  p-3 ">category</th>
                        <th className="border border-gray-700  p-3 ">quantity</th>
                        <th className="border border-gray-700   p-3">price</th>
                        <th className="border border-gray-700   p-3">company</th>
                        <th className="border border-gray-700   p-3">action</th>
                        
                      </tr>
                    </thead>
                    
                    
                    <tbody>

                      {productsData?.map((Product,index)=>{

                       return(
                        <tr key={index} className=" hover:bg-gray-800 hover:text-white " >
                        <td className="border border-gray-700 p-3">{Product?.Pname}</td>
                        {/* <td className="border border-gray-700  p-3">{Product?.Category?.Cname}</td> */}
                        <td className="border border-gray-700  p-3">{Product?.Category}</td>
                        <td className="border border-gray-700  p-3">{Product?.Pprice}</td> 
                        <td className="border border-gray-700  p-3">{Product?.Pprice}$</td> 
                        <td className="border border-gray-700  p-3">{Product?.Pname}</td> 
                        <td className="border border-gray-700  p-3"> 
                         <i className='fa fa-pen p-2 bg-blue-600 text-white text-sm  cursor-pointer rounded-sm mr-2'></i>
                         <i className='fa fa-trash p-2 bg-red-600 text-white text-sm  cursor-pointer rounded-sm mr-2'></i>
                            
                </td> 
                    </tr>
                       )

                      })}

                     
                     
                    </tbody>
                    
                  </table>
            </div>

            
      </section>
       
        </>
    )


}

export default Products
// export default {Product,PrModal}





// const PrModal = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       {/* Button to Open Modal */}
//       <button
//         onClick={() => setIsOpen(true)}
//         className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
//       >
//         Open Popup
//       </button>

//       {/* Modal */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
//             {/* Header */}
//             <div className="flex justify-between items-center border-b pb-2">
//               <h2 className="text-xl font-semibold">Product Registration</h2>
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="text-gray-600 hover:text-gray-900"
//               >
//                 ✖
//               </button>
//             </div>

//             {/* Body */}
//             <div className="mt-4">
//               <form>
//                 <input
//                   type="text"
//                   placeholder="Enter patient Name"
//                   className="w-full border p-2 rounded mb-2"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Enter patient Ill"
//                   className="w-full border p-2 rounded mb-2"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Enter patient Result"
//                   className="w-full border p-2 rounded"
//                 />
//               </form>
//             </div>

//             {/* Footer */}
//             <div className="mt-4 flex justify-end gap-2">
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
//               >
//                 Close
//               </button>
//               <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PrModal;
