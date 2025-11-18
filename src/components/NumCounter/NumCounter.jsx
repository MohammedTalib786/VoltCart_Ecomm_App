import { useState } from 'react';


const NumCounter = () => {
    let [quantity, setQuantity] = useState(0);
    return (
        <div className="qnty flex items-center  h-fit p-[10px] border-1 border-black ">
            <button
                onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
                className=' qnty_btns  w-[40px] h-[40px] flex justify-center items-center text-[24px]/[30px] bg-black text-white hover:bg-white hover:text-black transition-all border-[1px] border-black cursor-pointer ' >
                -
            </button>
            <input type="number"
                id='qunt_val'
                className='  w-[60px] text-[28px]/[34px] text-center focus:outline-0 '
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <button
                onClick={() => setQuantity(quantity + 1)}
                className=' qnty_btns  w-[40px] h-[40px] flex justify-center items-center text-[24px]/[30px] bg-black text-white hover:bg-white hover:text-black transition-all border-[1px] border-black cursor-pointer ' >
                +
            </button>
        </div>
    )
}

export default NumCounter;
