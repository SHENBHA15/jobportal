import React from 'react';
import Card from '../components/Cards/cards';
import Carousel from '@/components/Carousel/carousel';
import Footer from '@/components/Footer/footer';
import Navbar from '@/components/Header/navbar';
import Login from '@/components/screen/auth/login';
import SignUp from '@/components/screen/auth/signup';
import Head from 'next/head';

const SignUpPage: React.FC = () => {


    return (
        <>

            <Head>
                <title>Job Portal Register</title>
                <meta name="description" content="This is a description of my Next.js app." />
            </Head>
            <div>
                <Navbar />
            </div>

            <div className='flex items-center'>
                <div className='mr-20 ml-44'>
                    <img src='\images\jobsearchvector1.png' />
                </div>

                <div className='w-1/3 right-5 p-5'>
                    <SignUp />
                </div>
            </div>

        </>
    );
};

export default SignUpPage;
