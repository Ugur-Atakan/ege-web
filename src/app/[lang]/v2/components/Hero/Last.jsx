import Image from 'next/image'
import { bigChain } from 'src/images/main-page'

const Last = () => {
    return (
        <div className="overflow-hidden">
            <Image src={bigChain} alt="bigChain" width={1000}  />
        </div>
    );
}

export default Last