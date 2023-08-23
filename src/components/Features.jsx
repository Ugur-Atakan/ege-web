import Slider from "react-slick";
import melisabacioglu from '../images/melis-abacioglu.png';
import batusat from '../images/batu-sat.png';



export default function Example() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="p-6 lg:px-36 lg:py-36">
        <div className="flex items-start gap-4">
          <div className="w-1/4">
            <h1 className="font-semibold text-[28px] leading-[32px] text-[#222222]">Loved by founders all over the world</h1>
          </div>
          <div className="w-3/4 founders relative -right-[18rem]">
            <Slider {...settings}>
              <div className="block">
                <img src={melisabacioglu} className='w-full h-full' alt='Loved by founders all over the world' />
                <h1 className="font-semibold text-[22px] leading-[26px] text-[#222222] pt-4">Melis Abacıoğlu</h1>
                <p className="font-semibold text-lg leading-6 text-[#222222]">Co-founder at Welbees</p>
              </div>
              <div className="block">
                <img src={batusat} className='w-full h-full' alt='Loved by founders all over the world' />
                <h1 className="font-semibold text-[22px] leading-[26px] text-[#222222] pt-4">Batu Sat</h1>
                <p className="font-semibold text-lg leading-6 text-[#222222]">Co-founder at MallIQ</p>
              </div>
              <div className="block">
                <img src={batusat} className='w-full h-full' alt='Loved by founders all over the world' />
                <h1 className="font-semibold text-[22px] leading-[26px] text-[#222222] pt-4">Batu Sat</h1>
                <p className="font-semibold text-lg leading-6 text-[#222222]">Co-founder at MallIQ</p>
              </div>
              <div className="block">
                <img src={batusat} className='w-full h-full' alt='Loved by founders all over the world' />
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
