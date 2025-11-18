import { createContext, useContext } from "react";

export const OrderContext = createContext({
    orderItems: [
        // {
        //   name: "Talib",
        //   email_id: "shaikhtalib2705@gmail.com",
        //   phone: "8787878787",
        //   town_city: "Mumbai",
        //   state: "Maharashtra",
        //   pincode: 400070,
        //   date: "05 May 2025",
        //   prod_arr: ["SHADOW 5000mAh MagSafe Power Bank", "SHADOW 5000mAh MagSafe Power Bank"],
        //   price: [500, 400],
        //   quantity: [5, 2],
        //   shipping_rate: 55,
        //   total: 1200
        // }
    ],
    addOrderItems: () => { },
})

export const OrderProvider = OrderContext.Provider;

export const useOrder = () => {
    return useContext(OrderContext)
}
