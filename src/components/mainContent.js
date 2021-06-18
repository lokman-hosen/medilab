import React, { useState } from 'react';
import WhyUs from "./whyUs";
import AboutUs from "./aboutUs";
import AssetCount from "./assetCount";
import Services from "./services";

function MainContent() {
    return (
        <div>
            <WhyUs />
            <AboutUs />
            <AssetCount />
            <Services />
        </div>
    );
}

export default MainContent