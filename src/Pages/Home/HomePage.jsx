import useDocumentTitle from '../../hooks/useDocumentTitle'
import SpotlightSlider from '../../components/HomePage/SpotlightSlider/SpotlightSlider'
import ShopByCatSec from '../../components/HomePage/ShopByCatSec/ShopByCatSec'
import FeaturedProductSlider from '../../components/ProductSlider/FeaturedProductSlider'
import CompatBrandSec from '../../components/HomePage/CompatBrandSec/CompatBrandSec'
import WhyChooseUs from '../../components/HomePage/WhyChooseUs/WhyChooseUs'
import InsightSec from '../../components/HomePage/InsightSec/InsightSec'

import '../../components/layout.css'
import FaqSection from '../../components/HomePage/FAQsection/FaqSection'


const Home = () => {

    // >>>>>>>>>>>>>>>>> Change Document Title Dynamically
    useDocumentTitle('All in One Solution for E Gadgets Online');



    return (
        <>
            {/* >>>>>>>>>>>>>> Full Width Spotlight */}
            <SpotlightSlider />

            {/* >>>>>>>>>>>>>> In Cont */}
            <div className="w-full bg-white ">
                <div className=" bg-white container_layout mx-auto flex justify-center items-center flex-col  "  >
                    <ShopByCatSec />
                </div>
            </div>


            <div className=" w-full  ">
                <div className="container_layout mx-auto  "  >
                    <FeaturedProductSlider title="Featured Product" urlText="" urlVal="/products" />
                </div>
            </div>


            <CompatBrandSec />


            <div className="container_layout mx-auto flex justify-center items-center flex-col  "  >
                <WhyChooseUs />
            </div>

            <div className=" w-full bg-white " >
                <div className=" bg-white container_layout mx-auto flex justify-center items-center flex-col  "  >
                    <FaqSection />
                </div>
            </div>

            <div className="w-full  ">
                <div className="  container_layout mx-auto flex justify-center items-center flex-col  "  >
                    <InsightSec />
                </div>
            </div>

        </>
    )
}

export default Home
