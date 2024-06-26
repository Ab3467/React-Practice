import React from 'react';
import Image from "../assets/Ahmad.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

export default function Home() {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-700 text-white'>
            <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
                <div className="flex flex-col justify-center h-full md:w-1/2">
                    <h1 className='text-4xl sm:text-7xl font-bold text-white'>Hi, I'm a Frontend Web Developer</h1>
                    <p className='py-4 max-w-md text-gray-500'>
                        I have 1 year of experience in frontend web development.
                        Currently working on ReactJS and Tailwind. Also doing an
                        Internship at Vyro.
                    </p>
                    <div>
                        <Link to='portfolio' smooth duration={500}
                            className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 scroll-smooth duration-300'>
                                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img src={Image} alt="my_img" className='rounded-2xl w-80 md:w-2/3 border-4 border-transparent hover:border-cyan-500 transition-all duration-500 ease-in-out' />
                </div>
            </div>
        </div>
    );
}

