
import Image from 'next/image';
import React from 'react'

const About = () => {
  return (
    <div id='about'>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded mx-auto"
        alt="hero"
        src={require('../../../public/assests/picture/WhatsApp Image 2024-04-12 at 20.53.01_72699ed2.jpg')}
        width={300}
        height={300}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me
      </h1>
      <p className="mb-8 leading-relaxed">
        
As a computer science student, I am deeply passionate about unraveling the intricacies of technology and its applications in the modern world. From coding algorithms to designing innovative software solutions, I thrive on the challenges that come with exploring the ever-evolving realm of computer science. 
      </p>
      <div className="flex justify-center">
        <a href='/assests/CV/Mudasir Ali CV.docx'>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          View CV
        </button>
        </a>
      </div>

    </div>
  </div>
</section>

    </div>
  )
}

export default About;