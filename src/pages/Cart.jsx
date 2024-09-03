import React, { useEffect, useRef, useState } from 'react'
import Container from '../components/Container'
import { FaAngleRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import choshma from "../assets/choshma.png"
import { FaCaretDown , FaCaretUp } from "react-icons/fa";
import { useSelector } from 'react-redux';



const Cart = () => {
  let data = useSelector((state)=>state.product)
  

  let [showSortSize , setShowSortSize] = useState(false);
  let showSortSizeRef = useRef();

  useEffect (()=>{
    document.addEventListener("click",(e)=>{
        if(showSortSizeRef.current.contains(e.target) == true){
          setShowSortSize(!showSortSize)
        }else{
            if(e.target.tagName !== "LI"){
                setShowSortSize(false)
            }
        }
    })
},[showSortSize]);

  return (
    <>
    <Container>
        <div className="lg:mt-[124px] mt-[60px] mx-2 lg:mx-0">
        <h1 className='font-dm lg:text-[49px] text-[30px] font-bold text-[#262626]'>Cart</h1>
        <h6 className='text-[#6D6D60] font-dm lg:text-[12px] font-normal'>Home <FaAngleRight className='inline-block'/> Cart</h6>
        </div>
        <div className="mt-[20px] lg:mt-[136px] lg:h-[90px] h-[56px] w-full bg-[#F5F5F3] flex justify-between items-center">
            <h6 className='font-dm lg:text-[16px] text-[14px] font-bold text-[#262626] w-[28%] lg:pl-[20px] pl-[10px]'>Product</h6>
            <h6 className='font-dm lg:text-[16px] text-[14px] font-bold text-[#262626] w-[25%]'>Price</h6>
            <h6 className='font-dm lg:text-[16px] text-[14px] font-bold text-[#262626] w-[27%]'>Quantity</h6>
            <h6 className='font-dm lg:text-[16px] text-[14px] font-bold text-[#262626] w-[20%]'>Total</h6>
        </div>
        <div className="lg:h-[160px] h-[90px] w-full bg-[#fff] flex justify-between items-center border-[1px] border-[#F0F0F0]">
            <div className="flex items-center lg:w-[21.5%] w-[28%]">
            <div className="lg:ml-[20px] ml-[10px]"><RxCross2 /></div>
            <div className="lg:h-[100px] h-[50px] lg:w-[100px] w-[50px] lg:ml-[40px] ml-[5px] flex items-center">
            <img src={choshma} alt="" />
            </div>
            <h6 className='font-dm text-[16px] font-bold text-[#262626] lg:ml-[20px] lg:block hidden'>Product name</h6>
            </div>
            <div className="lg:w-[24.5%] w-[24.5%]">
              <h5 className='font-dm lg:text-[20px] text-[14px] font-bold text-[#262626] lg:pl-[50px]'>$44.00</h5>
            </div>
            <div className="lg:w-[24%] w-[26%]">
            <div className="flex border-[1px] border-[#F0F0F0] pt-[3px] pb-[3px] lg:pl-[21px] px-[10px] lg:pr-[21px] lg:gap-x-[38px] gap-x-[12px] lg:w-[139px] w-[75px]">
                    <div className="text-[#767676] font-dm lg:text-[16px] text-[14px] font-normal">-</div>
                    <div className="text-[#767676] font-dm lg:text-[16px] text-[14px] font-normal">1</div>
                    <div className="text-[#767676] font-dm lg:text-[16px] text-[14px] font-normal">+</div>
                    </div>
            </div>
            <div className="w-[21%]">
            <h5 className='font-dm lg:text-[20px] text-[14px] font-bold text-[#262626]'>$44.00</h5>
            </div>
        </div>
        <div className="lg:h-[89px] h-[66px] w-full bg-[#fff] flex items-center border-[1px] border-[#F0F0F0]">
              <div className="relative lg:w-[22%] w-[30%]">
              <h5 ref={showSortSizeRef} className='text-[#767676] font-dm lg:text-[16px] text-[14px] font-normal lg:ml-[20px] ml-[10px] lg:pt-[10px] pt-[6px] lg:pb-[10px] pb-[6px] pl-[21px] lg:inline-block flex items-center border-[#F0F0F0] border-[1px]'>SIZE {showSortSize == true ? <FaCaretUp className='inline-block lg:ml-[171px] ml-[25px] lg:mr-[21px] mr-[8px]'/> : <FaCaretDown className='inline-block lg:ml-[171px] ml-[25px] lg:mr-[21px] mr-[8px]'/>} </h5>
              {showSortSize && 
                <ul className='bg-[#F0F0F0] text-center absolute top-[45px] left-0 right-[46px] z-50 ml-[20px]'>
                <li className='duration-[0.3s] ease-in-out border-[1px] border-[#f6f6f6] hover:border-[1px] hover:border-[#c6c6c6] cursor-pointer p-[8px]'>M</li>
                <li className='duration-[0.3s] ease-in-out border-[1px] border-[#f6f6f6] hover:border-[1px] hover:border-[#c6c6c6] cursor-pointer p-[8px]'>L</li>
                <li className='duration-[0.3s] ease-in-out border-[1px] border-[#f6f6f6] hover:border-[1px] hover:border-[#c6c6c6] cursor-pointer p-[8px]'>XL</li>
                <li className='duration-[0.3s] ease-in-out border-[1px] border-[#f6f6f6] hover:border-[1px] hover:border-[#c6c6c6] cursor-pointer p-[8px]'>XXL</li>
              </ul>
            }
              </div>
              <div className="lg:w-[73%] w-[40%]">
                <h5 className='font-dm text-[14px] font-bold text-[#262626] lg:ml-0 ml-[16px]'>Apply coupon</h5>
              </div>
              <div className="lg:w-[7%] w-[30%] text-end mx-2 lg:mx-0">
                <h5 className='font-dm text-[14px] font-bold text-[#262626] lg:mr-[20px]'>Update cart</h5>
              </div>
        </div>
        <div className="lg:mt-[54px] mt-[40px] text-end mx-2 lg:mx-0">
          <h5 className='font-dm lg:text-[20px] text-[16px] font-bold text-[#262626]'>Cart totals</h5>
        </div>
        <div className="lg:mt-[24px] mt-[10px]">
          <div className="flex justify-end mx-2 lg:mx-0">
            <div className="border-[1px] border-[#F0F0F0] lg:pt-[17px] pt-[10px] lg:pl-[20px] pl-[16px] lg:pb-[14px] pb-[10px] lg:pr-[234px] pr-[34px]">
              <h4 className='font-dm lg:text-[16px] text-[14px] font-bold text-[#262626]'>Subtotal</h4>
            </div>
            <div className="border-[1px] border-[#F0F0F0] lg:pt-[13px] pt-[10px] lg:pl-[20px] pl-[30px] lg:pb-[11px] pb-[10px] lg:pr-[239px] pr-[34px]">
              <h6 className='font-dm lg:text-[16px] text-[14px] font-normal text-[#767676]'>389.99 $</h6>
            </div>
          </div>
          <div className="flex justify-end mx-2 lg:mx-0">
          <div className="border-[1px] border-[#F0F0F0] llg:pt-[17px] pt-[10px] lg:pl-[20px] pl-[23px] lg:pb-[14px] pb-[10px] lg:pr-[262px] pr-[50px]">
              <h4 className='font-dm lg:text-[16px] text-[14px] font-bold text-[#262626]'>Total</h4>
            </div>
            <div className="border-[1px] border-[#F0F0F0] lg:pt-[13px] pt-[10px] lg:pl-[20px] pl-[30px] lg:pb-[11px] pb-[10px] lg:pr-[239px] pr-[34px]">
              <h6 className='font-dm lg:text-[16px] text-[14px] font-normal text-[#767676]'>389.99 $</h6>
            </div>
          </div>
        </div>
        <div className="flex justify-end lg:mt-[30px] mt-[20px] mx-2 lg:mx-0">
        <a className="font-dm text-[14px] font-bold lg:py-[16px] py-[12px] lg:px-[24px] px-[16px] border-[1px] border-[#262626] inline-block bg-[#262626] text-white hover:bg-white hover:text-[#262626] cursor-pointer duration-[0.7s] ease-in-out">Proceed to Checkout</a>
        </div>
    </Container>
    </>
  )
}

export default Cart