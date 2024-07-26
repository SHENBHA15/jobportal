import React from 'react';
import { FaFacebook, FaInstagram,FaLinkedin,FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-white p-4 flex justify-around fixed bottom-0 w-full">
        <div>
        <h2 className='text-4xl text-blue-600 font-bold'>naukri</h2>
        <p className='text-black py-2.5 mt-6'>Contact with Us</p>
        <div className='flex space-x-4'>
        <p><a  href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-800 hover:text-black ">
            <FaFacebook /> </a></p>
            <p>  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-800 hover:text-black ">
            <FaInstagram />
          </a></p>
          <p>  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-800 hover:text-black ">
            <FaTwitter />
          </a></p>
          <p>  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-600 hover:text-blue-800">
            <FaLinkedin />
          </a></p>
          </div>

        </div>

        <div className='text-black font-semibold text-sm '>
            
           <p> <a className='hover:text-blue-600 mb-3' href="#">About</a></p><br></br>
           <p>  <a className='hover:text-blue-600' href="#">Careers</a></p><br></br>
           <p> <a className='hover:text-blue-600' href="#">Employer Home</a></p><br></br>
           <p> <a className='hover:text-blue-600' href="#">Sitemap</a></p><br></br>
           <p> <a className='hover:text-blue-600' href="#">Credit</a></p>
            

        </div>
        <div className='text-black font-semibold text-sm '>
        <p>  <a href="#">Help Center</a></p><br></br>
        <p>  <a href="#">Summons/Notices</a></p><br></br>
        <p>  <a href="#">Grievances</a></p><br></br>
        <p>   <a href="#">Report issue</a></p><br></br>
            
        </div>
        <div className='text-black font-semibold text-sm '>
        <p>  <a href="#">Privacy policy</a></p><br></br>
        <p>  <a href="#">Terms & conditions</a></p><br></br>
        <p>  <a href="#">Fraud alert</a></p><br></br>
        <p>   <a href="#">Trust & safety</a></p><br></br>
            
        </div>
        <div className='text-black border-solid border-2 border-slate-300 p-3 h-32 rounded-lg'>
            <h3 className='font-bold'>Apply on the go</h3>
            <p className='text-sm'>Get real-time job updates on our App</p>
        </div>
      
    </footer>
  );
};
export default Footer