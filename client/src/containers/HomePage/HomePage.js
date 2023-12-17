import React from 'react';
import './HomePage.scss';
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';

const HomePage = () => {
    return (
        <div className="homePage">
            <HomeCarousel />
            <div className="description">
                D Innovations is a multidisciplinary architecture, interior design and landscaping firm.
            </div>
        </div>
    );
};

export default HomePage;
