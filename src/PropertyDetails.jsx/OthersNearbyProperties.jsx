import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import banner from "../assets/Banner Image.png";
import banner2 from "../assets/Banner Image2.png";
import banner3 from "../assets/Banner Image3.png";
import gallary from '../assets/Gallery.svg';
const OthersNearbyProperties = () => {
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="py-4 w-full">
            <div className="flex justify-between items-center py-4">
                <h2 className='text-[32px] font-bold'>Others Nearby Properties</h2>
                <p className="text-blue-600 underline font-bold">See all property</p>
            </div>
            <div className="slider-container relative">
                <Slider 
                ref={slider => {
                    sliderRef = slider;
                }} {...settings}>
                    <div className="p-6">
                        <div>
                            <div className="relative">
                                <img src={banner} alt="" />
                                <div className="flex items-center gap-1 absolute bottom-5 left-5 bg-[#fdf0e7] p-[2px] rounded">
                                    <img src={gallary} alt="gallary" />
                                    <h3 className="text-[14px]">20</h3>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between py-3">
                            <h2 className="bg-[#C5E2FF] p-1 rounded font-semibold">Apartment</h2>
                            <h3 className="flex items-center gap-1 mr-8"><p className="w-[8px] h-[8px] bg-[#E61] rounded-full"></p> Ready to Move</h3>
                        </div>
                        <hr className="w-[94%] border" />
                        <div className='flex justify-between items-center'>
                            <h3 className='text-[20px] font-bold'>SunnySlope Suites</h3>
                        </div>
                        <div className='flex items-center gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clipPath="url(#clip0_708_7427)">
                                    <path d="M9.99981 0.017334C7.77597 0.0199809 5.64399 0.904626 4.07158 2.47719C2.49916 4.04976 1.61473 6.18183 1.6123 8.40567C1.6123 12.8007 8.41731 18.6798 9.19564 19.3365L10.0015 20.0173L10.8073 19.3365C11.584 18.6798 18.3906 12.8007 18.3906 8.40567C18.3882 6.18125 17.5033 4.04868 15.9302 2.47602C14.3571 0.903354 12.2242 0.0190986 9.99981 0.017334ZM9.99981 16.7198C7.44564 14.3932 4.11064 10.6132 4.11064 8.40567C4.11064 6.84376 4.7311 5.34583 5.83554 4.2414C6.93997 3.13696 8.4379 2.5165 9.99981 2.5165C11.5617 2.5165 13.0596 3.13696 14.1641 4.2414C15.2685 5.34583 15.889 6.84376 15.889 8.40567C15.889 10.609 12.5531 14.3907 9.99981 16.7198Z" fill="#EE6611" />
                                    <path d="M10.0004 10.8321C11.3798 10.8321 12.4979 9.71398 12.4979 8.33465C12.4979 6.95532 11.3798 5.83716 10.0004 5.83716C8.6211 5.83716 7.50293 6.95532 7.50293 8.33465C7.50293 9.71398 8.6211 10.8321 10.0004 10.8321Z" fill="#EE6611" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_708_7427">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className='text-[#606060]'>Meadowshire Park, Greenfield, USA</p>
                        </div>
                        <h3 className="font-bold text-[28px] py-3">$ 250000</h3>
                    </div>
                    <div className="p-6">
                        <div>
                            <div className="relative">
                                <img src={banner2} alt="" />
                                <div className="flex items-center gap-1 absolute bottom-5 left-5 bg-[#fdf0e7] p-[2px] rounded">
                                    <img src={gallary} alt="gallary" />
                                    <h3 className="text-[14px]">20</h3>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between py-3">
                            <h2 className="bg-[#C5E2FF] p-1 rounded font-semibold">Apartment</h2>
                            <h3 className="flex items-center gap-1 mr-8"><p className="w-[8px] h-[8px] bg-[#E61] rounded-full"></p> Ready to Move</h3>
                        </div>
                        <hr className="w-[94%] border" />
                        <div className='flex justify-between items-center'>
                            <h3 className='text-[20px] font-bold'>SunnySlope Suites</h3>
                        </div>
                        <div className='flex items-center gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clipPath="url(#clip0_708_7427)">
                                    <path d="M9.99981 0.017334C7.77597 0.0199809 5.64399 0.904626 4.07158 2.47719C2.49916 4.04976 1.61473 6.18183 1.6123 8.40567C1.6123 12.8007 8.41731 18.6798 9.19564 19.3365L10.0015 20.0173L10.8073 19.3365C11.584 18.6798 18.3906 12.8007 18.3906 8.40567C18.3882 6.18125 17.5033 4.04868 15.9302 2.47602C14.3571 0.903354 12.2242 0.0190986 9.99981 0.017334ZM9.99981 16.7198C7.44564 14.3932 4.11064 10.6132 4.11064 8.40567C4.11064 6.84376 4.7311 5.34583 5.83554 4.2414C6.93997 3.13696 8.4379 2.5165 9.99981 2.5165C11.5617 2.5165 13.0596 3.13696 14.1641 4.2414C15.2685 5.34583 15.889 6.84376 15.889 8.40567C15.889 10.609 12.5531 14.3907 9.99981 16.7198Z" fill="#EE6611" />
                                    <path d="M10.0004 10.8321C11.3798 10.8321 12.4979 9.71398 12.4979 8.33465C12.4979 6.95532 11.3798 5.83716 10.0004 5.83716C8.6211 5.83716 7.50293 6.95532 7.50293 8.33465C7.50293 9.71398 8.6211 10.8321 10.0004 10.8321Z" fill="#EE6611" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_708_7427">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className='text-[#606060]'>Meadowshire Park, Greenfield, USA</p>
                        </div>
                        <h3 className="font-bold text-[28px] py-3">$ 250000</h3>
                    </div>
                    <div className="p-6">
                        <div>
                            <div className="relative">
                                <img src={banner3} alt="" />
                                <div className="flex items-center gap-1 absolute bottom-5 left-5 bg-[#fdf0e7] p-[2px] rounded">
                                    <img src={gallary} alt="gallary" />
                                    <h3 className="text-[14px]">20</h3>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between py-3">
                            <h2 className="bg-[#C5E2FF] p-1 rounded font-semibold">Apartment</h2>
                            <h3 className="flex items-center gap-1 mr-8"><p className="w-[8px] h-[8px] bg-[#E61] rounded-full"></p> Ready to Move</h3>
                        </div>
                        <hr className="w-[94%] border" />
                        <div className='flex justify-between items-center'>
                            <h3 className='text-[20px] font-bold'>SunnySlope Suites</h3>
                        </div>
                        <div className='flex items-center gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clipPath="url(#clip0_708_7427)">
                                    <path d="M9.99981 0.017334C7.77597 0.0199809 5.64399 0.904626 4.07158 2.47719C2.49916 4.04976 1.61473 6.18183 1.6123 8.40567C1.6123 12.8007 8.41731 18.6798 9.19564 19.3365L10.0015 20.0173L10.8073 19.3365C11.584 18.6798 18.3906 12.8007 18.3906 8.40567C18.3882 6.18125 17.5033 4.04868 15.9302 2.47602C14.3571 0.903354 12.2242 0.0190986 9.99981 0.017334ZM9.99981 16.7198C7.44564 14.3932 4.11064 10.6132 4.11064 8.40567C4.11064 6.84376 4.7311 5.34583 5.83554 4.2414C6.93997 3.13696 8.4379 2.5165 9.99981 2.5165C11.5617 2.5165 13.0596 3.13696 14.1641 4.2414C15.2685 5.34583 15.889 6.84376 15.889 8.40567C15.889 10.609 12.5531 14.3907 9.99981 16.7198Z" fill="#EE6611" />
                                    <path d="M10.0004 10.8321C11.3798 10.8321 12.4979 9.71398 12.4979 8.33465C12.4979 6.95532 11.3798 5.83716 10.0004 5.83716C8.6211 5.83716 7.50293 6.95532 7.50293 8.33465C7.50293 9.71398 8.6211 10.8321 10.0004 10.8321Z" fill="#EE6611" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_708_7427">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className='text-[#606060]'>Meadowshire Park, Greenfield, USA</p>
                        </div>
                        <h3 className="font-bold text-[28px] py-3">$ 250000</h3>
                    </div>
                    <div className="p-6">
                        <div>
                            <div className="relative">
                                <img src={banner} alt="" />
                                <div className="flex items-center gap-1 absolute bottom-5 left-5 bg-[#fdf0e7] p-[2px] rounded">
                                    <img src={gallary} alt="gallary" />
                                    <h3 className="text-[14px]">20</h3>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between py-3">
                            <h2 className="bg-[#C5E2FF] p-1 rounded font-semibold">Apartment</h2>
                            <h3 className="flex items-center gap-1 mr-8"><p className="w-[8px] h-[8px] bg-[#E61] rounded-full"></p> Ready to Move</h3>
                        </div>
                        <hr className="w-[94%] border" />
                        <div className='flex justify-between items-center'>
                            <h3 className='text-[20px] font-bold'>SunnySlope Suites</h3>
                        </div>
                        <div className='flex items-center gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clipPath="url(#clip0_708_7427)">
                                    <path d="M9.99981 0.017334C7.77597 0.0199809 5.64399 0.904626 4.07158 2.47719C2.49916 4.04976 1.61473 6.18183 1.6123 8.40567C1.6123 12.8007 8.41731 18.6798 9.19564 19.3365L10.0015 20.0173L10.8073 19.3365C11.584 18.6798 18.3906 12.8007 18.3906 8.40567C18.3882 6.18125 17.5033 4.04868 15.9302 2.47602C14.3571 0.903354 12.2242 0.0190986 9.99981 0.017334ZM9.99981 16.7198C7.44564 14.3932 4.11064 10.6132 4.11064 8.40567C4.11064 6.84376 4.7311 5.34583 5.83554 4.2414C6.93997 3.13696 8.4379 2.5165 9.99981 2.5165C11.5617 2.5165 13.0596 3.13696 14.1641 4.2414C15.2685 5.34583 15.889 6.84376 15.889 8.40567C15.889 10.609 12.5531 14.3907 9.99981 16.7198Z" fill="#EE6611" />
                                    <path d="M10.0004 10.8321C11.3798 10.8321 12.4979 9.71398 12.4979 8.33465C12.4979 6.95532 11.3798 5.83716 10.0004 5.83716C8.6211 5.83716 7.50293 6.95532 7.50293 8.33465C7.50293 9.71398 8.6211 10.8321 10.0004 10.8321Z" fill="#EE6611" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_708_7427">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className='text-[#606060]'>Meadowshire Park, Greenfield, USA</p>
                        </div>
                        <h3 className="font-bold text-[28px] py-3">$ 250000</h3>
                    </div>
                    <div className="p-6">
                        <div>
                            <div className="relative">
                                <img src={banner2} alt="" />
                                <div className="flex items-center gap-1 absolute bottom-5 left-5 bg-[#fdf0e7] p-[2px] rounded">
                                    <img src={gallary} alt="gallary" />
                                    <h3 className="text-[14px]">20</h3>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between py-3">
                            <h2 className="bg-[#C5E2FF] p-1 rounded font-semibold">Apartment</h2>
                            <h3 className="flex items-center gap-1 mr-8"><p className="w-[8px] h-[8px] bg-[#E61] rounded-full"></p> Ready to Move</h3>
                        </div>
                        <hr className="w-[94%] border" />
                        <div className='flex justify-between items-center'>
                            <h3 className='text-[20px] font-bold'>SunnySlope Suites</h3>
                        </div>
                        <div className='flex items-center gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clipPath="url(#clip0_708_7427)">
                                    <path d="M9.99981 0.017334C7.77597 0.0199809 5.64399 0.904626 4.07158 2.47719C2.49916 4.04976 1.61473 6.18183 1.6123 8.40567C1.6123 12.8007 8.41731 18.6798 9.19564 19.3365L10.0015 20.0173L10.8073 19.3365C11.584 18.6798 18.3906 12.8007 18.3906 8.40567C18.3882 6.18125 17.5033 4.04868 15.9302 2.47602C14.3571 0.903354 12.2242 0.0190986 9.99981 0.017334ZM9.99981 16.7198C7.44564 14.3932 4.11064 10.6132 4.11064 8.40567C4.11064 6.84376 4.7311 5.34583 5.83554 4.2414C6.93997 3.13696 8.4379 2.5165 9.99981 2.5165C11.5617 2.5165 13.0596 3.13696 14.1641 4.2414C15.2685 5.34583 15.889 6.84376 15.889 8.40567C15.889 10.609 12.5531 14.3907 9.99981 16.7198Z" fill="#EE6611" />
                                    <path d="M10.0004 10.8321C11.3798 10.8321 12.4979 9.71398 12.4979 8.33465C12.4979 6.95532 11.3798 5.83716 10.0004 5.83716C8.6211 5.83716 7.50293 6.95532 7.50293 8.33465C7.50293 9.71398 8.6211 10.8321 10.0004 10.8321Z" fill="#EE6611" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_708_7427">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className='text-[#606060]'>Meadowshire Park, Greenfield, USA</p>
                        </div>
                        <h3 className="font-bold text-[28px] py-3">$ 250000</h3>
                    </div>

                </Slider>
                <hr className="border"/>
                <div style={{ textAlign: "center" }} className="">
                    <button className="absolute top-44 -left-3 p-4 text-white bg-[#5490cb] rounded-full" onClick={previous}>
                        <FaAngleLeft />
                    </button>
                    <button className="absolute top-44 -right-2 p-4 text-white ml-4 bg-[#5490cb] rounded-full" onClick={next}>
                        <FaAngleRight />
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default OthersNearbyProperties;
