// import React from 'react'
// import  {productsInfo}  from '../assets/assets'

// const Charts = () => {
//   return (
//     <>
//      <div class="topboxes ml-[19%] mt-30 grid grid-cols-4  gap-4 py-2 px-5">
            
//             <div class="box  flex  h-34  rounded-md text-white items-center ">
//                 <i class="fa fa-user-graduate bg-[#32af97]  text-5xl px-2 pt-8 text-center py-4 h-[100%] w-[50%]"></i>
//                 <div class="text text-2xl font-bold text-black bg-white h-[100%] w-[50%] p-4 text-center">
//                     <h1>5</h1>
//                     <p className='font-normal'>users</p>
//                 </div>
//             </div>

//             <div class="box  flex  h-34  rounded-md text-white items-center ">
//                 <i class="fa fa-user-graduate bg-orange-500  text-5xl px-2 pt-8 text-center py-4 h-[100%] w-[50%]"></i>
//                 <div class="text text-2xl font-bold text-black bg-white h-[100%] w-[50%] p-4 pr-6 text-center">
//                     <h1>8</h1>
//                     <p className='font-normal'>categories</p>
//                 </div>
//             </div>

//             <div class="box  flex  h-34  rounded-md text-white items-center ">
//                 <i class="fa fa-user-graduate bg-purple-400  text-5xl px-2 pt-8 text-center py-4 h-[100%] w-[50%]"></i>
//                 <div class="text text-2xl font-bold text-black bg-white h-[100%] w-[50%] p-4 text-center">
//                     <h1>16</h1>
//                     <p className='font-normal'>products</p>
//                 </div>
//             </div>

//             <div class="box  flex  h-34  rounded-md text-white items-center ">
//                 <i class="fa fa-dollar-sign bg-orange-300  text-5xl px-2 pt-8 text-center py-4 h-[100%] w-[50%]"></i>
//                 <div class="text text-2xl font-bold text-black bg-white h-[100%] w-[50%] p-4 px-5 text-center">
//                     <h1>7561.5</h1>
//                     <p className='font-normal'>sales</p>
//                 </div>
//             </div>


//         </div>

    

//     {/* product lastest info */}
//     <div className=" ml-[20%] w-[78%] mt-[-5%] center-container flex space-x-5">

//     <div className=' mt-[10%]   bg-white p-5  rounded-sm '>
//       <h1 className='font-bold text-xl capitalize border-b-4 border-blue-400  pb-4 '> <i class="fa fa-dollar-sign"></i> higest selling products</h1>

//     <table class="border-collapse border border-gray-700   text-left capitalize ">
                   
//                    <thead >
//                          <tr class=" text-md ">
//                            <th class="border border-gray-700  p-3 ">name</th>
//                            <th class="border border-gray-700  p-3 ">total sold</th>
//                            <th class="border border-gray-700   p-3">total quantity</th>
                           
//                          </tr>
//                        </thead>
                       
//                        <tbody className='font-medium'>

                         
//                            {
//                             productsInfo.slice(-4).map((product,index)=>{

//                               return(
//                                 <tr  key={index} class=" hover:bg-gray-800 hover:text-white ">
//                                 <td className='border border-gray-700 p-3'>{product.p_Name}</td>
//                                 <td className='border border-gray-700 p-3'>{product.p_qty}</td>
//                                 {/* <td className='border border-gray-700 p-3'>{product.p_price}</td> */}
//                                 <td className='border border-gray-700 p-3'>{product.p_cost}</td>
                               

//                                  </tr>
//                               )

                              
//                             })
                            
//                            }
                           
                           
                         
                      
                        
                         
                         
                           
                         
                      
                        
   
   
//                        </tbody>
//                      </table>


//     </div>

//     <div className=' mt-[10%]   bg-white p-5 rounded-sm '>
//       <h1 className='font-bold text-xl capitalize border-b-4 border-blue-400  pb-4 '> <i class="fa fa-dollar-sign"></i> latest selles</h1>

//     <table class="border-collapse border border-gray-700   text-left capitalize ">
                   
//                    <thead>
//                          <tr class=" text-md ">
//                            <th class="border border-gray-700  p-3 ">name</th>
//                            <th class="border border-gray-700  p-3 ">total sold</th>
//                            <th class="border border-gray-700   p-3">total quantity</th>
                           
//                          </tr>
//                        </thead>
                       
//                        <tbody className='font-medium'>

                         
//                            {
//                             productsInfo.slice(-4).map((product,index)=>{

//                               return(
//                                 <tr  key={index} class=" hover:bg-gray-800 hover:text-white ">
//                                 <td className='border border-gray-700 p-3'>{product.p_Name}</td>
//                                 <td className='border border-gray-700 p-3'>{product.p_qty}</td>
//                                 {/* <td className='border border-gray-700 p-3'>{product.p_price}</td> */}
//                                 <td className='border border-gray-700 p-3'>{product.p_cost}</td>
                               

//                                  </tr>
//                               )

                              
//                             })
                            
//                            }
                           
                           
                         
                      
                        
                         
                         
                           
                         
                      
                        
   
   
//                        </tbody>
//                      </table>


//     </div>

//     <div className=' mt-[10%]    bg-white p-5 rounded-sm '>
//       <h1 className='font-bold text-xl capitalize border-b-4 border-blue-400  pb-4 '> <i class="fa fa-plus"></i> recently addded products</h1>

//     <table class="border-collapse border border-gray-700   text-left capitalize ">
                   
//                    <thead>
//                          <tr class=" text-md ">
//                            <th class="border border-gray-700  p-3 ">name</th>
//                            <th class="border border-gray-700  p-3 ">total sold</th>
//                            <th class="border border-gray-700   p-3">total quantity</th>
                           
//                          </tr>
//                        </thead>
                       
//                        <tbody className='font-medium'>

                         
//                            {
//                             productsInfo.slice(-4).map((product,index)=>{

//                               return(
//                                 <tr  key={index} class=" hover:bg-gray-800 hover:text-white ">
//                                 <td className='border border-gray-700 p-3'>{product.p_Name}</td>
//                                 <td className='border border-gray-700 p-3'>{product.p_qty}</td>
//                                 {/* <td className='border border-gray-700 p-3'>{product.p_price}</td> */}
//                                 <td className='border border-gray-700 p-3'>{product.p_cost}</td>
                               

//                                  </tr>
//                               )

                              
//                             })
                            
//                            }
                           
                           
                         
                      
                        
                         
                         
                           
                         
                      
                        
   
   
//                        </tbody>
//                      </table>


//     </div>

//     </div>
    

//     </>
    
//   )
// }

// export default Charts