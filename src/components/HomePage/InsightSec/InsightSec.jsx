import BlogSlider from "./BlogSlider"

import './insight_sec.css'

const InsightSec = () => {
    return (
        <div className=" w-full flex flex-col desktop:py-[100px] gt-tab:py-[80px] py-[60px]  ">

            <h2
                className="font-primary gt-tab:text-[45px]/[55px] tab:text-[40px]/[45px] text-[32px]/[40px] font-[300] text-left ">Insights & Smart Tips</h2>

            <p className=" text-black font-primary tab:text-[22px]/[28px] text-[20px]/[26px] font-[400] text-left pt-[12px] pb-[25px] " >Stay updated with the latest articles in tech and lifestyle</p>

            <div className=" insight_blog_post_sec w-full flex tab:gap-[35px] gap-[30px]  " >
                <BlogSlider />
            </div>

        </div>
    )
}

export default InsightSec
