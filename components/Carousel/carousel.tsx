import React, { useState } from 'react';

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    'Architect Jobs',
    'Back End Developer Jobs',
    'Game Developer / Programmer Jobs',
    'DevOps Manager Jobs',
    'DevOps Engineer Jobs',
    'QA Engineer / Software Tester Jobs',
    'Data Engineer Jobs',
    'Frontend Developer Jobs',
    'Full Stack Developer Jobs',
    'Product Manager Jobs',
    'IT Support Engineer',
    'Database Manager',
    'UI UX Designer',
    'App Developer',
    'Flutter Flow Developer',
    'Maintenance Engineer',
    'Resource & Development',
    'Shenbha'
  ];

  const itemsPerView = 8;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const getVisibleItems = () => {
    const end = currentIndex + itemsPerView;
    if (end > items.length) {
      return [...items.slice(currentIndex, items.length), ...items.slice(0, end - items.length)];
    } else {
      return items.slice(currentIndex, end);
    }
  };

  return (
    <div className="relative flex items-center justify-center w-full rounded-xl overflow-hidden bg-red-100 py-4 p-5 gap-5">
      <button
        onClick={prevSlide}
        className="absolute left-0 p-2 text-gray-700 bg-white rounded-full shadow-md"
      >
        &lt;
      </button>
      <div className="flex items-center justify-center gap-5 overflow-hidden">
        <div className="flex gap-5 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${(currentIndex % items.length) * (100 / itemsPerView)}%)` }}>
          {getVisibleItems().map((item, index) => (
            <div
              key={index}
              className="flex items-center w-1/8 px-2 py-2 bg-white rounded-lg shadow-md text-sm justify-center text-center"
              style={{ width: `calc(100% / ${itemsPerView} - 0.5rem)` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={nextSlide}
        className="absolute right-0 p-2 text-gray-700 bg-white rounded-full shadow-md"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
