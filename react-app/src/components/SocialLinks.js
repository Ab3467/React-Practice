import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"

export default function SocialLinks() {
  return (
    <div className='flex flex-col top-[35] left-0 fixed'>
      <ul>
        <li className='flex justify-between items-center w-40 h-1/4 px-4 bg-black'>
            <a href="" className=''>
            <>
             Linkedin <FaLinkedin/>
            </>
            </a>
        </li>
      </ul>
    </div>
  )
}
