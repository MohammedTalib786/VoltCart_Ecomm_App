import './global_button.css'
import { BsCart2 } from "react-icons/bs";

const Button = ({
    text = "Button",
    borderClr = 'border-prim-blue',
    bgClr = "bg-primary",
    textClr = "text-white",
    hoverBgClr = "bg-white",
    hoverTextClr = "text-black",
    btnWidth = "w-100",
    handlerClickBtnComp,
    type,
    id,
    additionalClass,
    disabled = false,
    btnIcon
}) => {
    return (
        <button
            onClick={handlerClickBtnComp}
            type={type}
            id={id}
            disabled={disabled}
            className={` relative overflow-hidden global_btn ${btnWidth} font-body font-[300] text-[16px]/[27px] uppercase max-w-100 transition-all flex justify-center items-center px-[16px] py-[8px]  ${borderClr} ${bgClr} ${textClr} cursor-pointer rounded-[6px] ${additionalClass} `} >
            <span className=' flex relative z-50 items-center gap-[10px]  ' > {btnIcon} {text}</span>
        </button>
    )
}

export default Button;