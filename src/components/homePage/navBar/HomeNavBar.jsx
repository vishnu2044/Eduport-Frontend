import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HomeNavMenu from './HomeNavMenu';
import UserDropdownMenu from './UserDropdownMenu';
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import AuthPageDropdown from './AuthPageDropdown';


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

                    <>


                        <div onClick={() => setDropdownOpen(prev => !prev)}  className="relative cursor-pointer border rounded-md p-2 border-gray-200 shadow-sm inline-flex items-center ml-5 space-x-6 lg:justify-end">
                            {/* Trigger for Dropdown */}

                            {
                                userType === 'Instructor' ? (
                                    <span className="flex gap-2 ">
                                        <img className="w-6 h-6 rounded-lg" src="https://lh3.googleusercontent.com/a/AGNmyxbSlMgTRzE3_SMIxpDAhpNad-_CN5_tmph1NQ1KhA=s96-c" alt="Profile" />
                                        <span>username (Student)</span>
                                    </span>

                                ) : userType === 'Student' ? (
                                    <span className="flex gap-2 ">
                                        <img className="w-6 h-6 rounded-lg" src="https://lh3.googleusercontent.com/a/AGNmyxbSlMgTRzE3_SMIxpDAhpNad-_CN5_tmph1NQ1KhA=s96-c" alt="Profile" />
                                        <span>username (Student)</span>
                                    </span>

                                ) : null
                                // Need to add admin section also
                            }

                            {
                                !isDropdownOpen ? (
                                    <IoIosArrowDropright className='text-2xl text-black' />
                                ): (
                                    <IoIosArrowDropdown className='text-2xl text-black' />

                                )
                            }

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <UserDropdownMenu dropdownRef={dropdownRef} />
                            )}
                        </div>
                    
                    </>
                    
                 
                ) : (
                    <>
                        <div onClick={() => setDropdownOpen(prev => !prev)}  className="relative cursor-pointer border rounded-md p-2 border-gray-200 shadow-sm inline-flex items-center ml-5 space-x-6 lg:justify-end">
                            {/* Trigger for Dropdown */}
                                    <FaUser />


                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <AuthPageDropdown dropdownRef={dropdownRef} />
                            )}
                        </div>
                        {/* <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
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
                        </div> */}
                    </>
                )}
            </div>
        </section>
    );
};

export default HomeNavBar;
