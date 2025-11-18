import emailIcon from './TopFooter/email_icon.svg';
import Button from '../FormComp/Button';


const NewsletterComping = () => {
    return (
        <div className='w-full bg-[#eff2f4] py-[40px] flex flex-col justify-center items-center   ' >
            <h3 className='font-[600] text-[20px]/[30px] text-black ' >Subscribe on our newsletter</h3>
            <p className='text-[#606060] font-[400] text-[16px]/[26px] pb-[20px] ' >Get daily news on upcoming offers from many suppliers all over the world</p>
            <form action=""
                className=' relative flex gap-[8px]  '
            >
                <img src={emailIcon} alt="" className=' w-[24px] absolute top-[13px] left-[8px] ' />
                <input type="text " placeholder='Email'
                    className=' min-w-[300px]  border-[#DEE2E7] border-1 bg-white placeholder:text-[#8B96A5] py-[8px] pr-[20px] pl-[36px] rounded-[6px] outline-0 '
                />
                <Button text='Subscribe' btnWidth='fit' />
            </form>
        </div>
    )
}

export default NewsletterComping;
