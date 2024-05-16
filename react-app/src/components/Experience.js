import React from 'react'
import css from "../assets/css.png"
import react from "../assets/react.png"
import javascript from "../assets/javascript.png"
import html from "../assets/html.png"
import node from "../assets/node.png"
import tailwind from "../assets/tailwind.png"
import graphql from "../assets/graphql.png"
import github from "../assets/github.png"

export default function Experience() {
  return (
    <div className=' bg-gradient-to-b from-gray-800 to-black w-full h-screen' name="experience">
      <div className=" max-w-screen-lg w-full h-full mx-auto p-4 flex flex-col justify-center text-white">
        <div>
            <p className="text-4xl font-bold border-b border-gray-500 p-2 inline">Experience</p>
            <p className='py-6'>These are the Technologies I've worked with</p>
        </div>
        <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center px-8 py-12 sm:px-0">
            <div className=" shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
                <img src={html} alt="html" />
                <p>HTML</p>
            </div>
        </div>
      </div>
    </div>
  )
}
