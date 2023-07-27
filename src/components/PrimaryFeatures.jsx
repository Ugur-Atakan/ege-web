import Slider from "react-slick";
import calendar from '../images/calendar.png';
import hat from '../images/hat.png';
import folder from '../images/folder.png';
import protectionicon from '../images/protection-icon.png';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#1649FF" }}
      onClick={onClick}
    />
  );
}

export function SupportYourBusiness() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <div className="bg-[#1649FF] overflow-hidden">
      <div className="mx-auto max-w-5xl p6 lg:px-12 lg:py-24">
        <h1 className="font-bold text-[64px] leading-[64px] text-white text-center">Support your business needs <h1 className="text-[#9EE248]">after formation</h1></h1>
      </div>
      <div className="after-formation" style={{ marginLeft: '175px', width: 'calc(100% - 175px)' }}>
        <Slider {...settings}>
          <div className="max-w-sm min-h-[600px] shadow-lg bg-white rounded-[32px] relative">
            <img className="w-full relative -top-12 -right-6" src={calendar} alt="Products" />
            <div className="pl-6 pr-16 py-2">
              <div className="font-semibold text-[40px] leading-[44px] text-[#222222]">Compliance Reminder</div>
              <p className="font-semibold text-lg leading-[24px] text-[#222222] pt-4">
                Stay in compliance with laws, regulations, and requirements.
              </p>
            </div>
            <div className="px-6 pt-6 pb-4 absolute bottom-0">
              <span className="inline-block py-1 text-[22px] leading-[26px] font-semibold text-[#1649FF] mr-2 mb-2">Get for $5.99/month </span>
            </div>
          </div>
          <div className="max-w-sm  min-h-[600px] overflow-hidden shadow-lg bg-white rounded-[32px] relative">
            <img className="w-full relative -top-12 -right-24" src={hat} alt="Products" />
            <div className="pl-6 pr-16 py-2">
              <div className="font-semibold text-[40px] leading-[44px] text-[#222222]">Renewal & Revival</div>
              <p className="font-semibold text-lg leading-[24px] text-[#222222] pt-4">
                Services for documents that need to be used in foreign countries.
              </p>
            </div>
            <div className="px-6 pt-6 pb-4 absolute bottom-0">
              <span className="inline-block py-1 text-[22px] leading-[26px] font-semibold text-[#1649FF] mr-2 mb-2">Get for $5.99/month </span>
            </div>
          </div>
          <div className="max-w-sm  min-h-[600px] overflow-hidden shadow-lg bg-white rounded-[32px] relative">
            <img className="w-full relative -top-12 -right-16" src={folder} alt="Products" />
            <div className="pl-6 pr-16 py-2">
              <div className="font-semibold text-[40px] leading-[44px] text-[#222222]">Certificate of Good Standing</div>
              <p className="font-semibold text-lg leading-[24px] text-[#222222] pt-4">
                Show that your business is in good standing.
              </p>
            </div>
            <div className="px-6 pt-6 pb-4 absolute bottom-0">
              <span className="inline-block py-1 text-[22px] leading-[26px] font-semibold text-[#1649FF] mr-2 mb-2">Get for $5.99/month </span>
            </div>
          </div>
          <div className="max-w-sm  min-h-[600px] overflow-hidden shadow-lg bg-white rounded-[32px] relative">
            <img className="w-full relative -top-12 -right-16" src={folder} alt="Products" />
            <div className="pl-6 pr-16 py-2">
              <div className="font-semibold text-[40px] leading-[44px] text-[#222222]">Certificate of Good Standing</div>
              <p className="font-semibold text-lg leading-[24px] text-[#222222] pt-4">
                Show that your business is in good standing.
              </p>
            </div>
            <div className="px-6 pt-6 pb-4 absolute bottom-0">
              <span className="inline-block py-1 text-[22px] leading-[26px] font-semibold text-[#1649FF] mr-2 mb-2">Get for $5.99/month </span>
            </div>
          </div>
        </Slider>
      </div>
      <div className="mx-auto max-w-5xl border-t mt-16 border-white border-opacity-[0.20] py-12">
      <div className="grid grid-cols-1 md:grid-cols:2 lg:grid-cols-3 items-start gap-2">
          <div className="flex items-start gap-3 justify-center">
            <img src={protectionicon} className='w-6 h-6' alt="protection icon" />
            <p className="text-white font-bold text-lg leading-6">In house USA based CPAs and Lawyers</p>
          </div>
          <div className="flex items-start gap-3 justify-center">
            <img src={protectionicon} className='w-6 h-6' alt="protection icon" />
            <p className="text-white font-bold text-lg leading-6">Fast document approve. Physical office proximity to state HQ</p>
          </div>
          <div className="flex items-start gap-3 justify-center">
            <img src={protectionicon} className='w-6 h-6' alt="protection icon" />
            <p className="text-white font-bold text-lg leading-6">60-Day money-back guarantee</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupportYourBusiness;