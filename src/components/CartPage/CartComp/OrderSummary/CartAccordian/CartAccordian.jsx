import './cart_accordian.css'


const CartAccordian = ({
    tab_title = "Tab Title Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
    tab_desc = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ut aliquid non sequi ipsum voluptates illo totam a recusandae dignissimos!",
    isVisible,
    setIsVisible
}) => {
    const handlerToggle = () => setIsVisible(prev => !prev);

    return (
        <>
            <div className="Cont">
                {/* >>>>>>>>>>>>>>>>>>>>>> Title */}
                <div className="cart-tab-title w-full cursor-pointer "
                    onClick={handlerToggle}
                >
                    <h3 className='text-[18px]/[24px] hover:underline ' >{tab_title}</h3>
                </div>
                {/* >>>>>>>>>>>>>>>>>>>>>> Description */}
                <div
                    className={`cart-tab-desc ${isVisible ? 'show' : 'hide'}`}
                    style={{ transition: "all .25s ease-in-out" }}
                >
                    {tab_desc}
                </div>
            </div>
        </>
    )
}

export default CartAccordian;
