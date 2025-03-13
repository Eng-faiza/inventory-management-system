import React from 'react'

const Sales = () => {
  return (
    <>
    <div className="container ml-[20%] mr-5 mt-[10%]  w-[70%] absolute ">

    <div class="search-part  w-[100%]  mb-10 flex justify-between  items-center px-6  py-4  bg-gray-800 ">
            <div class="left relative w-[50%] ">
                <i class="fa fa-search absolute top-2  text-gray-200  text-xl  left-5  "></i>
            <input type="text"  placeholder="search here..." class="py-2 px-10 ml-3 capitalize text-white border-[1px] border-[white] rounded-md outline-none bg-transparent " />

            </div>

            {/* <!-- right-buttons --> */}
             <div class="right-buttons ">

                <select name="" id="" class="py-2 px-3 text-white bg-transparent border-[1px] border-white rounded-md  px-3" >
                    <option value=""className='bg-blue-200' >newest</option>
                    <option value="" className='bg-blue-200' >oldest</option>
                    <option value="" className='bg-blue-200'>all products</option>
                  </select>

               
             </div>
             
         </div>



        {/* table container */}

    <div class=" table-box bg-[#272738] py-8 pl-5 col-span-2 ">
    <h1 class="mb-5 text-white text-2xl font-medium capitalize">sales products</h1>

                   
                <table class="border-collapse border border-gray-700 w-[90%]  text-left capitalize ">
                   
                    <thead>
                      <tr class="text-white text-xl ">
                        <th class="border border-gray-700  p-3 ">name</th>
                        <th class="border border-gray-700  p-3 ">quantity</th>
                        <th class="border border-gray-700  p-3 ">price</th>
                        <th class="border border-gray-700  p-3 ">cost</th>
                        <th class="border border-gray-700   p-3">stock</th>
                      </tr>
                    </thead>
                    
                    <tbody>
                      <tr class="text-gray-400 hover:bg-gray-800 ">
                        <td class="border border-gray-700 p-3"> laptop stand</td>
                        <td class="border border-gray-700  p-3">70</td>
                        <td class="border border-gray-700  p-3">8000$</td>
                        <td class="border border-gray-700  p-3">90$</td>
                        <td class="border border-gray-700  p-3">90</td>
                        
                      
                    
                    </tr>
                      <tr class="text-gray-400 hover:bg-gray-800 ">
                        <td class="border border-gray-700 p-3">camera</td>
                        <td class="border border-gray-700  p-3">10</td>
                        <td class="border border-gray-700  p-3">1000$</td>
                        <td class="border border-gray-700  p-3">30$</td>
                        <td class="border border-gray-700  p-3">12</td>
                        
                      
                    
                    </tr>
                      <tr class="text-gray-400 hover:bg-gray-800 ">
                        <td class="border border-gray-700 p-3">hp laptop</td>
                        <td class="border border-gray-700  p-3">30</td>
                        <td class="border border-gray-700  p-3">3000$</td>
                        <td class="border border-gray-700  p-3">300$</td>
                        <td class="border border-gray-700  p-3">20</td>
                        
                      
                    
                    </tr>
                      <tr class="text-gray-400 hover:bg-gray-800 ">
                        <td class="border border-gray-700 p-3"> laptop stand</td>
                        <td class="border border-gray-700  p-3">70</td>
                        <td class="border border-gray-700  p-3">8000$</td>
                        <td class="border border-gray-700  p-3">90$</td>
                        <td class="border border-gray-700  p-3">90</td>
                        
                      
                    
                    </tr>
                      <tr class="text-gray-400 hover:bg-gray-800 ">
                        <td class="border border-gray-700 p-3">camera</td>
                        <td class="border border-gray-700  p-3">10</td>
                        <td class="border border-gray-700  p-3">1000$</td>
                        <td class="border border-gray-700  p-3">30$</td>
                        <td class="border border-gray-700  p-3">12</td>
                        
                      
                    
                    </tr>
                      <tr class="text-gray-400 hover:bg-gray-800 ">
                        <td class="border border-gray-700 p-3">hp laptop</td>
                        <td class="border border-gray-700  p-3">30</td>
                        <td class="border border-gray-700  p-3">3000$</td>
                        <td class="border border-gray-700  p-3">300$</td>
                        <td class="border border-gray-700  p-3">20</td>
                        
                      
                    
                    </tr>
                      <tr class="text-gray-400 hover:bg-gray-800 ">
                        <td class="border border-gray-700 p-3"> laptop stand</td>
                        <td class="border border-gray-700  p-3">70</td>
                        <td class="border border-gray-700  p-3">8000$</td>
                        <td class="border border-gray-700  p-3">90$</td>
                        <td class="border border-gray-700  p-3">90</td>
                        
                      
                    
                    </tr>
                      <tr class="text-gray-400 hover:bg-gray-800 ">
                        <td class="border border-gray-700 p-3">camera</td>
                        <td class="border border-gray-700  p-3">10</td>
                        <td class="border border-gray-700  p-3">1000$</td>
                        <td class="border border-gray-700  p-3">30$</td>
                        <td class="border border-gray-700  p-3">12</td>
                        
                      
                    
                    </tr>
                      <tr class="text-gray-400 hover:bg-gray-800 ">
                        <td class="border border-gray-700 p-3">hp laptop</td>
                        <td class="border border-gray-700  p-3">30</td>
                        <td class="border border-gray-700  p-3">3000$</td>
                        <td class="border border-gray-700  p-3">300$</td>
                        <td class="border border-gray-700  p-3">20</td>
                        
                      
                    
                    </tr>
                     
                      
                     
                     
                      
                     


                    </tbody>
                  </table>
            </div>

    </div>


    </>
  )
}

export default Sales