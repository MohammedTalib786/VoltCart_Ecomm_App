import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from "react-router";
import Layout from './components/Layout'
import HomePage from './Pages/Home/HomePage'
import AboutPage from './Pages/About/AboutPage'
import BlogPage from './Pages/Blogs/BlogPage';
import Error404Page from './Pages/404Page/Error404Page';
import Products from './Pages/Products_List/Products';
import CartPage from './Pages/Cart/CartPage';
import { ProdProvider } from './contexts/ProdProvider';
import { ShippingDetProvider } from './contexts/ShippingDetProvider';
import ProductDetail from './Pages/Product_Detail/ProductDetail';
import TestPage from './Pages/Test/TestPage';
import Contact from './Pages/Contact/Contact';
import CheckoutPage from './Pages/Checkout/CheckoutPage';
import SearchListing from './Pages/SearchListingPage/SearchListing';
import Lenis from 'lenis';
import ScrollToTopFunc from './components/ScrollToTopFunc/ScrollToTopFunc';
import IntersectionEx from './Pages/CounterTest/IntersectionEx';

import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
import CancellationPolicy from './Pages/CancellationPolicy/CancellationPolicy';
import TermsOfUse from './Pages/TermsOfUse/TermsOfUse';
import ShippingPolicy from './Pages/ShippingPolicy/ShippingPolicy';
import SuccessPage from './Pages/SuccessPage/SuccessPage';
import CancelPage from './Pages/CancelPage/CancelPage';
import Cursor from './components/Cursor/Cursor';


const App = () => {

  let navigate = useNavigate();

  const [loadingCart, setLoadingCart] = useState(true);
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



  // >>>>>>>>>>>>>> Set Cart Item
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartProducts));
  }, [cartProducts])


  // >>>>>>>>>>>>>> Set Shipping Details
  useEffect(() => {
    localStorage.setItem("shippingDetails", JSON.stringify(shippingDetails));
  }, [shippingDetails])



  const addToCartFunc = (cartItem) => {
    // console.log('Added To CaRT')
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

    return () => {
      cancelAnimationFrame(animationFrame); // ✅ Clean up
      lenis.destroy();
    };
  }, []);

  // >>>>>>>>>>>>>>>>>>> ENDS Initialize LENIS



  return (
    <>

      <Cursor />

      <ProdProvider value={{ cartProducts, loadingCart, addToCartFunc, changeQuantityFunc, removeFromCartFunc }} >

        <ShippingDetProvider value={{ shippingDetails, addShippingDetails }}  >

          <ScrollToTopFunc />

          <Routes>

            <Route path='/' element={<Layout />}  >

              <Route index element={<HomePage />} />

              <Route path='/about-us' element={<AboutPage />} />

              <Route path='/contact' element={<Contact />} />

              <Route path='/search-listing' element={<SearchListing />} />

              <Route path='/blogs' element={<BlogPage />} />

              <Route path='/products' element={<Products />} />

              <Route path='/products/:slug' element={<ProductDetail />} />

              <Route path='/cart' element={<CartPage />} />

              <Route path='/checkout' element={<CheckoutPage />} />

              <Route path='/order-successful' element={<SuccessPage />} />

              <Route path='/order-cancel' element={<CancelPage />} />


              {/* >>>>>>>>>>>>>>>>>>>>>>>>> Policy Pages */}

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

    </>
  )
}

export default App
