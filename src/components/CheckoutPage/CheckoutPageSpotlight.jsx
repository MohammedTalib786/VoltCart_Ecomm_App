import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'

// import spotlightImg from '../../assets/about-page/revised-img/about_spotlight.jpg'
// import spotlightImg from '../../assets/checkout-page/spotlight_img.jpg'
import spotlightImg from '../../assets/checkout-page/checkout_spotlight_main.webp'

const CheckoutPageSpotlight = () => {
  return (
    <div
      className=" about_spotlight_bg bg-center bg-cover bg-no-repeat w-full desktop:h-[70vh] gt-tab:h-[75vh] tab:h-[65vh] h-[70vh] flex relative "
      style={{ backgroundImage: `url(${spotlightImg})` }}>

      <div className="container_layout m-auto flex justify-center items-center flex-col  ">
        <BreadCrumbs breadColor="#fff" />
        {/* <h1 className="font-body font-bold tab:text-[90px]/[100px] text-[55px]/[65px]  uppercase text-white mt-[10px] relative z-[99] " >Cart</h1> */}
        <h1 className="font-primary tab:text-[120px]/[130px] text-[65px]/[70px] font-[100] text-white mt-[10px] relative z-[99] " >Checkout</h1>
      </div>
    </div>
  )
}

export default CheckoutPageSpotlight;
