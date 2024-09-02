import React from 'react'

const SignupOtpVerificationForm = () => {
  return (
    <div className="w-full flex-1 mt-8">
      <div className="mx-auto max-w-2xl">

        <form >
            <div className="flex mt-4 w-full">
              <div className='w-full flex flex-col'>
                <input
                    name='username'
                    // value={formData.username}
                    // onChange={handleChange}
                    className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-50 shadow-sm border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-black focus:bg-white`}
                    type="text"
                    placeholder="Enter your recieved otp"
                />
            </div>

            </div>

          <button
            type='submit'
            className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-1 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
            <span className="ml-3">
              Varify
            </span>
          </button>

        </form>


      </div>
    </div>

  )
}

export default SignupOtpVerificationForm