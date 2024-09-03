import React, { useContext, useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { apiData } from '../ContextApi';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slice/productSlice';

const Post = ({allData,categorySearchFilter,multiList}) => {

let [filterShow, setFilterShow] = useState([])
let [catFilterShow, setCatFilterShow] = useState(true)

useEffect(()=>{
  let filterSep = categorySearchFilter.slice(0,5)
  setFilterShow(filterSep)
},[categorySearchFilter])

let handleShow =()=>{
  setFilterShow(categorySearchFilter)
  setCatFilterShow(false)
}
let handleHide=()=>{
  let filterSep = categorySearchFilter.slice(0,5)
  setFilterShow(filterSep)
  setCatFilterShow(true)
}

let dispatch = useDispatch()
let handleCart =(item)=>{
  dispatch(addToCart({...item, qun : 1}))
}



  return (
    <>
    <div className={`${multiList == "activeList" ? "" : "flex justify-between flex-wrap"}`}>
      {categorySearchFilter.length > 0 ? 
      <div className="">
        <div className="flex flex-wrap justify-between">
        {
          filterShow.map((item) => (
            <div className="lg:w-[32%] w-[100%] lg:py-[25px] py-[10px]">
            <Link to={`/product/${item.id}`}>
            <div className="">
            <div className="relative group overflow-hidden">
                <img className='lg:h-[370px] h-[180px] border-[1px] border-[#d4d4d4] w-full' src={item.thumbnail} alt="..." />
            <div className="absolute lg:bottom-[-400px] bottom-0 left-0 w-full lg:h-[156px] h-[75px] bg-[#FFFFFF] flex items-center lg:pl-[189px] justify-center lg:group-hover:bottom-0 duration-[0.8s] ease-in-out border-[0.5px] border-[#d4d4d4]">
                <ul>
                    <li className='flex items-center lg:gap-[15px] gap-[7px] text-[#767676] font-dm lg:text-[16px] text-[12px] font-normal hover:text-[#262626] lg:hover:font-bold duration-[0.4s] ease-in-out'>Add to Wish List <i className='text-[#262626]'><FaHeart /></i></li>
                    <li className='flex items-center lg:gap-[15px] gap-[10px] text-[#767676] font-dm lg:text-[16px] text-[14px] font-normal lg:pt-[21px] pt-[5px] hover:text-[#262626] lg:hover:font-bold duration-[0.4s] ease-in-out'>Compare <i className='text-[#262626] '><TfiReload/></i></li>
                    <li className='flex items-center lg:gap-[15px] gap-[10px] text-[#767676] font-dm lg:text-[16px] text-[14px] font-normal lg:pt-[21px] pt-[5px] hover:text-[#262626] lg:hover:font-bold duration-[0.4s] ease-in-out'>Add to Cart <i className='text-[#262626]'><FaShoppingCart/></i></li>
                </ul>
            </div>
            </div>
            <div className="flex justify-between lg:pt-[14px] pt-[5px]">
                <h5 className='text-[#262626] font-dm lg:text-[20px] text-[14px] font-bold'>{item.title}</h5>
                <h6 className='text-[#767676] font-dm lg:text-[16px] text-[14px] font-normal lg:leading-[30px] leading-auto px-[5px] lg:px-0'>${item.price}</h6>
            </div>
            <div className="text-[#767676] font-dm lg:text-[16px] text-[12px] font-normal lg:leading-[30px] leading-auto lg:pt-[15px] pt-[0px]">{item.category}</div>
            </div>
            </Link>
            </div>
            ))
        }
      </div>
      {catFilterShow ? categorySearchFilter.length > 5 && 
      <button className='text-[#fff] font-dm text-[14px] font-bold pt-[8px] pb-[8px] pr-[35px] pl-[35px] lg:pt-[16px] lg:pb-[16px] lg:pr-[83px] lg:pl-[77px] bg-[#262626] inline-block cursor-pointer border-[1px] border-[#2B2B2B] hover:bg-[white] hover:text-[#262626] duration-[0.7s] ease-in-out lg:mt-[40px] mt-[25px]' onClick={handleShow}>Show All</button>
      :
      <button className='text-[#fff] font-dm text-[14px] font-bold pt-[8px] pb-[8px] pr-[35px] pl-[35px] lg:pt-[16px] lg:pb-[16px] lg:pr-[83px] lg:pl-[77px] bg-[#262626] inline-block cursor-pointer border-[1px] border-[#2B2B2B] hover:bg-[white] hover:text-[#262626] duration-[0.7s] ease-in-out lg:mt-[40px] mt-[25px]' onClick={handleHide}>Hide</button> 
    }
      </div>
      :
      allData.map((item) => (
        <div className="lg:w-[32%] w-[100%] lg:py-[25px] py-[10px]">
        <div className="">
        <div className="relative group overflow-hidden">
        <Link to={`/product/${item.id}`}>
            <img className='lg:h-[370px] h-[180px] border-[1px] border-[#d4d4d4] w-full' src={item.thumbnail} alt="..." />
        </Link>
        <div className="absolute lg:bottom-[-400px] bottom-0 left-0 w-full lg:h-[156px] h-[75px] bg-[#FFFFFF] flex items-center lg:pl-[189px] justify-center lg:group-hover:bottom-0 duration-[0.8s] ease-in-out border-[0.5px] border-[#d4d4d4]">
            <ul>
                <li onClick={()=>handleCart(item)} className='flex items-center lg:gap-[15px] gap-[7px] text-[#767676] font-dm lg:text-[16px] text-[12px] font-normal hover:text-[#262626] lg:hover:font-bold duration-[0.4s] ease-in-out'>Add to Wish List <i className='text-[#262626]'><FaHeart /></i></li>
                <li className='flex items-center lg:gap-[15px] gap-[10px] text-[#767676] font-dm lg:text-[16px] text-[14px] font-normal lg:pt-[21px] pt-[5px] hover:text-[#262626] lg:hover:font-bold duration-[0.4s] ease-in-out'>Compare <i className='text-[#262626] '><TfiReload/></i></li>
                <li className='flex items-center lg:gap-[15px] gap-[10px] text-[#767676] font-dm lg:text-[16px] text-[14px] font-normal lg:pt-[21px] pt-[5px] hover:text-[#262626] lg:hover:font-bold duration-[0.4s] ease-in-out'>Add to Cart <i className='text-[#262626]'><FaShoppingCart/></i></li>
            </ul>
        </div>
        </div>
        <div className="flex justify-between lg:pt-[14px] pt-[5px]">
            <h5 className='text-[#262626] font-dm lg:text-[20px] text-[14px] font-bold'>{item.title}</h5>
            <h6 className='text-[#767676] font-dm lg:text-[16px] text-[14px] font-normal lg:leading-[30px] leading-auto px-[5px] lg:px-0'>${item.price}</h6>
        </div>
        <div className="text-[#767676] font-dm lg:text-[16px] text-[12px] font-normal lg:leading-[30px] leading-auto lg:pt-[15px] pt-[0px]">{item.category}</div>
        </div>
        </div>
        ))
      }
    </div>
    </>
  )
}

export default Post