import Hero from './components/Hero/Hero'
import SectionTwo from './components/SectionTwo/SectionTwo'
import SectionThree from './components/SectionThree/SectionThree'
import SectionFour from './components/SectionFour/SectionFour'
import SectionFive from './components/SectionFive/SectionFive'

const Page = ({ params: { lang } }) => {
    return (
      <div  className='bg-black'>
        <Hero lang={lang} />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive lang={lang} />
      </div>
    )
}

export default Page