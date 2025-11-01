
import Button from '../../FormComp/Button'

const NewsLetter = () => {
  return (
    <div className=" bg-[#212529] w-full mx-auto  ">

      <div className="  w-full max-w-[1440px] px-[50px] py-[100px] mx-auto flex justify-between items-center  ">

        <div className="text flex flex-col gap-[6px] w-full  ">
          <h3 className='text-white text-[32px]/[40px] uppercase ' >Subscribe Us Now</h3>
          <p className=' text-white text-[16px]/[24px] ' >Get latest news, updates and deals directly mailed to your inbox.</p>
        </div>

        <div className="newsletterForm flex w-[60%]  ">
          <input 
          type="text"
           className='bg-white py-[10px] pl-[20px] w-full border-1 border-white focus:outline-0  focus:border-1 focus:border-[var(--primary-color)] ' 
           placeholder='Your email address here' />

          <Button
            text="SUBSCRIBE"
            bgClr='bg-[var(--primary-color)] '
            borderClr='border-[var(--primary-color)]'
            textClr='text-white'
            hoverBgClr='bg-transparent'
            hoverTextClr='text-[var(--primary-color)]'
          />

        </div>


      </div>

    </div>
  )
}

export default NewsLetter