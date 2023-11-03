import Image from 'next/image'
import { singleChain } from '@/assets/images/main-page'

const Last = () => {
    return (
        //  absolute top-[85%] -mt-15 overflow-hidden style={{ zIndex: 1 }}
        <div className='hero-chain'>
            <Image  
                className='scale-[1.25]'
                src={singleChain}
                alt='single-chain'
            />
        </div>
    );
}

export default Last