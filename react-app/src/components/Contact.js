import React from 'react'

export default function Contact() {
  return (
    <div>
      <div className="">
        <div className="">
            <p>Contact</p>
            <p>Here is the way to get in Touch with me</p>
        </div>

        <div className="">
            <form action="">
                <input type="text" name="name" placeholder="Enter your Name" 
                className=' p-2 bg-transparent border-2 roun text-white focus:outline-none'/>
                <input type="email" name="name" placeholder="Enter your Email" 
                className=' p-2 bg-transparent border-2 roun text-white focus:outline-none'/>
                <textarea name="message" rows="10"
                className=' p-2 bg-transparent border-2 roun text-white focus:outline-none'></textarea>
                <button className=' text-white bg-gradient-to-b from-cyan-500 to-blue-500'>Let's Talk</button>
            </form>
        </div>
      </div>
    </div>
  )
}
