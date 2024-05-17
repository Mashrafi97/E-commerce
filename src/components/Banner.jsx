import React from 'react'
import Slider from "react-slick";
import banner from "../assets/banner.png"
import Container from './Container';
import Flex from './Flex';
import { SlReload } from "react-icons/sl";
import { FaTruck } from "react-icons/fa";

const Banner = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position: "absolute",
          left: "188px",
          top: "50%",
          transform: "translateY(-50%)"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className='yourself'
        style={{
          width: "30px",
          color: "transparent",
          borderRight: "2px white solid",
          padding:"8px 0"
        }}
      >
        0{i + 1}
      </div>
    )
  };
  return (
    <>
    <Slider {...settings}>
      <div className="">
        <img src={banner} alt="banner" />
      </div>
      <div className="">
        <img src={banner} alt="banner" />
      </div>
      <div className="">
        <img src={banner} alt="banner" />
      </div>
      <div className="">
        <img src={banner} alt="banner" />
      </div>
    </Slider>
    
<div className="bg-[#FFFFFF] mt-[10px] border-b-[1px] border-[#F0F0F0] px-3 lg:px-0">
<Container>
  <Flex className="justify-between pb-[20px]">
    <div className="flex items-center">
      <h4 className='flex items-center lg:gap-[15px] gap-[8px] text-[#6D6D6D] font-dm lg:text-[16px] text-[14px] font-normal leading-auto'><span className='text-[#262626]'>2</span>Two years warranty</h4>
    </div>
    <div className="flex items-center">
      <h4 className='flex items-center lg:gap-[15px] gap-[8px] text-[#6D6D6D] font-dm lg:text-[16px] text-[14px] font-normal leading-auto'><i className='text-[#262626]'><FaTruck/></i> Free shipping</h4>
    </div>
    <div className="flex items-center">
      <h4 className='flex items-center lg:gap-[15px] gap-[8px] text-[#6D6D6D] font-dm lg:text-[16px] text-[14px] font-normal leading-auto'><i className='text-[#262626]'><SlReload/></i>Return policy in 30 days</h4>
    </div>
  </Flex>
</Container>
</div>
</>
  )
}

export default Banner