import { useCart } from '../../contexts/ProdProvider'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import CartCard from '../../components/CartPage/CartComp/CartCard/CartCard'
import CartCardForEmpty from '../../components/CartPage/CartComp/CartCard/CartCardForEmpty'
import OrderSummary from '../../components/CartPage/CartComp/OrderSummary/OrderSummary'
import CartSpotlight from '../../components/CartPage/CartSpotlight'


const Cart = () => {
    // >>>>>>>>>>>>>>>>> Change Document Title Dynamically
    useDocumentTitle('Your Shopping Cart | Review & Proceed to Checkout');
    let { cartProducts } = useCart();

    return (
        <>
            <CartSpotlight />

            <div className=" desktop:py-[100px] gt-tab:py-[80px] py-[60px] ">
                {/* >>>>>>>>>>>>>> In Cont */}
                <div className="container_layout mx-auto flex justify-center items-center flex-col "  >
                    <div className="cart_card_cont w-full  flex  gt-tab:gap-[20px] gap-[35px] gt-tab:flex-row  flex-col "  >
                        {
                            cartProducts.length <= 0
                                ? <CartCardForEmpty />
                                : (
                                    <>
                                        <div className="gt-tab:w-[60%] tab:w-full flex flex-col tab:gap-[15px] gap-[20px]">

                                            <h3 className='font-primary tab:text-[36px]/[44px] text-[30px]/[38px] font-[400] ' >Cart Items</h3>
                                            <div className=" flex flex-col tab:gap-[15px] gap-[20px]  "  >
                                                {
                                                    cartProducts.map((elem, index) =>
                                                        <CartCard
                                                            key={`${elem.id}-${index}`}
                                                            id={elem.id}
                                                            prodName={elem.name}
                                                            slug={elem.slug}
                                                            price={elem.price}
                                                            feat_img={elem.feat_img}
                                                        />)
                                                }
                                            </div>
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
