import React from "react"
import Navbar from './components/common/Navbar'

const OnBoardingLayout = (params) => {
    return (
      <section>
        <Navbar lang={params.params.lang} />
        {params.children}
      </section>
    )
}

export default OnBoardingLayout