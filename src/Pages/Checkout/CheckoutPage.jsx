import { useEffect, useState } from 'react'
import BillingForm from '../../components/CheckoutPage/BillingForm/BillingForm';
import YourOrderComp from '../../components/CheckoutPage/YourOrderComp/YourOrderComp';
import { useCart } from '../../contexts/ProdProvider';
import { useNavigate } from 'react-router-dom';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { loadRazorpayScript } from '../../utils/loadRazorpay';
import CheckoutPageSpotlight from '../../components/CheckoutPage/CheckoutPageSpotlight';

const CheckoutPage = () => {
    // >>>>>>>>>>>>>>>>> Change Document Title Dynamically
    useDocumentTitle('Checkout - VoltCart');
    const [orderProcessLoader, setOrderProcessLoader] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false)

    let { cartProducts, loadingCart } = useCart()

    let navigate = useNavigate();

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
    const handlerPlaceOrder = async (e) => {

        e.preventDefault();
        setOrderProcessLoader(true);
        setIsDisabled(true)
        console.log("Button CLicked");

        try {
            // 1️⃣ Ensure Razorpay SDK is loaded
            const scriptLoaded = await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");

            if (!scriptLoaded) {
                alert("Failed to load Razorpay SDK. Please check your internet connection.");
                return;
            }

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

                setOrderProcessLoader(true);
                setIsDisabled(true)
                console.log('formData.first_name', formData.first_name)
                console.log('formData.last_name', formData.last_name)
                console.log('formData.phone_number', formData.phone_number)
                console.log('formData.email_address', formData.email_address)
                console.log('formData.pincodeInp', formData.pincodeInp)
                console.log('formData.stateInp', formData.stateInp)
                console.log('formData.street_address', formData.street_address)
                console.log('formData.town_cityInp', formData.town_cityInp)

                // // const items = [
                // //     { name: 'T-shirt', quantity: 2, price: 300 },
                // //     { name: 'Shoes', quantity: 1, price: 1200 },
                // // ];

                const items = cartProducts;
                const name = `${formData.first_name} ${formData.last_name}`;

                const res = await fetch(import.meta.env.VITE_BACKEND_RAZORPAY_FETCH_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ items, name }),
                });

                const data = await res.json();

                if (!data.orderId) return alert('Failed to create order');
                if (!data.orderId) {
                    console.log('No orderId received:', data);
                    return alert('Failed to create order');
                }

                const options = {
                    key: import.meta.env.VITE_RAZORPAY_KEY_ID, // NOT the secret
                    amount: data.amount,
                    currency: data.currency,
                    name: 'VoltCart',
                    description: 'Order Payment',
                    order_id: data.orderId,
                    handler: function (response) {
                        // Redirect after payment success
                        // window.location.href = `/success?payment_id=${response.razorpay_payment_id}`;
                        window.location.href = `/order-successful?payment_id=${response.razorpay_payment_id}&order_id=${response.razorpay_order_id}`;
                    },
                    prefill: {
                        // name: data.name,
                        name: formData.first_name,
                        email: formData.email_address,
                        contact: formData.phone_number,
                    },
                    theme: {
                        color: '#3399cc',
                    },
                    modal: {
                        ondismiss: function () {
                            window.location.href = '/order-cancel';
                        },
                    },
                };

                const rzp = new window.Razorpay(options);
                rzp.open();

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
        catch (err) {
            console.log(err)
            alert('Something went Wrong!')
        }
        finally {
            setOrderProcessLoader(false); // stop loading once flow is complete
            setIsDisabled(false)
        }
    }


    return (

        <>
            <CheckoutPageSpotlight />
            <div className="py-[100px]">
                {/* >>>>>>>>>>>>>> In Cont */}
                <div className="container_layout mx-auto flex justify-center items-center flex-col   "  >

                    {/* <div className="cart_heading pb-[40px] "  >
                        <h1 className=" text-3xl font-bold text-center ">Checkout</h1>
                    </div> */}

                    <form onSubmit={handlerPlaceOrder} className='w-full' >
                        <div className="cart_card_cont w-full px-[50px] flex gap-[35px] "  >

                            <div className=" w-[50%] flex flex-col gap-[15px]  "  >
                                <BillingForm errorMsg={errorMsg} formData={formData} setFormData={setFormData} />
                            </div>

                            <YourOrderComp isDisabled={isDisabled} orderProcessLoader={orderProcessLoader} />
                        </div>
                    </form>
                </div>

            </div>
        </>

    )
}

export default CheckoutPage;
