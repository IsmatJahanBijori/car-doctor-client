import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {_id, img, title, price } = service

    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-5 mx-auto">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Price: {price}</p>
                <Link to={`/services/${_id}`}><button className='btn btn-primary'>Buy Now</button></Link>
            </div>
        </div>
    );
};

export default Service;