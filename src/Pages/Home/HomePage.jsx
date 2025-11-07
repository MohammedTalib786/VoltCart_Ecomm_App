import useDocumentTitle from '../../hooks/useDocumentTitle'
import SpotlightSlider from '../../components/HomePage/SpotlightSlider/SpotlightSlider'
import NewYearSaleSec from '../../components/HomePage/NewYearSale/NewYearSaleSec'
import InformationComp from '../../components/HomePage/InformationComp/InformationComp'
import NewsLetter from '../../components/HomePage/NewsLetter/NewsLetter'
import ProductSlider from '../../components/ProductSlider/ProductSlider'
import FeatProductSlider from '../../components/FeatProductSlider/FeatProductSlider'

import Testimonials from '../../components/HomePage/Testimonials/Testimonials'
import InstaFeed from '../../components/HomePage/InstagramSec/InstaFeed'

import '../../components/layout.css'
import ShopByCatSec from '../../components/HomePage/ShopByCatSec/ShopByCatSec'
import FeatProdSec from '../../components/HomePage/FeatProdSec/FeatProdSec'
import FeaturedProductSlider from '../../components/ProductSlider/FeaturedProductSlider'
import CompatBrandSec from '../../components/HomePage/CompatBrandSec/CompatBrandSec'
import WhyChooseUs from '../../components/HomePage/WhyChooseUs/WhyChooseUs'


const Home = () => {

    // >>>>>>>>>>>>>>>>> Change Document Title Dynamically
    useDocumentTitle('All in One Solution for E Gadgets Online');

    return (
        <>
            {/* >>>>>>>>>>>>>> Full Width Spotlight */}
            <SpotlightSlider />

            {/* >>>>>>>>>>>>>> In Cont */}
            <div className="container_layout mx-auto flex justify-center items-center flex-col  "  >
                {/* >>>>>>>>>>>>>> Information Comp */}
                {/* <InformationComp /> */}
                <ShopByCatSec />

                {/* <FeatProdSec /> */}

                {/* >>>>>>>>>>>>>> Featured Prod Slider */}


                {/* >>>>>>>>>>>>>> Mobile Prod Slider */}
                {/* <ProductSlider title="Mobile Products" urlText="GO TO SHOP" urlVal="/products" categoryName="Covers and Cases" /> */}

                {/* >>>>>>>>>>>>>> Watch Prod Slider */}
                {/* <ProductSlider title="Watch Products" urlText="GO TO SHOP" urlVal="/products" categoryName="Stand and Straps" /> */}

            </div>


            <div className=" w-full  border-t-2 border-[#0000004f] ">

                <div className="container_layout mx-auto  "  >
                    <FeaturedProductSlider title="Featured Product" urlText="" urlVal="/products" />
                </div>

            </div>


            {/* <div className="container_layout   border-t-2 border-[#0000004f] "  > */}


            {/* <FeatProductSlider title="Featured Products" urlText="GO TO SHOP" urlVal="/products" /> */}
            {/* <ProductSlider title="Related Products" urlText="" urlVal="/products" categoryName="Power Banks" /> */}
            <CompatBrandSec />


            <div className="container_layout mx-auto flex justify-center items-center flex-col  "  >


                <WhyChooseUs />

            </div>



            {/* </div> */}

            {/* >>>>>>>>>>>>>> Full Width New Year Sale Sec */}
            {/* <NewYearSaleSec /> */}

            {/* >>>>>>>>>>>>>> In Cont */}
            <div className="container_layout mx-auto flex justify-center items-center flex-col  "  >
                {/* <BlogSlider /> */}
                {/* <Testimonials /> */}
            </div>

            {/* >>>>>>>>>>>>>> Full Width Newsletter */}
            {/* <NewsLetter /> */}

            {/* >>>>>>>>>>>>>> In Cont */}
            <div className="container_layout mx-auto flex justify-center items-center flex-col  "  >
                {/* <InstaFeed /> */}
            </div>

        </>
    )
}

export default Home