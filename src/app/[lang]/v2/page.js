import Hero from './components/Hero/Hero'

const Page = ({ params: { lang } }) => {
    return (
      <div className="bg-main-pg-blue" >
        <Hero lang={lang} />
      </div>
    )
}

export default Page