import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { apiData } from '../components/ContextApi';
import Post from '../components/pagination/Post';
import PaginationArea from '../components/pagination/PaginationArea';
import { FaAngleRight , FaCaretDown , FaCaretUp , FaPlus , FaMinus} from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { GoDotFill } from "react-icons/go";


const Poduct = () => {
    let data = useContext(apiData)
    let [currentPage, setCurrentPage] = useState(1)
    let [perPage, setPerPage] = useState(12)

    let lastpage = currentPage * perPage
    let firstpage = lastpage - perPage
    let allData = data.slice(firstpage, lastpage)

    let pageNumber = []
    for(let i = 0; i < Math.ceil(data.length / perPage); i++){
        pageNumber.push(i)
        
    }

    let paginate = (pageNumber) =>{
        setCurrentPage(pageNumber + 1);
    }

    let [show , setShow] = useState(false)
    let [catShow , setCatShow] = useState(false)
    let [catShowOne , setCatShowOne] = useState(false)
    let [colorShow , setColorShow] = useState(false)
    let [brandShow , setBrandShow] = useState(false)
    let showRef = useRef()
    let showNumberRef = useRef()
    let [showNumber , setShowNumber] = useState(false)

    useEffect(()=>{
      document.addEventListener("click",(e)=>{
          if(showRef.current.contains(e.target) == true){
              setShow(!show)
          }else{
              if(e.target.tagName !== "LI"){
                  setShow(false)
              }
          }
          if(showNumberRef.current.contains(e.target) == true){
              setShowNumber(!showNumber)
          }else{
              if(e.target.tagName !== "LI"){
                  setShowNumber(false)
              }
          }
      })
  },[show , showNumber]) 

  return (
    <>
    <section className=''>
    <Container>
        <Flex className="justify-between">
        <div className="w-[25%] mt-[120px]">
          <div className="">
            <h2 className='text-[#262626] font-dm lg:text-[49px] text-[20px] lg:font-bold font-medium'>Products</h2>
          <h6 className='text-[#767676] font-dm lg:text-[12px] font-medium'>Home <FaAngleRight className='inline-block'/> Products</h6>
          </div>
          <div className="pt-[130px]">
            <h4 className='text-[#262626] font-dm text-[20px] font-bold leading-auto'>Shop by Category</h4>
            <ul>
              <li onClick={()=>setCatShowOne(!catShowOne)} className='text-[#767676] font-dm text-[16px] font-normal leading-[30px] pt-[35px] border-[#F0F0F0] border-b-[1px] w-full pb-[16px]'>Category 1 {catShowOne == true ? <FaMinus className='text-[#262626] text-[14px] ml-[284px] inline-block'/> : <FaPlus className='text-[#262626] text-[14px] ml-[284px] inline-block'/>}
              {catShowOne &&(
              <ul className='bg-[#262626] mt-[12px]'>
                <li className='pl-[10px] text-[#ffffff] font-dm text-[16px] font-normal leading-[30px] border-[#343434] border-b-[1px] w-full pb-[16px] pt-[10px] cursor-pointer'>Rangamati</li>
                <li className='pl-[10px] text-[#ffffff] font-dm text-[16px] font-normal leading-[30px] border-[#343434] border-b-[1px] w-full pb-[16px] pt-[10px] cursor-pointer'>Cox's Bazar</li>
                <li className='pl-[10px] text-[#ffffff] font-dm text-[16px] font-normal leading-[30px] border-[#343434] border-b-[1px] w-full pb-[16px] pt-[10px] cursor-pointer'>Bandarban</li>
              </ul>
              )}
              </li>
              <li className='text-[#767676] font-dm text-[16px] font-normal leading-[30px] border-[#F0F0F0] border-b-[1px] w-full pb-[16px] pt-[10px] cursor-pointer'>Category 2</li>
              <li onClick={()=>setCatShow(!catShow)} className='text-[#767676] font-dm text-[16px] font-normal leading-[30px  border-[#F0F0F0] border-b-[1px] w-full pb-[16px] pt-[10px]'>Category 3 {catShow == true ? <FaMinus className='text-[#262626] text-[14px] ml-[284px] inline-block'/> : <FaPlus className='text-[#262626] text-[14px] ml-[284px] inline-block'/>}
              {catShow &&(
              <ul className='bg-[#262626] mt-[12px]'>
                <li className='pl-[10px] text-[#ffffff] font-dm text-[16px] font-normal leading-[30px] border-[#343434] border-b-[1px] w-full pb-[16px] pt-[10px] cursor-pointer'>Shundarban</li>
                <li className='pl-[10px] text-[#ffffff] font-dm text-[16px] font-normal leading-[30px] border-[#343434] border-b-[1px] w-full pb-[16px] pt-[10px] cursor-pointer'>Chittagong</li>
                <li className='pl-[10px] text-[#ffffff] font-dm text-[16px] font-normal leading-[30px] border-[#343434] border-b-[1px] w-full pb-[16px] pt-[10px] cursor-pointer'>Kuakata</li>
              </ul>
              )}
              </li>
              <li className='text-[#767676] font-dm text-[16px] font-normal leading-[30px] border-[#F0F0F0] border-b-[1px] w-full pb-[16px] pt-[10px] cursor-pointer'>Category 4</li>
              <li className='text-[#767676] font-dm text-[16px] font-normal leading-[30px] border-[#F0F0F0] border-b-[1px] w-full pb-[16px] pt-[10px] cursor-pointer'>Category 5</li>
            </ul>
          </div>



          <div className="pt-[53px]">
            <h4 onClick={()=>setColorShow(!colorShow)} className='text-[#262626] font-dm text-[20px] font-bold leading-auto'>Shop by Color {colorShow == true ? <FaCaretUp className='text-[#262626] text-[18px] ml-[225px] inline-block'/> : <FaCaretDown className='text-[#262626] text-[18px] ml-[225px] inline-block'/>}</h4>
            {colorShow &&(
            <ul>
              <li className='text-[#767676] font-dm text-[16px] font-normal leading-[30px] pt-[35px] border-[#F0F0F0] border-b-[1px] w-full pb-[16px] cursor-pointer'><GoDotFill className='text-[#000] inline-block mr-[10px] text-[20px] leading-[20px]'/>Color 1</li>
              <li className='text-[#767676] font-dm text-[16px] font-normal leading-[30px] pt-[35px] border-[#F0F0F0] border-b-[1px] w-full pb-[16px] cursor-pointer'><GoDotFill className='text-[#FF8686] inline-block mr-[10px] text-[20px] leading-[20px]'/>Color 2</li>
              <li className='text-[#767676] font-dm text-[16px] font-normal leading-[30px] pt-[35px] border-[#F0F0F0] border-b-[1px] w-full pb-[16px] cursor-pointer'><GoDotFill className='text-[#7ED321] inline-block mr-[10px] text-[20px] leading-[20px]'/>Color 3</li>
              <li className='text-[#767676] font-dm text-[16px] font-normal leading-[30px] pt-[35px] border-[#F0F0F0] border-b-[1px] w-full pb-[16px] cursor-pointer'><GoDotFill className='text-[#B6B6B6] inline-block mr-[10px] text-[20px] leading-[20px]'/>Color 4</li>
              <li className='text-[#767676] font-dm text-[16px] font-normal leading-[30px] pt-[35px] border-[#F0F0F0] border-b-[1px] w-full pb-[16px] cursor-pointer'><GoDotFill className='text-[#15CBA5] inline-block mr-[10px] text-[20px] leading-[20px]'/>Color 5</li>
            </ul>
            )}
          </div>

          <div className="pt-[53px]">
            <h4 onClick={()=>setBrandShow(!brandShow)} className='text-[#262626] font-dm text-[20px] font-bold leading-auto'>Shop by Brand {brandShow == true ? <FaCaretUp className='text-[#262626] text-[18px] ml-[220px] inline-block'/> : <FaCaretDown className='text-[#262626] text-[18px] ml-[220px] inline-block'/>}</h4>
            {brandShow &&(
            <ul>
              <li className='text-[#767676] font-dm text-[16px] font-normal leading-[30px] pt-[35px] border-[#F0F0F0] border-b-[1px] w-full pb-[16px] cursor-pointer'>Brand 1</li>
              <li className='text-[#767676] font-dm text-[16px] font-normal leading-[30px] pt-[35px] border-[#F0F0F0] border-b-[1px] w-full pb-[16px] cursor-pointer'>Brand 2</li>
              <li className='text-[#767676] font-dm text-[16px] font-normal leading-[30px] pt-[35px] border-[#F0F0F0] border-b-[1px] w-full pb-[16px] cursor-pointer'>Brand 3</li>
              <li className='text-[#767676] font-dm text-[16px] font-normal leading-[30px] pt-[35px] border-[#F0F0F0] border-b-[1px] w-full pb-[16px] cursor-pointer'>Brand 4</li>
              <li className='text-[#767676] font-dm text-[16px] font-normal leading-[30px] pt-[35px] border-[#F0F0F0] border-b-[1px] w-full pb-[16px] cursor-pointer'>Brand 5</li>
            </ul>
            )}
          </div>

          <div className="pt-[53px]">
            <h4 className='text-[#262626] font-dm text-[20px] font-bold leading-auto'>Shop by Price</h4>
            <ul>
              <li className='text-[#767676] font-dm text-[16px] font-normal leading-[30px] pt-[35px] border-[#F0F0F0] border-b-[1px] w-full pb-[16px] cursor-pointer'>$0.00 - $9.99</li>
              <li className='text-[#767676] font-dm text-[16px] font-normal leading-[30px] pt-[35px] border-[#F0F0F0] border-b-[1px] w-full pb-[16px] cursor-pointer'>$10.00 - $19.99</li>
              <li className='text-[#767676] font-dm text-[16px] font-normal leading-[30px] pt-[35px] border-[#F0F0F0] border-b-[1px] w-full pb-[16px] cursor-pointer'>$20.00 - $29.99</li>
              <li className='text-[#767676] font-dm text-[16px] font-normal leading-[30px] pt-[35px] border-[#F0F0F0] border-b-[1px] w-full pb-[16px] cursor-pointer'>$30.00 - $39.99</li>
              <li className='text-[#767676] font-dm text-[16px] font-normal leading-[30px] pt-[35px] border-[#F0F0F0] border-b-[1px] w-full pb-[16px] cursor-pointer'>$40.00 - $69.99</li>
            </ul>
          </div>



          </div>

      <div className="w-[73%] mt-[351px]">
          <div className="flex flex-wrap">
            <div className="w-[20%] pb-[50px]">
            <a className='cursor-pointer pt-[10px] pl-[14px] pb-[13px] pr-[14px] bg-[#262626] text-[22px] text-[white] hover:bg-[#F0F0F0] hover:text-black duration-[0.7s] ease-in-out'><IoGrid className='inline-block'/></a>
            <a className='cursor-pointer ml-[20px] pt-[10px] pl-[14px] pb-[13px] pr-[14px] bg-[#F0F0F0] text-[22px] text-[#737373] hover:bg-[#262626] hover:text-[white] duration-[0.7s] ease-in-out'><TfiMenuAlt className='inline-block'/></a>
            </div>
            <div className="w-[80%] flex justify-end">
              <div className="relative">
              <p className='inline-block'>Sort by:</p>
              <h5 ref={showRef} className='text-[#767676] font-dm text-[16px] font-normal ml-[14px] pt-[3px] pb-[3px] pl-[21px] inline-block border-[#F0F0F0] border-[1px]'>Feature {show == true ? <FaCaretUp className='inline-block ml-[120px] mr-[15px]'/> : <FaCaretDown className='inline-block ml-[120px] mr-[15px]'/>} </h5>
              {show &&
              <ul className='ml-[68px] bg-[#F0F0F0] text-center absolute top-[32px] left-0 right-0 z-50'>
                <li className='duration-[0.3s] ease-in-out border-[1px] border-[#f6f6f6] hover:border-[1px] hover:border-[#c6c6c6] cursor-pointer p-[8px]'>Messi</li>
                <li className='duration-[0.3s] ease-in-out border-[1px] border-[#f6f6f6] hover:border-[1px] hover:border-[#c6c6c6] cursor-pointer p-[8px]'>Ronaldo</li>
                <li className='duration-[0.3s] ease-in-out border-[1px] border-[#f6f6f6] hover:border-[1px] hover:border-[#c6c6c6] cursor-pointer p-[8px]'>Neymar</li>
              </ul>
            }
              </div>
              <div className="ml-[40px] relative">
              <p className='inline-block'>Show:</p>
              <h5 ref={showNumberRef} className='text-[#767676] font-dm text-[16px] font-normal ml-[14px] pt-[3px] pb-[3px] pl-[21px] inline-block border-[#F0F0F0] border-[1px]'>36 {showNumber == true ? <FaCaretUp className='inline-block ml-[66px] mr-[15px]'/> : <FaCaretDown className='inline-block ml-[66px] mr-[15px]'/>} </h5>
              {showNumber &&(
              <ul className='ml-[56px] bg-[#F0F0F0] text-center absolute top-[32px] left-0 right-0 z-50'>
                <li className='duration-[0.3s] ease-in-out border-[1px] border-[#f6f6f6] hover:border-[1px] hover:border-[#c6c6c6] cursor-pointer p-[8px]'>38</li>
                <li className='duration-[0.3s] ease-in-out border-[1px] border-[#f6f6f6] hover:border-[1px] hover:border-[#c6c6c6] cursor-pointer p-[8px]'>40</li>
                <li className='duration-[0.3s] ease-in-out border-[1px] border-[#f6f6f6] hover:border-[1px] hover:border-[#c6c6c6] cursor-pointer p-[8px]'>32</li>
              </ul>
            )}
              </div>
            </div>
          </div>
           <div className="flex justify-between flex-wrap">
            <Post allData={allData}/>
           </div>
           <div className="">
            <PaginationArea pageNumber={pageNumber} paginate={paginate}/>
           </div>
            </div>  
        </Flex>
      </Container>
    </section>
    </>
  )
}

export default Poduct