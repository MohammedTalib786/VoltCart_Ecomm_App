
import { useParams } from 'react-router-dom';
import SpinnerLoader from '../../components/Loader/SpinnerLoader';
import useFetch from '../../hooks/useFetch';
import Button from '../../components/FormComp/Button';
import NumCounter from '../../components/NumCounter/NumCounter';
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaTruckFast } from "react-icons/fa6";
import { BsBoxFill } from "react-icons/bs";
import { PiCreditCardFill } from "react-icons/pi";
import ImageGallerySlider from '../../components/PDP_Page/ImageGallerySliders/ImageGallerySlider';



const ProductDetailBackup = () => {

    let params = useParams();
    let productsAPI = import.meta.env.VITE_PRODUCT_API_KEY;
    // console.log('params', params, typeof params)

    let useProdList = useFetch(`${productsAPI}/${params.slug}`);

    let loader = useProdList.loader;
    let error = useProdList.error;
    let prodData = useProdList.data;

    // console.log('useProdForDet Main hook in Detail Page', useProdList);

    return (
        <>

            {/* >>>>>>>>>>>>>> In Cont */}
            <div className="container_layout mx-auto flex justify-center items-center flex-col  "  >

                <div className='py-[50px] flex gap-[50px] ' >

                    {/* >>>>>>>>>>>>> Left Section */}
                    <div className="left_sec w-[80%] " >
                        {/* <img src="https://www.tintaccessories.com/wp-content/uploads/2024/01/MagPop-JPEG-1024x1024.jpg" alt="" /> */}
                        {/* >>>>>>>>>> Image Gallery Slider */}
                        <ImageGallerySlider />
                    </div>


                    {/* >>>>>>>>>>>>> Right Section */}
                    <div className="right_sec w-full ">
                        <h3>Main Product Name</h3>

                        <div className="price_cont">
                            <p className='text-decoration-line'  > Regular Price: Rs: 5000 </p>
                            <p className=''  > Sale Price: Rs: 2500 </p>
                        </div>
                        <div className="cont flex ">

                            <NumCounter />

                            <Button text="Add to Cart" />

                        </div>

                        <div className="text">
                            <p>Product Description:</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, eveniet cupiditate velit aut, dolor ipsum facilis deserunt sunt dignissimos dolores eum amet ea ut excepturi et modi minima. Voluptas, libero?</p>
                        </div>

                        <div className="icons pt-[25px] flex justify-between flex-wrap gap-[20px] items-center bg-indigo-700  ">

                            <div className="icon_box flex flex-col justify-center items-center gap-[12px] bg-pink-300 w-[48%] ">
                                <IoShieldCheckmarkSharp className='text-[38px]/[45px]  ' />
                                <h5 className='text-[18px]/[24px]  ' >100% Original Products</h5>
                            </div>

                            <div className="icon_box flex flex-col justify-center items-center gap-[12px] bg-pink-300 w-[48%] ">
                                <FaTruckFast className='text-[38px]/[45px]  ' />
                                <h5 className='text-[18px]/[24px]  ' >Fast & Free Delivery</h5>
                            </div>

                            <div className="icon_box flex flex-col justify-center items-center gap-[12px] bg-pink-300 w-[48%] ">
                                <BsBoxFill className='text-[38px]/[45px]  ' />
                                <h5 className='text-[18px]/[24px]  ' >Easy Returns</h5>
                            </div>

                            <div className="icon_box flex flex-col justify-center items-center gap-[12px] bg-pink-300 w-[48%] ">
                                <PiCreditCardFill className='text-[38px]/[45px]  ' />
                                <h5 className='text-[18px]/[24px]  ' >Secure Payments</h5>
                            </div>

                        </div>

                        <div className="pt-[25px]">
                            Accordian
                        </div>


                    </div>


                </div>
            </div>

        </>
    )
}

export default ProductDetailBackup;
