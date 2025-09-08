import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'
import about from '../../assets/about-page/revised-img/about_spotligh.jpg'
const AboutSpotlight = () => {
  return (
    <div
        className=" about_spotlight_bg bg-center bg-cover bg-no-repeat w-full h-[90vh] flex relative "
        style={{ backgroundImage: `url(${about})` }}>

        <div className="container_layout m-auto flex justify-center items-center flex-col  ">
          <BreadCrumbs/>
          <h1 className="font-[inter] font-bold text-[90px]/[100px] uppercase text-white mt-[10px] relative z-[99] " >About Us</h1>
        </div>

      </div>
  )
}

export default AboutSpotlight
