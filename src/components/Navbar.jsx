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
    <nav className='lg:h-[80px] h-[65px] bg-[#FFF]'>
        <Container>
        <Flex className="justify-between h-[80px] items-center px-3 lg:px-0"> 
        <div className="lg:w-[10%] w-[50%]"> 
            <img src={logo} alt="logo" />
        </div> 
        <div className="lg:w-[90%] w-[100%]">
            <ul className={`pl-[15px] lg:pl-0 lg:flex justify-center gap-[40px] absolute top-0 lg:left-0 lg:static duration-700 ease-in-out" ${ show == true ? "bg-[#f3f3f3] h-full top-[60px] left-0 w-full z-[60] border-b-[1px] border-[#F0F0F0]" : " top-[60px] left-[-300px] w-full"}`}>
                <li className='lg:text-[#767676] text-[#000] font-dm text-[14px] font-normal duration-400 ease-in-out hover:text-[#262626]  hover:font-medium pt-[10px] lg:pt-0'><Link to="/">Home</Link></li>
                <li className='lg:text-[#767676] text-[#000] font-dm text-[14px] font-normal duration-400 ease-in-out hover:text-[#262626] hover:font-medium pt-[10px] lg:pt-0'><Link to="/product">Shop</Link></li>
                <li className='lg:text-[#767676] text-[#000] font-dm text-[14px] font-normal duration-400 ease-in-out hover:text-[#262626] hover:font-medium pt-[10px] lg:pt-0'><Link to="/about">About</Link></li>
                <li className='lg:text-[#767676] text-[#000] font-dm text-[14px] font-normal duration-400 ease-in-out hover:text-[#262626] hover:font-medium pt-[10px] lg:pt-0'><Link to="/contact">Contact</Link></li>
                <li className='lg:text-[#767676] text-[#000] font-dm text-[14px] font-normal duration-400 ease-in-out hover:text-[#262626] hover:font-medium pt-[10px] lg:pt-0 pb-[40px] lg:pb-0'>Journal</li>
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