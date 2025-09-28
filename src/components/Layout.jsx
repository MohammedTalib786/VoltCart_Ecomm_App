import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './layout.css'
import ScrollToTopButton from './ScrollToTopButton/ScrollToTopButton'
import NewsletterComp from './NewsletterComp/NewsletterComp'


const Layout = () => {
    let location = useLocation();
    const path = location.pathname;

    const hiddenExactPaths = ["/cart", "/checkout", '/search-listing', '/privacy-policy', '/cancellation-policy', '/terms-of-use', '/shipping-policy', '/order-cancel', '/order-successful' ];
    const isProductDetail = path.startsWith("/products/") && path !== "/products";
    const shouldShowNewsletter = !hiddenExactPaths.includes(path) && !isProductDetail;

    return (
        <>
            <Header />
            <div
                className=' m-0 '
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
