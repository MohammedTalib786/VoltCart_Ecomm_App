import React, { useEffect, useState } from 'react'
import BillingForm from '../../components/CheckoutPage/BillingForm/BillingForm';
import YourOrderComp from '../../components/CheckoutPage/YourOrderComp/YourOrderComp';
import { useShippingDetails } from '../../contexts/ShippingDetProvider';
import { useCart } from '../../contexts/ProdProvider';
import { useNavigate } from 'react-router-dom';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const CheckoutPage = () => {


    // >>>>>>>>>>>>>>>>> Change Document Title Dynamically
    useDocumentTitle('Checkout - VoltCart');

    let { cartProducts, loadingCart } = useCart()

    let navigate = useNavigate();

    // console.log('inside checkout cartProducts', cartProducts)

    useEffect(() => {
        if (!loadingCart && cartProducts.length === 0) navigate('/cart');
    }, [cartProducts])

    let [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        street_address: "",
        town_cityInp: "",
        pincodeInp: Number(""),
        stateInp: "Maharashtra",
        phone_number: Number(""),
        email_address: ""
    });

    let [errorMsg, setErrorMsg] = useState({
        firstName: false,
        email: false,
        phone: false,
        streetAddress: false,
        townCity: false,
        pincode: false,
    })

    const pincodeRegex = /^\d{6}$/;
    const phoneNumberRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    // >>>>>>>>>>>>>>>>>>>>> Form Validation
    const dummyHandlerPlaceOrder = (e) => {
        e.preventDefault();
        console.log("Button CLicked");

        if (formData.first_name === '' || !formData.first_name) {
            console.log('first_name inp cant be empty!')

            setErrorMsg({ ...errorMsg, firstName: true })
            setTimeout(() => {
                setErrorMsg({ ...errorMsg, firstName: false })
            }, 1500)
            return false;
        }

        else if (!formData.email_address || !emailRegex.test(formData.email_address)) {
            console.log('Invalid Email!');
            setErrorMsg({ ...errorMsg, email: true })
            setTimeout(() => {
                setErrorMsg({ ...errorMsg, email: false })
            }, 1500)
            return false;
        }


        else if (!formData.phone_number || !phoneNumberRegex.test(formData.phone_number)) {
            console.log('phone_number inp cant be empty!')
            setErrorMsg({ ...errorMsg, phone: true })
            setTimeout(() => {
                setErrorMsg({ ...errorMsg, phone: false })
            }, 1500)
            return false;
        }

        else if (formData.street_address === '' || !formData.street_address) {
            console.log('street_address inp cant be empty!')
            setErrorMsg({ ...errorMsg, streetAddress: true })
            setTimeout(() => {
                setErrorMsg({ ...errorMsg, streetAddress: false })
            }, 1500)
            return false;
        }

        else if (formData.town_cityInp == '' || !formData.town_cityInp) {
            console.log('town_city inp cant be empty!')
            setErrorMsg({ ...errorMsg, townCity: true })
            setTimeout(() => {
                setErrorMsg({ ...errorMsg, townCity: false })
            }, 1500)
            return false;
        }

        else if (!formData.pincodeInp || !pincodeRegex.test(formData.pincodeInp)) {
            console.log('Pincode Invalid!');
            setErrorMsg({ ...errorMsg, pincode: true })
            setTimeout(() => {
                setErrorMsg({ ...errorMsg, pincode: false })
            }, 1500)
            return false;
        }


        else {
            // townCity, pincode, State
            // addShippingDetails(formData.town_cityInp, formData.pincodeInp, formData.stateInp);
            // setIsVisible(prev => !prev);
            // setFormData({ town_cityInp: '', pincodeInp: Number(""), stateInp: "" })
            // setFormData({ town_cityInp: '', pincodeInp: Number(""), stateInp: formData.stateInp })

            console.log('formData.first_name', formData.first_name)
            console.log('formData.last_name', formData.last_name)
            console.log('formData.phone_number', formData.phone_number)
            console.log('formData.email_address', formData.email_address)
            console.log('formData.pincodeInp', formData.pincodeInp)
            console.log('formData.stateInp', formData.stateInp)
            console.log('formData.street_address', formData.street_address)
            console.log('formData.town_cityInp', formData.town_cityInp)

            setFormData({
                first_name: "",
                last_name: "",
                street_address: "",
                town_cityInp: "",
                pincodeInp: Number(""),
                stateInp: "Maharashtra",
                phone_number: Number(""),
                email_address: ""
            })

            return true;
        }
    }



    return (
        <div className="py-[50px]">
            {/* >>>>>>>>>>>>>> In Cont */}
            <div className="container_layout mx-auto flex justify-center items-center flex-col   "  >

                <div className="cart_heading pb-[40px] "  >
                    <h1 className=" text-3xl font-bold text-center ">Checkout</h1>
                </div>

                <form onSubmit={dummyHandlerPlaceOrder} >
                    <div className="cart_card_cont w-full px-[50px] flex gap-[35px] "  >


                        <div className=" w-[60%] flex flex-col gap-[15px]  "  >
                            <BillingForm errorMsg={errorMsg} formData={formData} setFormData={setFormData} />
                        </div>

                        <YourOrderComp />
                    </div>
                </form>
            </div>


        </div>
    )
}

export default CheckoutPage;
