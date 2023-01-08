import Banner from "../../components/Banner/index";
import HighlightedProducts from "../../components/HighlightedProducts/index";
import SubBanner from "../../components/SubBanner";


const Main = () => {
    
    return (
        <div className="container mx-auto" >    
            <Banner />
            <HighlightedProducts />
            <SubBanner />
        </div>
    );
    };

    export default Main;