import spotlightImg from '../../assets/about-page/revised-img/about_spotlight.jpg'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'

const CheckoutPageSpotlight = () => {
  return (
        <div
      className=" about_spotlight_bg bg-center bg-cover bg-no-repeat w-full desktop:h-[50vh] gt-tab:h-[90vh] tab:h-[60vh] h-[65vh] flex relative "
      style={{ backgroundImage: `url(${spotlightImg})` }}>

      <div className="container_layout m-auto flex justify-center items-center flex-col  ">
        <BreadCrumbs />
        <h1 className="font-poppins font-bold tab:text-[90px]/[100px] text-[55px]/[65px]  uppercase text-white mt-[10px] relative z-[99] " >Checkout</h1>
      </div>
    </div>
  )
}

export default CheckoutPageSpotlight;
