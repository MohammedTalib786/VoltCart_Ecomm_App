import BreadCrumbs from "../BreadCrumbs/BreadCrumbs"
// import spotlightImg from '../../assets/about-page/revised-img/about_spotlight.jpg'
// import spotlightImg from '../../assets/cart-page/cart-page-spotlight.jpg'
import spotlightImg from '../../assets/cart-page/cart_spotlight_main.webp'

const CartSpotlight = () => {
  return (
    <div
      className=" about_spotlight_bg bg-center bg-cover bg-no-repeat w-full desktop:h-[65vh] gt-tab:h-[90vh] tab:h-[60vh] h-[65vh] flex relative "
      style={{ backgroundImage: `url(${spotlightImg})` }}>

      <div className="container_layout m-auto flex justify-center items-center flex-col  ">
        <BreadCrumbs breadColor="#fff" />
        {/* <h1 className="font-body font-bold tab:text-[90px]/[100px] text-[55px]/[65px]  uppercase text-white mt-[10px] relative z-[99] " >Cart</h1> */}
        <h1 className="font-primary tab:text-[120px]/[130px] text-[65px]/[70px] font-[100] text-white mt-[10px] relative z-[99] " >Cart</h1>
      </div>
    </div>
  )
}

export default CartSpotlight;
