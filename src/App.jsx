import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from "react-router";
import Lenis from 'lenis';


import HomePage from './Pages/Home/HomePage'
import AboutPage from './Pages/About/AboutPage'
import BlogPage from './Pages/Blogs/BlogPage';
import BlogDetails from './Pages/BlogsDetails/BlogDetails';
import Products from './Pages/Products_List/Products';
import ProductDetail from './Pages/Product_Detail/ProductDetail';
import CartPage from './Pages/Cart/CartPage';
import TestPage from './Pages/TestPage/TestPage';
import Contact from './Pages/Contact/Contact';
import CheckoutPage from './Pages/Checkout/CheckoutPage';
import SearchListing from './Pages/SearchListingPage/SearchListing';
import IntersectionEx from './Pages/CounterTest/IntersectionEx';
import HelpPage from './Pages/HelpPage/HelpPage';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
import CancellationPolicy from './Pages/CancellationPolicy/CancellationPolicy';
import TermsOfUse from './Pages/TermsOfUse/TermsOfUse';
import ShippingPolicy from './Pages/ShippingPolicy/ShippingPolicy';
import SuccessPage from './Pages/SuccessPage/SuccessPage';
import CancelPage from './Pages/CancelPage/CancelPage';
import Error404Page from './Pages/404Page/Error404Page';

import { ProdProvider } from './contexts/ProdProvider';
import { ShippingDetProvider } from './contexts/ShippingDetProvider';
import { CartTotalProvider } from './contexts/cartTotalProvider'
import { OrderProvider } from './contexts/orderItemsProvider';

import Layout from './components/Layout'
import ScrollToTopFunc from './components/ScrollToTopFunc/ScrollToTopFunc';
import Cursor from './components/Cursor/Cursor';




