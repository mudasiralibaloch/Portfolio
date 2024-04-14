"use client"
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import Typewriter from 'typewriter-effect';


const Hero = () => {
  return (
    <div>
        <section className="text-gray-600 body-font bg-fixed bg-gray-100">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">

        I am
        <br className="hidden lg:inline-block" />

        <Typewriter
  options={{
    strings: ['Web Developer',],
    autoStart: true,
    loop: true,
  }}
/>
    
      </h1>
      <div className='w-[257px] h-[2px] bg-blue-600'></div>
      <p className="mb-8 leading-relaxed">
      Hello! I am a passionate second-year student pursuing a degree in Computer Science. My journey into the world of technology began with a curiosity about how things work and a desire to create solutions that make a difference. With each project and class, I am continually expanding my knowledge and honing my skills to become a proficient and innovative computer scientist.</p>
      <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          Contact
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
      width={300}
      height={300}
        className="object-cover object-center rounded mx-auto "
        alt="hero"
        src={require('../../../public/assests/picture/WhatsApp Image 2024-04-12 at 20.53.01_72699ed2.jpg')}
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero