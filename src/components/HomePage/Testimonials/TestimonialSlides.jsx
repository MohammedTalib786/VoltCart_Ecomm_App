
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const TestimonialSlides = ({ testimonialMsg, author }) => {
    return (

        <div className=' flex flex-col items-center gap-[18px]  ' >

            <h3 className='w-[75%] text-center text-[32px]/[42px]  ' >{testimonialMsg}</h3>

            <div className="text flex flex-col gap-[10px] ">

                <div className="cont flex gap-[10px]  " >

                    <FaStar className='text-[24px] text-[#72aec8] ' />
                    <FaStar className='text-[24px] text-[#72aec8] ' />
                    <FaStar className='text-[24px] text-[#72aec8] ' />
                    <FaStar className='text-[24px] text-[#72aec8] ' />
                    <CiStar className='text-[24px] text-[#72aec8] ' />

                </div>

                <h5 className='text-center  ' >{author}</h5>

            </div>

        </div>

    )
}

export default TestimonialSlides