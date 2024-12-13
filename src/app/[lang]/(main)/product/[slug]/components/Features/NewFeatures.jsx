import Image from 'next/image';

import hammer from './svg/hammer.svg';
import horse from './svg/horse.svg';
import board from './svg/board.svg';

const icons = {
  hammer: hammer,
  horse: horse,
  board: board,
};

const NewFeatures = ({ features }) => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-none">
        <dl className="grid  max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col text-center"> 
              <Image src={icons[feature.image]} className='mx-auto my-2 flex-none' alt="icon" width={120} height={120} />
              <dt className="flex text-2xl items-center justify-center gap-x-3 font-semibold leading-7 text-neutral-800"> {/* Added justify-center class */}
                {feature.name}
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-800">
                <p className="text-justify text-semibold flex-auto">{feature.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
    
  )
}

export default NewFeatures