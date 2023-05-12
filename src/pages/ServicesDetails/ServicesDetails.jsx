import React, { useEffect } from 'react';
import bannerImage from '../../assets/images/services/3.jpg'
import { Link, useLoaderData } from 'react-router-dom';
import Facility from './Facility';

const ServicesDetails = () => {

    const loadedService = useLoaderData()

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
                <img src={loadedService.img} alt="" />
                <h1 className='text-4xl font-bold my-10'>Title: {loadedService.title}</h1>
                <p className='grid grid-cols-1 md:grid-cols-2 mb-10 '>{loadedService.facility.map(obj => <Facility obj={obj}></Facility>)}</p>
            </div>

            <div><Link to={`/checkout/${loadedService._id}`}><button className='btn btn-error mb-10'>Proceed Checkout</button></Link></div>
        </div>
    );
};

export default ServicesDetails;

//<li>{obj.name}</li>
{/**<div className='mb-10 relative'>
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
            </div> */}

{/**<div className="card w-96 bg-primary text-primary-content">
                            <div className="card-body">
                                <h2 className="card-title">{obj.name}</h2>
                                <p>{obj.details}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn">Buy Now</button>
                                </div>
                            </div>
                        </div> */}