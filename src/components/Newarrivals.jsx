import { useContext } from 'react'
import Container from './Container'
import Flex from './Flex'
import Arrivals from './Arrivals'
import { apiData } from './ContextApi'
import Slider from "react-slick";
import { FaLongArrowAltRight , FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from 'react-router-dom'


function SampleNextArrow(props) {
    const {onClick} = props;
    return (
      <div onClick={onClick} className='lg:h-[54px] h-[34px] lg:w-[54px] w-[34px] rounded-full bg-[#979797] text-[white] text-center lg:leading-[54px] leading-[34px] absolute lg:top-[50%] xs:top-[28%] top-[24%] right-0 z-50 lg:translate-y-[-130%] cursor-pointer'><FaLongArrowAltRight className='inline-block lg:text-[22px] text-[18px]'/></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {onClick} = props;
    return (
      <div onClick={onClick} className='lg:h-[54px] h-[34px] lg:w-[54px] w-[34px] rounded-full bg-[#979797] text-[white] text-center lg:leading-[54px] leading-[34px] absolute lg:top-[50%] xs:top-[28%] top-[24%] left-0 z-50 lg:translate-y-[-130%] cursor-pointer'><FaLongArrowAltLeft className='inline-block lg:text-[22px] text-[18px]'/></div>
    );
  }

const Newarrivals = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          }
        ]
      };

    let data = useContext(apiData);
    console.log(data);

  return (
    <section>
        <Container>
            <div className="px-3 lg:px-0">
                <h2 className='text-[#262626] font-dm lg:text-[39px] text-[20px] lg:font-bold font-medium lg:pb-[38px] pb-[10px]'>New Arrivals</h2>
            </div>
                <Slider {...settings}>
                {data.map((item)=>(
                    <Link to="/shoptwo">
                      <Arrivals item={item}/>
                    </Link>
                ))}
                </Slider>               
        </Container>
    </section>
  )
}

export default Newarrivals