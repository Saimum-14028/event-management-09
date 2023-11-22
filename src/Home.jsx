import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Services from './Services';
import About from './About';
import Feedback from './Feedback';

const Home = () => {
    const [cards,setCards] = useState()

    useEffect(()=>{
        fetch('/data.json')
        .then(res=>res.json())
        .then(data => setCards(data))

    },[])

    return (
        <div>
            <Banner></Banner>
            <Services cards={cards}></Services>
            <About></About>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;