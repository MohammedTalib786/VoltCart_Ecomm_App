import { useCart } from '../../contexts/ProdProvider'
import CartCard from '../../components/CartPage/CartComp/CartCard/CartCard'
import CartCardForEmpty from '../../components/CartPage/CartComp/CartCard/CartCardForEmpty'
import OrderSummary from '../../components/CartPage/CartComp/OrderSummary/OrderSummary'
import useDocumentTitle from '../../hooks/useDocumentTitle'

import spotlightImg from '../../assets/about-page/revised-img/about_spotlight.jpg'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import CartSpotlight from '../../components/CartPage/CartSpotlight'

const Cart = () => {

    // >>>>>>>>>>>>>>>>> Change Document Title Dynamically
    useDocumentTitle('Cart - VoltCart');

    let { cartProducts } = useCart();

    return (

        <>

            <CartSpotlight />

            <div className="py-[100px]">
                {/* >>>>>>>>>>>>>> In Cont */}
                <div className="container_layout mx-auto flex justify-center items-center flex-col "  >

                    {/* <div className="cart_heading pb-[40px] "  >
                        <h1 className=" text-3xl font-bold text-center ">Cart</h1>
                    </div> */}

                    <div className="cart_card_cont w-full  flex gap-[35px] "  >

                        {
                            cartProducts.length <= 0
                                ? <CartCardForEmpty />
                                : (
                                    <>
                                        <div className=" w-[60%] flex flex-col gap-[15px]  "  >
                                            {
                                                cartProducts.map((elem, index) => <CartCard
                                                    key={`${elem.id}-${index}`} id={elem.id} prodName={elem.name} slug={elem.slug} price={elem.price} feat_img={elem.feat_img}
                                                />)
                                            }
                                        </div>
                                        <OrderSummary />
                                    </>
                                )
                        }

                    </div>
                </div>


            </div>

        </>
    )
}

export default Cart;
