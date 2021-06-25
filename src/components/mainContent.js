import React, { useState } from 'react';
import WhyUs from "./whyUs";
import AboutUs from "./aboutUs";
import AssetCount from "./assetCount";
import Services from "./service/services";
import Appointment from "./appointment";
import Department from "./department";
import Doctors from "./doctor/doctors";
import Faq from "./faq";
import Testimonial from "./testimonial";
import Gallery from "./gallery";
import Contact from "./contact";

function MainContent() {
    return (
        <div>
            <WhyUs />
            <AboutUs />
            <AssetCount />
            <Services />
            <Appointment />
            <Department />
            <Doctors />
            <Faq />
            <Testimonial />
            <Gallery />
            <Contact />
        </div>
    );
}

export default MainContent