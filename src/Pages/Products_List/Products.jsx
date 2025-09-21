import { useState } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import '../../components/layout.css'
import Loader from '../../components/Loader/SkeletonLoader'
import useFetch from '../../hooks/useFetch'
import prodSpotlight from '../../assets/prodListing/productSpot.webp'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import placeholderImg from '../../assets/placeholder_img.png'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import ProductsSpotlight from '../../components/ProductsListingPage/ProductsSpotlight'
import ProductFilter from '../../components/ProductsListingPage/ProductFilter'

const Products = () => {
    // >>>>>>>>>>>>>>>>> Change Document Title Dynamically
    useDocumentTitle('Shop All - VoltCart');

    let productsAPI = import.meta.env.VITE_PRODUCT_API_KEY;
    // console.log('Vite API Key', import.meta.env.VITE_PRODUCT_API_KEY)

    let useProdList = useFetch(productsAPI);
    let { loader, error, data: prodData } = useProdList;
    let [checkValue, setcheckValue] = useState([])

    const checkBoxChanged = (e) => {
        let { value, checked } = e.target;
        checked ? setcheckValue([value]) : setcheckValue([])
    }

    return (
        <>

            <div className="lg:w-[100%] flex flex-col items-center">

                <ProductsSpotlight />

                <div className=" container_layout flex flex-col justify-center items-center "  >
                    {/* >>>>>>>>>>>>>> In Cont */}
                    <div className=" py-[100px] "  >

                        <div className=" flex md:flex-row flex-col gap-[40px] items-start  " >
                            
                            <ProductFilter checkBoxChanged={checkBoxChanged} />

                            <div
                                className="flex lg:w-[75%] md:w-[75%] w-full flex-wrap justify-between items-center gap-x-[0] gap-y-[30px]  " >
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
                                                        boxWidth={"lg:w-[31%] md:w-[46%]"}
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
            </div>
        </>
    )
}

export default Products
