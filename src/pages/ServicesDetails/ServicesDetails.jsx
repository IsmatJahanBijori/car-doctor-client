import React from 'react';
import bannerImage from '../../assets/images/services/3.jpg'

const ServicesDetails = ({ service }) => {
    const { img, title } = service
    return (
        <div>
            <div className='mb-10 relative'>
                <img src={bannerImage} className='h-[600px] w-full rounded-lg' alt="" />
                <div className="absolute flex justify-start h-full items-center bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-4 pl-4'>
                        <p className='text-white text-3xl md:text-6xl font-bold'>Services Details</p>
                    </div>
                </div>
            </div>

            <div>
                <img src={img} alt="" />
                <h1>{title}</h1>
            </div>
        </div>
    );
};

export default ServicesDetails;