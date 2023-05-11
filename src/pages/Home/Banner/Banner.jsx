import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full py-4 p-5">
            <div id="slide1" className="carousel-item p-4 relative w-full">
                <img src={img1} alt="" />
                <div className="absolute flex justify-start h-full items-center bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-4 pl-4'>
                        <p className='text-white text-3xl md:text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</p>
                        <p className='text-white text-1xl'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='flex flex-col w-24 space-y-3 md:flex-row items-center'>
                            <button className="btn btn-error mr-4 ">Discover More</button>
                            <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
                    <a href="#slide6" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} />
                <div className="absolute flex justify-start h-full items-center bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-4 pl-4'>
                        <p className='text-white text-3xl md:text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</p>
                        <p className='text-white text-1xl'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='flex flex-col w-24 space-y-3 md:flex-row items-center'>
                            <button className="btn btn-error mr-4">Discover More</button>
                            <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} />
                <div className="absolute flex justify-start h-full items-center bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-4 pl-4'>
                        <p className='text-white text-3xl md:text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</p>
                        <p className='text-white text-1xl'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='flex flex-col w-24 space-y-3 md:flex-row items-center'>
                            <button className="btn btn-error mr-4">Discover More</button>
                            <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} />
                <div className="absolute flex justify-start h-full items-center bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-4 pl-4'>
                        <p className='text-white text-3xl md:text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</p>
                        <p className='text-white text-1xl'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='flex flex-col w-24 space-y-3 md:flex-row items-center'>
                            <button className="btn btn-error mr-4">Discover More</button>
                            <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} />
                <div className="absolute flex justify-start h-full items-center bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-4 pl-4'>
                        <p className='text-white text-3xl md:text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</p>
                        <p className='text-white text-1xl'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='flex flex-col w-24 space-y-3 md:flex-row items-center'>
                            <button className="btn btn-error mr-4">Discover More</button>
                            <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} />
                <div className="absolute flex justify-start h-full items-center bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-4 pl-4'>
                        <p className='text-white text-3xl md:text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</p>
                        <p className='text-white text-1xl'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='flex flex-col w-24 space-y-3 md:flex-row items-center'>
                            <button className="btn btn-error mr-4">Discover More</button>
                            <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
{/**<div>
                        <p>Affordable Price For Car Servicing</p>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-error">Discover More</button>
                        <button className="btn btn-outline btn-error">Latest Project</button>
                    </div> */}