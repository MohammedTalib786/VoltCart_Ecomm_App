import { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import Loader from '../../components/Loader/SkeletonLoader'
import useFetch from '../../hooks/useFetch'
import prodSpotlight from '../../assets/prodListing/productSpot.webp'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import placeholderImg from '../../assets/placeholder_img.png'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import ProductsSpotlight from '../../components/ProductsListingPage/ProductsSpotlight'
import ProductFilter from '../../components/ProductsListingPage/ProductFilter'

import '../../components/layout.css'
import './products.css'

const Products = () => {
    // >>>>>>>>>>>>>>>>> Change Document Title Dynamically
    useDocumentTitle('Shop All - VoltCart');

    let productsAPI = import.meta.env.VITE_PRODUCT_API_KEY;
    // console.log('Vite API Key', import.meta.env.VITE_PRODUCT_API_KEY)

    let useProdList = useFetch(productsAPI);
    let { loader, error, data: prodData } = useProdList;
    let [checkValue, setcheckValue] = useState([])

    const handleCheckbox = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        if (checked) {
            setcheckValue((prev) => [...prev, value]);
        } else {
            setcheckValue((prev) => prev.filter((item) => item !== value));
        }
    };

    let valuesArr = prodData.map(elem => elem.price.sale_price) || [];
    valuesArr.sort((a, b) => a - b)
    let [minVal] = valuesArr.slice(0, 1)
    let [maxVal] = valuesArr.slice(-1)
    let [priceFilter, setPriceFilter] = useState(0)

    useEffect(() => {
        if (maxVal > 0) setPriceFilter(maxVal)
    }, [maxVal])

    // The Main Filter
    // let mainFiltStatic = prodData.filter(elem => ["Covers and Cases", "Power Banks"].includes(elem.category)).filter(elem => elem.price.sale_price <= 180 )
    // let mainFilt = prodData.filter(elem => checkValue.length === 0 ? prodData : checkValue.includes(elem.category)).filter(elem => elem.price.sale_price <= priceFilter)
    // console.log('mainFilt', mainFilt)

    return (
        <>

            <div className="lg:w-[100%] flex flex-col items-center">

                <ProductsSpotlight />

                <div className=" container_layout flex flex-col justify-center items-center "  >
                    {/* >>>>>>>>>>>>>> In Cont */}
                    <div className=" py-[100px] "  >

                        <div className=" flex md:flex-row flex-col gap-[40px] items-start prod_list_cont  " >

                            <ProductFilter
                                minVal={minVal} maxVal={maxVal}
                                priceFilter={priceFilter}
                                setPriceFilter={setPriceFilter}
                                checkValue={checkValue}
                                handleCheckbox={handleCheckbox}
                            />

                            <div
                                className="flex lg:w-[75%] md:w-[75%] w-full flex-wrap justify-start items-center gap-[30px] prod_card_list  " >
                                {
                                    loader ?
                                        (<Loader />)
                                        : error ?
                                            (<p className="text-red-500">Something went wrong: {error.message}</p>) :
                                            (
                                                // prodData.filter(item => checkValue.length === 0 ? prodData : item.category === `${checkValue}`)
                                                prodData.filter(elem => checkValue.length === 0 ? prodData : checkValue.includes(elem.category)).filter(elem => elem.price.sale_price <= priceFilter)
                                                    .map(elem => <ProductCard
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
                                                        savePercent={parseInt((elem.price.reg_price - elem.price.sale_price) / elem.price.reg_price * 100)}
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
