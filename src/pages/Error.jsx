import React from 'react'
import Container from '../components/Container'
import { FaSearch } from "react-icons/fa";

const Error = () => {
  return (
    <>
    <Container>
      <div className="mx-2 lg:mx-0">
      <div className="lg:w-[35%] w-full">
        <h1 className='font-dm lg:text-[200px] text-[80px] font-bold text-[#262626] pt-[81px]'>404</h1>
        <p className='font-dm text-[14px] font-normal text-[#262626]'>The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>
        <div className="relative mt-[50px]">
        <input type="search" placeholder='Type to search' className='border-[1px] border-[#F0F0F0] lg:h-[71px] h-[40px] lg:w-[100%] lg:pl-[21px] pl-[10px] lg:pr-[54px] pr-[32px] font-dm placeholder:text-[14px] placeholder:lg:text-[16px] placeholder:text-[#767676] outline-none'/>
          <div className="absolute top-[50%] translate-y-[-50%] lg:right-[28px] right-[128px]">
            <FaSearch/>
          </div>
        </div>
        <div className="lg:mt-[60px] mt-[30px]">
        <a className="font-dm text-[14px] font-bold lg:py-[16px] py-[10px] lg:px-[50px] px-[30px] border-[1px] border-[#262626] inline-block bg-[#262626] text-white hover:bg-white hover:text-[#262626] cursor-pointer duration-[0.7s] ease-in-out">Back to Home</a>
        </div>
      </div>
      </div>
    </Container>
    </>
  )
}

export default Error