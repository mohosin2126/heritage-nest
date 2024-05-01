import BuyerScreensBanner from "./BuyerScreensBanner";
import FlatListStat from "./FlatListStat";
import NewListedProperties from "./NewListedProperties";
import PopularProperties from "./PopularProperties";
import Testimonials from "./Testimonials";

const BuyerScreens = () => {
    return (
        <div>
            <BuyerScreensBanner></BuyerScreensBanner>
            <FlatListStat></FlatListStat>
            <PopularProperties></PopularProperties>
            <NewListedProperties></NewListedProperties>
            <Testimonials></Testimonials>
        </div>
    );
};

export default BuyerScreens;