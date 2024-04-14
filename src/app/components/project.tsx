import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Project = () => {
  return (
    <div id='project'>
      <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-55">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-3 text-gray-900">
          My Projects
        </h1>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto cursor-pointer">
    <div className="flex flex-col text-center w-full mb-27">
      
    </div>
    {/* project 3 */}
    <div className="flex flex-wrap -m-8">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/assests/picture/fb page clone.png')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              FACEBOOK PAGE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              facebook clone page
            </h1>
            <p className="leading-relaxed line-clamp-2">
              This is the facebook clone page i made this project for improve my coding skills
              and revise the HTML tags and CSS properties:
            </p>
            <Link href={''}>
            <p className="leading-relaxed">
             View Project:
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/assests/picture/food website.png')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              FOOD WEBSITE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              The online food website
            </h1>
            <p className="leading-relaxed line-clamp-2">
              This is the online food website for those who order the food online:
            </p>
            <p className="leading-relaxed">
              View Project
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/assests/picture/shoes website.png')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              SHOES WEBSITE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Order Shoes
            </h1>
            <p className="leading-relaxed line-clamp-2">
              This is the shoes website order the shoes online 
            </p>
            <Link href={''}>
            <p className="leading-relaxed">
              View Project 
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/assests/picture/EARNIN3.png')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              ONLINE EARNING WEBSITE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Earning 
            </h1>
            <p className="leading-relaxed line-clamp-2">
              This is the online earning webiste i made this website mostly for student .
            </p>
            <Link href={''}>
            <p className="leading-relaxed">
              View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/assests/picture/bootstrap websitre.png')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              BOOTSTRAP WEBSITE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Bootsrap Website
            </h1>
            <p className="leading-relaxed">
            This is the bootstrap website i made this for my practices and improve my bootstrap skills and use components
                          </p>

          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/assests/picture/earning2.png')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
             EARN ONLINE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Online Earning
            </h1>
            <p className="leading-relaxed line-clamp-2">
              This is also made for online earning for students who make money from homekwfjefhkWHFKLJWHFJHLK.
            </p>
            <Link href={''}>
            <p className="leading-relaxed">
              {/* View Project */}
            </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        
      </div>
    </div>
  </section>
  </div>
  )
}

export default Project