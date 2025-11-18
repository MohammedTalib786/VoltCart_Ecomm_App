import Button from '../FormComp/Button'
import InputBar from '../FormComp/InputBar'
import Loader from '../Loader/SpinnerLoader'


const ContactForm = ({
    formRef,
    errorMsg,
    succesMsg,
    toggleMsg,
    handlerSubmitForm,
    cFormData,
    setcFormData,
    loader,
    isDisabled
}) => {
    return (
        <div className=' relative gt-tab:w-[50%] w-full h-full flex flex-col bg-white desktop:px-[30px] desktop:pt-[25px] desktop:pb-[35px] gt-tab:px-[25px] gt-tab:pt-[25px] gt-tab:pb-[35px] px-[20px] pt-[25px] pb-[35px] rounded-[16px] ' >
            <h2
                className="font-primary gt-tab:text-[45px]/[55px] tab:text-[40px]/[45px] text-[32px]/[40px] font-[300]  "
            >Get In Touch</h2>
            <p
                className=" text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] pt-[10px] pb-[30px]  "
            >Have questions or need assistance? We’re always happy to connect! Drop us a message, and our support team will guide you quickly.</p>

            <form
                ref={formRef} onSubmit={handlerSubmitForm}
                className=" relative w-full flex flex-col gap-[25px] "
            >
                <div className=' relative ' >
                    <InputBar html_for="name" label_text="Your Name"
                        type="text" id="name" name="from_name" placeholder="eg: John Doe"
                        value={cFormData.name} onChange_func={(e) => setcFormData({ ...cFormData, name: e.target.value })}
                        additionalClassName={errorMsg.nameStyle}
                        on_input_func={(e) => {
                            e.target.value = e.target.value.replace(/[\d!@#$%^&*(),.?":{}|<>_\-\/\\\[\]`~+=;']/g, "")
                            e.target.value.length > 10 ? e.target.value = e.target.value.slice(0, 20) : e.target.value
                        }}
                    />
                    {
                        errorMsg.name && <span className='text-[14px]/[20px] text-[#c31717] absolute left-0 -bottom-[20px] ' >The Field is required</span>
                    }
                </div>

                <div className=' relative '  >
                    <InputBar html_for="email" label_text="Your Email"
                        type="email" id="email" name="from_email" placeholder="eg: name@gmail.com"
                        value={cFormData.email} onChange_func={(e) => setcFormData({ ...cFormData, email: e.target.value })}
                        additionalClassName={errorMsg.emailStyle}
                    />
                    {
                        errorMsg.email && <span className='text-[14px]/[20px] text-[#c31717] absolute left-0 -bottom-[20px] ' >The Field is Incorrect!</span>
                    }
                </div>

                <div className=' relative '  >
                    <InputBar html_for="phone" label_text="Your Phone"
                        type="tel" id="phone" name="from_phone" placeholder="eg: 8800880088"
                        value={cFormData.phone} onChange_func={(e) => setcFormData({ ...cFormData, phone: e.target.value })}
                        additionalClassName={errorMsg.phoneStyle}
                        on_input_func={(e) => {
                            e.target.value = e.target.value.replace(/[a-zA-Z!@#$%^&*(),.?":{}|<>_\-\/\\\[\]`~+=;']/g, "")
                            e.target.value.length > 10 ? e.target.value = e.target.value.slice(0, 10) : e.target.value
                        }}
                    />
                    {
                        errorMsg.phone && <span className='text-[14px]/[20px] text-[#c31717] absolute left-0 -bottom-[20px] ' >The Field is Incorrect!</span>
                    }
                </div>

                <div className="sm:col-span-2  ">
                    <label htmlFor="message" className=" block mb-2 font-body text-[16px] font-medium text-black-1c  ">Your Message</label>
                    <textarea
                        id="message" rows="4" name='message' value={cFormData.message} onChange={(e) => setcFormData({ ...cFormData, message: e.target.value })}
                        className=" resize-none w-full border border-[#737373] outline-0 px-[16px] py-[12px] text-[18px]/[26px] rounded-[6px] focus:border-sky-500 "
                        placeholder="Leave a messege..."
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[!@#$%^&*(),.?":{}|<>_\-\/\\\[\]`~+=;']/g, "")
                            e.target.value.length > 10 ? e.target.value = e.target.value.slice(0, 200) : e.target.value
                        }}
                    ></textarea>
                </div>

                <div className=" tab:w-fit w-full ">
                    <Button
                        type="submit"
                        id="newsletter_submit_btn"
                        text={loader ? <Loader /> : "Submit"}
                        disabled={isDisabled}
                        additionalClass=" tab:w-fit w-full min-w-[120px] "
                        btnIcon={loader ? null : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className=' w-[16px] fill-white ' ><path d="M568.4 37.7C578.2 34.2 589 36.7 596.4 44C603.8 51.3 606.2 62.2 602.7 72L424.7 568.9C419.7 582.8 406.6 592 391.9 592C377.7 592 364.9 583.4 359.6 570.3L295.4 412.3C290.9 401.3 292.9 388.7 300.6 379.7L395.1 267.3C400.2 261.2 399.8 252.3 394.2 246.7C388.6 241.1 379.6 240.7 373.6 245.8L261.2 340.1C252.1 347.7 239.6 349.7 228.6 345.3L70.1 280.8C57 275.5 48.4 262.7 48.4 248.5C48.4 233.8 57.6 220.7 71.5 215.7L568.4 37.7z" /></svg>}
                    />
                    {
                        toggleMsg &&
                        <div
                            className={` input_msg text-white inline-flex tab:absolute tab:bottom-[5px] right-auto desktop:left-[160px] tab:left-[160px] fixed tab:top-auto top-[100px] left-[50%] tab:translate-x-[0%] translate-x-[-50%] tab:py-[6px] tab:px-[30px] px-[20px] py-[6px] rounded-[6px] justify-center items-center ${succesMsg.additionalClass} `}  >
                            <span className='text-[16px]/[22px] ' >{succesMsg.message}</span>
                        </div>
                    }
                </div>
            </form>
        </div>
    )
}

export default ContactForm;
