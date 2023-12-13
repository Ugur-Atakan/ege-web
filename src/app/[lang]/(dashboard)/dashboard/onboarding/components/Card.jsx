import Image from 'next/image'

const Card = ({ imageSrc, title, description, onClick }) => {
  return (
    <div className="block w-full bg-[#ECEFF1] rounded-[2rem] p-8 cursor-pointer relative hover:scale-105 transition-transform" onClick={onClick}>
      <Image src={imageSrc} width={500} className='h-[17rem]' alt={title} />
      <div className="pt-4 md:mt-0">
        <h3 className="text-[#222222] text-[20px] md:text-[1.75rem] font-semibold leading-[2rem]">{title}</h3>
        <p className="text-[#222222] text-[16px] md:text-[1.125rem] font-semibold leading-[22px] md:leading-[1.5rem] pt-4">{description}</p>
      </div>
    </div>
  );
}

export default Card
