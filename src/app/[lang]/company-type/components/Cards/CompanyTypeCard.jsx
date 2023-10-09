import Image from 'next/image'

const CompanyTypeCard = ({ imageSrc, title, description, onClick }) => {
  return (
    <div className="block w-full bg-[#ECEFF1] rounded-[2rem] p-8 cursor-pointer relative overflow-hidden" onClick={onClick}>
      <Image src={imageSrc} className="relative -top-36 -right-12 md:w-64 md:h-64 md:static rotate-180 md:rotate-0" alt={title} />
      <div className="-mt-48 md:mt-0">
        <h2 className="text-[#222222] text-[20px] md:text-[1.75rem] font-semibold leading-[2rem]">{title}</h2>
        <p className="text-[#222222] text-[16px] md:text-[1.125rem] font-semibold leading-[22px] md:leading-[1.5rem] pt-4">{description}</p>
      </div>
    </div>
  );
}

export default CompanyTypeCard
