import ContactIconBoxes from './ContactIconBoxes'
import ContactSocials from './ContactSocials'


const ContactInfo = () => {
    return (
        <div
            className=" gt-tab:w-[50%] w-full " >
            <h2
                className="font-primary gt-tab:text-[45px]/[55px] tab:text-[40px]/[45px] text-[32px]/[40px] font-[300] "
            >Connecting You, <br className=' gt-tab:block tab:hidden block ' />Wherever You Are</h2>
            <p
                className=" text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] pt-[10px] pb-[30px] "
            >Send in your query for product related information. For bulk purchase / distribution you can contact us on the details given below:</p>
            <ContactIconBoxes />
            <ContactSocials />
        </div>
    )
}

export default ContactInfo;
