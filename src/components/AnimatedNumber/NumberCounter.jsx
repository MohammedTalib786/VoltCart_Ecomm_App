
import NumCount from 'react-countup'

const NumberCounter = ({ number, title, width }) => {


  return (
    <>
      <div className={`flex flex-col p-[30px] py-[40px] border-r-1 border-b-1 border-[#e5e7eb] ${width} `} >
        <NumCount className='font-[inter] font-[700] text-[65px] text-left' duration={5} start={0} end={number} />
        <span className="font-inter font-[600] text-[22px] text-[#6C8DAB] text-left">{title}</span>
      </div>

    </>
  )
}

export default NumberCounter