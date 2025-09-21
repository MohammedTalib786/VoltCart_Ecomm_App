import { createContext, useContext } from "react";

export const ProductContext = createContext({
    cartProducts: [
        // {
        //     id: 1,
        //     name: "SHADOW 5000mAh MagSafe Power Bank",
        //     feat_img: "https://www.tintaccessories.com/wp-content/uploads/2024/01/ARMOUR-Clear-JPEG-1024x1024.jpg",
        //     price: 500,
        //     slug: "shadow-5000mah-magsafe-power-bank",
        //     quantity: 1
        // }
    ],
    addToCartFunc: () => { },
    removeFromCartFunc: () => { },
    clearCartFunc: () => {},
    changeQuantityFunc: () => { }
})

export const ProdProvider = ProductContext.Provider;

export const useCart = () => {
    return useContext(ProductContext)
}
