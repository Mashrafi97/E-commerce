import React from 'react'
import Container from './Container'
import Flex from './Flex'
import add1 from "../assets/add1.png"
import add2 from "../assets/add2.png"
import add3 from "../assets/add3.png"
const Ads = () => {
  return (
    <section className='lg:mt-[174px] lg:mb-[128px] mt-[20px] mb-[20px] px-3 lg:px-0'> 
        <Container>
            <Flex className="justify-between">
                <div className="w-[48.7%]">
                    <img src={add1} alt="add1" />
                </div>
                <div className="w-[48.7%]">
                    <div className="">
                        <img src={add2} alt="add2" />
                    </div>
                    <div className="lg:pt-[40px] pt-[7px]">
                        <img src={add3} alt="add3" />
                    </div>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Ads