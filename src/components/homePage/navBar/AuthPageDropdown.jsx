import React from 'react';
import { MdLogout } from "react-icons/md";
import { SiGnuprivacyguard } from "react-icons/si";
import { IoIosLogIn } from "react-icons/io";
import { Link } from 'react-router-dom';



const AuthPageDropdown = ({dropdownRef}) => {
  return (
    <div 
    ref={dropdownRef}
    style={{ top: '100%', right: '0', zIndex: 20 }} 
    className="absolute mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg"
>
    <div className="rounded-lg bg-base-300 p-3 shadow-xl divide-y divide-neutral">
        <div aria-label="navigation" className="py-2">
            <nav className="grid gap-1">
                <Link to='/login'
                    className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-blue-100 rounded-md"
                    >
                        <IoIosLogIn className='text-blue-500' />

                    <span>Login</span>
                </Link>
                <Link to='/signup'
                    className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-blue-100 rounded-md"
                    >
                        <SiGnuprivacyguard className='text-blue-500' />

                    <span>Sign Up</span>
                </Link>

            </nav>
        </div>
    </div>
</div>
  )
}

export default AuthPageDropdown