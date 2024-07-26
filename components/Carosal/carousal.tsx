import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const jobTitles = [
    'Software Engineer',
    'Product Manager',
    'Data Scientist',
    'Graphic Designer',
    'UX/UI Designer',
    'Marketing Specialist',
    'Sales Executive',
    'Customer Support',
    'Human Resources',
    'Content Writer',
    'Business Analyst',
    'Project Manager',
    'Financial Analyst',
    'IT Support Specialist',
];

const Carousel: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="container mx-auto my-5 bg-red-100 rounded-2xl">
            <Slider {...settings}>
                {jobTitles.map((title, index) => (
                    <div className='rounded-lg'>

                        <div key={index} className="p-4 ">
                            <div className="bg-white  rounded-lg hover:shadow-xl p-6 text-center ">
                                <h3 className="text-xl font-montserrat font-semibold">{title}</h3>
                            </div>
                        </div>

                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
