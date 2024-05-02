import Services from "../Home/Services";
import Amenities from "./Amenities ";
import DetailsHeadline from "./DetailsHeadline";
import OthersNearbyProperties from "./OthersNearbyProperties";
import Rectangle_20 from '../assets/Rectangle 20.png';
import Rectangle_21 from '../assets/Rectangle 21.png';
import Rectangle_22 from '../assets/Rectangle 21 (1).png';
import Rectangle_23 from '../assets/Rectangle 23.png';
import map from '../assets/Map icon.png'
import PropertyPricing from "./PropertyPricing";
import Overview from "./Overview";
const Details = () => {
    return (
        <div>
           <div className=' px-2 lg:px-2 py-12 max-w-screen-xl mx-auto'>
      {/* details info  */}
      <div className='grid md:grid-cols-12'>
        <div className='md:col-span-8 px-4'>
          {/* texts */}
          <DetailsHeadline />
          <div className='mt-4'>
            <img className='md:w-[800px] md:h-[400px] mb-2' src={Rectangle_20} alt="image" />
            <div className='flex flex-col lg:flex-row gap-2 w-full'>
              <img className='md:w-[290px] md:h-[160px]' src={Rectangle_21} alt="image" />
              <img className='md:w-[290px] md:h-[160px]' src={Rectangle_22} alt="image" />
              <div className='relative'>
                <img className='md:w-[208px] md:h-[160px]' src={Rectangle_23} alt="image" />
                <h4 className='absolute top-[70px] left-[55px] text-white font-bold'>View more</h4>
              </div>
            </div>
          </div>
          <Overview />
        </div>
        <div className='md:col-span-4 p-3 pt-0'>
          <PropertyPricing />
          <div className='mt-6'>
            <img className='w-full' src={map} alt="Map" />
          </div>
        </div>
      </div>
      {/* informations  */}
      <div className='px-4 w-full'>
        <Amenities />
        <Services />
        <OthersNearbyProperties />
      </div>
    </div>
        </div>
    );
};

export default Details;