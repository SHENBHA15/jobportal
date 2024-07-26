import React from 'react';
//import Naukrilogo from './assets/Naukrilogo(1).jpg'
import { FaSearch } from 'react-icons/fa';
//import { Menu } from '@headlessui/react';

const Navbar = () => {
  return(
    <header className='bg-white text-white p-4 flex justify-around fixed top-0 w-full'>
      {
         //<div>
        // <h2 className='text-4xl text-blue-600 font-bold'>naukri</h2>
        
        // </div>
  <div className="flex items-center pl-10">
          <img src={ "https://www.logoshape.com/wp-content/uploads/2024/03/Naukri-vector-logo.jpg "} alt="Naukri Logo" className="h-10 mr-4" />  
          
        </div> }

      <div className='text-black font-semibold  flex text-2xl mt-2'>
        
          <a className="ml-9" href='#'>Jobs</a><br></br>
          <a className="ml-9" href='#'>Companies</a>
          <a className="ml-9" href='#'>Services</a>
        
      </div>
      <button className='rounded-3xl bg-white border-grey border-2  ml-2 mr-2 w-1/2 text-black text-align-ml-1'>
     
      <div>
      
        <span className='flex justify-start  ml-4'>it</span>
        <span className='flex justify-end -mt-7 me-7'>
            <FaSearch/>
          </span>
          </div>
      </button>
      <button className='rounded-full w-24 h-12 mr-1 bg-white text-blue-600 border-2 border-blue-600 mt-1'>login</button>
      <button className='rounded-full bg-red-500 text-white w-24 h-12 mt-1 '>Register</button>
      <h1 className='text-black mt-2 text-2xl'>|</h1>
      <h1 className='text-black text-sm mt-4 '>For Employers</h1>

    </header>

  );
}
export default Navbar
