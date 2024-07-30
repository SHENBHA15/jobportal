// pages/index.tsx
import React from 'react';
import Navbar from '@/components/Header/navbar';
import Login from '@/components/screen/auth/login';
import Head from 'next/head';

import Card from '../components/Cards/cards';
import Carousel from '@/components/Carousel/carousel';
import Footer from '@/components/Footer/footer';
import SignUp from '@/components/screen/auth/signup';

const Home: React.FC = () => {

  return (
    <>

      <Head>
        <title>Job Portal Login</title>
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
          <Login />
        </div>

      </div>

    </>
  );
};

export default Home;
