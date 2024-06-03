import React, { useEffect, useRef, useState } from 'react'
import Flex from '../components/Flex'
import { useParams } from 'react-router-dom';
import Container from '../components/Container';
import img from "../assets/dmd.png"
import { FaStar } from "react-icons/fa";
import { FaCaretDown , FaCaretUp } from "react-icons/fa";



const ProductDetails = () => {
    let [showSort , setShowSort] = useState(false);
    let showSortRef = useRef();


    useEffect(()=>{
        document.addEventListener("click",(e)=>{
            if(showSortRef.current.contains(e.target) == true){
                setShowSort(!showSort)
            }else{
                if(e.target.tagName !== "LI"){
                    setShowSort(false)
                }
            }
        })
    },[showSort]);


    let [singleData, setSingleData] = useState([]);
    let productId = useParams();
  
    let getData = () => {
      axios
        .get(`https://dummyjson.com/products/${productId.id}`)
        .then((response) => {
          setSingleData(response.data);
        });
    };
    console.log(singleData);
  return (
    <>
    <div className="mt-[40px]">
        <Container>
            <Flex className="flex-wrap justify-between">
                <div className="w-[48.6%]">
                    <img src={img} alt="" />
                </div>
                <div className="w-[48.6%]">
                    <img src={img} alt="" />
                </div>
                <div className="w-[48.6%] mt-[40px]">
                    <img src={img} alt="" />
                </div>
                <div className="w-[48.6%] mt-[40px]">
                    <img src={img} alt="" />
                </div>
            </Flex>
            <div className="w-[780px]">
                <h2 className='text-[#262626] font-dm lg:text-[39px] text-[20px] lg:font-bold font-medium pt-[30px]'>Product</h2>
                <div className="flex pt-[8px]">
                    <div className="text-[#FFD881] flex items-center text-[14px] gap-x-[2px]">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    </div>
                    <div className="pl-[25px]">
                        <span className='text-[#767676] font-dm text-[14px] font-normal'>1 Review</span>
                    </div>
                </div>
                <div className="border-b-[1px] border-[#F0F0F0] pb-[24px]  pt-[20px]">
                        <span className='text-[#262626] font-dm text-[20px] font-bold'>$44.00</span>
                </div>
                <div className=" mt-[31px] flex">
                        <span className='text-[#262626] font-dm text-[16px] font-bold mr-[53px]'>COLOR:</span>
                        <div className="flex items-center h-[30px] w-[100%] gap-x-[15px]">
                            <div className="w-[26px]"><div className="w-[20px] h-[20px] bg-[#8d8d8d] rounded-full hover:h-[28px] hover:w-[28px] duration-[0.4s] cursor-pointer"></div></div>
                            <div className="w-[26px]"><div className="w-[20px] h-[20px] bg-[#FF8686] rounded-full hover:h-[28px] hover:w-[28px] duration-[0.4s] cursor-pointer"></div></div>
                            <div className="w-[26px]"><div className="w-[20px] h-[20px] bg-[#7ED321] rounded-full hover:h-[28px] hover:w-[28px] duration-[0.4s] cursor-pointer"></div></div>
                            <div className="w-[26px]"><div className="w-[20px] h-[20px] bg-[#B6B6B6] rounded-full hover:h-[28px] hover:w-[28px] duration-[0.4s] cursor-pointer"></div></div>
                            <div className="w-[26px]"><div className="w-[20px] h-[20px] bg-[#15CBA5] rounded-full hover:h-[28px] hover:w-[28px] duration-[0.4s] cursor-pointer"></div></div>
                        </div>
                </div>
                <div className="mt-[39px] flex">
                    <span className='text-[#262626] font-dm text-[16px] font-bold mr-[76px]'>SIZE:</span>
              <div className="relative">
              <h5 ref={showSortRef} className='text-[#767676] font-dm text-[16px] font-normal ml-[14px] pt-[3px] pb-[3px] pl-[21px] inline-block border-[#F0F0F0] border-[1px]'>S {showSort == true ? <FaCaretUp className='inline-block ml-[76px] mr-[21px]'/> : <FaCaretDown className='inline-block ml-[76px] mr-[21px]'/>} </h5>
              {showSort && 
                <ul className='bg-[#F0F0F0] text-center absolute top-[32px] left-[14px] right-0 z-50'>
                <li>M</li>
                <li className='duration-[0.3s] ease-in-out border-[1px] border-[#f6f6f6] hover:border-[1px] hover:border-[#c6c6c6] cursor-pointer p-[8px]'>L</li>
                <li className='duration-[0.3s] ease-in-out border-[1px] border-[#f6f6f6] hover:border-[1px] hover:border-[#c6c6c6] cursor-pointer p-[8px]'>XL</li>
                <li className='duration-[0.3s] ease-in-out border-[1px] border-[#f6f6f6] hover:border-[1px] hover:border-[#c6c6c6] cursor-pointer p-[8px]'>XXL</li>
              </ul>
            }
              </div>
                </div>
                <div className="mt-[36px] flex border-b-[1px] border-[#F0F0F0] pb-[30px]">
                    <h2 className='text-[#262626] font-dm text-[16px] font-bold'>QUANTITY:</h2>
                    <div className="flex border-[1px] border-[#F0F0F0] ml-[41px] pt-[3px] pb-[3px] pl-[21px] pr-[21px] gap-x-[38px]">
                    <div className="text-[#767676] font-dm text-[16px] font-normal">-</div>
                    <div className="text-[#767676] font-dm text-[16px] font-normal">1</div>
                    <div className="text-[#767676] font-dm text-[16px] font-normal">+</div>
                    </div>
                </div>
                <div className="mt-[21px] flex border-b-[1px] border-[#F0F0F0] pb-[20px]">
                    <h2 className='text-[#262626] font-dm text-[16px] font-bold'>STATUS:</h2>
                    <span className='text-[#767676] font-dm text-[16px] font-normal pl-[27px]'>In stock</span>
                </div>
            </div>
        </Container>
    </div>
    </>
  )
}

export default ProductDetails