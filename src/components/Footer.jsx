import React from 'react'
import Container from './Container'
import Flex from './Flex'
import logo from "../assets/logo_footer.png"
import { FaFacebookF,FaLinkedinIn,FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer className='bg-[#F5F5F3] lg:mt-[106px] mt-[30px] px-3 lg:px-0'>
        <Container>
            <Flex className="justify-between lg:pt-[53px] pt-[30px] flex-wrap">
                    <div className="py-[2px] lg:w-[12%] w-[30%]">
                        <h6 className='text-[#262626] text-[16px] font-bold font-dm leading-[23px]'>MENU</h6>
                        <ul className='pt-[10px]'>
                            <li className='text-[#6D6D6D] text-[14px] font-normal font-dm leading-[23px]'>Home</li>
                            <li className='text-[#6D6D6D] text-[14px] font-normal font-dm leading-[23px]'>Shop</li>
                            <li className='text-[#6D6D6D] text-[14px] font-normal font-dm leading-[23px]'>About</li>
                            <li className='text-[#6D6D6D] text-[14px] font-normal font-dm leading-[23px]'>Contact</li>
                            <li className='text-[#6D6D6D] text-[14px] font-normal font-dm leading-[23px]'>Journal</li>
                        </ul>
                    </div>
                    <div className="py-[2px] lg:w-[12%] w-[30%]">
                    <h6 className='text-[#262626] text-[16px] font-bold font-dm leading-[23px]'>SHOP</h6>
                        <ul className='pt-[10px]'>
                            <li className='text-[#6D6D6D] text-[14px] font-normal font-dm leading-[23px]'>Category 1</li>
                            <li className='text-[#6D6D6D] text-[14px] font-normal font-dm leading-[23px]'>Category 2</li>
                            <li className='text-[#6D6D6D] text-[14px] font-normal font-dm leading-[23px]'>Category 3</li>
                            <li className='text-[#6D6D6D] text-[14px] font-normal font-dm leading-[23px]'>Category 4</li>
                            <li className='text-[#6D6D6D] text-[14px] font-normal font-dm leading-[23px]'>Category 5</li>
                        </ul>
                    </div>
                    <div className="py-[2px] lg:w-[12%] w-[30%]">
                    <h6 className='text-[#262626] text-[16px] font-bold font-dm leading-[23px]'>HELP</h6>
                        <ul className='pt-[10px]'>
                            <li className='text-[#6D6D6D] text-[14px] font-normal font-dm leading-[23px]'>Privacy Policy</li>
                            <li className='text-[#6D6D6D] text-[14px] font-normal font-dm leading-[23px]'>Terms & Conditions</li>
                            <li className='text-[#6D6D6D] text-[14px] font-normal font-dm leading-[23px]'>Special E-shop</li>
                            <li className='text-[#6D6D6D] text-[14px] font-normal font-dm leading-[23px]'>Shipping</li>
                            <li className='text-[#6D6D6D] text-[14px] font-normal font-dm leading-[23px]'>Secure Payments</li>
                        </ul>
                    </div>
                    <div className="lg:w-[34%] w-[70%] pt-[28px] lg:pt-[0px]">
                        <h4 className='text-[#262626] text-[16px] font-bold font-dm leading-[23px]'>(052) 611-5711</h4>
                        <h4 className='text-[#262626] text-[16px] font-bold font-dm leading-[23px]'>company@domain.com</h4>
                        <h6 className='text-[#6D6D6D] text-[14px] font-normal font-dm pt-[5px] leading-[23px]'>575 Crescent Ave. Quakertown, PA 18951</h6>

                    </div>
                    <div className="w-[26%] pt-[30px] lg:pt-[0px]">
                        <img src={logo} alt="logo" />
                    </div>
            </Flex>
            <Flex className="justify-between lg:pt-[65px] pt-[15px] lg:pb-[52px] pb-[30px] flex-wrap">
            <div className="lg:w-[50%] w-[100%] flex gap-[16px] text-[#262626] text-[20px]">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />
            </div>
            <div className="lg:w-[50%] w-[100%] pt-[20px] lg:pt-[0px] lg:text-end text-[#6D6D6D] text-[14px] font-normal font-dm leading-[23px] text-center">
                <h5>2020 Orebi Minimal eCommerce Figma Template by Adveits</h5>
            </div>
            </Flex>
        </Container>
    </footer>
    </>
  )
}

export default Footer