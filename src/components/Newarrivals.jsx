import { useContext } from 'react'
import Container from './Container'
import Flex from './Flex'
import Arrivals from './Arrivals'
import { apiData } from './ContextApi'


const Newarrivals = () => {

    let data = useContext(apiData);
    console.log(data);

  return (
    <section>
        <Container>
            <div className="px-3 lg:px-0">
                <h2 className='text-[#262626] font-dm lg:text-[39px] text-[24px] lg:font-bold font-medium lg:pb-[38px] pb-[10px]'>New Arrivals</h2>
            </div>
            <Flex className="justify-between flex-wrap px-3 lg:px-0">
                {data.map((item)=>(
                    <Arrivals item={item}/>
                ))}               
            </Flex>
        </Container>
    </section>
  )
}

export default Newarrivals