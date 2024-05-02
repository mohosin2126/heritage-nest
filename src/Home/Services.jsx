const Services = () => {
    return (
        <div>
            <div className='px-4 py-5 pt-0'>
            <div className='my-16'>
                <h2 className="font-bold text-[40px] text-black text-center my-3">Other Services</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                <div className='flex items-start gap-5 bg-[#ECF5FF] p-5'>
                    <img className='bg-[#ee6611] text-white p-3 rounded mt-2' src="https://i.ibb.co/4fw9YCf/Home.png" alt="" />
                    <div>
                        <h3 className='text-[24px] text-black font-bold mb-3'>Advanced Property Search</h3>
                        <p className='text-[#6B7280] text-[16px] font-semibold'>Effortlessly find your dream property with advanced search filters.</p>
                    </div>
                </div>
                <div className='flex items-start gap-5 bg-[#ECF5FF] p-5'>
                    <img className='bg-[#ee6611] text-white p-3 rounded mt-2' src="https://i.ibb.co/4fw9YCf/Home.png" alt="" />
                    <div>
                        <h3 className='text-[24px] text-black font-bold mb-3'>Virtual Tours and Multimedia</h3>
                        <p className='text-[#6B7280] text-[16px] font-semibold'>Explore properties through immersive virtual tours and HD photos.</p>
                    </div>
                </div>
                <div className='flex items-start gap-5 bg-[#ECF5FF] p-5'>
                    <img className='bg-[#ee6611] text-white p-3 rounded mt-2' src="https://i.ibb.co/4fw9YCf/Home.png" alt="" />
                    <div>
                        <h3 className='text-[24px] text-black font-bold mb-3'>Secure Online Transactions</h3>
                        <p className='text-[#6B7280] text-[16px] font-semibold'>Ensure secure transactions and e-sign documents seamlessly online.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Services;