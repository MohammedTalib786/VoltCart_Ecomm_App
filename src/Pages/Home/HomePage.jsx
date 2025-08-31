import React from 'react'
import SpotlightSlider from '../../components/HomePage/SpotlightSlider/SpotlightSlider'
import '../../components/layout.css'
import NewYearSaleSec from '../../components/HomePage/NewYearSale/NewYearSaleSec'
import InformationComp from '../../components/HomePage/InformationComp/InformationComp'

import NewsLetter from '../../components/HomePage/NewsLetter/NewsLetter'
import ProductSlider from '../../components/ProductSlider/ProductSlider'
import FeatProductSlider from '../../components/FeatProductSlider/FeatProductSlider'
import BlogSlider from '../../components/BlogSlider/BlogSlider'
import Testimonials from '../../components/HomePage/Testimonials/Testimonials'
import InstaFeed from '../../components/HomePage/InstagramSec/InstaFeed'
import useDocumentTitle from '../../hooks/useDocumentTitle'

const Home = () => {

    // >>>>>>>>>>>>>>>>> Change Document Title Dynamically
    useDocumentTitle('VoltCart - All in One Solution for Electonic Items');

    return (
        <>
            {/* >>>>>>>>>>>>>> Full Width Spotlight */}
            <SpotlightSlider />

            {/* >>>>>>>>>>>>>> In Cont */}
            <div className="container_layout mx-auto flex justify-center items-center flex-col  "  >
                {/* >>>>>>>>>>>>>> Information Comp */}
                <InformationComp />

                {/* >>>>>>>>>>>>>> Featured Prod Slider */}
                <FeatProductSlider title="Featured Products" urlText="GO TO SHOP" urlVal="/products" />

                {/* >>>>>>>>>>>>>> Mobile Prod Slider */}
                <ProductSlider title="Mobile Products" urlText="GO TO SHOP" urlVal="/products" categoryName="Covers and Cases" />

                {/* >>>>>>>>>>>>>> Watch Prod Slider */}
                <ProductSlider title="Watch Products" urlText="GO TO SHOP" urlVal="/products" categoryName="Stand and Straps" />

            </div>

            {/* >>>>>>>>>>>>>> Full Width New Year Sale Sec */}
            <NewYearSaleSec />

            {/* >>>>>>>>>>>>>> In Cont */}
            <div className="container_layout mx-auto flex justify-center items-center flex-col  "  >
                <BlogSlider />
                <Testimonials />
            </div>

            {/* >>>>>>>>>>>>>> Full Width Newsletter */}
            <NewsLetter />

            {/* >>>>>>>>>>>>>> In Cont */}
            <div className="container_layout mx-auto flex justify-center items-center flex-col  "  >
                <InstaFeed />
            </div>

        </>
    )
}

export default Home