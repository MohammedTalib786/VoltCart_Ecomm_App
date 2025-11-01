
import parallax_main from '../../assets/about-page/revised-img/parallax_main.webp'


const AboutJoinUs = () => {
    return (
        <div className="joinus-sec w-full m-auto bg-no-repeat bg-cover bg-center bg-fixed opacity-black-80 relative " style={{ backgroundImage: `url(${parallax_main})` }}>
            <div className="container_layout m-auto">
                <div className="flex items-center justify-center flex-col gap-[20px] desktop:py-[140px] gt-tab:py-[100px] py-[80px]  " >
                    <h2 className="font-primary gt-tab:text-[45px]/[55px] tab:text-[40px]/[45px] text-[32px]/[40px] font-[300] text-white z-[99] " >Why Choose VoltCart</h2>
                    <p className="font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] text-center py-[10px] text-white z-[99] " >

                        At VoltCart, premium isn’t just a label  it’s a promise. <br />
                        We believe that accessories should do more than serve a purpose; they should complement your ambitions, enhance your productivity, and elevate your everyday moments.

                        Our commitment to quality craftsmanship, cutting-edge design, and uncompromising performance sets us apart. Every product goes through meticulous testing and refinement to meet the highest standards of durability, usability, and style.
                        What truly defines us is our dedication to our customers. We listen. We innovate. We evolve. Because for us, it’s not about selling accessories  it’s about building trust through exceptional experiences.


                    </p>

                </div>
            </div>

        </div>
    )
}

export default AboutJoinUs