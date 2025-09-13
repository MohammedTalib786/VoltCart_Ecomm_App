import React from 'react'
import Button from '../../components/FormComp/Button';

const AboutIntro = () => {
    return (
        <div className="container_layout">
            <div className="flex items-center flex-col gt-tab:py-[100px] tab:py-[80px] py-[60px] gap-[20px]">
                <h2 className="font-montserrat tab:text-[42px]/[50px] text-[32px]/[40px] font-[400]">What We Offer</h2>
                <p className=" text-para-black font-poppins text-[16px]/[26px] font-[400] text-center py-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi soluta ipsam blanditiis, aut qui repudiandae eos mollitia esse numquam impedit sapiente consequatur suscipit amet officia omnis alias ipsa! Libero, odio!
                    Voluptatibus dolorem voluptatem quaerat rem amet perferendis dignissimos reiciendis facilis deserunt eius nobis sint vitae dolore labore quae quidem sequi explicabo aut nam, in nemo repellat cupiditate optio! Recusandae, quam.</p>
                <Button
                    text="Explore More"
                    additionalClass=" w-full "
                />
            </div>
        </div>
    )
}

export default AboutIntro