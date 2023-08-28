import Slider from "react-slick";
import melisabacioglu from '../images/melis-abacioglu.png';
import batusat from '../images/batu-sat.png';



export default function Example() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="p-6 py-12 lg:px-36 lg:py-36">
        <div className="block lg:flex items-start gap-4">
          <div className="w-2/3 lg:w-1/4">
            <h1 className="font-semibold text-[20px] lg:text-[28px] leading-[22px] lg:leading-[32px] text-[#222222]">Loved by founders all over the world</h1>
          </div>
          <div className="w-full lg:w-3/4 founders relative lg:-right-[18rem] py-6 lg:py-0 founders-section">
            <Slider {...settings}>
              <div className="block !w-64">
                <img src={melisabacioglu} className='w-64' alt='Loved by founders all over the world' />
                <h1 className="font-semibold text-[22px] leading-[26px] text-[#222222] pt-4">Melis Abacıoğlu</h1>
                <p className="font-semibold text-lg leading-6 text-[#222222]">Co-founder at Welbees</p>
              </div>
              <div className="block !w-64">
                <img src={batusat} className='w-64' alt='Loved by founders all over the world' />
                <h1 className="font-semibold text-[22px] leading-[26px] text-[#222222] pt-4">Batu Sat</h1>
                <p className="font-semibold text-lg leading-6 text-[#222222]">Co-founder at MallIQ</p>
              </div>
              <div className="block !w-64">
                <img src={batusat} className='w-64' alt='Loved by founders all over the world' />
                <h1 className="font-semibold text-[22px] leading-[26px] text-[#222222] pt-4">Batu Sat</h1>
                <p className="font-semibold text-lg leading-6 text-[#222222]">Co-founder at MallIQ</p>
              </div>
              <div className="block !w-64">
                <img src={batusat} className='w-64' alt='Loved by founders all over the world' />
                <h1 className="font-semibold text-[22px] leading-[26px] text-[#222222] pt-4">Batu Sat</h1>
                <p className="font-semibold text-lg leading-6 text-[#222222]">Co-founder at MallIQ</p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}
