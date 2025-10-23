import { useEffect, useRef, useState } from 'react'
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import emailjs from '@emailjs/browser';
import { useAnimation, useScroll } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import Button from '../../components/FormComp/Button';
import InputBar from '../../components/FormComp/InputBar';
import ContactSpotlight from '../../components/ContactPage/ContactSpotlight'

import ContactIconBoxesBackup from '../../components/ContactPage/ContactIconBoxesBackup';
import ContactIconBoxes from '../../components/ContactPage/ContactIconBoxes';
import ContactIframe from '../../components/ContactPage/ContactIframe';
import ContactForm from '../../components/ContactPage/ContactForm';
import ContactInfo from '../../components/ContactPage/ContactInfo';

import './contactStyle.css';


const Contact = () => {

  // >>>>>>>>>>>>>>>>> Change Document Title Dynamically
  useDocumentTitle('Get in Touch - VoltCart');

  let formRef = useRef();
  let [errorMsg, setErrorMsg] = useState({
    name: false,
    nameStyle: "",
    email: false,
    emailStyle: "",
    // email: true, emailStyle: "border-b-[#c31717] border-b-2", name: true, nameStyle: "border-b-[#c31717] border-b-2"
  })


  let [toggleMsg, setToggleMsg] = useState(false)
  let [succesMsg, setSuccessMsg] = useState({})
  

  let [cFormData, setcFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  let [loader, setLoader] = useState(false);

  let [isDisabled, setIsDisabled] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handlerSubmitForm = async (e) => {
    e.preventDefault();

    let from_name = formRef.current.from_name.value
    let to_email = formRef.current.from_email.value
    let message = formRef.current.message.value

    // console.log('from_name', from_name)
    // console.log('from_name', from_name.length)
    // console.log('to_email', to_email)
    // console.log('message', message)

    try {
      if (from_name.length <= 0) {
        setErrorMsg({ email: false, emailStyle: "", name: true, nameStyle: "border-b-[#c31717] border-b-2" })
        // console.log('name field incorrect')
      }

      else if (to_email.length <= 0 || !emailRegex.test(to_email)) {
        setErrorMsg({ name: false, nameStyle: "", email: true, emailStyle: "border-b-[#c31717] border-b-2" })
        // console.log('email field incorrect')
      }

      else {
        setLoader(true);
        setIsDisabled(true);

        setErrorMsg({ email: false, name: false })
        // console.log('Form Submitting!');
        setToggleMsg(true)
        setSuccessMsg({
          message: "Form Submitting...",
          additionalClass: "bg-[#e1a313] tab:w-auto w-[65%] "
        })
        // console.log('Success');


        // Receiver - Admin
        await emailjs
          .sendForm(import.meta.env.VITE_EJS_SERVICE_ID, import.meta.env.VITE_EJS_TEMPLATE_RECEIVER_ID, formRef.current, {
            publicKey: import.meta.env.VITE_EJS_PUBLIC_KEY,
          })

        // Sender - User
        await emailjs
          .send(import.meta.env.VITE_EJS_SERVICE_ID, import.meta.env.VITE_EJS_TEMPLATE_SENDER_ID, { from_name: from_name, to_email: to_email, message: message }, {
            publicKey: import.meta.env.VITE_EJS_PUBLIC_KEY,
          })


        setcFormData({
          name: '',
          email: '',
          message: ''
        })

        setToggleMsg(true)
        setSuccessMsg({
          message: "Form Submitted Successfully!",
          additionalClass: "bg-[#46b450] tab:w-auto w-[80%] "
        })
        setTimeout(() => setToggleMsg(false), 2500)

        setLoader(false);
        setIsDisabled(false)
      }

    }

    catch (err) {
      setLoader(true);
      setIsDisabled(true)
      // console.log('an Error Occured', err)
      setToggleMsg(true)
      setSuccessMsg({
        message: "An Error Occured while submitting the Form!",
        additionalClass: "bg-[#b74556] tab:w-auto w-[80%] "
      })
      setTimeout(() => setToggleMsg(false), 2500)
      setLoader(false);
      setIsDisabled(false)
      // setcFormData({
      //   name: '',
      //   email: '',
      //   message: ''
      // })
    }
  }




  return (
    <>
      <div className="m-auto" >

        {/* >>>>>>>>>>>>>> Full Width 3D Spotlight */}
        {/* <ContactSpotlight /> */}

        {/* >>>>>>>>>>>>>>>>> Spotlight */}
        {/* <div className="relative contact-spotlight-bg lg:h-[80vh] h-[50vh] bg-cover bg-no-repeat bg-center-top flex flex-col justify-center px-4" style={{ backgroundImage: `url(${contact})` }}>
            <div className="w-[100%] py-[20px] px-[50px] flex align-center justify-center"><BreadCrumbs /></div>
            <h2 className="mb-4 text-[40px] lg:text-[90px] tracking-tight font-primary font-[100] text-center text-white dark:text-white z-[99]">Contact Us</h2>

          </div> */}

        <ContactSpotlight />


        <div className="container_layout m-auto" >

          {/* <ContactIconBoxesBackup /> */}


          <div className="flex gt-tab:flex-row flex-col desktop:py-[100px] gt-tab:py-[80px] py-[60px] desktop:gap-[40px] gt-tab:gap-[30px] tab:gap-[60px] gap-[40px] " >


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

export default Contact
