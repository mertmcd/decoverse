import React, { useState } from 'react';
import { Link } from "react-router-dom";
import vit1 from "../../images/vit1.jpg";
import vit2 from "../../images/vit2.jpg";
import vit3 from "../../images/vit3.jpg";
import vit4 from "../../images/vit4.jpg";
import ban1 from "../../images/ban1.jpg";
import ban2 from "../../images/ban2.jpg";
import ban3 from "../../images/ban3.jpg";
import ban4 from "../../images/ban4.jpg";


const Navbar = () => {
    const [isHoveringVit, setIsHoveringVit] = useState(false);
    const [isHoveringBan, setIsHoveringBan] = useState(false);

    const HoverableNavbar = ({ handleMouseOver, handleMouseOut }) => {
        return (
            <div className="menu hover-menu-list">
                <div className=" cursor-pointer mx-auto flex flex-row justify-evenly border-t-2 border-b-2 p-0 m-0 hidden md:flex">
                    <div className="vitrifiye p-2" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Vitrifiye</div>
                    <div className="banyo p-2" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Banyo Mobilyalari</div>
                    <div className="p-2">Batarya ve Musluklar</div>
                    <div className="p-2">Yıkanma Alanları</div>
                    <div className="p-2">Aksesuarlar</div>
                    <div className="p-2">Dekorasyon ve Ev Gereçleri</div>
                    <div className="p-2">Yapı Malzemeleri</div>

                </div>
            </div>

        );
    };

    const HoverVitrifiye = () => {
        return (
                <div className="vitrifiye mx-auto container hidden md:flex p-5 hover-menu-list bg-slate-300 absolute rounded-b-lg w-full flex justify-between">

                    <div className="hover-menu-links columns-1">
                    <ul className="">
                        <li className="hover-menu-list-item bg-slate-200 hover:bg-slate-400 p-2 mb-1 text-center">
                            <Link to="/products" className="hover-menu-list-item-link">Vitrifiye All</Link>
                        </li>
                        <li className="hover-menu-list-item bg-slate-200 hover:bg-slate-400 p-2 mb-1 text-center">
                            <Link to="/products/1" className="hover-menu-list-item-link">Vitrifiye Category 1</Link>
                        </li>
                        <li className="hover-menu-list-item bg-slate-200 hover:bg-slate-400 p-2 mb-1 text-center">
                            <Link to="/products/2" className="hover-menu-list-item-link">Vitrifiye Category 2</Link>
                        </li>
                        <li className="hover-menu-list-item bg-slate-200 hover:bg-slate-400 p-2 mb-1 text-center">
                            <Link to="/products/3" className="hover-menu-list-item-link">Vitrifiye Category 3</Link>
                        </li>
                    </ul>
                    </div>
                    <div className="hover-menu-images columns-2">
                        <div className="mx-auto">
                            <div className="mx-2 my-2 place-self-center cursor-pointer">
                                <img src={vit1} alt={"Sub Banner Images"} />
                                <img src={vit2} alt={"Sub Banner Images"} />
                                <img src={vit3} alt={"Sub Banner Images"} />
                                <img src={vit4} alt={"Sub Banner Images"} />
                            </div>

                    </div>
                </div>
            </div>
           
        );
    };

    const HoverBanyoMobilyalari = () => {
        return (
            <div className="banyo mx-auto container hidden md:flex p-5 hover-menu-list bg-slate-300 absolute rounded-b-lg w-full flex justify-between">
           
            <div className="hover-menu-links columns-1">
                <ul className="">
                    <li className="hover-menu-list-item bg-slate-200 hover:bg-slate-400 p-2 mb-1 text-center">
                        <Link to="/products" className="hover-menu-list-item-link">Banyo Mobilyalari All</Link>
                    </li>
                    <li className="hover-menu-list-item bg-slate-200 hover:bg-slate-400 p-2 mb-1 text-center">
                        <Link to="/products/1" className="hover-menu-list-item-link">Banyo Mobilyalari Category 1</Link>
                    </li>
                    <li className="hover-menu-list-item bg-slate-200 hover:bg-slate-400 p-2 mb-1 text-center">
                        <Link to="/products/2" className="hover-menu-list-item-link">Banyo Mobilyalari Category 2</Link>
                    </li>
                    <li className="hover-menu-list-item bg-slate-200 hover:bg-slate-400 p-2 mb-1 text-center">
                        <Link to="/products/3" className="hover-menu-list-item-link">Banyo Mobilyalari Category 3</Link>
                    </li>
                </ul>
            </div>
            <div className="hover-menu-images columns-2">
                <div className="mx-auto">
                    <div className="mx-2 my-2 place-self-center cursor-pointer">
                        <img src={ban1} alt={"Sub Banner Images"} />
                        <img src={ban2} alt={"Sub Banner Images"} />
                        <img src={ban3} alt={"Sub Banner Images"} />
                        <img src={ban4} alt={"Sub Banner Images"} />
                    </div>
                </div>
            </div>
        </div>

        );
    };

    const handleMouseOver = (e) => {
        if (e.target.classList.contains('vitrifiye'))
            setIsHoveringVit(true);
            setIsHoveringBan(false);
        if (e.target.classList.contains('banyo'))
            setIsHoveringBan(true);
    };

    document.addEventListener('click', function (e) {
        if (!e.target.classList.contains('vitrifiye') && !e.target.classList.contains('banyo')) {
            setIsHoveringVit(false);
            setIsHoveringBan(false);
        }
    });

    const handleMouseOut = (e) => {
        // if (e.target.innerText === "Vitrifiye")
        //     setIsHoveringVit(false);
        // if (e.target.innerText === "Banyo Mobilyalari")
        //     setIsHoveringBan(false);


    };

    return (
        <div className='container mx-auto'>
            <HoverableNavbar handleMouseOver={handleMouseOver} handleMouseOut={handleMouseOut}/>
            {isHoveringVit && <HoverVitrifiye />}
            {isHoveringBan && <HoverBanyoMobilyalari />}
            <div className="container mx-auto flex flex-row border-t-2 ml-4 border-b-2 p-0 m-6 sm:flex md:hidden items-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
                <div className="p-2 mt-1">Categories</div>
            </div>
        </div>
    );
}

export default Navbar;