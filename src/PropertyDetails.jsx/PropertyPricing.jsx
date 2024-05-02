

const PropertyPricing = () => {
    return (
        <div>
             <div className='mt-[80px] p-6 bg-[#ECF5FF]'>
            <h4 className='text-[16px] text-[#6B7280]'>property value</h4>
            <h2 className='font-bold text-[24px] my-2'>$ 300k - $ 310k</h2>
            <p className='text-[16px] font-semibold my-3'>Your bid can not be than 10% of the property Minimum value.</p>
            <div className='flex flex-col gap-1'>
                <label className='text-[#252323] text-[14px]' htmlFor="min_price">Min</label>
                <input type="number" className='px-2 py-3 w-full bg-white text-[20px]' placeholder='$ 280' />
            </div>
            <div className='flex flex-col gap-1'>
                <label className='text-[#252323] text-[14px]' htmlFor="min_price">Max</label>
                <input type="number" className='px-2 py-3 w-full bg-white text-[20px]' placeholder='$ 305' />
            </div>
            <div className='flex flex-col gap-1 mt-5'>
                <input type="range" min={0} max="100" defaultValue={0} className="range [--range-shdw:#ee6611]" />
                <div className='flex justify-between items-center'>
                    <label className='text-[#252323] text-[14px]' htmlFor="min_price">$280</label>
                    <label className='text-[#252323] text-[14px]' htmlFor="min_price">$305</label>
                </div>
            </div>
            <div className='flex justify-center my-4'>
                <button className='py-3 px-6 bg-[#0059b1] text-white font-bold rounded'>Bid Property</button>
            </div>
        </div>
        </div>
    );
};

export default PropertyPricing;