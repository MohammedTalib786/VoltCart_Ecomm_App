import Button from '../../components/FormComp/Button';
import { Link, useLocation } from 'react-router-dom';

import logoIcon from '../../assets/logo_icon.svg'


const AboutIntro = () => {

    return (
        <div
            className="container_layout about_intro_sec "
        >
            <div className="flex items-center flex-col desktop:py-[100px] gt-tab:py-[80px] py-[60px] gap-[20px]">

                <img src={logoIcon} alt="" className=' gt-tab:w-[100px] w-[80px] ' />

                <h2
                    className="font-primary gt-tab:text-[45px]/[55px] tab:text-[40px]/[45px] text-[32px]/[40px] font-[300]  ">What We Offer</h2>

                <div className=" desktop:w-[1100px] w-full ">
                    <p
                        className=" text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] text-center pt-[0px] pb-[10px] " >
                        VoltCart delivers a seamless blend of design excellence, engineering precision, and everyday practicality through our range of products. Engineered for protection, designed for style. Each case is built with premium materials that shield your device from impact while maintaining a sleek, minimalist form. Reliable energy, anytime, anywhere. Our power banks combine intelligent charging technology with compact, modern design — keeping you powered on the go. Every VoltCart product is thoughtfully curated to enhance your digital lifestyle, merging form, function, and innovation in every detail.
                    </p>

                </div>

                <Link to="/products" className=' w-full '  >
                    <Button
                        text="Explore More"
                        btnIcon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M228.61 60.16A6 6 0 0 0 224 58H61l-6.37-35.07a6 6 0 0 0-5.9-4.93H24a6 6 0 0 0 0 12h19.72l25.81 141.94a21.93 21.93 0 0 0 6.24 11.77a26 26 0 1 0 38.12 6.29h52.22A26 26 0 1 0 188 178H91.17a10 10 0 0 1-9.84-8.21L77.73 150H196.1a22 22 0 0 0 21.65-18.06l12.15-66.87a6 6 0 0 0-1.29-4.91M106 204a14 14 0 1 1-14-14a14 14 0 0 1 14 14m96 0a14 14 0 1 1-14-14a14 14 0 0 1 14 14m3.94-74.21a10 10 0 0 1-9.84 8.21H75.55L63.19 70h153.62Z"/></svg>}
                        additionalClass=" w-full mx-auto "
                    />
                </Link>
            </div>
        </div>
    )
}

export default AboutIntro;
