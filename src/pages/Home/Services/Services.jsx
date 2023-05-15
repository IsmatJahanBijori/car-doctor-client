import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://car-doctor-server-iota-nine.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <div>
            <div className='text-center mb-10'>
                <h3 className="text-5xl font-bold">Service</h3>
                <h2 className="my-3">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised</p>
                <p>words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 mb-10'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;