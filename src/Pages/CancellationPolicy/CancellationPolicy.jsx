import useDocumentTitle from '../../hooks/useDocumentTitle';
import '../../index.css'

const CancellationPolicy = () => {

    // >>>>>>>>>>>>>>>>> Change Document Title Dynamically
    useDocumentTitle('Cancellation, Refund & Exchange Policy - VoltCart');

    return (
        <>
            <div className="info_pages container_layout mx-auto flex justify-center items-center flex-col "  >


                <h1>Cancellation, Refund and Exchange Policy</h1>

                <h2>Cancellation & Refund Policy</h2>
                <p>Orders cannot be cancelled once they have been shipped. However, customer can cancel their order within 8 hours of placement, before dispatch. In such cases, refunds will be issued using the original payment method. Please allow up to 15 business days for the refund to be processed.</p>

                <h2>Return & Exchange Policy</h2>
                <p>As a policy, <strong>we do not accept returns</strong>. However, the exchange is applicable only if the product is not delivered in perfect condition as per the order placed. Please review the following points to have better clarity on our exchange policy: </p>

                <ul>
                    <li>Products purchased during promotions or sales are not eligible for return.</li>
                    <li>Exchange requests are accepted for manufacturing defects or if an incorrect item is delivered. For more details please refer to our <strong>Incorrect/Damaged/Defective</strong> Item Policy</li>
                    <li>Customized products and special bulk orders are not eligible for returns or exchanges.</li>
                    <li>International orders are not eligible for returns or exchanges.</li>
                    <li>Gift card purchased online/store credit are not eligible for refund, or return.</li>
                </ul>

                <h2>Incorrect/Damaged/Defective Item Policy</h2>
                <p>Your purchase is eligible for exchange only if the following conditions are met:</p>

                <ul>
                    <li><strong>Manufacturing Defect</strong> – The order has a genuine manufacturing defect.</li>
                    <li><strong>Incorrect Product Delivered</strong> – The delivered product differs from your order, including issues such as incorrect size, design, or colour.</li>
                </ul>

                <p>To process an exchange, please send product images immediately after opening the package and email us at <a href="mailto:info.voltcartt@gmail.com">info.voltcartt@gmail.com</a> <strong>within 48 hours of delivery</strong>. Include the following information:</p>

                <ul>
                    <li>Order Number</li>
                    <li>Delivery Address</li>
                    <li>Description of the Issue</li>
                    <li>Images and/or videos of the item are to be exchanged.</li>

                </ul>

                <p>Our team will contact you to arrange a pick-up of the damaged product. Upon receipt at our warehouse, we will inspect the product and process a replacement. However, we reserve the right to accept or decline the exchange request at our sole discretion. Please note:</p>

                <ul>
                    <li><strong>Packaging:</strong> Ensure all labels and tags are intact and the product is properly packed for return.</li>
                    <li><strong>Free Products/Gifts:</strong> Any free items or gifts included with the main product must also be returned.</li>
                </ul>

                <p>If a replacement cannot be provided, we will issue a store credit valid for a lifetime, which can be used for any purchase on our website. Please note:</p>

                <ul>
                    <li>The credit will be for the sale amount of the returned product.</li>
                    <li>Orders placed using store credit are not eligible for any return or refund.</li>
                </ul>



            </div>
        </>
    )
}

export default CancellationPolicy