import Link from "next/link";
import React from "react";
import { TbCloudDownload } from "react-icons/tb";




const Navbar =()=>{
    return(
        <div className="bg-white z-50 sticky top-0">
        <header className="text-gray-600 body-font ">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <span className="ml-3 text-xl text-blue-600">Mudasir Ali</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flexWrap itemsCenter text-base justify-center">
      <Link href="/" className="mr-5 hover:text-blue-600">Home</Link >
      <Link href="#about" className="mr-5 hover:text-blue-600">About</Link >
      <Link href="#Skills"className="mr-5 hover:text-blue-600">Skills</Link >
      <Link href="#project"className="mr-5 hover:text-blue-600">Projects</Link >
      <Link href="#Contact"className="mr-5 hover:text-blue-600">Contact</Link >
    </nav>
    
    {/* here is the cv make the cv and replace it here */}
    <a href="/assests/CV/Mudasir Ali CV.docx"> 
    <button className="inlineFlex itemsCenter bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-blue-200 rounded text-base mt-4 md:mt-0">
       
        Download CV
        <TbCloudDownload  className="text-xl"/>
      
    </button>
    </a>
  </div>
</header>
        </div>
    )
}

export default Navbar;