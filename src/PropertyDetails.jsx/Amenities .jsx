import { data } from "./items"
const Amenities  = () => {
    return (
        <div>
            <div className='bg-[#F9FAFB] border-2 border-[#E5E7EB] rounded my-5'>
            <h3 className='text-[24px] font-bold my-2 p-5'>Amenities</h3>
            <div className='grid grid-cols-2 md:grid-cols-4 items-center px-8 mb-2'>
                {
                    data.map((item, index) => {
                        return <div key={index} className='flex items-center gap-2 pb-12'>
                            <img className="w-6 h-6" src={item?.image} alt="helo" />
                            <p className='text-[16px] font-semibold text-[#303030]'>{item?.title}</p>
                        </div>
                    })
                }

            </div>
        </div>
        </div>
    );
};

export default Amenities ;