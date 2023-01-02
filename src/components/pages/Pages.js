import React from 'react';
import NavBar from "./../NavBar/NavBar";
import Slider from "../Slider/Slider";
import AboutUs from "../AboutUs/AboutUs";
import Special from "../Special/Special";
import WhatWeBelieve from "../WhatWeBelieve/WhatWeBelieve";
import Video from "../Video/Video";

const Pages = () => {
    return (
        <>
            <NavBar/>
            <Slider/>
            <AboutUs/>
            <Special/>
            <WhatWeBelieve/>
            <Video/>

        </>
    );
};

export default Pages;