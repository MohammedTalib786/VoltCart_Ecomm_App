import React from 'react'
import purpose from '../../assets/about-page/revised-img/parallax2.jpg'


const AboutJoinUs = () => {
    return (
        <div className="joinus-sec w-full m-auto bg-no-repeat bg-cover bg-center bg-fixed opacity-black-80 relative " style={{ backgroundImage: `url(${purpose})` }}>
            <div className="container_layout m-auto">
                <div className="flex items-center justify-center flex-col gap-[20px] tab:py-[140px] py-[80px]  " >
                    <h2 className="font-montserrat tab:text-[42px]/[50px] text-[32px]/[40px] font-[400] text-white z-[99] " >Join Us</h2>
                    <p className="font-poppins text-[16px]/[26px] font-[400] text-center py-[10px] text-white z-[99] " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi soluta ipsam blanditiis, aut qui repudiandae eos mollitia esse numquam impedit sapiente consequatur suscipit amet officia omnis alias ipsa! Libero, odio!
                        Voluptatibus dolorem voluptatem quaerat rem amet perferendis dignissimos reiciendis facilis deserunt eius nobis sint vitae dolore labore quae quidem sequi explicabo aut nam, in nemo repellat cupiditate optio! Recusandae, quam.</p>

                </div>
            </div>

        </div>
    )
}

export default AboutJoinUs