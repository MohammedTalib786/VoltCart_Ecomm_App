import './compat_brand_sec.css'


const BrandCard = ({
    brandLogo,
    width,
    height = 60,
    additionalClass = "h-[80px] ",
}) => {
    return <img width={width} height={height} src={brandLogo} alt="" className={additionalClass} />
}

export default BrandCard;
