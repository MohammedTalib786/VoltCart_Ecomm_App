import Button from '../../components/FormComp/Button';

import logoIcon from '../../assets/logo_icon.svg'

const AboutIntro = () => {
    return (
        <div className="container_layout about_intro_sec ">
            <div className="flex items-center flex-col desktop:py-[100px] gt-tab:py-[80px] py-[60px] gap-[20px]">

                <img src={logoIcon} alt="" className=' gt-tab:w-[100px] w-[80px] ' />

                <h2
                    className="font-primary gt-tab:text-[45px]/[55px] tab:text-[40px]/[45px] text-[32px]/[40px] font-[300] ">What We Offer</h2>

                {/* <div className=" w-[800px] ">
                    <p
                        className=" text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] pt-[0px] pb-[10px] " >
                        VoltCart delivers a seamless blend of design excellence, engineering precision, and everyday practicality through our range of products:
                    </p>


                    <ul className=" text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] pt-[0px] pb-[10px] " >
                        <li> <b className=' block  font-[500] ' >Mobile Cases:</b>  Engineered for protection, designed for style. Each case is built with premium materials that shield your device from impact while maintaining a sleek, minimalist form.</li>

                        <li> <b className=' block  font-[500] ' >Power Banks:</b> Reliable energy, anytime, anywhere. Our power banks combine intelligent charging technology with compact, modern design — keeping you powered on the go.</li>

                        <li> <b className=' block  font-[500] ' > Laptop Cases:</b> A harmony of durability and design. VoltCart laptop sleeves and cases are crafted for those who move with purpose — providing superior protection with a refined, professional look.</li>
                    </ul>

                    <p className=" text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] pt-[0px] pb-[10px] " >
                        Every VoltCart product is thoughtfully curated to enhance your digital lifestyle, merging form, function, and innovation in every detail.
                    </p>

                </div> */}


                <div className=" desktop:w-[1100px] w-full ">
                    <p
                        className=" text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] text-center pt-[0px] pb-[10px] " >
                        VoltCart delivers a seamless blend of design excellence, engineering precision, and everyday practicality through our range of products. Engineered for protection, designed for style. Each case is built with premium materials that shield your device from impact while maintaining a sleek, minimalist form. Reliable energy, anytime, anywhere. Our power banks combine intelligent charging technology with compact, modern design — keeping you powered on the go. Every VoltCart product is thoughtfully curated to enhance your digital lifestyle, merging form, function, and innovation in every detail.
                    </p>

                </div>



                <Button
                    text="Explore More"
                    additionalClass=" w-full "
                // aosValues={{ dataAos: "fade-up", aosDuration: "800", aosOffset: "100" }}
                />
            </div>
        </div>
    )
}

export default AboutIntro