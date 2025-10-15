import { useCart } from '../../contexts/ProdProvider'
import CartCard from '../../components/CartPage/CartComp/CartCard/CartCard'
import CartCardForEmpty from '../../components/CartPage/CartComp/CartCard/CartCardForEmpty'
import OrderSummary from '../../components/CartPage/CartComp/OrderSummary/OrderSummary'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import CartSpotlight from '../../components/CartPage/CartSpotlight'

const Cart = () => {

    // >>>>>>>>>>>>>>>>> Change Document Title Dynamically
    useDocumentTitle('Cart - VoltCart');
    let { cartProducts } = useCart();

    return (
        <>
            <CartSpotlight />

            <div className=" gt-tab:py-[100px] tab:py-[60px] py-[50px] ">
                {/* >>>>>>>>>>>>>> In Cont */}
                <div className="container_layout mx-auto flex justify-center items-center flex-col "  >

                    <div className="cart_card_cont w-full  flex  gt-tab:gap-[20px] gap-[35px] gt-tab:flex-row  flex-col "  >
                        {
                            cartProducts.length <= 0
                                ? <CartCardForEmpty />
                                : (
                                    <>
                                        <div className=" gt-tab:w-[60%]  tab:w-full flex flex-col tab:gap-[15px] gap-[20px]  "  >
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
