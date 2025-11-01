
import { useCart } from '../../contexts/ProdProvider'
import CartCard from '../../components/CartPage/CartCard'
import CartCardForEmpty from '../../components/CartPage/CartCardForEmpty'

const Cart = () => {

    let { cartProducts } = useCart()

    // console.log('products context in Cart Page', cartProducts, typeof cartProducts)
    // console.log('cartProducts.length', cartProducts.length)
    // let cartItems = products[0].map((elem) => elem)

    // console.log('cartItems', cartItems, typeof cartItems)

    // cartProducts.map((elem) => {
    // console.log('inside Cart itrems | elem', elem)
    // console.log("IDs", elem.id)
    // })

    // cartProducts 

    return (

        <div className="py-[50px]">
            {/* >>>>>>>>>>>>>> In Cont */}
            <div className="container_layout mx-auto flex justify-center items-center flex-col   "  >


                <h1 className=" text-3xl font-bold text-center pb-5 ">Cart</h1>

                <div className="cart_card_cont w-full  py-[12px] px-[50px] flex gap-[50px] ">

                    <div className=" w-[70%]  py-[50px] flex flex-col gap-[15px]  ">

                        {
                            cartProducts.length <= 0
                                ? <CartCardForEmpty  />
                                : cartProducts.map((elem, index) => {
                                    return <CartCard
                                        key={`${elem.id}-${index}`} id={elem.id} prodName={elem.name} price={elem.price} feat_img={elem.feat_img}
                                    />
                                })
                        }

                    </div>

                    <div className="order_sum w-[30%]  py-[50px] rounded-[12px] border-[1px] border-[#737373]  ">
                        <h3 className='uppercase text-[32px]/[40px] text-center ' >Order Summary</h3>
                    </div>

                </div>
            </div>


        </div>

    )

}

export default Cart