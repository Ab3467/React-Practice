import React from 'react'
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg"
import installNode from "../assets/portfolio/installNode.jpg"
import navbar from "../assets/portfolio/navbar.jpg"
import reactParallax from "../assets/portfolio/reactParallax.jpg"
import reactSmooth from "../assets/portfolio/reactSmooth.jpg"
import reactWeather from "../assets/portfolio/reactWeather.jpg"

export default function Portfolio() {
    const portfolios = [
        {
            id: 1,
            src: arrayDestruct
        },
        {
            id: 2,
            src: installNode
        },
        {
            id: 3,
            src: navbar
        },
        {
            id: 4,
            src: reactParallax
        },
        {
            id: 5,
            src: reactSmooth
        },
        {
            id: 6,
            src: reactWeather
        },
    ]
    return (
        <div className=' bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen' name="portfolio">
            <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Plz Check out some of my work here </p>
                </div>

                <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0' >
                    {portfolios.map(({ id, src }) => (
                        <div className=' shadow-sm shadow-gray-600 rounded-lg' key={id}>
                            <img src={src} alt="port" className=' rounded-md duration-200 hover:scale-105 cursor-pointer'/>
                            <div className=' flex items-center justify-center'>
                                <button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:border-b-2 hover:border-white'>Demo</button>
                                <button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:border-b-2 hover:border-white'>Code</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
