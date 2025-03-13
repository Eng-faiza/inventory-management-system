import React from 'react'


const Login = () => {
  return (
    <>
     
     <div className="account w-[32%] mx-[32%]  my-[8%] capitalize px-3">
        <h1 className='font-bold text-3xl capitalize mb-2  text-center mb-3' >create  an account</h1>
        <div className="shadowing-lg py-6 px-10 bg-white  w-[100%] ">
    {/* inputes and buttons */}
      <div className="inputes">
      <label htmlFor="" className='mb-2 block text-xl font-medium '>  Full Name</label>
        <input type="text" className=' w-[100%] mb-4 px-2  py-1.5  border-2 border-blue-300 rounded-sm outline-none focus:ring-1 ring-blue-300 mb-3 ' />
        
        {/* second input */}
        <label htmlFor="" className='mb-2 block text-xl font-medium '>  email address</label>
        <input type="text" className=' w-[100%] mb-4 px-2 py-1.5  border-2 border-blue-300 rounded-sm outline-none focus:ring-1 ring-blue-300 mb-3 ' />
       
        {/* third input */}
        <label htmlFor="" className='mb-2 block text-xl font-medium '> password</label>
        <input type="text" className=' w-[100%] mb-4 px-2 py-2  border-2 border-blue-300 rounded-sm outline-none focus:ring-1 ring-blue-300 mb-3 ' />

        <button className='bg-green-600 py-2 text-white font-bold capitalize rounded-md w-[100%] mt-2 cursor-pointer hover:bg-green-800' > sign up</button>

      </div>

      {/* sign in */}
      <div className="signIn mt-6  flex space-x-1  justify-center">
            <span>already have an account ?</span>
            <span className='text-green-800 font-medium  cursor-pointer'>signIn</span>
        </div>


        </div>

        

     </div>
    </>
  )
}

export default Login