import BrandCard from "./BrandCard"

import appleLogo from '../../../assets/HomePage/brand_logo/apple.svg'
import boatLogo from '../../../assets/HomePage/brand_logo/boat.svg'
import dellLogo from '../../../assets/HomePage/brand_logo/dell.svg'
import googleLogo from '../../../assets/HomePage/brand_logo/google.svg'
import huaweiLogo from '../../../assets/HomePage/brand_logo/huawei.svg'
import oneplusLogo from '../../../assets/HomePage/brand_logo/oneplus.svg'
import samsungLogo from '../../../assets/HomePage/brand_logo/samsung.svg'
import xiaomiLogo from '../../../assets/HomePage/brand_logo/xiaomi.svg'

import './compat_brand_sec.css'


const BrandSlider = () => {
    return (

        <>

            <div className="logo-marquee">

                <div className="logo-marquee--marquee">

                    <div className="logo-marquee--marquee-group">
                        <BrandCard brandLogo={appleLogo} />
                        <BrandCard brandLogo={boatLogo} />
                        <BrandCard brandLogo={dellLogo} />
                        <BrandCard brandLogo={googleLogo} />
                        <BrandCard brandLogo={huaweiLogo} />
                        <BrandCard brandLogo={oneplusLogo} />
                        <BrandCard brandLogo={samsungLogo} additionalClass=" samsung_logo " />
                        <BrandCard brandLogo={xiaomiLogo} />
                    </div>

                    <div aria-hidden="true" className="logo-marquee--marquee-group">
                        <BrandCard brandLogo={appleLogo} />
                        <BrandCard brandLogo={boatLogo} />
                        <BrandCard brandLogo={dellLogo} />
                        <BrandCard brandLogo={googleLogo} />
                        <BrandCard brandLogo={huaweiLogo} />
                        <BrandCard brandLogo={oneplusLogo} />
                        <BrandCard brandLogo={samsungLogo} additionalClass=" samsung_logo " />
                        <BrandCard brandLogo={xiaomiLogo} />
                    </div>

                </div>

            </div>


        </>
    )
}

export default BrandSlider