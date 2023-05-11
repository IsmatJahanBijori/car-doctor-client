import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero w-full">
            <div className="hero-content ">
                <img src={person} className="max-w-sm relative rounded-lg shadow-2xl" />
                <div>
                    <img src={parts} className="max-w-xs absolute transform -translate-x-40 rounded-lg shadow-xl" />
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
        </div>
    );
};
// flex-col lg:flex-row justify-between
export default About;