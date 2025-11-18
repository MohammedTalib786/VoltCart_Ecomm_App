import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import ContactSpotlight from '../../components/ContactPage/ContactSpotlight'
import ContactIframe from '../../components/ContactPage/ContactIframe';
import ContactForm from '../../components/ContactPage/ContactForm';
import ContactInfo from '../../components/ContactPage/ContactInfo';

import './contactStyle.css';


const Contact = () => {
  // >>>>>>>>>>>>>>>>> Change Document Title Dynamically
  useDocumentTitle('Get in Touch | We’re Here to Help | VoltCart');

  let formRef = useRef();
  let [errorMsg, setErrorMsg] = useState({
    name: false,
    nameStyle: "",
    email: false,
    emailStyle: "",
    phone: false,
    phoneStyle: "",
  })

  let [toggleMsg, setToggleMsg] = useState(false)
  // let [toggleMsg, setToggleMsg] = useState(true)

  let [succesMsg, setSuccessMsg] = useState({})
  // let [succesMsg, setSuccessMsg] = useState({
  //   message: "Checkin Form...",
  //   additionalClass: "bg-[#d1950a] tab:w-auto w-[65%] "
  //   // additionalClass: "bg-[#1ca928] tab:w-auto w-[65%] "
  // })

  let [cFormData, setcFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  let [loader, setLoader] = useState(false);
  let [isDisabled, setIsDisabled] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handlerSubmitForm = async (e) => {
    e.preventDefault();
    let from_name = formRef.current.from_name.value
    let to_email = formRef.current.from_email.value
    let to_phone = formRef.current.from_phone.value
    let message = formRef.current.message.value

    try {
      if (from_name.length <= 0) setErrorMsg({ phone: false, phoneStyle: "", email: false, emailStyle: "", name: true, nameStyle: "border-b-[#c31717] border-b-2" })
      else if (to_email.length <= 0 || !emailRegex.test(to_email)) setErrorMsg({ name: false, nameStyle: "", phone: false, phoneStyle: "", email: true, emailStyle: "border-b-[#c31717] border-b-2" })
      else if (to_phone.length < 10) setErrorMsg({ name: false, nameStyle: "", email: false, emailStyle: "", phone: true, phoneStyle: "border-b-[#c31717] border-b-2", })
      else {
        setLoader(true);
        setIsDisabled(true);
        setErrorMsg({ email: false, name: false })
        console.log('Form Submitting!');
        setToggleMsg(true)
        setSuccessMsg({
          // message: "Form Submitting...",
          message: "Just a moment...",
          additionalClass: "bg-[#d1950a] tab:w-auto w-[65%] "
        })

        // setTimeout(() => {
        //   console.log('check submitting!')
        //   setcFormData({
        //     name: '',
        //     email: '',
        //     phone: '',
        //     message: ''
        //   })

        //   setToggleMsg(true)
        //   setSuccessMsg({
        //     message: "Form Submitted Successfully!",
        //     additionalClass: "bg-[#46b450] tab:w-auto w-[80%] "
        //   })
        //   setTimeout(() => setToggleMsg(false), 3500)
        //   setLoader(false);
        //   setIsDisabled(false)
        //   return true
        // }, 4000)
        console.log('Success');

        // Receiver - Admin
        await emailjs
          .sendForm(import.meta.env.VITE_EJS_SERVICE_ID, import.meta.env.VITE_EJS_TEMPLATE_RECEIVER_ID, formRef.current, {
            publicKey: import.meta.env.VITE_EJS_PUBLIC_KEY,
          })

        // Sender - User
        await emailjs
          .send(import.meta.env.VITE_EJS_SERVICE_ID, import.meta.env.VITE_EJS_TEMPLATE_SENDER_ID, { from_name: from_name, to_email: to_email, to_phone: to_phone, message: message }, {
            publicKey: import.meta.env.VITE_EJS_PUBLIC_KEY,
          })

        setcFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })

        setToggleMsg(true)
        setSuccessMsg({
          // message: "Form Submitted Successfully!",
          message: "Submitted successfully!",
          additionalClass: "bg-[#1ca928] tab:w-auto w-[80%] "
        })
        setTimeout(() => setToggleMsg(false), 3000)
        setLoader(false);
        setIsDisabled(false)
      }
    }

    catch (err) {
      setLoader(true);
      setIsDisabled(true)
      console.log('An error occured while submitting the form', err)
      setToggleMsg(true)
      setSuccessMsg({
        message: "An error occured while submitting the form!",
        additionalClass: "bg-[#b74556] tab:w-auto w-[80%] "
      })
      setTimeout(() => setToggleMsg(false), 2500)
      setLoader(false);
      setIsDisabled(false)
    }
  }


  return (
    <>
      <div className="m-auto" >
        <ContactSpotlight />

        <div className="container_layout m-auto" >
          <div className="flex gt-tab:flex-row flex-col desktop:py-[100px] gt-tab:py-[80px] py-[60px] desktop:gap-[50px] gt-tab:gap-[30px] tab:gap-[60px] gap-[50px] " >
            <ContactInfo />
            <ContactForm
              formRef={formRef}
              errorMsg={errorMsg}
              succesMsg={succesMsg}
              toggleMsg={toggleMsg}
              handlerSubmitForm={handlerSubmitForm}
              cFormData={cFormData}
              setcFormData={setcFormData}
              loader={loader}
              isDisabled={isDisabled}
            />
          </div>
        </div>

        <div className=" w-full " >
          <ContactIframe />
        </div>
      </div>
    </>
  )
}

export default Contact;
