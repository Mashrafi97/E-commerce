import React from 'react'
import Container from './Container'
import Flex from './Flex'
import one from "../assets/endone.png"
import two from "../assets/end_two.png"
import three from "../assets/end_three.png"
import four from "../assets/end_four.png"
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Endimg = () => {
  return (
    <>
    <section className='lg:mt-[128px] mt-[30px] px-3 lg:px-[0]'>
        <Container>
            <div className="">
                <h2 className='text-[#262626] font-dm lg:text-[39px] text-[20px] lg:font-bold font-medium lg:pb-[38px] pb-[10px]'>Special Offers</h2>
            </div>
            <Flex className="justify-between flex-wrap">
            <div className="lg:w-[23.6%] w-[48%]">
            <div className="relative group overflow-hidden">
            <Link to="/product">
                <img src={one} className='lg:h-[370px] h-[180px] border-[1px] border-[#d4d4d4] w-full' alt="middleone" />
            </Link>    
                <div className="absolute lg:bottom-[-400px] bottom-0 left-0 w-full lg:h-[156px] h-[80px] bg-[#FFFFFF] flex items-center lg:pl-[189px] justify-center lg:group-hover:bottom-0 duration-[0.8s] ease-in-out border-[0.5px] border-[#d4d4d4]">
                <ul>
                    <li className='flex items-center lg:gap-[15px] gap-[10px] text-[#767676] font-dm lg:text-[16px] text-[14px] font-normal hover:text-[#262626] lg:hover:font-bold duration-[0.4s] ease-in-out'>Add to Wish List <i className='text-[#262626]'><FaHeart /></i></li>
                    <li className='flex items-center lg:gap-[15px] gap-[10px] text-[#767676] font-dm lg:text-[16px] text-[14px] font-normal lg:pt-[21px] pt-[5px] hover:text-[#262626] lg:hover:font-bold duration-[0.4s] ease-in-out'>Compare <i className='text-[#262626] '><TfiReload/></i></li>
                    <li className='flex items-center lg:gap-[15px] gap-[10px] text-[#767676] font-dm lg:text-[16px] text-[14px] font-normal lg:pt-[21px] pt-[5px] hover:text-[#262626] lg:hover:font-bold duration-[0.4s] ease-in-out'>Add to Cart <i className='text-[#262626]'><FaShoppingCart/></i></li>
                </ul>
            </div>
            </div>
            <div className="flex justify-between lg:pt-[14px] pt-[5px]">
                <h5 className='text-[#262626] font-dm lg:text-[20px] text-[16px] font-bold leading-auto'>Basic Crew Neck Tee</h5>
                <h6 className='text-[#767676] font-dm text-[16px] font-normal lg:leading-[30px] leading-auto px-[5px] lg:px-0'>$44.00</h6>
            </div>
            <div className="text-[#767676] font-dm lg:text-[16px] text-[14px] font-normal lg:leading-[30px] leading-auto lg:pt-[15px] pt-[0px]">Black</div>
            </div>


            <div className="lg:w-[23.6%] w-[48%]">
            <div className="relative group overflow-hidden">
            <Link to="/product">    
                <img src={two} className='lg:h-[370px] h-[180px] border-[1px] border-[#d4d4d4] w-full' alt="middle_two" />
            </Link>
                <div className="absolute lg:bottom-[-400px] bottom-0 left-0 w-full lg:h-[156px] h-[80px] bg-[#FFFFFF] flex items-center lg:pl-[189px] justify-center lg:group-hover:bottom-0 duration-[0.8s] ease-in-out border-[0.5px] border-[#d4d4d4]">
                <ul>
                    <li className='flex items-center lg:gap-[15px] gap-[10px] text-[#767676] font-dm lg:text-[16px] text-[14px] font-normal hover:text-[#262626] lg:hover:font-bold duration-[0.4s] ease-in-out'>Add to Wish List <i className='text-[#262626]'><FaHeart /></i></li>
                    <li className='flex items-center lg:gap-[15px] gap-[10px] text-[#767676] font-dm lg:text-[16px] text-[14px] font-normal lg:pt-[21px] pt-[5px] hover:text-[#262626] lg:hover:font-bold duration-[0.4s] ease-in-out'>Compare <i className='text-[#262626] '><TfiReload/></i></li>
                    <li className='flex items-center lg:gap-[15px] gap-[10px] text-[#767676] font-dm lg:text-[16px] text-[14px] font-normal lg:pt-[21px] pt-[5px] hover:text-[#262626] lg:hover:font-bold duration-[0.4s] ease-in-out'>Add to Cart <i className='text-[#262626]'><FaShoppingCart/></i></li>
                </ul>
            </div>
            </div>
            <div className="flex justify-between lg:pt-[14px] pt-[5px]">
                <h5 className='text-[#262626] font-dm lg:text-[20px] text-[16px] font-bold leading-auto'>Basic Crew Neck Tee</h5>
                <h6 className='text-[#767676] font-dm text-[16px] font-normal lg:leading-[30px] leading-auto px-[5px] lg:px-0'>$49.00</h6>
            </div>
            <div className="text-[#767676] font-dm lg:text-[16px] text-[14px] font-normal lg:leading-[30px] leading-auto lg:pt-[15px] pt-[0px]">Black</div>
            </div>


            <div className="lg:w-[23.6%] w-[48%] pt-[20px] lg:pt-[0px]">
            <div className="relative group overflow-hidden">
            <Link to="/product">
                <img src={three} className='lg:h-[370px] h-[180px] border-[1px] border-[#d4d4d4] w-full' alt="middle_three" />
            </Link>
                <div className="absolute lg:bottom-[-400px] bottom-0 left-0 w-full lg:h-[156px] h-[80px] bg-[#FFFFFF] flex items-center lg:pl-[189px] justify-center lg:group-hover:bottom-0 duration-[0.8s] ease-in-out border-[0.5px] border-[#d4d4d4]">
                <ul>
                    <li className='flex items-center lg:gap-[15px] gap-[10px] text-[#767676] font-dm lg:text-[16px] text-[14px] font-normal hover:text-[#262626] lg:hover:font-bold duration-[0.4s] ease-in-out'>Add to Wish List <i className='text-[#262626]'><FaHeart /></i></li>
                    <li className='flex items-center lg:gap-[15px] gap-[10px] text-[#767676] font-dm lg:text-[16px] text-[14px] font-normal lg:pt-[21px] pt-[5px] hover:text-[#262626] lg:hover:font-bold duration-[0.4s] ease-in-out'>Compare <i className='text-[#262626] '><TfiReload/></i></li>
                    <li className='flex items-center lg:gap-[15px] gap-[10px] text-[#767676] font-dm lg:text-[16px] text-[14px] font-normal lg:pt-[21px] pt-[5px] hover:text-[#262626] lg:hover:font-bold duration-[0.4s] ease-in-out'>Add to Cart <i className='text-[#262626]'><FaShoppingCart/></i></li>
                </ul>
            </div>
            </div>
            <div className="flex justify-between lg:pt-[14px] pt-[5px]">
                <h5 className='text-[#262626] font-dm lg:text-[20px] text-[16px] font-bold leading-auto'>Basic Crew Neck Tee</h5>
                <h6 className='text-[#767676] font-dm text-[16px] font-normal lg:leading-[30px] leading-auto px-[5px] lg:px-0'>$69.00</h6>
            </div>
            <div className="text-[#767676] font-dm lg:text-[16px] text-[14px] font-normal lg:leading-[30px] leading-auto lg:pt-[15px] pt-[0px]">Black</div>
            </div>


            <div className="lg:w-[23.6%] w-[48%] pt-[20px] lg:pt-[0px]">
            <div className="relative group overflow-hidden">
                <Link to="/product"> 
                <img src={four} className='lg:h-[370px] h-[180px] border-[1px] border-[#d4d4d4] w-full' alt="middle_four" />
                </Link>
                <div className="absolute lg:bottom-[-400px] bottom-0 left-0 w-full lg:h-[156px] h-[80px] bg-[#FFFFFF] flex items-center lg:pl-[189px] justify-center lg:group-hover:bottom-0 duration-[0.8s] ease-in-out border-[0.5px] border-[#d4d4d4]">
                <ul>
                    <li className='flex items-center lg:gap-[15px] gap-[10px] text-[#767676] font-dm lg:text-[16px] text-[14px] font-normal hover:text-[#262626] lg:hover:font-bold duration-[0.4s] ease-in-out'>Add to Wish List <i className='text-[#262626]'><FaHeart /></i></li>
                    <li className='flex items-center lg:gap-[15px] gap-[10px] text-[#767676] font-dm lg:text-[16px] text-[14px] font-normal lg:pt-[21px] pt-[5px] hover:text-[#262626] lg:hover:font-bold duration-[0.4s] ease-in-out'>Compare <i className='text-[#262626] '><TfiReload/></i></li>
                    <li className='flex items-center lg:gap-[15px] gap-[10px] text-[#767676] font-dm lg:text-[16px] text-[14px] font-normal lg:pt-[21px] pt-[5px] hover:text-[#262626] lg:hover:font-bold duration-[0.4s] ease-in-out'>Add to Cart <i className='text-[#262626]'><FaShoppingCart/></i></li>
                </ul>
            </div>
            </div>
            <div className="flex justify-between lg:pt-[14px] pt-[5px]">
                <h5 className='text-[#262626] font-dm lg:text-[20px] text-[16px] font-bold leading-auto'>Basic Crew Neck Tee</h5>
                <h6 className='text-[#767676] font-dm text-[16px] font-normal lg:leading-[30px] leading-auto px-[5px] lg:px-0'>$67.00</h6>
            </div>
            <div className="text-[#767676] font-dm lg:text-[16px] text-[14px] font-normal lg:leading-[30px] leading-auto lg:pt-[15px] pt-[0px]">Black</div>
            </div>
            </Flex>
        </Container>
    </section>
    </>
  )
}

export default Endimg