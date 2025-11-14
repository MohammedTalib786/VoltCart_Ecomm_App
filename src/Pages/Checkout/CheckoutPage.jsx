import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { loadRazorpayScript } from '../../utils/loadRazorpay';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { useCart } from '../../contexts/ProdProvider';
import { useCartTotal } from '../../contexts/cartTotalProvider';
import { useOrder } from '../../contexts/orderItemsProvider';
import { useShippingDetails } from '../../contexts/ShippingDetProvider';
import CheckoutPageSpotlight from '../../components/CheckoutPage/CheckoutPageSpotlight';
import BillingForm from '../../components/CheckoutPage/BillingForm/BillingForm';
import YourOrderComp from '../../components/CheckoutPage/YourOrderComp/YourOrderComp';


const CheckoutPage = () => {
    // >>>>>>>>>>>>>>>>> Change Document Title Dynamically
    useDocumentTitle('Secure Checkout | Complete Your Order Safely');

    let navigate = useNavigate();
    let cartItemSubTotal = 0;
    const [orderProcessLoader, setOrderProcessLoader] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false)
    let { cartProducts, loadingCart } = useCart()
    let { itemTotal, calculateTotal } = useCartTotal()
    let { shippingDetails } = useShippingDetails();
    let [shippingCharges, setShippingCharges] = useState(55);
    let { orderItems, addOrderItems } = useOrder();

    let get_months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][new Date().getMonth()];
    let date = `${new Date().getDate()} ${get_months} ${new Date().getFullYear()}`;

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
                console.log('cartProducts checkout', cartProducts)

                addOrderItems({
                    name: `${formData.first_name} ${formData.last_name}`,
                    email_id: formData.email_address,
                    phone: formData.phone_number,
                    town_city: formData.town_cityInp,
                    state: formData.stateInp,
                    pincode: formData.pincodeInp,
                    date: date,
                    prod_arr: cartProducts.map(elem => elem.name),
                    quantity: cartProducts.map(elem => elem.quantity),
                    price: cartProducts.map(elem => elem.price),
                    shipping_rate: shippingCharges,
                    total: itemTotal.total
                })

                const items = cartProducts;
                const totalAmt = itemTotal.total
                const name = `${formData.first_name} ${formData.last_name}`;

                const res = await fetch(import.meta.env.VITE_BACKEND_RAZORPAY_FETCH_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ items, name, totalAmt }),
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
                    description: 'Order Payment for VoltCart',
                    order_id: data.orderId,
                    handler: function (response) {
                        window.location.href = `/order-successful?payment_id=${response.razorpay_payment_id}&order_id=${response.razorpay_order_id}`;
                    },
                    prefill: {
                        name: formData.first_name,
                        email: formData.email_address,
                        contact: formData.phone_number,
                    },
                    theme: {
                        color: '#0D6EFD',
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

            <div className="  desktop:py-[100px] gt-tab:py-[80px] py-[60px] " >
                {/* >>>>>>>>>>>>>> In Cont */}
                <div className="container_layout mx-auto flex justify-center items-center flex-col "  >

                    <form onSubmit={handlerPlaceOrder} className='w-full' >
                        <div className="cart_card_cont w-full flex gt-tab:flex-row flex-col desktop:gap-[35px] gt-tab:gap-[25px] gap-[35px] " >

                            <div className=" gt-tab:w-[50%] w-full flex flex-col gap-[15px]  "  >
                                <h3 className=' font-primary tab:text-[36px]/[44px] text-[30px]/[38px] font-[400] ' >Billing Details</h3>
                                <BillingForm errorMsg={errorMsg} formData={formData} setFormData={setFormData} />
                            </div>

                            <YourOrderComp
                                itemTotal={itemTotal}
                                calculateTotal={calculateTotal}
                                cartItemSubTotal={cartItemSubTotal}
                                shippingDetails={shippingDetails}
                                shippingCharges={shippingCharges}
                                setShippingCharges={setShippingCharges}
                                cartProducts={cartProducts}
                                isDisabled={isDisabled}
                                orderProcessLoader={orderProcessLoader}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CheckoutPage;
