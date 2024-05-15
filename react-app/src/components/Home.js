import React from 'react'
import Image from "../assets/Ahmad.png"
import {MdOutlineKeyboardArrowRight} from "react-icons/md"

export default function Home() {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
      <div className=" max-w-screen-lg mx-auto flex justify-center items-center flex-col h-full px-4 md:flex-row">
        <div className="">
            <h1 className=' text-slate-50'>Hi, I'm Frontend Web developer</h1>
            <p>I have 1 year of experience in frontend web development.
              
            </p>
            <div className="">
                <button>portfolio
                    <span><MdOutlineKeyboardArrowRight/></span>
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}
