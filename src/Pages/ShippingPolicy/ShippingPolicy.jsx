import useDocumentTitle from '../../hooks/useDocumentTitle';

import '../../index.css';


const ShippingPolicy = () => {
    // >>>>>>>>>>>>>>>>> Change Document Title Dynamically
    useDocumentTitle('Shipping Policy - VoltCart');

    return (
        <>
            <div className="info_pages container_layout mx-auto flex justify-center items-center flex-col "  >

                <h1>Shipping Policy</h1>

                <ul>
                    <li>We offer <strong>free shipping</strong> for all domestic orders.</li>
                    <li>Orders will be shipped to the address provided in our database or to an alternate address submitted by you for delivery.</li>
                    <li>Our products are shipped from our warehouse within <strong>48 to 72 business hours</strong> of order placement.</li>
                    <li>During adverse weather conditions, particularly in winter, shipping may be delayed. In such rare instances, we will notify customers of any delays via email or phone.</li>
                    <li>Delivery of products will be handled by our assigned logistics service providers.</li>
                    <li>If you order multiple products in one transaction, we will strive to ship them together. However, this may not always be possible due to product characteristics, logistical challenges, or the delivery location. In such cases, you may receive the products separately and at different times.</li>
                    <li>Our delivery time ranges from a minimum of <strong>7 working days</strong> to a maximum of <strong>10 working days</strong>, depending on the serviceability of the delivery pin code.</li>
                    <li>Please note that Saturdays, Sundays, and Public Holidays are not set as working or business days for standard deliveries.</li>
                    <li>If you find that the package appears to be tampered with, please refuse delivery and return the package to the courier or delivery person. Additionally, notify us immediately at <a href="mailto:info.voltcartt@gmail.com">info.voltcartt@gmail.com</a> so we can address the issue with our logistics partner.</li>
                </ul>

                <h2>For International Shipping</h2>
                <p>At VoltCart, we’re committed to ensuring a seamless and trustworthy international shopping experience. Here’s everything you need to know before placing an order:</p>

                <ul>
                    <li>We offer <strong>free international shipping.</strong></li>
                    <li><strong>No exchange or return</strong> is available for international orders. For any product-related inquiries, please contact us via email <a href="mailto:info.voltcartt@gmail.com">info.voltcartt@gmail.com</a> before placing your order.</li>
                    <li>All orders are processed within <strong>48 to 72 business hours</strong> of order placement. During adverse weather conditions, particularly in winter, shipping may be delayed. In such rare instances, we will notify customers of any delays via email or phone.</li>
                    <li>Delivery of products will be handled by our assigned logistics service providers.</li>
                    <li>If you order multiple products in one transaction, we will strive to ship them together. However, this may not always be possible due to product characteristics, logistical challenges, or the delivery location. In such cases, you may receive the products separately and at different times.</li>
                    <li>Our delivery time ranges from a minimum of <strong>10 working days</strong> to a maximum of <strong>20 working days</strong>, depending on the serviceability of the delivery pin code. <em>(Note: Please account for possible customs clearance delays, which are beyond our control.)</em></li>
                    <li>We strive to include all shipping and duty charges upfront. However, in rare cases where your country levies unexpected import charges, these will be the responsibility of the customer.</li>
                    <li>Please note that Saturdays, Sundays, and Public Holidays are not set as working or business days for order processing.</li>
                    <li>We use currency converter tools on our website for international orders. This tool is designed to facilitate smoother transactions and provide accurate currency conversions to enhance the buying experience.</li>
                    <li>Tracking details will be sent to your registered email address once your order has shipped.</li>
                    <li>Once your order arrives in your country, it may be handed over to a local delivery partner for final delivery. Please monitor your tracking details for local updates.</li>
                </ul>

                <p><strong>Please note:</strong> This shipping policy applies only to individual (B2C) orders placed through our website. For bulk or wholesale orders, including B2B inquiries, shipping terms and conditions may differ and will be shared separately upon request.</p>

            </div>
        </>
    )
}

export default ShippingPolicy;
