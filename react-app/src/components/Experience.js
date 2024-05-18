import React from 'react'
import css from "../assets/css.png"
import react from "../assets/react.png"
import javascript from "../assets/javascript.png"
import html from "../assets/html.png"
import node from "../assets/node.png"
import tailwind from "../assets/tailwind.png"
import graphql from "../assets/graphql.png"
import github from "../assets/github.png"
import nextjs from "../assets/nextjs.png"

export default function Experience() {
    const links = [
        {
          id: 1,
          Tech: "HTML",
          src: html,
          style: "shadow-orange-500"
        },
        {
            id: 2,
            Tech: "CSS",
            src: css,
            style: "shadow-blue-500"
        },
        {
            id: 3,
            Tech: "REACT",
            src: react,
            style: "shadow-blue-600"
        },
        {
            id: 4,
            Tech: "JAVASCRIPT",
            src: javascript,
            style: "shadow-yellow-500"
        },
        {
            id: 5,
            Tech: "TAILWIND",
            src: tailwind,
            style: "shadow-green-500"
        },
        {
            id: 6,
            Tech: "NODE",
            src: node,
            style: "shadow-green-500"
        },
        {
            id: 7,
            Tech: "GITHUB",
            src: github,
            style: "shadow-gray-500",
        },
        {
            id: 8,
            Tech: "GRAPHQL",
            src: graphql,
            style: "shadow-pink-500"
        },
        {
            id: 9,
            Tech: "NEXTJS",
            src: nextjs,
            style: "shadow-gray-500"
        },
    ]

    return (
        <div className='bg-gradient-to-b from-gray-800 to-black w-full h-screen' name="experience">
            <div className="max-w-screen-lg w-full h-full mx-auto p-4 flex flex-col justify-center text-white">
                <div>
                    <p className="text-4xl font-bold border-b border-gray-500 p-2 inline sm:pt-3">Experience</p>
                    <p className='py-6'>These are the Technologies I've worked with</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center px-8 py-12 sm:px-0">
                    {links.map(({ id, src, Tech, style }) => (
                        <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`} key={id}>
                            <img src={src} alt={Tech} className='w-20 mx-auto'/>
                            <p className='mt-4'>{Tech}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

