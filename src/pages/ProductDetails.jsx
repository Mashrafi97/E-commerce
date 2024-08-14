import React, { useEffect, useRef, useState } from 'react'
import Flex from '../components/Flex'
import { useParams } from 'react-router-dom';
import Container from '../components/Container';
import { FaStar, FaRegStar} from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaCaretDown , FaCaretUp } from "react-icons/fa";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from 'react-redux'
import { addToCart } from '../components/slice/productSlice';



const ProductDetails = () => {
    let [showOne, setShowOne] = useState(false)
    let [showTwo, setShowTwo] = useState(false)

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
    let dispatch = useDispatch()

  
    let getData = () => {
      axios.get(`https://dummyjson.com/products/${productId.id}`).then((response) => {
          setSingleData(response.data);
        });
    };

    useEffect(() => {
        getData();
      }, []);


    let clientRating = Array.from({ length: 5 }, (_, index) => {
    let ratingNumber = index + 0.5;

        return( 
        singleData.rating >= index + 1 ? <FaStar className="text-[#FFD881]" />
        : singleData.rating > ratingNumber ? <FaRegStarHalfStroke className="text-[#FFD881]"/> :  <FaRegStar className="text-[#FFD881]"/>
        )
      });

      let handleAddToCart = (item)=>{
        dispatch(addToCart({...item , qun:1}))
      }

  return (
    <>
    <div className="mt-[40px]">
        <Container>
            <Flex className="flex-wrap justify-between mx-2 lg:mx-0">
                {singleData?.images?.map((item)=>(
                    <div className="w-[48.6%] lg:h-[784px] h-[200px] border-[1px] border-[#f2f2f2] lg:mb-[40px] mb-[25px]">
                    <img src={item} alt="" />
                </div>
                ))}
            </Flex>
            <div className="lg:w-[51%] w-[85%] mx-2 lg:mx-0">
                <h2 className='text-[#262626] font-dm lg:text-[39px] text-[20px] lg:font-bold font-medium lg:pt-[30px]'>Product</h2>
                <div className="flex lg:pt-[8px]">
                    <div className="text-[#FFD881] flex items-center text-[14px] gap-x-[2px]">
                    {clientRating}
                    </div>
                    <div className="pl-[25px]">
                        <span className='text-[#767676] font-dm text-[14px] font-normal'>1 Review</span>
                    </div>
                </div>
                <div className="border-b-[1px] border-[#F0F0F0] pb-[24px]  lg:pt-[20px] pt-[10px]">
                        <span className='text-[#262626] font-dm text-[20px] font-bold'>${singleData.price}</span>
                </div>
                <div className="lg:mt-[31px] mt-[8px] flex">
                        <span className='text-[#262626] font-dm text-[16px] font-bold mr-[53px]'>COLOR:</span>
                        <div className="flex items-center h-[30px] w-[100%] gap-x-[15px]">
                            <div className="w-[26px]"><div className="lg:w-[20px] w-[16px] lg:h-[20px] h-[16px] bg-[#8d8d8d] rounded-full hover:h-[28px] hover:w-[28px] duration-[0.4s] cursor-pointer"></div></div>
                            <div className="w-[26px]"><div className="lg:w-[20px] w-[16px] lg:h-[20px] h-[16px] bg-[#FF8686] rounded-full hover:h-[28px] hover:w-[28px] duration-[0.4s] cursor-pointer"></div></div>
                            <div className="w-[26px]"><div className="lg:w-[20px] w-[16px] lg:h-[20px] h-[16px] bg-[#7ED321] rounded-full hover:h-[28px] hover:w-[28px] duration-[0.4s] cursor-pointer"></div></div>
                            <div className="w-[26px]"><div className="lg:w-[20px] w-[16px] lg:h-[20px] h-[16px] bg-[#B6B6B6] rounded-full hover:h-[28px] hover:w-[28px] duration-[0.4s] cursor-pointer"></div></div>
                            <div className="w-[26px]"><div className="lg:w-[20px] w-[16px] lg:h-[20px] h-[16px] bg-[#15CBA5] rounded-full hover:h-[28px] hover:w-[28px] duration-[0.4s] cursor-pointer"></div></div>
                        </div>
                </div>
                <div className="lg:mt-[39px] mt-[20px] flex items-center">
                    <span className='text-[#262626] font-dm text-[16px] font-bold mr-[76px]'>SIZE:</span>
              <div className="relative">
              <h5 ref={showSortRef} className='text-[#767676] font-dm text-[16px] w-full font-normal ml-[14px] pt-[3px] pb-[3px] pl-[21px] inline-block border-[#F0F0F0] border-[1px]'>S {showSort == true ? <FaCaretUp className='inline-block lg:ml-[76px] ml-[66px] lg:mr-[21px] mr-[11px]'/> : <FaCaretDown className='inline-block lg:ml-[76px] ml-[66px] lg:mr-[21px] mr-[11px]'/>} </h5>
              {showSort && 
                <ul className='bg-[#F0F0F0] text-center absolute top-[32px] left-[14px] right-0 z-50'>
                <li className='duration-[0.3s] ease-in-out border-[1px] border-[#f6f6f6] hover:border-[1px] hover:border-[#c6c6c6] cursor-pointer p-[8px]'>M</li>
                <li className='duration-[0.3s] ease-in-out border-[1px] border-[#f6f6f6] hover:border-[1px] hover:border-[#c6c6c6] cursor-pointer p-[8px]'>L</li>
                <li className='duration-[0.3s] ease-in-out border-[1px] border-[#f6f6f6] hover:border-[1px] hover:border-[#c6c6c6] cursor-pointer p-[8px]'>XL</li>
                <li className='duration-[0.3s] ease-in-out border-[1px] border-[#f6f6f6] hover:border-[1px] hover:border-[#c6c6c6] cursor-pointer p-[8px]'>XXL</li>
              </ul>
            }
              </div>
                </div>
                <div className="lg:mt-[36px] mt-[20px] flex border-b-[1px] border-[#F0F0F0] lg:pb-[30px] pb-[24px] items-center">
                    <h2 className='text-[#262626] font-dm text-[16px] font-bold'>QUANTITY:</h2>
                    <div className="flex border-[1px] border-[#F0F0F0] ml-[41px] pt-[3px] pb-[3px] pl-[21px] pr-[21px] gap-x-[38px]">
                    <div className="text-[#767676] font-dm text-[16px] font-normal">-</div>
                    <div className="text-[#767676] font-dm text-[16px] font-normal">1</div>
                    <div className="text-[#767676] font-dm text-[16px] font-normal">+</div>
                    </div>
                </div>
                <div className="lg:mt-[21px] mt-[8px] flex border-b-[1px] border-[#F0F0F0] lg:pb-[20px] pb-[8px]">
                    <h2 className='text-[#262626] font-dm text-[16px] font-bold'>STATUS:</h2>
                    <span className='text-[#767676] font-dm text-[16px] font-normal pl-[27px]'>In stock</span>
                </div>
                <div className="mt-[29px] border-b-[1px] border-[#F0F0F0] pb-[30px] flex">
                <a className="font-dm text-[14px] font-bold lg:py-[16px] py-[12px] lg:px-[45px] px-[20px] border-[1px] border-[#262626] inline-block hover:bg-[#262626] hover:text-white cursor-pointer duration-[0.7s] ease-in-out">Add to Wish List</a>
                <Link to="/cart" onClick={()=> handleAddToCart(singleData)}>
                <a className="ml-[20px] font-dm text-[14px] font-bold lg:py-[16px] py-[12px] lg:px-[45px] px-[25px] border-[1px] border-[#262626] bg-[#262626] text-white inline-block hover:border-[1px] hover:border-[#262626] hover:bg-white hover:text-[#262626] cursor-pointer duration-[0.7s] ease-in-out">Add to Cart</a>
                </Link>
                </div>
                <div className="">
                    <div className="">
                    <div onClick={()=> setShowOne(!showOne)} className="w-[100%] flex justify-between border-b-[1px] border-[#F0F0F0] lg:pb-[19px] pb-[8px] lg:mt-[24px] mt-[10px]">
                    <h6 className='font-dm text-[16px] font-bold text-[#262626] inline-block'>FEATURES  & DETAILS</h6>
                    {showOne == true ? <RxCross2 /> : <FaPlus/>}
                    </div>
                    {showOne &&
                    <p className='font-dm lg:text-[16px] text-[14px] font-normal text-[#767676] lg:pt-[19px] pt-[8px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    }
                    </div>

                    <div className="">
                    <div onClick={()=> setShowTwo(!showTwo)} className="w-[100%] flex justify-between border-b-[1px] border-[#F0F0F0] lg:pb-[19px] pb-[8px] lg:mt-[24px] mt-[10px]">
                    <h6 className='font-dm text-[16px] font-bold text-[#262626] inline-block'>SHIPPING & RETURNS</h6>
                    {showTwo == true ? <RxCross2 /> : <FaPlus/>}
                    </div>
                    {showTwo &&
                    <p className='font-dm lg:text-[16px] text-[14px] font-normal text-[#767676] lg:pt-[19px] pt-[8px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    }
                    </div>
                </div>
            </div>
            <div className="mx-2 lg:mx-0">
            <div className="lg:mt-[123px] mt-[30px] border-b-[1px] border-[#F0F0F0]">
                    <div className="flex gap-[62px]">
                    <h6 className='font-dm lg:text-[20px] text-[18px] font-normal text-[#767676]'>Description</h6>
                    <h6 className='font-dm lg:text-[20px] text-[18px] font-bold text-[#262626]'>Reviews (1)</h6>
                    </div>
                    <p className='font-dm text-[14px] font-normal text-[#767676] lg:pt-[42px] pt-[22px] lg:pb-[16px] pb-[8px]'>1 review for Product</p>
                </div>
            <div className="lg:mt-[123px] mt-[30px] border-b-[1px] border-[#F0F0F0]">
                    <div className="flex gap-[62px] justify-between">
                    <div className="flex">
                    <h6 className='font-dm text-[16px] font-bold text-[#262626]'>John Ford</h6>
                    <div className="flex lg:pl-[37px] pl-[17px] items-center justify-between">
                    <FaStar className="text-[#FFD881]" />
                    <FaStar className="text-[#FFD881]" />
                    <FaStar className="text-[#FFD881]" />
                    <FaStar className="text-[#FFD881]" />
                    <FaStar className="text-[#FFD881]" />
                    </div>
                    </div>
                    <p>6 months ago</p>
                    </div>
                    <p className='font-dm lg:text-[16px] text-[14px] font-normal text-[#767676] lg:leading-[30px]  lg:py-[14px] py-[8px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
            </div>
            <div className="lg:w-[51%] w-[85%] lg:pb-[600px] pb-[80px] mx-2 lg:mx-0">
                <h6 className='font-dm text-[20px] font-bold text-[#262626] lg:pt-[53px] pt-[30px]'>Add a Review</h6>
                <div className="">
                <h6 className="font-dm text-[16px] leading-[23px] font-bold text-[#262626] lg:mt-[48px] mt-[20px] lg:pb-[10px] pb-[6px]">Name</h6>
                <input type="text" placeholder="Your name here" className="font-dm text-[14px] font-normal text-[#767676] outline-none w-full border-b-[1px] border-[#F0F0F0] lg:pb-[16px] pb-[10px]"/>
                </div>
                <div className="">
                <h6 htmlFor="email" className="font-dm text-[16px] leading-[23px] font-bold text-[#262626] lg:mt-[23px] mt-[20px] lg:pb-[10px] pb-[6px]">Email</h6>
                <input id='email' type="email" placeholder="Your email here" className="font-dm text-[14px] font-normal text-[#767676] outline-none w-full border-b-[1px] border-[#F0F0F0] lg:pb-[16px] pb-[10px]"/>
                </div>
                <div className="">
                <h6 className="font-dm text-[16px] leading-[23px] font-bold text-[#262626] lg:mt-[23px] mt-[20px] lg:pb-[10px] pb-[6px]">Review</h6>
                <textarea name="" placeholder="Your review here" className="font-dm text-[14px] font-normal text-[#767676] outline-none w-full h-full border-b-[1px] border-[#F0F0F0] pb-[33px] resize-none"></textarea>
                </div>
                <div className="text-center">
                <a className="lg:mt-[29px] mt-[20px] font-dm text-[14px] font-bold lg:py-[16px] py-[10px] lg:px-[83px] px-[66px] border-[1px] border-[#262626] bg-[#262626] text-white inline-block hover:border-[1px] hover:border-[#262626] hover:bg-white hover:text-[#262626] cursor-pointer duration-[0.7s] ease-in-out">Post</a>
                </div>
            </div>
        </Container>
    </div>
    </>
  )
}

export default ProductDetails