
import { IoShieldCheckmarkSharp } from 'react-icons/io5'

const ProdIconBox = ({ mainIcon, textContent }) => {
    return (
        <div className="icon_box flex flex-col text-center justify-center items-center gap-[10px] bg-white  min-h-[130px] gt-tab:w-[23%] tab:w-[48%] w-full px-[10px] py-[20px] rounded-[10px] cursor-default " >
            {/* <IoShieldCheckmarkSharp className='text-[30px]/[40px] fill-primary ' /> */}
            {mainIcon}
            <h5 className='text-[16px]/[24px] font-[Poppins] text-black ' >{textContent}</h5>
        </div>
    )
}

export default ProdIconBox
