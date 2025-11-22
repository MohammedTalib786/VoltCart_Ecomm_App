import spotlightImg from '../../assets/cart-page/cart_spotlight_main.webp'
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs"


const CartSpotlight = () => {
  return (
    <div
      className=" about_spotlight_bg bg-center bg-cover bg-no-repeat w-full desktop:h-[70vh] gt-tab:h-[75vh] tab:h-[65vh] h-[70vh] flex relative "
      style={{ backgroundImage: `url(${spotlightImg})` }}>

      <div className="container_layout m-auto flex justify-center items-center flex-col  ">
        <BreadCrumbs additionalColorClass=" text-white " />
        <h1 className="font-primary tab:text-[120px]/[130px] text-[65px]/[70px] font-[100] text-white mt-[10px] relative z-[99] " >Cart</h1>
      </div>
    </div>
  )
}

export default CartSpotlight;
