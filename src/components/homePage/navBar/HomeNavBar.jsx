import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HomeNavMenu from './HomeNavMenu';
import { ImProfile } from "react-icons/im";
import { PiStudentBold } from "react-icons/pi";
import { IoSettingsSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";


const HomeNavBar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const accessToken = localStorage.getItem('accessToken') || null;
    const userType = localStorage.getItem('userType') || null;

    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <section className="w-full px-8 text-gray-700 bg-white">
            <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
                <HomeNavMenu />

                {accessToken ? (
                    userType === 'Instructor' ? (
                        <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
                            <Link to='/instructor-panel'>
                                <a href="#" className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
                                    To Instructor
                                </a>
                            </Link>
                        </div>
                    ) : userType === 'Student' ? (
                        <div className="relative inline-flex items-center ml-5 space-x-6 lg:justify-end">
                            {/* Trigger for Dropdown */}
                            <span className="flex gap-2">
                                <img className="w-6 h-6 rounded-lg" src="https://lh3.googleusercontent.com/a/AGNmyxbSlMgTRzE3_SMIxpDAhpNad-_CN5_tmph1NQ1KhA=s96-c" alt="Profile" />
                                <span>username (Student)</span>
                            </span>
                            <svg 
                                onClick={() => setDropdownOpen(prev => !prev)} 
                                className="w-5 h-5 text-gray-500 transition transform duration-200 cursor-pointer" 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="16" 
                                height="16" 
                                fill="currentColor" 
                                viewBox="0 0 16 16"
                            >
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                            </svg>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div 
                                    ref={dropdownRef}
                                    style={{ top: '100%', right: '0', zIndex: 20 }} 
                                    className="absolute mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg"
                                >
                                    <div className="rounded-lg bg-base-300 p-3 shadow-xl divide-y divide-neutral">
                                        <div aria-label="navigation" className="py-2">
                                            <nav className="grid gap-1">
                                                <a 
                                                    href="/" 
                                                    className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md"
                                                >
                                                    <ImProfile />
                                                    <span>Profile</span>
                                                </a>
                                                
                                                <a 
                                                    href="/" 
                                                    className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md"
                                                >
                                                    <PiStudentBold />
                                                    <span>Student-Panel</span>
                                                </a>

                                                <a 
                                                    href="/" 
                                                    className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md"
                                                >
                                                    <IoSettingsSharp />

                                                    <span>Settings</span>
                                                </a>
                                                <a 
                                                    href="/" 
                                                    className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md"
                                                >
                                                    <MdLogout className='text-red-500' />

                                                    <span>Log Out</span>
                                                </a>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : null
                ) : (
                    <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
                        <Link to='/login'>
                            <a href="#" className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
                                Login
                            </a>
                        </Link>
                        <Link to='/signup'>
                            <a href="#" className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
                                Sign Up
                            </a>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default HomeNavBar;
