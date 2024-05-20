import React, { useContext, useState } from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { apiData } from '../ContextApi';
import Post from '../pagination/Post';
import PaginationArea from '../pagination/PaginationArea';



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

  return (
    <>
    <section className='pt-[124px]'>
    <Container>
        <Flex>
        <div className="w-[18%]">
          <h2 className='text-[#262626] font-dm lg:text-[49px] text-[20px] lg:font-bold font-medium'>Products</h2>
          <h6 className='text-[#767676] font-dm lg:text-[12px] font-medium'>Home / Products</h6>
        </div>
      <div className="w-[80%]">
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