import React, { useState, useEffect } from "react";
import subbanner from "../../images/sub1.jpg";
import subbanner2 from "../../images/sub2.jpg";
import subbanner3 from "../../images/sub3.jpg";
import subbanner4 from "../../images/sub4.jpg";


const SubBanner = () => {
        const [subBanner, setSubBanner] = useState([]);
    
        useEffect(() => {
            setSubBanner([subbanner, subbanner2, subbanner3, subbanner4]);

        }, []);
    
        return (
            <div className="mt-8 mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
                {subBanner.map((banner, index) => {
                    return (
                        <div className="mx-2 my-2 place-self-center" key={index}>
                            <img src={banner} alt={"Sub Banner Images"}  />
                        </div>
                    );
                })}
            </div>
        );

}

export default SubBanner;
