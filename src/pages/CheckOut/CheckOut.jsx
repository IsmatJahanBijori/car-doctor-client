import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const CheckOut = () => {
    const checkout = useLoaderData()
    const { user } = useContext(AuthContext)
    const { title, _id, price, img } = checkout
    const handleCheckOut = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        // const email = user?.email;
        const orderDetails = {
            customerName: name, 
            email, 
            img,
            date, 
            service: title,
            service_id: _id, 
            price: price
        }
        console.log(orderDetails)
        fetch('http://localhost:5000/bookings',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderDetails)
            }).then(res => res.json()).then(data => console.log(data))
    }

    return (
        <div>
            <h1 className='text-3xl text-center font-serif'>Checkout: {title}</h1>
            <div className='flex'>
                <img src={img} className='rounded-md mb-10 mx-auto w-full h-[300px]' alt="" />
            </div>
            <form onSubmit={handleCheckOut} className='bg-slate-100 mb-20 p-10 font-serif'>
                <div className="card-body grid grid-cols-1 md:grid-cols-2 w-full">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" defaultValue={user?.displayName} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' defaultValue={user?.email} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" placeholder="amount" defaultValue={price} className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary btn-block">Order Confirm</button>
                </div>
            </form>
        </div>
    );
    
};

export default CheckOut;