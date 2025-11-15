import { Link } from 'react-router-dom'

import './insight_sec.css'


const BlogSliderCard = ({
    name,
    slug,
    category,
    feat_img = placeholderImg,
}) => {
    return (
        <Link
            to={`/blogs/${slug}`}
            className=' block  w-full  '
        >
            {/* <div className=" blog_post_box w-full  rounded-[16px] pt-[25px] px-[20px] pb-[30px] flex flex-col justify-start gap-[20px] bg-[#f4f4f4] " > */}
            <div className=" blog_post_box w-full  rounded-[16px] pt-[25px] px-[20px] pb-[30px] flex flex-col justify-start gap-[20px] bg-white " >

                <div className=" relative rounded-[12px] overflow-hidden w-full ">
                    <img src={feat_img} alt="img" className=' blog_post_feat_img w-full desktop:h-[250px] gt-tab:h-[250px] tab:h-[250px] h-[250px] object-cover rounded-[12px] ' />
                    <span className='absolute bottom-[15px] left-[15px] bg-[#0d6efdb5] px-[12px] py-[8px] rounded-[6px] text-white text-[14px]/[16px] ' >{category ? category : "category"}</span>
                </div>

                <div className=" flex flex-col gap-[4px] ">

                    <p className=' font-primary text-[18px]/[26px] font-[400] pb-[6px] ' >{!name ? "Something Went Wrong!" : name.slice(0, 55)}... </p>

                    <div className={`cta flex flex-row gap-[10px] item-center content-center`}>
                        <svg className="  mt-[5px] " stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path></svg>
                        <p className={`font-primary text-[16px]/[20px]`}>Read More</p>
                    </div>

                </div>

            </div>
        </Link>
    )
}

export default BlogSliderCard