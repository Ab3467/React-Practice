import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"

export default function SocialLinks() {
  return (
    <div className='flex flex-col top-[35%] left-0 fixed'>
      <ul>
        <li className='flex justify-between items-center w-40 h-1/4 px-4 bg-black'>
            <a href="https://www.linkedin.com/in/ahmad-abu-bakr-481270254/" className=' flex justify-between w-full text-white items-center'>
            <> Linkedin <FaLinkedin size={30}/></>
            </a>
        </li>
        <li className='flex justify-between items-center w-40 h-1/4 px-4 bg-black'>
            <a href="https://www.linkedin.com/in/ahmad-abu-bakr-481270254/" className=' flex justify-between w-full text-white items-center'>
            <> Github <FaGithub size={30} className='pt-3'/></>
            </a>
        </li>
      </ul>
    </div>
  )
}
