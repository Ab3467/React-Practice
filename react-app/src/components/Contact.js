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
            </form>
        </div>
      </div>
    </div>
  )
}
