import React, { useEffect, useRef, useState} from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaRegChartBar } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import img from "../assets/img.png"
import { IoClose } from "react-icons/io5";

const Header = () => {

    let [cartShow, setCartShow] = useState(false)
    let [userShow, setUserShow] = useState(false)
    let [shopShow, setShopShow] = useState(false)
    let cartref = useRef()
    let shopref = useRef()
    let userref = useRef()
    useEffect(()=>{
        document.addEventListener("click",(e)=>{
            if(cartref.current.contains(e.target) == true){
                setCartShow(!cartShow)
            }else{
                if(e.target.tagName !== "LI"){
                    setCartShow(false)
                }
            }
            if(userref.current.contains(e.target) == true){
                setUserShow(!userShow)
            }else{
                if(e.target.tagName !== "DIV"){
                    setUserShow(false)
                }
            }
            if(shopref.current.contains(e.target) == true){
                setShopShow(!shopShow)
            }else{
                if(e.target.tagName !== "DIV"){
                    setShopShow(false)
                }
            }
        })
    },[cartShow , userShow , shopShow]) 

  return (
    <header className='bg-[#F5F5F3] h-[100px] items-center flex'>
        <Container>
            <Flex>
                <div className="lg:w-[36%] w-[20%] flex items-center relative px-3 lg:px-0">
                    <div ref={cartref} className="flex items-center">
                    <div className=""><FaRegChartBar/></div>
                    <p className='text-[#262626] text-[14px] font-normal pl-[7px] font-dm lg:opacity-[100] opacity-[0]'>Shop by Category</p>
                    </div>
                    {cartShow &&
                    <div className="z-50 absolute top-[50px] lg:left-0 left-[10px] bg-[#262626] lg:w-[263px] w-[163px]">
                    <ul className='grid grid-cols-1 divide-y divide-[#2D2D2D]'>
                        <li className='text-[#fff] font-dm text-[14px] font-normal duration-[0.6s] ease-in-out opacity-[70%] leading-auto lg:pb-[15px] lg:pt-[15px] pb-[6px] pt-[6px] hover:pl-[16px] hover:opacity-[100%] hover:font-bold'><a href="#" className='pl-[21px]'>Accesories</a></li>
                        <li className='text-[#fff] font-dm text-[14px] font-normal duration-[0.6s] ease-in-out opacity-[70%] leading-auto lg:pb-[15px] lg:pt-[15px] pb-[6px] pt-[6px] hover:pl-[16px] hover:opacity-[100%] hover:font-bold'><a href="#" className='pl-[21px]'>Furniture</a></li>
                        <li className='text-[#fff] font-dm text-[14px] font-normal duration-[0.6s] ease-in-out opacity-[70%] leading-auto lg:pb-[15px] lg:pt-[15px] pb-[6px] pt-[6px] hover:pl-[16px] hover:opacity-[100%] hover:font-bold'><a href="#" className='pl-[21px]'>Electronics</a></li>
                        <li className='text-[#fff] font-dm text-[14px] font-normal duration-[0.6s] ease-in-out opacity-[70%] leading-auto lg:pb-[15px] lg:pt-[15px] pb-[6px] pt-[6px] hover:pl-[16px] hover:opacity-[100%] hover:font-bold'><a href="#" className='pl-[21px]'>Clothes</a></li>
                        <li className='text-[#fff] font-dm text-[14px] font-normal duration-[0.6s] ease-in-out opacity-[70%] leading-auto lg:pb-[15px] lg:pt-[15px] pb-[6px] pt-[6px] hover:pl-[16px] hover:opacity-[100%] hover:font-bold'><a href="#" className='pl-[21px]'>Bags</a></li>
                        <li className='text-[#fff] font-dm text-[14px] font-normal duration-[0.6s] ease-in-out opacity-[70%] leading-auto lg:pb-[15px] lg:pt-[15px] pb-[6px] pt-[6px] hover:pl-[16px] hover:opacity-[100%] hover:font-bold'><a href="#" className='pl-[21px]'>Home appliances</a></li>
                    </ul>
                </div>
                    }
                </div>
                <div className="lg:w-[39%] w-[50%]  text-center relative">
                    <input type="search" placeholder='Search Products' className='lg:h-[50px] h-[40px] w-full pl-[21px] pr-[46px] font-dm outline-none'/>
                    <div className="absolute top-[50%] translate-y-[-50%] right-[14px]">
                        <FaSearch/>
                    </div> 
                </div>
                <div ref={userref} className="lg:w-[25%] w-[30%] flex items-center lg:justify-end justify-center relative">
                    <div className="flex lg:pr-[41px] pr-[15px] items-center">
                    <FaUser/>
                    <FaCaretDown/>
                    </div>
                    {userShow &&
                    <div className="z-50 absolute top-[58px] right-[58px] w-[200px] border-[1px] grid grid-cols-1 divide-y divide-[#5c5757]">
                    <div className="bg-[#2B2B2B] h-[50px] hover:bg-white duration-[0.7s] ease-in-out">
                        <a className='text-[#fff] text-[14px] font-bold font-dm hover:font-normal hover:text-[#262626] w-full h-full  justify-center items-center flex' href="#">My Account</a>
                    </div>
                    <div className="bg-white h-[50px] hover:bg-[#2B2B2B] duration-[0.7s] ease-in-out">
                        <a className='text-[#262626] text-[14px] font-normal font-dm hover:font-bold hover:text-white  w-full h-full  justify-center items-center flex' href="#">Log Out</a>
                    </div>
                </div>
                    }
                    <div ref={shopref} className="relative">
                    <FaCartShopping/>
                    </div>
                    {shopShow &&
                    <div className="z-50 absolute top-[58px] right-[15px] border-[1px]">
                    <div className="flex bg-[#F5F5F3] lg:p-[20px] p-[16px] items-center justify-center">
                        <div className="lg:w-[80px] lg:h-[80px] w-[50px] h-[50px]">
                            <img src={img} alt="img" />
                        </div>
                        <div className="pl-[20px]">
                            <h5 className='text-[#262626] text-[14px] font-bold font-dm leading-auto w-[125px]'>Black Smart Watch</h5>
                            <h6 className='text-[#262626] text-[14px] font-bold font-dm leading-auto'>$44.00</h6>
                        </div>
                        <div className="pl-[78px] flex text-[#262626] text-[22px]">
                        <IoClose />
                        </div>
                    </div>
                    <div className="bg-white items-center pl-[21px] pt-[14px] pr-[22px] pb-[20px]">
                        <h5 className='text-[#262626] text-[16px] font-bold font-dm leading-[23px]'><span className='text-[#767676] text-[16px] font-medium font-dm leading-[23px]'>Subtotal:</span> $44.00</h5>
                        <div className="flex mt-[13px]">
                        <div className="">
                            <a className='lg:pt-[16px] pt-[12px] duration-[0.7s] ease-in-out inline-block lg:pb-[16px] pb-[12px] lg:pr-[40px] pr-[30px] lg:pl-[41px] pl-[31px] border-[1px] border-[#2B2B2B] text-[#262626] text-[14px] font-bold font-dm hover:bg-black  hover:text-white' href="#">View Cart</a>
                        </div>
                        <div className="">
                        <a className='lg:ml-[21px] ml-[11px] duration-[0.7s] ease-in-out lg:pt-[16px] pt-[12px] inline-block bg-[#262626] lg:pb-[16px] pb-[12px] lg:pr-[40px] pr-[30px] lg:pl-[41px] pl-[31px] border-[1px] border-[#2B2B2B] text-[#fff] text-[14px] font-bold font-dm hover:bg-white  hover:text-black' href="#">Checkout</a>
                        </div>
                        </div>
                    </div>
                </div>
                    }
                </div>
            </Flex>
        </Container>
    </header>
  )
}

export default Header