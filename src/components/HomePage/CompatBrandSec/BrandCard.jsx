import './compat_brand_sec.css'

const BrandCard = ({
    brandLogo,
    width,
    height = 60,
    additionalClass = "h-[80px] " ,

}) => {
    return (
        // <div className={ `brand_card_cont  ` }  >
        //     <img width={width} src={brandLogo} alt="" />
        // </div>

        <img width={width} height={height}  src={brandLogo} alt="" className={additionalClass} />

    )
}

export default BrandCard