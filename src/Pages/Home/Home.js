import React from 'react';
import Service from '../Service/Service';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Gallery></Gallery>
            <Service></Service>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;