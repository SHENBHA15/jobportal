// components/Card.tsx
import React from 'react';
import { FaMapMarkerAlt, FaRupeeSign, FaBriefcase } from 'react-icons/fa';

interface CardProps {
  role: string;
  companyName: string;
  rating: number;
  reviews: number;
  experience: string;
  salary: string;
  location: string;
  description: string;
  tags: string[];
  daysAgo: number;
}

const Card: React.FC<CardProps> = ({
  role,
  companyName,
  rating,
  reviews,
  experience,
  salary,
  location,
  description,
  tags,
  daysAgo
}) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white max-w-2xl m-3">
      <h1 className='text-3xl font-bold'>{role}</h1>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">{companyName}</h2>
        <img src='' />

        {/* <div className="flex items-center">
          <span className="text-yellow-500">⭐ {rating}</span>
          <span className="ml-2 text-gray-500">({reviews} Reviews)</span>
        </div> */}
      </div>
      <div className="mt-2 text-gray-500 flex items-center">
        <div className='flex items-center'>
          <FaBriefcase className="mr-1" /> {experience} |
        </div>
        <div className='flex items-center'>
          <FaRupeeSign className="mr-1" /> <span>{salary}</span> |
        </div>
        <div className='flex items-center'>
          <FaMapMarkerAlt className="mr-1" /> <span>{location}</span> |
        </div>
      </div>
      <p className="mt-2">{description}</p>
      <div className="mt-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-gray-200 text-gray-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-2 text-gray-500 text-sm">
        {daysAgo} Days Ago
      </div>
    </div>
  );
};

export default Card;
