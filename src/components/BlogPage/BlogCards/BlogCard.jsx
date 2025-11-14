import React from 'react'
import { Link } from 'react-router-dom'

import placeholderImg from '../../../assets/placeholder_img.png'

import './Blogcard.css'


const BlogCard = ({
    name = "Blog Name",
    featImg = { placeholderImg },
    boxWidth = "w-full",
    urlToblog,
    blogCat = "mobile",
    blogTags = 'blogs'
}) => {

    return (
        <div className={`blog-card ${boxWidth} relative flex flex-col dektop:flex-row tab:flex-row gt-tab:flex-row gap-[20px] border-1 border-[#DDDDDD] rounded-[10px] justify-between `}>

            <div className="w-[100%] desktop:w-[50%] gt-tab:w-[50%] tab:w-[50%] overflow-hidden">
                <img
                    src={featImg}
                    alt="prod-img"
                    className=' blog_feat_img h-full w-full border-r border-black object-center object-cover  '
                    loading="lazy"
                />
            </div>

            <div className="texts flex flex-col align-middle justify-center w-[100%] desktop:w-[50%] gt-tab:w-[50%] tab:w-[50%] tab:pr-[15px] tab:pt-[0px] tab:px-[0px] tab:pb-[0px] pt-[5px] px-[20px] pb-[30px] ">

                <p className={` min-w-[110px]  w-fit flex items-center justify-center gap-[6px] text-center font-primary text-[16px]/[24px] bg-[#4389ef] py-[6px] px-[10px] rounded-[6px] text-white`}><svg className=' w-[20px] fill-white ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M480 576L192 576C139 576 96 533 96 480L96 160C96 107 139 64 192 64L496 64C522.5 64 544 85.5 544 112L544 400C544 420.9 530.6 438.7 512 445.3L512 512C529.7 512 544 526.3 544 544C544 561.7 529.7 576 512 576L480 576zM192 448C174.3 448 160 462.3 160 480C160 497.7 174.3 512 192 512L448 512L448 448L192 448zM224 216C224 229.3 234.7 240 248 240L424 240C437.3 240 448 229.3 448 216C448 202.7 437.3 192 424 192L248 192C234.7 192 224 202.7 224 216zM248 288C234.7 288 224 298.7 224 312C224 325.3 234.7 336 248 336L424 336C437.3 336 448 325.3 448 312C448 298.7 437.3 288 424 288L248 288z" /></svg> <span>{blogCat}</span></p>

                <h4 className={`font-primary text-[20px]/[28px] pt-[16px] pb-[12px] tab:block hidden `}>{name}</h4>
                <h4 className={`font-primary text-[20px]/[28px] pt-[16px] pb-[12px]   tab:hidden block `}>{!name ? "Something Went Wrong!" : name.slice(0, 48)}...</h4>

                <p className={` text-black pb-[16px] text-[16px]/[24px] font-[400] `}> <span className='font-[600]' >Tags:</span> {blogTags}</p>

                <Link className='w-fit' to={`/blogs/${urlToblog}`} >
                    <div className={`cta flex flex-row gap-[10px] item-center content-center`}>
                        <svg className=" -rotate-[45deg] mt-[5px] " stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path></svg>
                        <p className={`font-primary text-[16px]/[20px]`}>Read More</p>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default React.memo(BlogCard)
