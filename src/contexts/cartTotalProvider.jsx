import { createContext, useContext } from "react";

export const cartTotalContext = createContext({
    itemTotal: {
        total: 0
    },
    calculateTotal: () => { }
})

export const CartTotalProvider = cartTotalContext.Provider;

export const useCartTotal = () => {
    return useContext(cartTotalContext)
}
