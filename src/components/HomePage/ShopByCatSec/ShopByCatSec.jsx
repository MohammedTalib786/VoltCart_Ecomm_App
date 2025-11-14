// import categoryImgOne from '../../../assets/HomePage/category_img_1.jpg'
// import categoryImgTwo from '../../../assets/HomePage/category_img_2.jpg'

import coverCasesCatImg from '../../../assets/HomePage/mobile_cover_cat_image.webp'
import coverCasesCatImgMob from '../../../assets/HomePage/mobile_cover_cat_image_mob.webp'
import PowerBnkCatImg from '../../../assets/HomePage/power_bank_cat_image.webp'
import watchStrpCatImg from '../../../assets/HomePage/watch_strap_cat_image.webp'

import ShopCatCard from './ShopCatCard'

import './shop_by_cat_sec.css'



const ShopByCatSec = () => {
    return (
        <div className=" w-full flex flex-col desktop:py-[100px] gt-tab:py-[80px] py-[60px] gt-tab:gap-[30px] tab:gap-[25px] gap-[15px] bg-white ">

            <h2
                className="font-primary gt-tab:text-[45px]/[55px] tab:text-[40px]/[45px] text-[32px]/[40px] font-[300] text-left ">Shop By Category</h2>

            <div className=" shop_cat_sec_one w-full flex gt-tab:flex-row flex-col  " >

                <div className=" gt-tab:w-[50%] w-full ">
                    {/* >>>>>> Desktop Card */}
                    <ShopCatCard
                        additionalClass=" desktop:max-h-[750px] gt-tab:max-h-[620px]   gt-tab:block hidden "
                        catImg={coverCasesCatImg}
                        catName="Mobile Covers"
                        imgHeight=" desktop:max-h-[750px] gt-tab:max-h-[620px] " 
                        catLink="/products?category=covers_and_cases" 
                    />

                    {/* >>>>>> Mobile Card */}
                    <ShopCatCard
                        additionalClass=" gt-tab:hidden block tab:max-h-[550px]  "
                        catImg={coverCasesCatImgMob}
                        catName="Mobile Covers"
                        imgHeight=" tab:max-h-[550px] tab:min-h-auto max-h-[350px] min-h-[350px] " 
                        catLink="/products?category=covers_and_cases" 
                        
                    />

                </div>

                <div className=" gt-tab:w-[50%] tab:w-full gt-tab:h-auto flex gt-tab:flex-col tab:flex-row flex-col justify-between  gt-tab:gap-0 tab:gap-[30px] gap-[25px] ">
                    <ShopCatCard
                        additionalClass=" gt-tab:max-h-[360px] tab:max-h-[250px]  "
                        catImg={PowerBnkCatImg}
                        catName="Power Banks"
                        imgHeight=" gt-tab:max-h-[360px] gt-tab:min-h-auto tab:min-h-[250px] min-h-[350px] " 
                        catLink="/products?category=power_bank" 
                    />
                    <ShopCatCard
                        additionalClass=" gt-tab:max-h-[360px] tab:max-h-[250px]  "
                        catImg={watchStrpCatImg}
                        catName="Stand and Straps"
                        imgHeight=" gt-tab:max-h-[360px] gt-tab:min-h-auto tab:min-h-[250px] min-h-[350px] " 
                        catLink="/products?category=stand_and_straps" 
                    />
                </div>

            </div>

        </div>
    )
}

export default ShopByCatSec
