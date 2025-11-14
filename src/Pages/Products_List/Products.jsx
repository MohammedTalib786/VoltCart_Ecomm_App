import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import placeholderImg from '../../assets/placeholder_img.png'
import useFetch from '../../hooks/useFetch'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import ProductCard from '../../components/ProductCard/ProductCard'
import Loader from '../../components/Loader/SkeletonLoader'
import ProductsSpotlight from '../../components/ProductsListingPage/ProductsSpotlight'
import ProductFilter from '../../components/ProductsListingPage/ProductFilter'

import '../../components/layout.css'
import './products.css'


const Products = () => {
    // >>>>>>>>>>>>>>>>> Change Document Title Dynamically
    useDocumentTitle('Shop E Gadgets Online | VoltCart');

    let productsAPI = import.meta.env.VITE_PRODUCT_API_KEY;
    // console.log('Vite API Key', import.meta.env.VITE_PRODUCT_API_KEY)

    let useProdList = useFetch(productsAPI);
    let { loader, error, data: prodData } = useProdList;
    let [checkValue, setcheckValue] = useState([])
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('category');

    useEffect(() => {
        if (query === "power_bank") setcheckValue((prev) => [...prev, 'Power Banks']);
        else if (query === "stand_and_straps") setcheckValue((prev) => [...prev, 'Stand and Straps']);
        else if (query === "covers_and_cases") setcheckValue((prev) => [...prev, 'Covers and Cases']);
    }, [location.pathname])

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

    let mainData = prodData
        .filter(elem => checkValue.length === 0 ? prodData : checkValue.includes(elem.category))
        .filter(elem => elem.price.sale_price <= priceFilter)

    // console.log('mainData', mainData)
    // console.log('checkValue', checkValue)


    return (
        <>
            <div className="lg:w-[100%] flex flex-col items-center  ">

                <ProductsSpotlight />

                <div className=" container_layout flex flex-col justify-center items-center relative "  >
                    {/* >>>>>>>>>>>>>> In Cont */}
                    <div className=" w-full desktop:py-[100px] gt-tab:py-[80px] py-[60px]  "  >
                        <div className=" flex md:flex-row flex-col desktop:gap-[40px] gt-tab: gap-[25px] items-start prod_list_cont   " >

                            <ProductFilter
                                minVal={minVal} maxVal={maxVal}
                                priceFilter={priceFilter}
                                setPriceFilter={setPriceFilter}
                                checkValue={checkValue}
                                handleCheckbox={handleCheckbox}
                            />
                            <div
                                className="flex desktop:w-[75%] gt-tab:w-[70%] tab:w-[55%] w-full desktop:gap-[30px] gt-tab:gap-[25px] gap-[25px]  flex-wrap justify-start items-center  prod_card_list  " >
                                {
                                    loader ?
                                        (<Loader />)
                                        : error ?
                                            (<p className="text-red-500">Something went wrong: {error.message}</p>) :
                                            (
                                                mainData.length < 1
                                                    ? <p className=' font-[400] font-primary text-[20px]/[28px] ' >No Products Found!</p>
                                                    : mainData.map(elem => <ProductCard
                                                        urlToProd={elem.slug}
                                                        key={elem.id}
                                                        id={elem.id}
                                                        slug={elem.slug}
                                                        boxWidth={"desktop:w-[31%] gt-tab:w-[48%] w-full "}
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
