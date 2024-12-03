import React from 'react'
import Header from '../Components/Header'
import Steps from '../Components/Steps'
import Bgslider from '../Components/Bgslider'
import Testimonials from '../Components/Testimonials'
import Upload from '../Components/Upload'

const Home = () => {
  return (
    <div>
        <Header />
        <Steps />
        <Bgslider />
        <Testimonials />
        <Upload />
    </div>
  )
}

export default Home