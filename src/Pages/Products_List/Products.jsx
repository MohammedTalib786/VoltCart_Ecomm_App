import { React, useState } from 'react'
// import ProductCard from '../../components/ProductCard/ProductCard'
import ProductCard from '../../components/ProductCard/ProductCard'
import '../../components/layout.css'
import Loader from '../../components/Loader/SkeletonLoader'
import useFetch from '../../hooks/useFetch'
import prodSpotlight from '../../assets/prodListing/productSpot.webp'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import placeholderImg from '../../assets/placeholder_img.png'
import useDocumentTitle from '../../hooks/useDocumentTitle'


const Products = () => {

    // >>>>>>>>>>>>>>>>> Change Document Title Dynamically
    useDocumentTitle('Shop All - VoltCart');

    let productsAPI = import.meta.env.VITE_PRODUCT_API_KEY;
    // console.log('Vite API Key', import.meta.env.VITE_PRODUCT_API_KEY)

    let useProdList = useFetch(productsAPI);

    let loader = useProdList.loader;
    let error = useProdList.error;
    let prodData = useProdList.data;

    let [checkValue, setcheckValue] = useState([])

    const checkBoxChanged = (e) => {
        let { value, checked } = e.target;

        if (checked) {
            setcheckValue([value])
        }
        else {
            setcheckValue([])
        }
    }

    return (

        <div className=""  >

            {/* >>>>>>>>>>>>>> In Cont */}
            <div className="flex flex-col justify-center items-center"  >
                <div className="w-full lg:h-[500px] h-[300px] flex flex-col items-center justify-center bg-cover relative bg-no-repeat bg-center md:mb-20 mb-10" style={{ backgroundImage: `url(${prodSpotlight})` }}>
                    <h1 className="font-[montserrat] font-[700] text-4xl lg:text-6xl text-white text-center pb-5 ">Products</h1>
                    <div className="max-w-[1440px] w-full px-[50px] py-[20px] absolute top-0" >
                        <BreadCrumbs />
                    </div>
                </div>

                <div className="container_layout flex md:flex-row flex-col gap-[10px]" >
                    <div className="cat-search lg:w-[20%] md:w-[25%] w-full mb-[20px]">
                        <h3 className="font-[inter] font-[500] lg:text-[18px] text-[16px] border-b-1 pb-[10px]">Search by category</h3>
                        <div className="checkbox-cat flex flex-col md:mt-[30px] mt-[20px]">
                            <div className="chkbox flex flex-row gap-2">
                                <label htmlFor="coverCases" className='font-[inter] font-[500] lg:text-[15px] text-[12px]'> <input type="checkbox" name="Covers and Cases" value='Covers and Cases' id="coverCases" onChange={checkBoxChanged} className='mr-[10px]' />
                                    Cover and Cases</label>

                            </div>
                            <div className="chkbox flex flex-row gap-2 my-[20px]">
                                <label htmlFor="powerBanks" className='font-[inter] font-[500] lg:text-[15px] text-[12px]'><input type="checkbox" name="powerBanks" value='Power Banks' id="powerBanks" onChange={checkBoxChanged} className='mr-[10px]' />
                                    Power Banks</label>

                            </div>
                            <div className="chkbox flex gap-2 flex-row">
                                <label htmlFor="belts" className='font-[inter] font-[500] lg:text-[15px] text-[12px]'><input type="checkbox" name="belts" value='Stand and Straps' id="belts" onChange={checkBoxChanged} className='mr-[10px]' />
                                    Stand and Straps</label>
                            </div>
                        </div>
                    </div>


                    <div className="flex lg:w-[80%] md:w-[75%] w-full flex-wrap justify-center items-center gap-[35px] md:mb-[100px] mb-10">
                        {
                            loader ?
                                (<Loader />)
                                : error ?
                                    (<p className="text-red-500">Something went wrong: {error.message}</p>) :
                                    (
                                        prodData.filter(item => checkValue.length === 0
                                            ? prodData
                                            : item.category === `${checkValue}`).map(elem => <ProductCard
                                                urlToProd={elem.slug}
                                                key={elem.id}
                                                id={elem.id}
                                                slug={elem.slug}
                                                boxWidth={"lg:w-[30%] md:w-[46%]"}
                                                name={elem.name}
                                                price={elem.price.sale_price}
                                                featImg={!elem.feat_img || elem.feat_img == "empty" ? placeholderImg : elem.feat_img}
                                                ImageGalleryFirst={!elem.img_gallery[1] || elem.img_gallery[1] == "empty" ? placeholderImg : elem.img_gallery[1]}
                                                // ImageGalleryFirst={}
                                                prodCat={elem.category}
                                            />
                                            )
                                    )
                        }
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Products
