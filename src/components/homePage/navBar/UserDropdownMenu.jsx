import React from 'react';
import { ImProfile } from "react-icons/im";
import { PiStudentBold } from "react-icons/pi";
import { IoSettingsSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { Link } from 'react-router-dom';
import { MdSpaceDashboard } from "react-icons/md";
import { useDispatch } from 'react-redux';
import {logoutUser} from '../../../services/redux/slices/AuthSlice'


const UserDropdownMenu = ({dropdownRef}) => {
    const accessToken = localStorage.getItem('accessToken') || null;
    const userType = localStorage.getItem('userType') || null;
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logoutUser());
    };

  return (
    <div 
    ref={dropdownRef}
    style={{ top: '100%', right: '0', zIndex: 20 }} 
    className="absolute mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg"
>
    <div className="rounded-lg bg-base-300 p-3 shadow-xl divide-y divide-neutral">
        <div aria-label="navigation" className="py-2">
            <nav className="grid gap-1">
            {
                accessToken && (
                    <>
                        {/* Profile Section */}
                        {userType === 'Instructor' ? (
                            <Link 
                                to="/instructor-panel" 
                                className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md"
                            >
                                <ImProfile />
                                <span>Profile</span>
                            </Link>
                        ) : userType === 'Student' ? (
                            <Link 
                                to="/student-panel" 
                                className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md"
                            >
                                <ImProfile />
                                <span>Profile</span>
                            </Link>
                        ) : null}

                        {/* Panel Section */}
                        {userType === 'Instructor' ? (
                            <Link 
                                to="/instructor-panel" 
                                className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md"
                            >
                                <MdSpaceDashboard />
                                <span>Instructor-Panel</span>
                            </Link>
                        ) : userType === 'Student' ? (
                            <Link 
                                to="/student-panel" 
                                className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md"
                            >
                                <MdSpaceDashboard />
                                <span>Student-Panel</span>
                            </Link>
                        ) : null}

                        {/* Settings Section */}
                        {userType === 'Instructor' ? (
                            <Link 
                                to="/instructor-panel" 
                                className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md"
                            >
                                <IoSettingsSharp />
                                <span>Settings</span>
                            </Link>
                        ) : userType === 'Student' ? (
                            <Link 
                                to="/student-panel" 
                                className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md"
                            >
                                <IoSettingsSharp />
                                <span>Settings</span>
                            </Link>
                        ) : null}
                        <p 
                            onClick={handleLogout}
                            className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md"
                        >
                            <MdLogout className='text-red-500' />

                            <span>Log Out</span>
                        </p>
                    </>
                )
            }
            </nav>
        </div>
    </div>
</div>
  )
}

export default UserDropdownMenu