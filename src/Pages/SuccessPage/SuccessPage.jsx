import { useState } from 'react'

const SuccessPage = () => {



    return (
        <>
            {/* >>>>>>>>>>>>>> In Cont */}
            <div className="container_layout mx-auto flex justify-center items-center flex-col  "  >
                <h2>Order Details</h2>
                <p>The Order has been created Successfully!</p>
            </div>



 <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="text-center mb-10">
            <h1 className="text-3xl font-bold">Thanks for your order!</h1>
            <p className="mt-4 text-gray-300">Your order will be processed within 24 hours during working days. We will notify you by email once your order has been shipped.</p>
        </div>



        

        <div className="grid md:grid-cols-2 gap-8">
            
            <div>
                <div className="space-y-4">
                    <div>
                        <span className="font-semibold">Order number:</span>
                        <span>#76453857</span>
                    </div>
                    <div>
                        <span className="font-semibold">Date:</span>
                        <span>14 May 2024</span>
                    </div>
                    <div>
                        <span className="font-semibold">Payment Method:</span>
                        <span>JPMorgan monthly installments</span>
                    </div>
                    <div>
                        <span className="font-semibold">Name:</span>
                        <span>Flowbite Studios LLC</span>
                    </div>
                    <div>
                        <span className="font-semibold">Address:</span>
                        <span>Scott Street, San Francisco, California, USA</span>
                    </div>
                    <div>
                        <span className="font-semibold">Phone:</span>
                        <span>+(123) 456 7890</span>
                    </div>
                    <div>
                        <span className="font-semibold">Email:</span>
                        <span>name@company.com</span>
                    </div>
                </div>

                <div className="mt-8 space-x-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Track your order</button>
                    <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded">Return to shopping</button>
                </div>
            </div>

            
            <div className="bg-gray-800 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-6">Order summary</h2>

                <div className="space-y-4">
                    <div className="flex justify-between">
                        <span>Apple iMac 27"</span>
                        <span>x1</span>
                        <span>$1,499</span>
                    </div>

                    <div className="flex justify-between">
                        <span>Apple iPhone 14</span>
                        <span>x2</span>
                        <span>$1,998</span>
                    </div>

                    <div className="flex justify-between">
                        <span>Apple iPad Air</span>
                        <span>x1</span>
                        <span>$898</span>
                    </div>

                    <div className="flex justify-between">
                        <span>Xbox Series X</span>
                        <span>x4</span>
                        <span>$4,499</span>
                    </div>

                    <hr className="border-gray-600" />

                    <div className="flex justify-between">
                        <span>Original price</span>
                        <span>$4,894.00</span>
                    </div>

                    <div className="flex justify-between text-green-400">
                        <span>Savings</span>
                        <span>-$299.00</span>
                    </div>

                    <div className="flex justify-between">
                        <span>Store Pickup</span>
                        <span>$99</span>
                    </div>

                    <div className="flex justify-between">
                        <span>Tax</span>
                        <span>$799</span>
                    </div>

                    <hr className="border-gray-600" />

                    <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>$5,493.00</span>
                    </div>
                </div>
            </div>
        </div>
    </div>





        </>
    )
}

export default SuccessPage