const App = () => {
  let location = useLocation();

  const whiteBgPages = ['/search-listing', '/help-and-support', '/privacy-policy', '/cancellation-policy', '/terms-of-use', '/shipping-policy', '/order-cancel', '/order-successful', '/*'];

  useEffect(() => {
    const path = location.pathname;

    const isProductDetail = path.startsWith("/products/") && path !== "/products";
    const isBlogDetail = path.startsWith("/blogs/") && path !== "/blogs";
    const allWhiteBgPages = !whiteBgPages.includes(path) && !isProductDetail && !isBlogDetail;
    // console.log('location', location)
    // console.log('check incl', !allWhiteBgPages)

    if (!allWhiteBgPages) {
      document.body.classList.add('whiteBgPages')
    }
    else {
      document.body.classList.remove('whiteBgPages')
    }
  }, [location.pathname])


  const [loadingCart, setLoadingCart] = useState(true);
  const [loadingOrder, setLoadingOrder] = useState(true);
  let [cartProducts, setCartProducts] = useState([
    // {
    //   id: 1,
    //   name: "SHADOW 5000mAh MagSafe Power Bank",
    //   feat_img: "https://www.tintaccessories.com/wp-content/uploads/2024/01/ARMOUR-Clear-JPEG-1024x1024.jpg",
    //   price: 500,
    //   slug: "shadow-5000mah-magsafe-power-bank",
    //   quantity: 1
    // }
  ])

  let [orderItems, setOrderItems] = useState([
    // {
    //   name: "Talib",
    //   email_id: "shaikhtalib2705@gmail.com",
    //   phone: "8787878787",
    //   town_city: "Mumbai",
    //   state: "Maharashtra",
    //   pincode: 400070,
    //   date: "05 May 2025",
    //   prod_arr: ["SHADOW 5000mAh MagSafe Power Bank", "SHADOW 5000mAh MagSafe Power Bank"],
    //   price: [500, 400],
    //   quantity: [5, 2],
    //   shipping_rate: 55,
    //   total: 1200
    // }
  ])


  const addOrderItems = ({
    name, email_id, phone, town_city, state, pincode, date, prod_arr, price, quantity, shipping_rate, total
  }) => {
    setOrderItems([
      ...orderItems, {
        name: name,
        email_id: email_id,
        phone: phone,
        town_city: town_city,
        state: state,
        pincode: pincode,
        date: date,
        prod_arr: prod_arr,
        price: price,
        quantity: quantity,
        shipping_rate: shipping_rate,
        total: total
      }
    ])
  }



  const [itemTotal, setItemTotal] = useState({ total: 0 })

  const calculateTotal = (amt) => setItemTotal({ total: amt })

  // console.log('itemTotal', itemTotal, typeof itemTotal)

  let [shippingDetails, setShippingDetails] = useState({
    first_name: "",
    last_name: "",
    company_name: "",
    street_address: "",
    town_city: "",
    states: "",
    pincode: null,
    phone_number: null,
    email_address: ""
  })
  // console.log('shippingDetails Contxt', shippingDetails)

  const addShippingDetails = (town_city, pincode, states) => {
    // console.log('Adding Shipping Det');
    // console.log(theMessage)
    setShippingDetails({
      town_city: town_city,
      pincode: pincode,
      states: states
    })
  }


  // >>>>>>>>>>>>>> Get Cart Items from Local Storage
  useEffect(() => {
    let getCartItems = JSON.parse(localStorage.getItem("cartItems"))
    setCartProducts(getCartItems || []);
    setLoadingCart(false)
  }, [])


  // >>>>>>>>>>>>>> Get Shipping Details from Local Storage
  useEffect(() => {
    let getShippingDetails = JSON.parse(localStorage.getItem("shippingDetails"))
    setShippingDetails(getShippingDetails || {});
  }, [])


  // >>>>>>>>>>>>>> Get Order Items from Local Storage
  useEffect(() => {
    let getOrderItems = JSON.parse(localStorage.getItem("orderItems"))
    setOrderItems(getOrderItems || []);
    setLoadingOrder(false)
  }, [])


  // >>>>>>>>>>>>>> Set Cart Item
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartProducts));
  }, [cartProducts])


  // >>>>>>>>>>>>>> Set Shipping Details
  useEffect(() => {
    localStorage.setItem("shippingDetails", JSON.stringify(shippingDetails));
  }, [shippingDetails])


  // >>>>>>>>>>>>>> Set Order Items
  useEffect(() => {
    localStorage.setItem("orderItems", JSON.stringify(orderItems));
  }, [orderItems])


  const addToCartFunc = (cartItem) => {
    // console.log('Added To Cart')
    setCartProducts((prevItem) => {
      let existingItem = prevItem.find((elem) => elem.id === cartItem.id)
      // console.log('existingItem', existingItem)
      if (existingItem) {
        // console.log('Existing Item')
        return prevItem.map((prevElem) => prevElem.id === cartItem.id ? { ...prevElem, quantity: prevElem.quantity + cartItem.quantity } : prevElem)
      }

      return [...prevItem, cartItem]

    })
    // console.log(cartItem)
  }

  const clearCartFunc = () => {
    setCartProducts([])
  }


  const changeQuantityFunc = (id, newQty) => {
    setCartProducts(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };


  const removeFromCartFunc = (id) => {
    setCartProducts((prevItem) => prevItem.filter((elem) => elem.id !== id))
    // console.log('Remove From CaRT')
  }



  // >>>>>>>>>>>>>>>> Initialize Lenis (Smooth Scroll Library)
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smooth: true,
      smoothTouch: true,
      duration: 2,
      autoRaf: false, // disable the internal loop
    });

    let animationFrame;

    const raf = (time) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };

    animationFrame = requestAnimationFrame(raf);


    // 👉 Make it accessible globally
    window.lenis = lenis;



    return () => {
      cancelAnimationFrame(animationFrame); // ✅ Clean up
      lenis.destroy();
    };
  }, []);

  // >>>>>>>>>>>>>>>>>>> ENDS Initialize LENIS


  return (
    <>



      {/* <Cursor /> */}

      <OrderProvider value={{ orderItems, loadingOrder, addOrderItems }} >

        <CartTotalProvider value={{ itemTotal, calculateTotal }}  >

          <ProdProvider value={{ cartProducts, loadingCart, addToCartFunc, changeQuantityFunc, removeFromCartFunc, clearCartFunc }} >

            <ShippingDetProvider value={{ shippingDetails, addShippingDetails }}  >

              <ScrollToTopFunc />



              <Routes  >

                <Route path='/' element={<Layout />} >

                  <Route index element={<HomePage />} />

                  <Route path='/about-us' element={<AboutPage />} />

                  <Route path='/contact-us' element={<Contact />} />

                  <Route path='/blogs' element={<BlogPage />} />

                  <Route path='/blogs/:slug' element={<BlogDetails />} />

                  <Route path='/products' element={<Products />} />

                  <Route path='/products/:slug' element={<ProductDetail />} />

                  <Route path='/cart' element={<CartPage />} />

                  <Route path='/checkout' element={<CheckoutPage />} />

                  <Route path='/order-successful' element={<SuccessPage />} />

                  <Route path='/order-cancel' element={<CancelPage />} />

                  <Route path='/search-listing' element={<SearchListing />} />


                  {/* >>>>>>>>>>>>>>>>>>>>>>>>> Policy Pages */}

                  <Route path='/help-and-support' element={<HelpPage />} />

                  <Route path='/privacy-policy' element={<PrivacyPolicy />} />

                  <Route path='/cancellation-policy' element={<CancellationPolicy />} />

                  <Route path='/terms-of-use' element={<TermsOfUse />} />

                  <Route path='/shipping-policy' element={<ShippingPolicy />} />

                  {/* <Route path='*' element={<Error404Page />} /> */}

                  <Route path='/counter-test-1' element={<IntersectionEx />} />

                  <Route path='/test' element={<TestPage />} />

                </Route>

                <Route path='*' element={<Error404Page />} />

              </Routes>



            </ShippingDetProvider>

          </ProdProvider>

        </CartTotalProvider>

      </OrderProvider>

    </>
  )
}

export default App
