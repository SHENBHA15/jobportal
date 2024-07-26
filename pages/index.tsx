// pages/index.tsx
import React from 'react';
import Card from '../components/Cards/cards';
import Carousel from '@/components/Carosal/carousal';
import Header from '@/components/Header/header';
import Footer from '@/components/Footer/footer';

const Home: React.FC = () => {
  const cardData = [
    {
      role: 'Walkin Interview Hexaware Technologies For Database Admin',
      logoURL: '/images/hexaware.jpg',
      companyName: 'Hexaware Technologies',
      rating: 3.6,
      reviews: 5023,
      experience: '4 - 9 Yrs',
      salary: 'Not disclosed',
      location: 'Hyderabad',
      description: 'MS SQL DBA ( 5+ years of experience) - Chennai / Pune/ MumbaiOracle DBA...',
      tags: ['Database Administration', 'Snowflake', 'Oracle'],
      daysAgo: 1,
    },

    {
      role: 'Opening For Desktop Support',
      logoURL: '/images/hcl.png',
      companyName: 'HCL Tech',
      rating: 3.6,
      reviews: 30491,
      experience: '0 Yrs',
      salary: 'Not disclosed',
      location: 'Bangalore',
      description: 'Good to have CCNA and MCSE certification . 7+ years of IT support experience...',
      tags: ['OS Installation', 'Configuration', 'Firewall', 'Desktop Support'],
      daysAgo: 10,
    }
    // Add more card objects here if needed
  ];

  return (
    <>
      <div>
      <Header/>
      </div>
      <div>
        <Carousel />
      </div>

      <div className="justify-between h-screen bg-gray-100">

        {cardData.map((card, index) => (
          <Card
            key={index}
            role={card.role}
            logoURL={card.logoURL}
            companyName={card.companyName}
            rating={card.rating}
            reviews={card.reviews}
            experience={card.experience}
            salary={card.salary}
            location={card.location}
            description={card.description}
            tags={card.tags}
            daysAgo={card.daysAgo}
          />
        ))}
      </div>
      <div>
<Footer/>
      </div>

    </>
  );
};

export default Home;
