const Services = () => {
    return (
        <div>
            <div className="max-w-screen-xl  mx-auto m-14 text-black">
            <h1 className="text-3xl text-center font-bold">Other Services</h1>
            <div className="md:grid p-12 grid-cols-3 gap-8">
                <div  className="bg-[#ECF5FF] h-52" > 
                    <div className="flex gap-4 justify-center p-5">
                        <div >
                           <img className="h-12 w-12" src="https://i.ibb.co/S6FBGKF/Home.jpg" alt="" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold ">
                            Advanced Property Search
                            </p>
                            <p className="text-[#6B7280]">Effortlessly find your dream property with advanced search filters.</p>
                        </div>
                    </div>
                </div>
                <div  className="bg-[#ECF5FF] h-52" >
                    <div className="flex gap-4 justify-center p-5">
                        <div >
                            <img className="h-12 w-12" src="https://i.ibb.co/S6FBGKF/Home.jpg" alt="" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold ">
                            Virtual Tours and Multimedia
                            </p>
                            <p className="text-[#6B7280]">Explore properties through immersive virtual tours and HD photos.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#ECF5FF] h-52" >
                    <div className="flex gap-4 justify-center  p-5">
                    <div>
                            <img className="h-12 w-12" src="https://i.ibb.co/S6FBGKF/Home.jpg" alt="" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold ">
                            Secure Online Transactions
                            </p>
                            <p className="text-[#6B7280]">Ensure secure transactions and e-sign documents seamlessly online.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        </div>
    );
};

export default Services;