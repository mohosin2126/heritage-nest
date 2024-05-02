import beds from "../assets/bathtub.svg";
import bath from "../assets/bed.svg";
import balcony from "../assets/balcony.svg";
import shelves from "../assets/shelves.svg";

const Overview = () => {
    return (
        <div>
             <div className='bg-[#F9FAFB] border-2 border-[#E5E7EB] rounded my-5'>
            <h3 className='text-[24px] font-bold my-2 p-5'>Overview</h3>
            <div className='flex gap-20 items-center px-8 mb-2'>
                <div className='flex items-center gap-1'>
                    <img src={beds} alt="beds" />
                    <p className='text-[16px] text-[#303030]'>2 Beds</p>
                </div>
                <div className='flex items-center gap-1'>
                    <img src={bath} alt="beds" />
                    <p className='text-[16px] text-[#303030]'>2 Baths</p>
                </div>
                <div className='flex items-center gap-1'>
                    <img src={balcony} alt="beds" />
                    <p className='text-[16px] text-[#303030]'>2 Balcony</p>
                </div>
                <div className='flex items-center gap-1'>
                    <img src={shelves} alt="beds" />
                    <p className='text-[16px] text-[#303030]'>Fully Finished</p>
                </div>
            </div>
            <hr className='my-2 mt-4 w-[95%] mx-auto border' />
            <div className='flex justify-between p-5 pt-8 text-[16px]'>
                <div>
                    <p className='text-[#5C5C5C]'>Carpet Area</p>
                    <p className='text-[#101010] font-bold'>2000 sqft</p>
                    <p className='text-[#5C5C5C]'>$ 225/sqft</p>
                </div>
                <div>
                    <p className='text-[#5C5C5C]'>Floor</p>
                    <p className='text-[#101010] font-bold'>Second (Out of 6th floor)</p>
                </div>
                <div>
                    <p className='text-[#5C5C5C]'>Transaction Type</p>
                    <p className='text-[#101010] font-bold'>Ready to move</p>
                </div>
                <div>
                    <p className='text-[#5C5C5C]'>Lift</p>
                    <p className='text-[#101010] font-bold'>1</p>
                </div>
            </div>
            <div className='flex justify-between p-4 pb-8'>
                <div>
                    <p className='text-[#5C5C5C]'>Facing</p>
                    <p className='text-[#101010] font-bold'>North - East</p>

                </div>
                <div className='ml-5'>
                    <p className='text-[#5C5C5C]'>Additional Rooms</p>
                    <p className='text-[#101010] font-bold'>1 servant room & 1 gust room</p>
                </div>
                <div className='mr-7'>
                    <p className='text-[#5C5C5C]'>Age of construction</p>
                    <p className='text-[#101010] font-bold'>New Construction</p>
                </div>
                <div>

                </div>
            </div>
        </div>
        </div>
    );
};

export default Overview;