import { useRef, useState } from 'react'
// import emailIcon from './TopFooter/email_icon.svg'
import Button from '../FormComp/Button'

import { FaRegEnvelope } from "react-icons/fa";

import emailjs from '@emailjs/browser';
import InputBar from '../FormComp/InputBar';
import Loader from '../Loader/SpinnerLoader';

const NewsletterComp = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let [emailValue, setEmailValue] = useState('');
    let [loader, setLoader] = useState(false);
    let [isDisabled, setIsDisabled] = useState(false);
    let formRef = useRef();
    let [errorMsg, setErrorMsg] = useState({
        error_email: false,
        error_msg: "",
        success_form: false,
    });

    const handlerSubmitForm = async (e) => {
        let to_email = formRef.current.from_email.value
        e.preventDefault();

        try {
            if (to_email.length <= 0) {
                // setLoader(true)
                setErrorMsg({ success_form: false, error_email: true, error_msg: "The Field is Empty!" })
                setTimeout(() => setErrorMsg({ error_email: false, success_form: false }), 5000)
                // console.log('email field is empty!')
            }

            else if (!emailRegex.test(to_email)) {
                setErrorMsg({ success_form: false, error_email: true, error_msg: "The Field is Incorrect!" })
                setTimeout(() => setErrorMsg({ error_email: false, success_form: false }), 5000)
                // console.log('email field is incorrect!')
            }

            else {
                setLoader(true);
                setIsDisabled(true)

                // Receiver - Admin
                await emailjs
                    .sendForm(import.meta.env.VITE_EJS_SERVICE_ID, import.meta.env.VITE_EJS_TEMPLATE_RECEIVER_ID, formRef.current, {
                        publicKey: import.meta.env.VITE_EJS_PUBLIC_KEY,
                    })

                // Sender - User
                await emailjs
                    .send(import.meta.env.VITE_EJS_SERVICE_ID, import.meta.env.VITE_EJS_TEMPLATE_SENDER_ID, { to_email: to_email }, {
                        publicKey: import.meta.env.VITE_EJS_PUBLIC_KEY,
                    })

                console.log('Success Newsletter Form Submitted!');
                setErrorMsg({ error_email: false, error_msg: "", success_form: true })
                setTimeout(() => setErrorMsg({ error_email: false, success_form: false }), 2000)
                setEmailValue('');
                setLoader(false);
                setIsDisabled(false)
            }
        }

        catch (err) {
            setLoader(true)
            setIsDisabled(true)
            console.log('an Error Occured', err);
            setEmailValue('');
            setErrorMsg({ error_email: true, error_msg: "An Error Occured!", success_form: false })
            setTimeout(() => setErrorMsg({ error_email: false, success_form: false }), 2500)
            setLoader(false)
            setIsDisabled(false)
        }
    }


    return (
        <div className='w-full bg-[#eff2f4] py-[40px] px-[20px] flex flex-col justify-center items-center  border-[#b9b9b9] border-t ' >
            <h3 className='font-montserrat font-[600] text-[22px]/[30px] text-[#1C1C1C] ' >Subscribe on our newsletter</h3>
            <p className='text-[#606060] font-poppins font-[400] text-[16px]/[26px] pb-[20px] text-center ' >Get daily news on upcoming offers from many suppliers all over the world</p>

            <form action=""
                ref={formRef} onSubmit={handlerSubmitForm}
                className=' w-full relative flex gap-[8px] tab:flex-row flex-col justify-center items-center '
            >
                {/* <img src={emailIcon} alt="" className=' w-[24px] absolute top-[13px] left-[8px] ' /> */}
                <div className="input_text relative tab:w-auto w-full " >

                    <FaRegEnvelope className=' text-[#8B96A5] text-[16px] absolute top-[13px] left-[14px] ' />
                    <div className="flex flex-col  ">

                        <input type="email" placeholder='Email' name='from_email' value={emailValue} onChange={(e) => setEmailValue(e.target.value)}
                            className=' font-poppins text-black-1c  tab:min-w-[300px] min-w-full  border-[#DEE2E7] border-1 bg-white placeholder:text-[#8B96A5] py-[8px] pr-[20px] pl-[40px] rounded-[6px] outline-0 '
                        />

                        {
                            errorMsg.error_email && <span className=' text-[#c31717]  w-full px-[6px] py-[4px] text-[15px]/[21px] font-medium absolute tab:bottom-[-30px] bottom-[-80px] ' >{errorMsg.error_msg}</span>
                        }
                        {
                            errorMsg.success_form && <span className=' text-[#00a90e]  w-full px-[6px] py-[4px] text-[15px]/[21px] font-medium absolute tab:bottom-[-30px] bottom-[-80px] ' >You've successfully subscribed!</span>
                        }

                    </div>
                </div>

                {/* <Button disabled={true} type='submit' id="newsletter_submit_btn" text={<Loader />} btnWidth='fit' /> */}
                <Button 
                disabled={isDisabled} 
                type='submit' id="newsletter_submit_btn" 
                text={loader ? <Loader /> : "Subscribe"} btnWidth='fit'  
                additionalClass="min-w-[115px]"
                />

            </form>

        </div>
    )
}

export default NewsletterComp;
