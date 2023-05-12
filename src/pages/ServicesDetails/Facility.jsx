import React from 'react';

const Facility = ({ obj }) => {
    const { name, details } = obj
    return (
        <div className="card w-96 bg-primary text-primary-content mb-10">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default Facility;