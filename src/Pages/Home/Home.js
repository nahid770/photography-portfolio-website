import React from 'react';
import Header from '../Shared/Header/Header';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;