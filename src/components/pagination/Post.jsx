import React, { useContext } from 'react'
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { apiData } from '../ContextApi';

const Post = ({allData}) => {
  return (
    <>
    {allData.map((item) => (
            <div className="w-[32%] py-[25px]">
            <Link to={`/product/${item.id}`}>
            <div className="">
            <div className="relative group overflow-hidden">
                <img className='lg:h-[370px] h-[180px] border-[1px] border-[#d4d4d4] w-full' src={item.thumbnail} alt="..." />
            <div className="absolute lg:bottom-[-400px] bottom-0 left-0 w-full lg:h-[156px] h-[80px] bg-[#FFFFFF] flex items-center lg:pl-[189px] justify-center lg:group-hover:bottom-0 duration-[0.8s] ease-in-out border-[0.5px] border-[#d4d4d4]">
                <ul>
                    <li className='flex items-center lg:gap-[15px] gap-[10px] text-[#767676] font-dm lg:text-[16px] text-[14px] font-normal hover:text-[#262626] lg:hover:font-bold duration-[0.4s] ease-in-out'>Add to Wish List <i className='text-[#262626]'><FaHeart /></i></li>
                    <li className='flex items-center lg:gap-[15px] gap-[10px] text-[#767676] font-dm lg:text-[16px] text-[14px] font-normal lg:pt-[21px] pt-[5px] hover:text-[#262626] lg:hover:font-bold duration-[0.4s] ease-in-out'>Compare <i className='text-[#262626] '><TfiReload/></i></li>
                    <li className='flex items-center lg:gap-[15px] gap-[10px] text-[#767676] font-dm lg:text-[16px] text-[14px] font-normal lg:pt-[21px] pt-[5px] hover:text-[#262626] lg:hover:font-bold duration-[0.4s] ease-in-out'>Add to Cart <i className='text-[#262626]'><FaShoppingCart/></i></li>
                </ul>
            </div>
            </div>
            <div className="flex justify-between lg:pt-[14px] pt-[5px]">
                <h5 className='text-[#262626] font-dm lg:text-[20px] text-[16px] font-bold leading-auto'>{item.title}</h5>
                <h6 className='text-[#767676] font-dm text-[16px] font-normal lg:leading-[30px] leading-auto px-[5px] lg:px-0'>${item.price}</h6>
            </div>
            <div className="text-[#767676] font-dm lg:text-[16px] text-[14px] font-normal lg:leading-[30px] leading-auto lg:pt-[15px] pt-[0px]">{item.category}</div>
            </div>
            </Link>
            </div>
            ))}
    </>
  )
}

export default Post