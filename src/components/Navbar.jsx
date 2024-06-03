import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import logo from "../assets/logo.png"
import { RxCross2 } from "react-icons/rx";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Navbar = () => {
    let [show , setShow] = useState(false)
    let handleShow = () =>{
        setShow(!show)
    }
  return (
    <nav className='h-[80px] bg-[#FFF]'>
        <Container>
        <Flex className="justify-between h-[80px] items-center px-3 lg:px-0"> 
        <div className="lg:w-[10%] w-[50%]">
            <img src={logo} alt="logo" />
        </div>
        <div className="lg:w-[90%] w-[50%]">
            <ul className={`pl-[15px] lg:pl-0 lg:flex justify-center gap-[40px] absolute top-0 lg:left-0 lg:static duration-700 ease-in-out" ${ show == true ? "bg-gradient-to-r from-[#6D6D6D] to-[#6D6D6D]  top-[60px] left-0 w-full z-[2]" : " top-[60px] left-[-300px] w-full"}`}>
                <li className='lg:text-[#767676] text-[#fff] font-dm text-[14px] font-normal duration-400 ease-in-out hover:text-[#262626]  hover:font-medium pt-[20px] lg:pt-0'><Link to="/">Home</Link></li>
                <li className='lg:text-[#767676] text-[#fff] font-dm text-[14px] font-normal duration-400 ease-in-out hover:text-[#262626] hover:font-medium pt-[10px] lg:pt-0'><Link to="/product">Shop</Link></li>
                <li className='lg:text-[#767676] text-[#fff] font-dm text-[14px] font-normal duration-400 ease-in-out hover:text-[#262626] hover:font-medium pt-[10px] lg:pt-0'>About</li>
                <li className='lg:text-[#767676] text-[#fff] font-dm text-[14px] font-normal duration-400 ease-in-out hover:text-[#262626] hover:font-medium pt-[10px] lg:pt-0'>Contacts</li>
                <li className='lg:text-[#767676] text-[#fff] font-dm text-[14px] font-normal duration-400 ease-in-out hover:text-[#262626] hover:font-medium pt-[10px] lg:pt-0 pb-[40px] lg:pb-0'>Journal</li>
            </ul>
        </div>
        <div className="lg:hidden" onClick={handleShow}>
            {show == true ? <RxCross2 /> : <FaBarsStaggered />}
        </div>
        </Flex>
    </Container>
    </nav>
  )
}

export default Navbar