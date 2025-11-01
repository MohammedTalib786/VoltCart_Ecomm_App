
import { PiShoppingCartLight } from "react-icons/pi";
import { PiMedalLight } from "react-icons/pi";
import { LiaTagSolid } from "react-icons/lia";
import { LuShieldPlus } from "react-icons/lu";


const InformationComp = () => {
  return (
    <div className="w-full flex py-[50px] gap-[20px] " >

      <div className="box flex gap-[15px]  ">
        <PiShoppingCartLight className='text-[65px] text-[var(--primary-color)] ' />
        <div className="texts flex flex-col gap-[6px] " >
          <h3 className='text-[20px]/[26px] uppercase ' >Free delivery</h3>
          <p className='font-[Open_Sans] text-[16px]/[22px]  ' >Consectetur adipi elit lorem ipsum dolor sit amet.</p>
        </div>
      </div>
 
      <div className="box flex gap-[15px]  ">
        <PiMedalLight className='text-[65px] text-[var(--primary-color)] ' />
        <div className="texts flex flex-col gap-[6px] " >
          <h3 className='text-[20px]/[26px] uppercase ' >Quality guarantee</h3>
          <p className='font-[Open_Sans] text-[16px]/[22px]  ' >Dolor sit amet orem ipsu mcons ectetur adipi elit.</p>
        </div>
      </div>

      <div className="box flex gap-[15px]  ">
        <LiaTagSolid className='text-[65px] text-[var(--primary-color)] ' />
        <div className="texts flex flex-col gap-[6px] " >
          <h3 className='text-[20px]/[26px] uppercase ' >Daily offers</h3>
          <p className='font-[Open_Sans] text-[16px]/[22px]  ' >Amet consectetur adipi elit loreme ipsum dolor sit.</p>
        </div>
      </div>

      <div className="box flex gap-[15px]  ">
        <LuShieldPlus className='text-[65px] text-[var(--primary-color)] ' />
        <div className="texts flex flex-col gap-[6px] " >
          <h3 className='text-[20px]/[26px] uppercase ' >100% secure payment</h3>
          <p className='font-[Open_Sans] text-[16px]/[22px]  ' >Rem Lopsum dolor sit amet, consectetur adipi elit.</p>
        </div>
      </div>

 




      
    </div>
  )
}

export default InformationComp