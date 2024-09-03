import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import Container from '../components/Container'

const Login = () => {
  return (
    <>
    <Container>
        <div className="mx-2 lg:mx-0">
        <div className="lg:mt-[124px] mt-[60px]">
          <h2 className='text-[#262626] font-dm lg:text-[49px] text-[30px] font-bold'>Login</h2>
          <h6 className='text-[#6D6D60] font-dm lg:text-[12px] font-medium'>Home <FaAngleRight className='inline-block'/> Login</h6>
          </div>
          <div className="border-b-[#F0F0F0] border-b-[1px] w-full">
            <p className='text-[#767676] font-dm lg:text-[16px] text-[14px] font-normal lg:pt-[127px] pt-[60px] lg:w-[40%] lg:pb-[62px] pb-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
          </div>
          <div className="">
            <h1 className='text-[#262626] font-dm lg:text-[39px] text-[24px] font-bold lg:pt-[50px] pt-[20px]'>Returning Customer</h1>
            <div className="gap-[40px] lg:flex flex-none">
                <div className="lg:w-[30%] w-full">
                <label htmlFor="emailadd" className='text-[#262626] font-dm lg:text-[16px] text-[14px] font-bold lg:pt-[42px] pt-[23px] block'>Email address</label>
                <input type="email" id='emailadd' placeholder='company@domain.com' className='outline-none h-[40px] w-full border-b-[1px] border-b-[#F0F0F0]'/>
                </div>
                <div className="lg:w-[30%] w-full">
                <label htmlFor="pass" className='text-[#262626] font-dm lg:text-[16px] text-[14px] font-bold lg:pt-[42px] pt-[23px] block'>Password</label>
                <input type="password" id='pass' placeholder='••••••••' className='outline-none h-[40px] w-full border-b-[1px] border-b-[#F0F0F0]'/>
                </div>
            </div>
            <div className="lg:pb-[70px] pb-[30px] w-full border-b-[#F0F0F0] border-b-[1px]">
            <h5 className='text-[#fff] font-dm text-[14px] font-bold pt-[12px] pb-[12px] pr-[50px] pl-[50px] lg:pt-[16px] lg:pb-[16px] lg:pr-[83px] lg:pl-[77px] bg-[#262626] inline-block cursor-pointer lg:mt-[25px] mt-[15px] border-[1px] border-[#2B2B2B] hover:bg-[white] hover:text-[#262626] duration-[0.7s] ease-in-out'>Log in</h5>
            </div>
          </div>
          <div className="">
            <h2 className='text-[#262626] font-dm lg:text-[39px] text-[24px] font-bold lg:pt-[50px] pt-[30px]'>New Customer</h2>
            <p className='text-[#767676] font-dm lg:text-[16px] font-normal pt-[10px] lg:w-[40%] lg:pb-[50px] pb-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
            <div className="">
            <h5 className='text-[#fff] font-dm text-[14px] font-bold pt-[12px] pb-[12px] pr-[45px] pl-[45px] lg:pt-[16px] lg:pb-[16px] lg:pr-[71px] lg:pl-[65px] bg-[#262626] inline-block cursor-pointer border-[1px] border-[#2B2B2B] hover:bg-[white] hover:text-[#262626] duration-[0.7s] ease-in-out lg:mb-[40px] mb-[0px]'>Continue</h5>
            </div>
          </div>
        </div>
    </Container>
    </>
  )
}

export default Login