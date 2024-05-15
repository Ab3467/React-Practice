import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"

export default function SocialLinks() {
    const links = [
        {
          id:1,
          child:(
            <>
            Linkedin <FaLinkedin size={30}/>
            </>
          ),
          href: "https://www.linkedin.com/in/ahmad-abu-bakr-481270254/"
        },
        {
            id:2,
            child:(
              <>
              Github <FaGithub size={30}/>
              </>
            ),
            href: "https://github.com/Ab3467",
            style:''
          },
          {
            id: 3,
            child: (
               <>
                 Mail <HiOutlineMail size={30}/>
               </>
            ),
            href: "mailto:ahmad.abubakar@vyro.ai"
          },
          {
            id:4,
            child:(
             <>
              Resume <BsFillPersonLinesFill size={30}/>
             </>
            ),
            href: "/cv.pdf",
            style: 'rounded-br-md',
            download: true
          },
        
    ]
  return (
    <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
       {links.map(({id,child,download,href,style})=>(
    <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] rounded-md bg-gray-500 hover:rounded-none duration-500'+ " " +style}>
        <a 
        href={href} 
        className=' flex justify-between w-full text-white items-center'
        download={download}
        target="_blank"
        rel="noopener noreferrer">
        {child}
        </a>
    </li>
       ))}
      </ul>
    </div>
  )
}
