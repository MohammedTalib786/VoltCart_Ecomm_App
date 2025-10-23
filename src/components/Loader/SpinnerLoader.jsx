import './spinner_loader.css'

const SpinnerLoader = ({ additionalClass }) => {
    return (
        <>
            <div className={` w-full flex justify-center items-center gap-[20px] ${additionalClass} `} >
                <span className="spin_loader w-[24px] h-[24px] "  ></span>
            </div>
        </>
    )
}

export default SpinnerLoader