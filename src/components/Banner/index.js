import React, { useState, useEffect } from "react";
import banner from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";
import banner4 from "../../images/banner4.jpg";


const Banner = () => {

    const banners = [banner, banner2, banner3, banner4];
    const [currentBanner, setCurrentBanner] = useState(banners[0]);

    
    useEffect(() => {
        const interval = setInterval(() => {
            const randomBanner = banners[Math.floor(Math.random() * banners.length)];
            setCurrentBanner(randomBanner);
        }, 3000);
        
        return () => clearInterval(interval);
    }, [currentBanner]);

    return (
        <div className="flex justify-center cursor-pointer items-center mt-5 pl-2 pr-2">
            <img src={currentBanner} alt={"Banner Images"} />
        </div>
    );

};

export default Banner;