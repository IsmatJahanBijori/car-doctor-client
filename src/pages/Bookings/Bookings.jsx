import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
// import { useLoaderData } from 'react-router-dom';
import BookingDetails from './BookingDetails';

const Bookings = () => {
    const { user } = useContext(AuthContext)
    // const booking=useLoaderData() 
    // console.log(booking)
    const [bookings, setBookings] = useState([])
    const url = `https://car-doctor-server-iota-nine.vercel.app/bookings?email=${user.email}`
    useEffect(() => {
        fetch(url,{
            method:'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            },
        })
        .then(res => res.json())
        .then(data => setBookings(data))
    }, [url])



    // delete
    const handleDelete = id => {
        fetch(`https://car-doctor-server-iota-nine.vercel.app/bookings/${id}`,
            {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                // deleted from UI design
                if (data.deletedCount > 0) {
                    alert('delete')
                    const remaining = bookings.filter(booking => booking._id !== id)
                    setBookings(remaining)
                }
            })
    }


    // update
    const handleUpdate=id=>{
        fetch(`https://car-doctor-server-iota-nine.vercel.app/bookings/${id}`,
            {
                method: 'PATCH',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify({status:'confirm'})
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('update')
                    const rem = bookings.filter(booking => booking._id !== id)
                    const update=bookings.find(booking=>booking._id===id)
                    update.status='confirm'
                    const newBooking=[update, ...rem]
                    setBookings(newBooking)
            
                }
            })
    }
    return (
        <div className="overflow-x-auto w-full mb-20">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="" className="bg-base-200 w-1/4" />
                            </label>
                        </th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Service</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((booking) => <BookingDetails key={booking._id} handleDelete={handleDelete} handleUpdate={handleUpdate} booking={booking}></BookingDetails>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Bookings;