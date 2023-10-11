import Hero from './components/Hero/Hero'
import SectionTwo from './components/SectionTwo/SectionTwo'
import SectionThree from './components/SectionThree/SectionThree'

const Page = ({ params: { lang } }) => {
    return (
      <div  className='bg-black'>
        <Hero lang={lang} />
        <SectionTwo />
        <SectionThree />
      </div>
    )
}

export default Page