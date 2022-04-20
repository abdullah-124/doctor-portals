import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation'
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner'
import Banner from '../Banner/Banner'
import Services from '../Services/Services'
import Testimonial from '../Testimonial/Testimonial'
import OfficeInfo from './OfficeInfo/OfficeInfo'

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <OfficeInfo />
            <Services />
            <AppoinmentBanner />
            <Testimonial />
        </div>
    );
};

export default Home;