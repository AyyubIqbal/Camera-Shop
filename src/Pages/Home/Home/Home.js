import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div style={{ marginTop: "20px" }}>
            <Banner />
            <Products />
            <Reviews />
        </div>
    );
};

export default Home;