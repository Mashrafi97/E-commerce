import React, { useContext } from 'react'
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";

const Arrivals = ({item}) => {
    console.log(item);

  return (
            <>
            <div className="w-[23.5%]">
            <div className="relative group overflow-hidden">
                <img className='h-[370px]' src={item.thumbnail} alt={item.thumbnail} />
            <div className="absolute bottom-[-400px] left-0 w-full h-[156px] bg-[#FFFFFF] flex items-center pl-[189px] group-hover:bottom-0 duration-[0.8s] ease-in-out">
                <ul>
                    <li className='flex items-center gap-[15px] text-[#767676] font-dm text-[16px] font-normal hover:text-[#262626] hover:font-bold duration-[0.4s] ease-in-out'>Add to Wish List <i className='text-[#262626]'><FaHeart /></i></li>
                    <li className='flex items-center gap-[15px] text-[#767676] font-dm text-[16px] font-normal pt-[21px] hover:text-[#262626] hover:font-bold duration-[0.4s] ease-in-out'>Compare <i className='text-[#262626] '><TfiReload/></i></li>
                    <li className='flex items-center gap-[15px] text-[#767676] font-dm text-[16px] font-normal pt-[21px] hover:text-[#262626] hover:font-bold duration-[0.4s] ease-in-out'>Add to Cart <i className='text-[#262626]'><FaShoppingCart/></i></li>
                </ul>
            </div>
            </div>
            <div className="flex justify-between pt-[14px]">
                <h5 className='text-[#262626] font-dm text-[20px] font-bold leading-auto'>{item.title}</h5>
                <h6 className='text-[#767676] font-dm text-[16px] font-normal leading-[30px]'>${item.price}</h6>
            </div>
            <div className="text-[#767676] font-dm text-[16px] font-normal leading-[30px] pt-[15px]">{item.category}</div>
            </div>
            </>
  )
}

export default Arrivals