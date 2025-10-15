import { FiMinus, FiPlus } from "react-icons/fi"
import Button from "../FormComp/Button"
import { useCart } from "../../contexts/ProdProvider"
import { useState } from "react"
import './quantity_counter.css'

const QuantityCounter = ({
    id,
    borderColor = "primary",
    additionalClass
}) => {
    let { cartProducts, changeQuantityFunc } = useCart()
    let item = cartProducts.find(item => item.id === id);

    let [msg, showMsg] = useState({
        maxItemMsg: false,
        minItemMsg: false
    })

    const handlerAddQnt = () => {
        if (item.quantity >= 10) {
            showMsg(prevVal => ({ ...prevVal, maxItemMsg: true }))
            setTimeout(() => showMsg(prevVal => ({ ...prevVal, maxItemMsg: false })), 1500)
        }
        changeQuantityFunc(id, item.quantity <= 9 ? item.quantity + 1 : 10)
    }

    const handlerMinusQnt = () => {
        if (item.quantity <= 1) {
            showMsg(prevVal => ({ ...prevVal, minItemMsg: true }))
            setTimeout(() => showMsg(prevVal => ({ ...prevVal, minItemMsg: false })), 1500)
        }
        changeQuantityFunc(id, item.quantity > 1 ? item.quantity - 1 : 1)
    }

    return (

        <div className={`qnty flex items-center h-fit p-[12px] relative border-[2px] border-${borderColor} rounded-[12px] ${additionalClass} `} >
            {/* >>>>>>>>>>>>>>>>>>>> Message */}
            {
                msg.maxItemMsg &&
                <p className='bg-[var(--primary-color)] text-white absolute w-[220px] text-center top-[80px] left-[-30px] text-[17px]/[24px] px-[10px] py-[12px] rounded-[12px]  ' >
                    The maximum number of cart items is 10
                </p>
            }

            {
                msg.minItemMsg &&
                <p className='bg-[var(--primary-color)] text-white  absolute w-[220px] text-center top-[80px] left-[-30px] text-[17px]/[24px] px-[10px] py-[12px] rounded-[12px]  ' >
                    The minimum number of cart items is 1
                </p>
            }
            {/* >>>>>>>>>>>>>>>>>>>> ENDS Message */}

            <Button
                handlerClickBtnComp={handlerMinusQnt}
                text={<FiMinus className='text-[26px]/[26px] text-primary ' />}
                additionalClass="counter_btn w-fit h-fit p-[0] bg-transparent "
            />

            <input type="number"
                id='qunt_val'
                className=' w-[60px] text-[28px]/[34px] text-center focus:outline-0 '
                value={item ? item.quantity : 0}
                onChange={(e) => changeQuantityFunc(id, Number(e.target.value < 1 ? 1 : e.target.value > 10 ? 10 : e.target.value))}
            />

            <Button
                handlerClickBtnComp={handlerAddQnt}
                text={<FiPlus className='text-[26px]/[26px] text-primary ' />}
                additionalClass=" counter_btn w-fit h-fit p-[0] bg-transparent "
            />

        </div>
    )
}

export default QuantityCounter
