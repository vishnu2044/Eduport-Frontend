import React from 'react'

const SignUpForm = () => {
  return (
    <div class="w-full flex-1 mt-8">
        <div class="mx-auto max-w-2xl">
            <div className='flex'>
                <div className='ml-2'>
                    <input
                            class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="text" placeholder="Username" />
                    <input
                        class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type="password" placeholder="Password" />

                </div>
                <div className='ml-2'>
                    <input
                            class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="text" placeholder="Username" />
                    <input
                        class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type="password" placeholder="Password" />

                </div>
            </div>
            
            <button
                class="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-1 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                <span class="ml-3">
                    Sign In
                </span>
            </button>
            <p class="mt-6 text-xs text-gray-600 text-center">
                I agree to abide by templatana's
                <span> </span>
                <a href="#" class="border-b border-gray-500 border-dotted">
                    Terms of Service
                </a>
                <span> </span>
                and its <span> </span>
                <a href="#" class="border-b border-gray-500 border-dotted">
                    Privacy Policy
                </a>
            </p>
        </div>
    </div>
  )
}

export default SignUpForm