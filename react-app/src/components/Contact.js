import React from 'react'

export default function Contact() {
  return (
    <div className=" w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white" name="contact">
      <div className=" flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
            <p className='text-4xl font-bold border-b-4 border-gray-500 inline'>Contact</p>
            <p className='py-6'>Here is the way to get in Touch with me</p>
        </div>

        <div className='flex justify-center items-center'>
            <form action="mailto:ahmad.abubakar@vyro.ai" className='flex flex-col w-full md:w-1/2'>
                <input type="text" name="name" placeholder="Enter your Name" 
                className=' p-2 bg-transparent border-2 roun text-white focus:outline-none'/>

                <input type="email" name="name" placeholder="Enter your Email" 
                className='my-4 p-2 bg-transparent border-2 roun text-white focus:outline-none'/>

                <textarea name="message" rows="10" placeholder='Enter you message here'
                className=' p-2 bg-transparent border-2 roun text-white focus:outline-none'></textarea>
                <button className=' text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 mx-auto my-8 flex items-center
                rounded-md hover:scale-110 duration-300'>Let's Talk</button>
            </form>
        </div>
      </div>
    </div>
  )
}
