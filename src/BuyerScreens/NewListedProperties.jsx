import Carousel from "react-multi-carousel";

const NewListedProperties = () => {
    return (
        <div>
             <div className="max-w-screen-xl mx-auto p-3 ">
            <div className="flex justify-between my-5">
                <p className="text-3xl font-semibold">New Listed Properties</p>
                <p className="text-[#0059B1] border-b-2 border-b-[#0059B1] text-lg font-semibold">See all property</p>
            </div>

            <div>
                <Carousel
                    additionalTransfrom={0}
                    autoPlaySpeed={2000}
                    centerMode={false}
                    containerClass="container-with-dots"
                    draggable
                    focusOnSelect={false}
                    infinite
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 3,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 2,
                            partialVisibilityGutter: 30
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    slidesToSlide={1}
                    swipeable
                >
                    <div className="p-8">
                        <img className="h-64" src="https://i.ibb.co/W5rmyDq/Banner-Image.jpg" alt="" />

                        <div className="flex items-center w-14 h-7 bg-white absolute  gap-1 -mt-10 ml-5 p-2 rounded-md">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.0003 6.66675C15.0003 7.58722 14.2541 8.33341 13.3337 8.33341C12.4132 8.33341 11.667 7.58722 11.667 6.66675C11.667 5.74627 12.4132 5.00008 13.3337 5.00008C14.2541 5.00008 15.0003 5.74627 15.0003 6.66675Z" fill="#EE6611" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.95251 1.04175H10.0481C11.9718 1.04174 13.4793 1.04173 14.6556 1.19987C15.8595 1.36174 16.8095 1.69952 17.5552 2.4452C18.3009 3.19087 18.6387 4.14089 18.8005 5.34484C18.9587 6.52108 18.9587 8.02861 18.9587 9.95227V10.0258C18.9587 11.6165 18.9587 12.9186 18.8723 13.9789C18.7855 15.0443 18.6076 15.9346 18.2094 16.674C18.0338 17.0002 17.818 17.2922 17.5552 17.555C16.8095 18.3006 15.8595 18.6384 14.6556 18.8003C13.4793 18.9584 11.9718 18.9584 10.0481 18.9584H9.95252C8.02885 18.9584 6.52132 18.9584 5.34508 18.8003C4.14113 18.6384 3.19111 18.3006 2.44544 17.555C1.78437 16.8939 1.44299 16.0711 1.26145 15.0504C1.08312 14.0478 1.05049 12.8003 1.04372 11.2513C1.04199 10.8573 1.04199 10.4406 1.04199 10.0009V9.95227C1.04198 8.02861 1.04197 6.52107 1.20011 5.34484C1.36198 4.14089 1.69976 3.19087 2.44544 2.4452C3.19111 1.69952 4.14113 1.36174 5.34508 1.19987C6.52132 1.04173 8.02886 1.04174 9.95251 1.04175ZM5.51164 2.43872C4.4463 2.58195 3.80404 2.85437 3.32932 3.32908C2.85461 3.80379 2.5822 4.44606 2.43897 5.5114C2.29332 6.59471 2.29199 8.01823 2.29199 10.0001C2.29199 10.2422 2.29199 10.4763 2.29228 10.703L3.12656 9.97301C3.88595 9.30855 5.03047 9.34665 5.74397 10.0602L9.31874 13.6349C9.89144 14.2076 10.7929 14.2857 11.4556 13.82L11.7041 13.6454C12.6576 12.9753 13.9477 13.0529 14.814 13.8325L17.1727 15.9554C17.4101 15.4567 17.5511 14.8016 17.6264 13.8773C17.7082 12.8736 17.7087 11.6216 17.7087 10.0001C17.7087 8.01823 17.7073 6.59471 17.5617 5.5114C17.4185 4.44606 17.146 3.80379 16.6713 3.32908C16.1966 2.85437 15.5543 2.58195 14.489 2.43872C13.4057 2.29308 11.9822 2.29175 10.0003 2.29175C8.01847 2.29175 6.59495 2.29308 5.51164 2.43872Z" fill="#EE6611" />
                            </svg>
                            <p>20</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="p-3">
                                <span className="bg-[#C5E2FF] p-2 rounded">Apartment</span>

                            </p>
                            <div className="flex gap-2 items-center"> 
                            <div className="w-3 h-3 bg-[#EE6611]">
                                </div> 
                                <p>Ready to Move</p>
                                </div>
                        </div>
                        <p className="text-xl font-semibold">SunnySlope Suites</p>
                        <div className="flex gap-1 items-center my-2">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1044_1621)">
                                    <path d="M9.99981 0.017334C7.77597 0.0199809 5.64399 0.904626 4.07158 2.47719C2.49916 4.04976 1.61473 6.18183 1.6123 8.40567C1.6123 12.8007 8.41731 18.6798 9.19564 19.3365L10.0015 20.0173L10.8073 19.3365C11.584 18.6798 18.3906 12.8007 18.3906 8.40567C18.3882 6.18125 17.5033 4.04868 15.9302 2.47602C14.3571 0.903354 12.2242 0.0190986 9.99981 0.017334ZM9.99981 16.7198C7.44564 14.3932 4.11064 10.6132 4.11064 8.40567C4.11064 6.84376 4.7311 5.34583 5.83554 4.2414C6.93997 3.13696 8.4379 2.5165 9.99981 2.5165C11.5617 2.5165 13.0596 3.13696 14.1641 4.2414C15.2685 5.34583 15.889 6.84376 15.889 8.40567C15.889 10.609 12.5531 14.3907 9.99981 16.7198Z" fill="#EE6611" />
                                    <path d="M10.0004 10.8321C11.3798 10.8321 12.4979 9.71398 12.4979 8.33465C12.4979 6.95532 11.3798 5.83716 10.0004 5.83716C8.6211 5.83716 7.50293 6.95532 7.50293 8.33465C7.50293 9.71398 8.6211 10.8321 10.0004 10.8321Z" fill="#EE6611" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1044_1621">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className="text-[#6B7280]">Meadowshire Park, Greenfield, USA</p>
                        </div>
                        <p className="text-2xl font-semibold">$ 250000</p>

                    </div>
                    <div className="p-8">
                        <img className="h-64" src="https://i.ibb.co/x71bPjK/Banner-Image-1.jpg.jpg" alt="" />

                        <div className="flex items-center w-14 h-7 bg-white absolute  gap-1 -mt-10 ml-5 p-2 rounded-md">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.0003 6.66675C15.0003 7.58722 14.2541 8.33341 13.3337 8.33341C12.4132 8.33341 11.667 7.58722 11.667 6.66675C11.667 5.74627 12.4132 5.00008 13.3337 5.00008C14.2541 5.00008 15.0003 5.74627 15.0003 6.66675Z" fill="#EE6611" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.95251 1.04175H10.0481C11.9718 1.04174 13.4793 1.04173 14.6556 1.19987C15.8595 1.36174 16.8095 1.69952 17.5552 2.4452C18.3009 3.19087 18.6387 4.14089 18.8005 5.34484C18.9587 6.52108 18.9587 8.02861 18.9587 9.95227V10.0258C18.9587 11.6165 18.9587 12.9186 18.8723 13.9789C18.7855 15.0443 18.6076 15.9346 18.2094 16.674C18.0338 17.0002 17.818 17.2922 17.5552 17.555C16.8095 18.3006 15.8595 18.6384 14.6556 18.8003C13.4793 18.9584 11.9718 18.9584 10.0481 18.9584H9.95252C8.02885 18.9584 6.52132 18.9584 5.34508 18.8003C4.14113 18.6384 3.19111 18.3006 2.44544 17.555C1.78437 16.8939 1.44299 16.0711 1.26145 15.0504C1.08312 14.0478 1.05049 12.8003 1.04372 11.2513C1.04199 10.8573 1.04199 10.4406 1.04199 10.0009V9.95227C1.04198 8.02861 1.04197 6.52107 1.20011 5.34484C1.36198 4.14089 1.69976 3.19087 2.44544 2.4452C3.19111 1.69952 4.14113 1.36174 5.34508 1.19987C6.52132 1.04173 8.02886 1.04174 9.95251 1.04175ZM5.51164 2.43872C4.4463 2.58195 3.80404 2.85437 3.32932 3.32908C2.85461 3.80379 2.5822 4.44606 2.43897 5.5114C2.29332 6.59471 2.29199 8.01823 2.29199 10.0001C2.29199 10.2422 2.29199 10.4763 2.29228 10.703L3.12656 9.97301C3.88595 9.30855 5.03047 9.34665 5.74397 10.0602L9.31874 13.6349C9.89144 14.2076 10.7929 14.2857 11.4556 13.82L11.7041 13.6454C12.6576 12.9753 13.9477 13.0529 14.814 13.8325L17.1727 15.9554C17.4101 15.4567 17.5511 14.8016 17.6264 13.8773C17.7082 12.8736 17.7087 11.6216 17.7087 10.0001C17.7087 8.01823 17.7073 6.59471 17.5617 5.5114C17.4185 4.44606 17.146 3.80379 16.6713 3.32908C16.1966 2.85437 15.5543 2.58195 14.489 2.43872C13.4057 2.29308 11.9822 2.29175 10.0003 2.29175C8.01847 2.29175 6.59495 2.29308 5.51164 2.43872Z" fill="#EE6611" />
                            </svg>
                            <p>20</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="p-3">
                                <span className="bg-[#C5E2FF] p-2 rounded">Apartment</span>

                            </p>
                            <div className="flex gap-2 items-center">
                                 <div className="w-3 h-3 bg-[#EE6611]">
                                    </div> 
                                    <p>Ready to Move</p>
                                    </div>
                        </div>
                        <p className="text-xl font-semibold">SunnySlope Suites</p>
                        <div className="flex gap-1 items-center my-2">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1044_1621)">
                                    <path d="M9.99981 0.017334C7.77597 0.0199809 5.64399 0.904626 4.07158 2.47719C2.49916 4.04976 1.61473 6.18183 1.6123 8.40567C1.6123 12.8007 8.41731 18.6798 9.19564 19.3365L10.0015 20.0173L10.8073 19.3365C11.584 18.6798 18.3906 12.8007 18.3906 8.40567C18.3882 6.18125 17.5033 4.04868 15.9302 2.47602C14.3571 0.903354 12.2242 0.0190986 9.99981 0.017334ZM9.99981 16.7198C7.44564 14.3932 4.11064 10.6132 4.11064 8.40567C4.11064 6.84376 4.7311 5.34583 5.83554 4.2414C6.93997 3.13696 8.4379 2.5165 9.99981 2.5165C11.5617 2.5165 13.0596 3.13696 14.1641 4.2414C15.2685 5.34583 15.889 6.84376 15.889 8.40567C15.889 10.609 12.5531 14.3907 9.99981 16.7198Z" fill="#EE6611" />
                                    <path d="M10.0004 10.8321C11.3798 10.8321 12.4979 9.71398 12.4979 8.33465C12.4979 6.95532 11.3798 5.83716 10.0004 5.83716C8.6211 5.83716 7.50293 6.95532 7.50293 8.33465C7.50293 9.71398 8.6211 10.8321 10.0004 10.8321Z" fill="#EE6611" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1044_1621">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className="text-[#6B7280]">Meadowshire Park, Greenfield, USA</p>
                        </div>
                        <p className="text-2xl font-semibold">$ 250000</p>

                    </div>
                    <div className="p-8">
                        <img className="h-64" src="https://i.ibb.co/FHB4HK6/4a524ce0f30f319b1b0616521eea2317.jpg" alt="" />

                        <div className="flex items-center w-14 h-7 bg-white absolute  gap-1 -mt-10 ml-5 p-2 rounded-md">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.0003 6.66675C15.0003 7.58722 14.2541 8.33341 13.3337 8.33341C12.4132 8.33341 11.667 7.58722 11.667 6.66675C11.667 5.74627 12.4132 5.00008 13.3337 5.00008C14.2541 5.00008 15.0003 5.74627 15.0003 6.66675Z" fill="#EE6611" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.95251 1.04175H10.0481C11.9718 1.04174 13.4793 1.04173 14.6556 1.19987C15.8595 1.36174 16.8095 1.69952 17.5552 2.4452C18.3009 3.19087 18.6387 4.14089 18.8005 5.34484C18.9587 6.52108 18.9587 8.02861 18.9587 9.95227V10.0258C18.9587 11.6165 18.9587 12.9186 18.8723 13.9789C18.7855 15.0443 18.6076 15.9346 18.2094 16.674C18.0338 17.0002 17.818 17.2922 17.5552 17.555C16.8095 18.3006 15.8595 18.6384 14.6556 18.8003C13.4793 18.9584 11.9718 18.9584 10.0481 18.9584H9.95252C8.02885 18.9584 6.52132 18.9584 5.34508 18.8003C4.14113 18.6384 3.19111 18.3006 2.44544 17.555C1.78437 16.8939 1.44299 16.0711 1.26145 15.0504C1.08312 14.0478 1.05049 12.8003 1.04372 11.2513C1.04199 10.8573 1.04199 10.4406 1.04199 10.0009V9.95227C1.04198 8.02861 1.04197 6.52107 1.20011 5.34484C1.36198 4.14089 1.69976 3.19087 2.44544 2.4452C3.19111 1.69952 4.14113 1.36174 5.34508 1.19987C6.52132 1.04173 8.02886 1.04174 9.95251 1.04175ZM5.51164 2.43872C4.4463 2.58195 3.80404 2.85437 3.32932 3.32908C2.85461 3.80379 2.5822 4.44606 2.43897 5.5114C2.29332 6.59471 2.29199 8.01823 2.29199 10.0001C2.29199 10.2422 2.29199 10.4763 2.29228 10.703L3.12656 9.97301C3.88595 9.30855 5.03047 9.34665 5.74397 10.0602L9.31874 13.6349C9.89144 14.2076 10.7929 14.2857 11.4556 13.82L11.7041 13.6454C12.6576 12.9753 13.9477 13.0529 14.814 13.8325L17.1727 15.9554C17.4101 15.4567 17.5511 14.8016 17.6264 13.8773C17.7082 12.8736 17.7087 11.6216 17.7087 10.0001C17.7087 8.01823 17.7073 6.59471 17.5617 5.5114C17.4185 4.44606 17.146 3.80379 16.6713 3.32908C16.1966 2.85437 15.5543 2.58195 14.489 2.43872C13.4057 2.29308 11.9822 2.29175 10.0003 2.29175C8.01847 2.29175 6.59495 2.29308 5.51164 2.43872Z" fill="#EE6611" />
                            </svg>
                            <p>20</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="p-3">
                                <span className="bg-[#C5E2FF] p-2 rounded">Apartment</span>

                            </p>
                            <div className="flex gap-2 items-center"> 
                            <div className="w-3 h-3 bg-[#EE6611]">
                                </div> 
                                <p>Ready to Move</p>
                                </div>
                        </div>
                        <p className="text-xl font-semibold">SunnySlope Suites</p>
                        <div className="flex gap-1 items-center my-2">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1044_1621)">
                                    <path d="M9.99981 0.017334C7.77597 0.0199809 5.64399 0.904626 4.07158 2.47719C2.49916 4.04976 1.61473 6.18183 1.6123 8.40567C1.6123 12.8007 8.41731 18.6798 9.19564 19.3365L10.0015 20.0173L10.8073 19.3365C11.584 18.6798 18.3906 12.8007 18.3906 8.40567C18.3882 6.18125 17.5033 4.04868 15.9302 2.47602C14.3571 0.903354 12.2242 0.0190986 9.99981 0.017334ZM9.99981 16.7198C7.44564 14.3932 4.11064 10.6132 4.11064 8.40567C4.11064 6.84376 4.7311 5.34583 5.83554 4.2414C6.93997 3.13696 8.4379 2.5165 9.99981 2.5165C11.5617 2.5165 13.0596 3.13696 14.1641 4.2414C15.2685 5.34583 15.889 6.84376 15.889 8.40567C15.889 10.609 12.5531 14.3907 9.99981 16.7198Z" fill="#EE6611" />
                                    <path d="M10.0004 10.8321C11.3798 10.8321 12.4979 9.71398 12.4979 8.33465C12.4979 6.95532 11.3798 5.83716 10.0004 5.83716C8.6211 5.83716 7.50293 6.95532 7.50293 8.33465C7.50293 9.71398 8.6211 10.8321 10.0004 10.8321Z" fill="#EE6611" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1044_1621">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className="text-[#6B7280]">Meadowshire Park, Greenfield, USA</p>
                        </div>
                        <p className="text-2xl font-semibold">$ 250000</p>

                    </div>

                </Carousel>
            </div>
            </div>
        </div>
    );
};

export default NewListedProperties;