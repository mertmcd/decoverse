
const Navbar = () => {

    return (
        <div>
            <div className="container mx-auto flex flex-row justify-evenly border-t-2 border-b-2 p-0 m-6 hidden md:flex">
                <div className="p-2">Vitrifiye</div>
                <div className="p-2">Banyo Mobilyalari</div>
                <div className="p-2">Batarya ve Musluklar</div>
                <div className="p-2">Yıkanma Alanları</div>
                <div className="p-2">Aksesuarlar</div>
                <div className="p-2">Dekorasyon ve Ev Gereçleri</div>
                <div className="p-2">Yapı Malzemeleri</div>
            </div>
            <div className="container mx-auto flex flex-row border-t-2 ml-4 border-b-2 p-0 m-6 sm:flex md:hidden items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <div className="p-2 mt-1">Categories</div>
            </div>
        </div>
    );
}

export default Navbar;