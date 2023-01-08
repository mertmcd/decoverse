import Logo from "../../components/Logo/index";
import Search from "../../components/Search/index";
import User from "../../components/User/index";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div className="container flex flex-row justify-between mx-auto bg-gray-200 rounded-xl shadow border p-4 sm:p-8 m-6">
      <div className="mt-2 mr-2">
      < Logo />
      </div>
      <div className=" flex flex-row">
      <Link to="/" className="btn btn-primary bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center lg:mr-5 md:mr-3 mr-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
        </svg>
        <label className="ml-2 mt-1 hidden xl:block">Home</label>
      </Link>
      <Link to="/products" className="btn btn-primary bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
        </svg>
        <label className="ml-2 mt-1 hidden xl:block">Products</label>
        
      </Link>
      </div>
      <div className="flex flex-row justify-end">
      < Search />
      < User />
      </div>
    </div>
  );
};

export default Header;