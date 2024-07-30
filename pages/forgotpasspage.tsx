// pages/index.tsx
import React from 'react';
import Card from '../components/Cards/cards';
import Carousel from '@/components/Carousel/carousel';
import Footer from '@/components/Footer/footer';
import Navbar from '@/components/Header/navbar';
import Login from '@/components/screen/auth/login';
import SignUp from '@/components/screen/auth/signup';
import ForgotPassword from '@/components/screen/auth/forgotpassword';
import Head from 'next/head';


const Home: React.FC = () => {

  return (
    <>
      <Head>
        <title>Reset Password</title>
        <meta name="description" content="This is a description of my Next.js app." />
      </Head>
      <div>
        <Navbar />
      </div>

      <div className='flex items-center max-h-screen'>

        <div className='mr-20 ml-44'>
          <img src='\images\jobsearchvector1.png' />
        </div>

        <div className='w-1/3 p-5'>
          <ForgotPassword />
        </div>

      </div>

    </>
  );
};

export default Home;
