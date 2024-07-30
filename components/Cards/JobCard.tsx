// components/JobCard.tsx
import React, { useEffect, useState } from 'react';
import { db } from '@/config/firebase';
import { collection, getDocs } from "firebase/firestore";

interface Job {
  id: string;
  role: string;
  companyName: string;
  experience: number;
  salary: string;
  location: string;
  skills: string[];
}

const JobCard: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const jobCollection = collection(db, 'Job Posts');
      const jobSnapshot = await getDocs(jobCollection);
      const jobList = jobSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Job[];
      setJobs(jobList);
    };

    fetchJobs();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 w-full">
      {jobs.map(job => (
        <div key={job.id} className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-black text-xl font-bold mb-2">{job.role}</h2>
          <p className="text-gray-700 mb-1">Company: {job.companyName}</p>
          <p className="text-gray-700 mb-1">Experience: {job.experience} years</p>
          <p className="text-gray-700 mb-1">Salary: {job.salary}</p>
          <p className="text-gray-700 mb-1">Location: {job.location}</p>
          <p className="text-gray-700 mb-1">Skills: {job.skills.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default JobCard;
