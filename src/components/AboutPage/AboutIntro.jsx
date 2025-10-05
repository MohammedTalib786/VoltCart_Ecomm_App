import Button from '../../components/FormComp/Button';

const AboutIntro = () => {
    return (
        <div className="container_layout">
            <div className="flex items-center flex-col gt-tab:py-[100px] tab:py-[80px] py-[60px] gap-[20px]">
                <h2
                    className="font-primary gt-tab:text-[50px]/[60px] tab:text-[45px]/[50px] text-[38px]/[42px] font-[200]">What We Offer</h2>
                <p
                    className=" text-para-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] text-center pt-[0px] pb-[10px]  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi soluta ipsam blanditiis, aut qui repudiandae eos mollitia esse numquam impedit sapiente consequatur suscipit amet officia omnis alias ipsa! Libero, odio!
                    Voluptatibus dolorem voluptatem quaerat rem amet perferendis dignissimos reiciendis facilis deserunt eius nobis sint vitae dolore labore quae quidem sequi explicabo aut nam, in nemo repellat cupiditate optio! Recusandae, quam.
                </p>

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