// components/Navbar.tsx
import React from 'react';
import { FiSearch } from "react-icons/fi";
import Router from 'next/router';

const Navbar: React.FC = () => {

    const handlePostClick = () =>{
        Router.push('/admin/jobpostpage')
    }

    const handleLoginClick = () => {
        Router.push('/');
    };

    const handleSignUpClick = () => {
        Router.push('/signuppage');
    };

    return (
        <nav className="flex flex-wrap items-center justify-between px-8 bg-white border-b p-5 font-montserrat drop-shadow-xl">
            <div className="flex items-center flex-shrink-0">
                <div className="text-blue-600 text-3xl">
                    <img src='\images\naukrilogo.png' alt="Naukri Logo" className="h-10 w-36" />
                </div>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-8 md:mr-10">
                <a href="#" className="text-gray-700 hover:text-blue-600 font-semibold mr-2">Jobs</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-semibold mr-2">Companies</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-semibold mr-2">Services</a>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <div className='flex items-center border-1 border-black rounded-full relative'>
                    <input
                        type="text"
                        placeholder="Search for Jobs..."
                        className="rounded-full px-6 py-3 border focus:outline-none shadow-sm w-full md:w-auto"
                    />
                    <button className="right-1.5 rounded-full w-10 h-10 absolute top-1/2 transform -translate-y-1/2 bg-blue-500 text-white">
                        <FiSearch className='w-5 h-5 ml-2.5' />
                    </button>
                </div>
                <button onClick={handleLoginClick} className="border border-blue-600 text-blue-600 px-4 py-1 rounded-full hover:bg-blue-50">Login</button>
                <button onClick={handleSignUpClick} className="bg-red-500 text-white px-4 py-1 rounded-full hover:bg-red-700">Register</button>
                {/* <div className='ml-1 hidden md:block'>|</div> */}
            </div>
            <div className="flex items-center space-x-2 ml-1 md:flex">
                <a href="#"
                    onClick={handlePostClick}
                    className="text-gray-700 hover:text-blue-600">
                    For Employers</a>
                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </div>
            <div className="md:hidden flex items-center">
                <button className="text-gray-700 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
