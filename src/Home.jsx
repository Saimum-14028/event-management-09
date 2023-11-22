import React from 'react';
import Banner from './Banner';
import Services from './Services';
import About from './About';
import Feedback from './Feedback';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;