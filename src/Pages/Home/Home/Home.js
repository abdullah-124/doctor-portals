import React from 'react';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner'
import Banner from '../Banner/Banner'
import Doctors from '../Doctors/Doctors'
import Services from '../Services/Services'
import Testimonial from '../Testimonial/Testimonial'
import OfficeInfo from './OfficeInfo/OfficeInfo'

const Home = () => {
    return (
        <div>
            <Banner />
            <OfficeInfo />
            <Services />
            <AppoinmentBanner />
            <Doctors />
            <Testimonial />
        </div>
    );
};

export default Home;