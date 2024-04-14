import Link from 'next/link';
import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='bg-blue-50'>
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <span className="ml-3 text-xl text-blue-600">Mudasir Ali</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Mudasir Ali 
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      
      
            <a className="ml-3 text-gray-500">
       
      </a>
      <Link href={'https://github.com/mudasiralibaloch'} >
       <FaGithubSquare className='text-2xl hover:text[#000000]'/>
     </Link>

      <Link href={'https://www.instagram.com/mudasirbaloch01?igsh=czdlZm5tc2VxbTlz'} className="ml-3 text-gray-500 text-2xl">
      <BsInstagram className='text-2xl hover:text-[#F56040]'/>
      </Link>

      <Link href={'https://www.linkedin.com/in/mudasir-ali-08285b292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} className="ml-3 text-gray-500">
      <BsLinkedin className='text-2xl hover:text-[#0a66c2]'/>
      </Link>
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer