import React from 'react';

const BookingDetails = ({ booking, handleDelete, handleUpdate }) => {
    const { img, _id, customerName, date, price, service, status } = booking
    // console.log(booking)
    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-square btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {customerName}
            </td>
            <td>
                {service}
            </td>
            <td>
                {price}
            </td>
            <td>{date}</td>
            <th>
                {status === 'confirm' ? <span className='text-purple-300'>Confirmed</span> : <button onClick={() => handleUpdate(_id)} className="btn btn-ghost btn-xs">Confirm</button>}
            </th>
        </tr>
    );
};

export default BookingDetails;