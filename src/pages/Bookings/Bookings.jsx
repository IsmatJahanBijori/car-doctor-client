import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const Bookings = () => {
    const { user } = useContext(AuthContext)
    const booking=useLoaderData() 
    console.log(booking)
    // const [bookings, setBookings]=useState([])
    // const url = `http://localhost:5000/bookings?email=${user.email}`
    // useEffect(() => {
    //     fetch(url).then(res => res.json()).then(data => console.log(data))
    // }, [url])
    return (
        <div>
            <h1>Bookings</h1>
        </div>
    );
};

export default Bookings;