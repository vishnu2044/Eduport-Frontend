import React from 'react'

const WhyChooseUs = () => {
  return (
    <>
    <div className="bg-white">

<section id="features"
    className="relative block px-6 py-10 md:py-20 md:px-10 border-t border-b border-gray-300 bg-white">

    <div className="relative mx-auto max-w-5xl text-center">
        <span className="text-gray-600 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            Why Choose Us
        </span>
        <h2 className="block w-full text-gray-900 font-bold text-3xl sm:text-4xl">
            Empower Your Learning Journey with Us
        </h2>
        <p className="mx-auto my-4 w-full max-w-xl text-gray-600 font-medium leading-relaxed tracking-wide">
            Create and manage profiles, offer courses, and share knowledge. Whether you're a teacher or a student, our platform helps you achieve your goals with ease.
        </p>
    </div>

    <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">

        <div className="rounded-md bg-white  p-8 text-center shadow-md">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-blue-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M12 2a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8a6 6 0 0 1 6-6zM12 0a8 8 0 0 0-8 8v8a8 8 0 0 0 8 8 8 8 0 0 0 8-8V8a8 8 0 0 0-8-8z"></path>
                </svg>
            </div>
            <h3 className="mt-6 text-gray-800">Teacher Profiles</h3>
            <p className="my-4 mb-0 text-gray-600">Create detailed profiles, showcase your expertise, and attract students. Include your courses and blog posts to engage with your audience.</p>
        </div>

        <div className="rounded-md bg-white  p-8 text-center shadow-md">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-green-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M12 2a10 10 0 0 0-10 10v10a10 10 0 0 0 10 10 10 10 0 0 0 10-10V12a10 10 0 0 0-10-10zm0 2a8 8 0 0 1 8 8v10a8 8 0 0 1-8 8 8 8 0 0 1-8-8V12a8 8 0 0 1 8-8z"></path>
                </svg>
            </div>
            <h3 className="mt-6 text-gray-800">Course Management</h3>
            <p className="my-4 mb-0 text-gray-600">Easily create and manage both free and paid courses. Track student progress and receive earnings directly from the platform.</p>
        </div>

        <div className="rounded-md bg-white  p-8 text-center shadow-md">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-red-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm0-14a6 6 0 0 0-6 6v1.5l-1.5 1.5v1h15v-1l-1.5-1.5V12a6 6 0 0 0-6-6z"></path>
                </svg>
            </div>
            <h3 className="mt-6 text-gray-800">Blog Posts</h3>
            <p className="my-4 mb-0 text-gray-600">Share your knowledge and insights through blog posts. Engage with your audience and build your personal brand.</p>
        </div>

    </div>

    <div className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b border-gray-300">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-transparent to-blue-100"></div>
    </div>
    <div className="absolute bottom-0 right-0 z-0 h-1/3 w-full">
        <div className=""></div>
    </div>

</section>
</div>


    </>
  )
}

export default WhyChooseUs