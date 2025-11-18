import { Outlet, useLocation } from 'react-router-dom';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ScrollToTopButton from './ScrollToTopButton/ScrollToTopButton';
import NewsletterComp from './NewsletterComp/NewsletterComp';

import './layout.css';


const Layout = () => {
    let location = useLocation();
    const path = location.pathname;
    const hiddenExactPaths = ["/cart", "/checkout", '/search-listing', '/privacy-policy', '/cancellation-policy', '/terms-of-use', '/shipping-policy', '/help-and-support', '/order-cancel', '/order-successful'];
    const isProductDetail = path.startsWith("/products/") && path !== "/products";
    const isBlogDetail = path.startsWith("/blogs/") && path !== "/blogs";
    const shouldShowNewsletter = !hiddenExactPaths.includes(path) && !isProductDetail && !isBlogDetail;

    return (
        <>
            <Header />
            <div className=' layout_container m-0 ' >
                <Outlet />
            </div>
            <ScrollToTopButton />
            {shouldShowNewsletter && <NewsletterComp />}
            <Footer />
        </>
    )
}

export default Layout;
