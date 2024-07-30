import React from "react";
import JobEntry from "@/components/admincomp/jobpost";
import Head from "next/head";
import Navbar from "@/components/Header/navbar";
const JobPost: React.FC = () => {
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
                    <JobEntry />
                </div>

            </div>
        </>
    )
}

export default JobPost;