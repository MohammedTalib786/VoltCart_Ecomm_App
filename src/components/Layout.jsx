import { Outlet, useLocation } from 'react-router-dom'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ScrollToTopButton from './ScrollToTopButton/ScrollToTopButton'
import NewsletterComp from './NewsletterComp/NewsletterComp'

import './layout.css'


const Layout = () => {
    let location = useLocation();
    const path = location.pathname;
    const hiddenExactPaths = ["/cart", "/checkout", '/search-listing', '/privacy-policy', '/cancellation-policy', '/terms-of-use', '/shipping-policy', '/order-cancel', '/order-successful'];
    const isProductDetail = path.startsWith("/products/") && path !== "/products";
    const isBlogDetail = path.startsWith("/blogs/") && path !== "/blogs";
    const shouldShowNewsletter = !hiddenExactPaths.includes(path) && !isProductDetail && !isBlogDetail;


    //     header height:
    //     mob - 84
    //     768 - 102
    // from 1024 to max - 85



    return (
        <>
            <Header />
            <div
                // className=' gt-tab:mt-[85px] tab:mt-[102px] mt-[84px]  '
                className=' layout_container m-0 '
            >
                <Outlet />
            </div>
            <ScrollToTopButton />
            {shouldShowNewsletter && <NewsletterComp />}
            {/* <NewsletterComp /> */}
            <Footer />
        </>
    )
}

export default Layout
