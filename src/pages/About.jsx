import React from 'react'
import Container from '../components/Container'
import { FaAngleRight } from "react-icons/fa";
import about1 from "../assets/about1.png"
import about2 from "../assets/about2.png"
import Flex from '../components/Flex';

const About = () => {
  return (
    <>
    <Container>
    <div className="mx-2 lg:mx-0">
        <div className="lg:mt-[124px] mt-[60px]">
          <h2 className='text-[#262626] font-dm lg:text-[49px] text-[30px] font-bold'>About</h2>
          <h6 className='text-[#6D6D60] font-dm lg:text-[12px] font-medium'>Home <FaAngleRight className='inline-block'/> Products</h6>
          </div>
          <Flex className="justify-between lg:pt-[101px] pt-[30px]">
               <div className="flex justify-between flex-wrap">
               <div className="lg:w-[49%] w-[100%]">
                  <div className="relative overflow-hidden">
                  <img src={about1} alt="" />
                   <div className="absolute lg:bottom-[62px] bottom-[30px] left-[50%] translate-x-[-50%] h-[50px] w-[180px] bg-black items-center">
                <h5 className='font-dm font-bold lg:text-[16px] text-[14px] text-[#fff] text-center leading-[50px] cursor-pointer'>Our Brands</h5>
            </div>
                  </div>
                </div>
                <div className="lg:w-[49%] w-[100%] mt-[20px] lg:mt-0">
                <div className="relative overflow-hidden">
                <img src={about2} alt="" />
                <div className="absolute lg:bottom-[62px] bottom-[30px] left-[50%] translate-x-[-50%] h-[50px] w-[180px] bg-black items-center">
                <h5 className='font-dm font-bold lg:text-[16px] text-[14px] text-[#fff] text-center leading-[50px] cursor-pointer'>Our Stores</h5>
            </div>
                </div>
                </div>
               </div>
            </Flex>
            <div className="lg:pt-[112px] pt-[40px]">
                    <p className='font-dm font-normal lg:text-[39px] text-[18px] text-[#262626]'>Orebi is one of the world's leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>
                </div>
                <div className="flex justify-between flex-wrap lg:pt-[118px] pt-[40px]">
                <div className="lg:w-[32%] w-full">
                    <h2 className='font-dm font-bold lg:text-[25px] text-[18px] text-[#262626]'>Our Vision</h2>
                    <p className='font-dm font-normal lg:text-[16px] text-[14px] text-[#767676] lg:pt-[11px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="lg:w-[32%] w-full lg:pt-0 pt-[20px]">
                    <h2 className='font-dm font-bold lg:text-[25px] text-[18px] text-[#262626]'>Our Story</h2>
                    <p className='font-dm font-normal lg:text-[16px] text-[14px] text-[#767676] lg:pt-[11px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                </div>
                <div className="lg:w-[32%] w-full lg:pt-0 pt-[20px]">
                    <h2 className='font-dm font-bold lg:text-[25px] text-[18px] text-[#262626]'>Our Brands</h2>
                    <p className='font-dm font-normal lg:text-[16px] text-[14px] text-[#767676] lg:pt-[11px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            </div>
        </div>
    </div>
    </Container>
    </>
  )
}

export default About