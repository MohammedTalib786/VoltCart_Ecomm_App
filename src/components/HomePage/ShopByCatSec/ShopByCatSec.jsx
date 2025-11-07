
import Button from '../../FormComp/Button'
import ShopCatCard from './ShopCatCard'

import categoryImgOne from '../../../assets/HomePage/category_img_1.jpg'
import categoryImgTwo from '../../../assets/HomePage/category_img_2.jpg'


const ShopByCatSec = () => {
    return (
        <div className="flex flex-col desktop:py-[100px] gt-tab:py-[80px] py-[60px] gt-tab:gap-[30px] tab:gap-[25px] gap-[15px] ">

            {/* <img src={logoIcon} alt="" className=' gt-tab:w-[100px] w-[80px] ' /> */}

            <h2
                className="font-primary gt-tab:text-[45px]/[55px] tab:text-[40px]/[45px] text-[32px]/[40px] font-[300] text-left ">Shop By Category</h2>


            <div className="w-full flex gt-tab:flex-row flex-col tab:gap-[35px] gap-[30px]  " >

                <div className=" gt-tab:w-[50%] w-full ">
                    <ShopCatCard additionalClass="h-full gt-tab:max-h-full tab:max-h-[350px]  " catImg={categoryImgOne} />
                </div>

                <div className=" gt-tab:w-[50%] tab:w-full gt-tab:h-auto tab:h-[350px] flex gt-tab:flex-col tab:flex-row flex-col tab:gap-[35px] gap-[30px]  ">
                    <ShopCatCard additionalClass="h-full max-h-[350px] " catImg={categoryImgOne} />
                    <ShopCatCard additionalClass="h-full max-h-[350px] " catImg={categoryImgTwo} />
                </div>

            </div>




            {/* <div className=" desktop:w-[1100px] w-full ">
                <p
                    className=" text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] text-center pt-[0px] pb-[10px] " >
                    VoltCart delivers a seamless blend of design excellence, engineering precision, and everyday practicality through our range of products. Engineered for protection, designed for style. Each case is built with premium materials that shield your device from impact while maintaining a sleek, minimalist form. Reliable energy, anytime, anywhere. Our power banks combine intelligent charging technology with compact, modern design — keeping you powered on the go. Every VoltCart product is thoughtfully curated to enhance your digital lifestyle, merging form, function, and innovation in every detail.
                </p>

            </div> */}



            {/* <Button
                text="Explore More"
                additionalClass=" w-full "
            /> */}


        </div>
    )
}

export default ShopByCatSec