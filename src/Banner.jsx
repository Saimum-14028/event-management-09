import React from 'react';

const Banner = () => {
    return (
        <div className="mb-10">
            <div className="hero h-96" style={{backgroundImage: 'url(https://i.ibb.co/PQzrPWg/pexels-pixabay-207691.jpg)'}}>
                <div className="hero-overlay bg-white bg-opacity-95"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-10 text-5xl font-bold text-black">Event Management is Simple</h1>
                        <input type="text" placeholder="Search here...." className="input input-bordered input-error w-full max-w-xs mr-2 mb-2" />
                        <button className="btn btn-error text-white">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;