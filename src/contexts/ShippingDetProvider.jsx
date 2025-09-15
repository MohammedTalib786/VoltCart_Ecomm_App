import { createContext, useContext } from "react";

export const shippingDetailsContext = createContext({
    shippingDetails: {
        first_name: "",
        last_name: "",
        company_name: "",
        street_address: "",
        town_city: "",
        states: "",
        pincode: null,
        phone_number: null,
        email_address: ""

    },
    addShippingDetails: () => { }
})

export const ShippingDetProvider = shippingDetailsContext.Provider;

export const useShippingDetails = () => {
    return useContext(shippingDetailsContext)
}

