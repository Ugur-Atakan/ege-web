import Image from 'next/image'
import { bigChain } from 'src/images/main-page'

const Last = () => {
    return (
        <div className='absolute top-[100%] overflow-hidden' style={{ zIndex: 1 }} >
            <Image  
                className='scale-[1.75]'
                src={bigChain}
                alt='big-chain'
            />
        </div>
    );
}

export default Last