import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import Container from '../components/Container'

const Contact = () => {
  return (
    <>
    <Container>
      <div className="mx-2 lg:mx-0">
      <div className="lg:mt-[124px] mt-[60px]">
          <h2 className='text-[#262626] font-dm lg:text-[49px] text-[30px] font-bold'>Contact</h2>
          <h6 className='text-[#6D6D60] font-dm lg:text-[12px] font-medium'>Home <FaAngleRight className='inline-block'/> Contact</h6>
          </div>
          <h1 className='text-[#262626] font-dm lg:text-[39px] text-[24px] font-bold lg:pt-[124px] pt-[60px]'>Fill up a Form</h1>
          <div className="">
            <label htmlFor="name" className='text-[#262626] font-dm lg:text-[16px] text-[14px] font-bold lg:pt-[42px] pt-[23px] block'>Name</label>
            <input type="text" id='name' placeholder='Your name here' className='outline-none h-[40px] lg:w-[50%] w-[90%] border-b-[1px] border-b-[#F0F0F0]'/>
          </div>
          <div className="">
            <label htmlFor="email" className='text-[#262626] font-dm lg:text-[16px] text-[14px] font-bold lg:pt-[42px] pt-[23px] block'>Email</label>
            <input type="email" id='email' placeholder='Your email here' className='outline-none h-[40px] lg:w-[50%] w-[90%] border-b-[1px] border-b-[#F0F0F0]'/>
          </div>
          <div className="">
            <label htmlFor="message" className='text-[#262626] font-dm lg:text-[16px] text-[14px] font-bold lg:pt-[42px] pt-[23px] block'>Message</label>
            <textarea name="" id="message" placeholder='Your message here' className='pt-[8px] resize-none outline-none lg:h-[90px] h-[60px] lg:w-[50%] w-[90%] border-b-[1px] border-b-[#F0F0F0]'></textarea>
          </div>
          <div className="">
            <h5 className='text-[#fff] font-dm text-[14px] font-bold pt-[14px] pb-[14px] pr-[65px] pl-[65px] lg:pt-[16px] lg:pb-[16px] lg:pr-[85px] lg:pl-[85px] bg-[#262626] inline-block cursor-pointer lg:mt-[25px] mt-[15px] border-[1px] border-[#2B2B2B] hover:bg-[white] hover:text-[#262626] duration-[0.7s] ease-in-out'>Post</h5>
          </div>
          <div className="lg:pt-[140px] pt-[30px] pb-[20px] lg:pb-[140px]">
          <iframe className='w-full lg:h-[572px] h-[260px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.17039206647!2d90.37999990952784!3d23.741302478587663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1719466214680!5m2!1sen!2sbd">
          </iframe></div>
      </div>
    </Container>
    </>
  )
}

export default Contact