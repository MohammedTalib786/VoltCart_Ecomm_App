import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

import placeholderImg from '../../../assets/placeholder_img.png'

import './Blogcard.css'

const BlogCard = ({
    id,
    slug,
    name = "Blog Name",
    // featImg = "https://www.tintaccessories.com/wp-content/uploads/2024/01/MagPop-JPEG-1024x1024.jpg",
    featImg = { placeholderImg },
    boxWidth = "w-full",
    urlToblog,
    blogCat = "mobile",
    publishedDate = "10-aug-2025",
    blogTags = 'blogs'
}) => {

    // console.log('blogCat', blogCat)

    return (
        <div className={`blog-card ${boxWidth} relative flex flex-col dektop:flex-row tab:flex-row gt-tab:flex-row gap-[20px] border-1 border-[#DDDDDD] tab:h-[300px] h-[510px] rounded-[10px] justify-between `}>

            <div className="w-[100%] desktop:w-[50%] gt-tab:w-[50%] tab:w-[50%] overflow-hidden">
                <img
                    src={featImg} alt="prod-img"
                    className='tab:h-auto tab:max-h-full max-h-[260px] object-center object-cover  w-full '
                />
            </div>

            <div className="texts flex flex-col align-middle justify-center w-[100%] desktop:w-[50%] gt-tab:w-[50%] tab:w-[50%] tab:pr-[15px] tab:pt-[0px] tab:px-[0px] tab:pb-[0px] pt-[5px] px-[20px] pb-[30px] ">
                {/* <p className={`font-primary text-[14px]/[20px] w-fit bg-[#0d6efdb5] py-[10px] px-[10px] rounded-[6px] text-white`}>{blogTags}</p> */}
                <p className={` min-w-[110px]  w-fit flex items-center justify-center gap-[6px] text-center font-primary text-[16px]/[24px] bg-[#4389ef] py-[6px] px-[10px] rounded-[6px] text-white`}><svg className=' w-[20px] fill-white ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M480 576L192 576C139 576 96 533 96 480L96 160C96 107 139 64 192 64L496 64C522.5 64 544 85.5 544 112L544 400C544 420.9 530.6 438.7 512 445.3L512 512C529.7 512 544 526.3 544 544C544 561.7 529.7 576 512 576L480 576zM192 448C174.3 448 160 462.3 160 480C160 497.7 174.3 512 192 512L448 512L448 448L192 448zM224 216C224 229.3 234.7 240 248 240L424 240C437.3 240 448 229.3 448 216C448 202.7 437.3 192 424 192L248 192C234.7 192 224 202.7 224 216zM248 288C234.7 288 224 298.7 224 312C224 325.3 234.7 336 248 336L424 336C437.3 336 448 325.3 448 312C448 298.7 437.3 288 424 288L248 288z" /></svg> <span>{blogCat}</span></p>
                <Link className='w-fit' to={`/blogs/${urlToblog}`} >
                    <h4 className={`font-primary text-[20px]/[28px] pt-[16px] pb-[12px]  `}>{name}</h4>
                </Link>
                <p className={` text-black pb-[16px] text-[16px]/[24px] font-[400] `}> <span className='font-[600]' >Tags:</span> {blogTags}</p>

                <Link className='w-fit' to={`/blogs/${urlToblog}`} >
                    <div className={`cta flex flex-row gap-[10px] item-center content-center`}> <BsArrowRight className='mt-[5px] ' /> <p className={`font-primary text-[16px]/[20px]`}>Read More</p></div>
                </Link>

            </div>
        </div>
    )
}

export default BlogCard