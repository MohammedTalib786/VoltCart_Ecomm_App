import { useState } from 'react'
import './accordian.css'

const Accordian = ({
    tab_title = "Tab Title Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
    tab_desc = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ut aliquid non sequi ipsum voluptates illo totam a recusandae dignissimos!"
}) => {

    const [isVisible, setIsVisible] = useState(false);
    const handlerToggle = () => setIsVisible(prev => !prev);

    return (
        <>
            <div className="Cont">
                {/* >>>>>>>>>>>>>>>>>>>>>> Title */}
                <div className="tab-title bg-amber-300 w-full py-[20px] px-[30px] cursor-pointer "
                    onClick={handlerToggle}
                >
                    <h3 className='text-[20px]/[30px]' >{tab_title}</h3>
                </div>
                {/* >>>>>>>>>>>>>>>>>>>>>> Description */}
                <div
                    className={`tab-desc ${isVisible ? 'show' : 'hide'}`}
                    style={{ transition: "all .25s ease-in-out" }}
                >
                    {tab_desc}
                </div>
            </div>
        </>
    )
}

export default Accordian;