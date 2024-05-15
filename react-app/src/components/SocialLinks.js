import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"

export default function SocialLinks() {
  return (
    <div className='flex flex-col top-[35%] left-0 fixed'>
      <ul>
        <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] rounded-md bg-gray-500 hover:rounded-none duration-300 border hover:border-cyan-100'>
            <a href="https://www.linkedin.com/in/ahmad-abu-bakr-481270254/" className=' flex justify-between w-full text-white items-center'>
            <> Linkedin <FaLinkedin size={30}/></>
            </a>
        </li>
        {/* <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-500'>
            <a href="https://www.linkedin.com/in/ahmad-abu-bakr-481270254/" className=' flex justify-between w-full text-white items-center'>
            <> Github <FaGithub size={40} className='pt-2 pl-3'/></>
            </a>
        </li> */}
      </ul>
    </div>
  )
}
