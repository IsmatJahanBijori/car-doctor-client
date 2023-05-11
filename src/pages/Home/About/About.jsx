import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mb-10 rounded-lg" >
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} alt="" className="w-3/4 rounded-lg shadow-2xl " />
                    <img src={parts} alt="" className="w-2/4 absolute right-4 top-1/2 border-white border-8  rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 mb-10'>
                    <h3 className="text-5xl font-bold">About Us</h3>
                    <h2 className="my-3 md:my-6">We are qualified & of experience in this field</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
                    <br />
                    <p>The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
                    <button className="btn btn-error">Get More Info</button>
                </div>
            </div>
        </div>
    );
};
// flex-col lg:flex-row justify-between
export default About;

/**<div className="hero max-h-screen bg-base-200 mb-10">
            <div className="hero-content flex-col lg:flex-row">
                <div>
                    <img src={person} className="max-w-sm rounded-lg shadow-2xl" />
                    <img src={parts} className="max-w-xs absolute transform translate-x-20 -translate-y-10 rounded-lg shadow-xl" />
                </div>
                <div className='w-1/4 gap-4 justify-end'>
                    <h3 className="text-5xl font-bold">About Us</h3>
                    <h2 className="my-3 md:my-6">We are qualified & of experience in this field</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
                    <br />
                    <p>The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
                    <button className="btn btn-error">Get More Info</button>
                </div>
            </div>
        </div> */