import React from 'react'

const HomeNavMenu = () => {
  return (
    <div className="relative flex flex-col md:flex-row">
    <a href="#_" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
        <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">EduPort<span className="text-indigo-600">.</span></span>
    </a>
    <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
        <a 
            href="/" 
            className="mr-5 font-medium leading-6 text-gray-600 hover:bg-blue-100 rounded-lg px-2 py-1 transition-colors duration-300">
                Home
        </a>
        <a 
            href="#_" 
            className="mr-5 font-medium leading-6 text-gray-600 hover:bg-blue-100 rounded-lg px-2 py-1 transition-colors duration-300">
                Blogs
        </a>
        <a 
            href="#_" 
            className="mr-5 font-medium leading-6 text-gray-600 hover:bg-blue-100 rounded-lg px-2 py-1 transition-colors duration-300">
                Courses
        </a>
        <a 
            href="#_" 
            className="mr-5 font-medium leading-6 text-gray-600 hover:bg-blue-100 rounded-lg px-2 py-1 transition-colors duration-300">
                About Us
        </a>
        <a 
            href="#_" 
            className="mr-5 font-medium leading-6 text-gray-600 hover:bg-blue-100 rounded-lg px-2 py-1 transition-colors duration-300">
                Contact Us
        </a>

    </nav>
</div>
  )
}

export default HomeNavMenu