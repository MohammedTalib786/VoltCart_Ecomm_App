import { useEffect, useState } from 'react'

import statesJSON from '../../states_JSON/states.json'
import { useShippingDetails } from '../../../contexts/ShippingDetProvider';
import Button from '../../FormComp/Button';
import InputBar from '../../FormComp/InputBar';
import SelectDropdown from '../../FormComp/SelectDropdown';


const ShippingForm = ({ setIsVisible }) => {
    let { shippingDetails, addShippingDetails } = useShippingDetails();
    let [countryMsg, showCountryMsg] = useState(false);
    let [formData, setFormData] = useState({
        town_cityInp: "",
        pincodeInp: Number(""),
        stateInp: ""
    })
    let [errorMsg, setErrorMsg] = useState({
        townCity: false,
        pincode: false
    })
    const regex = /^\d{6}$/;

    const handlerCountryInp = () => {
        showCountryMsg(true)
        setTimeout(() => showCountryMsg(false), 1500)
    }

    // >>>>>>>>>>>>>>>>>>>>> Form Validation
    const handlerSubmitForm = () => {
        if (formData.town_cityInp === '' || !formData.town_cityInp) {
            setErrorMsg({ ...errorMsg, townCity: true })
            setTimeout(() => {
                setErrorMsg({ ...errorMsg, townCity: false })
            }, 1200)
        }

        else if (!formData.pincodeInp || !regex.test(formData.pincodeInp)) {
            setErrorMsg({ ...errorMsg, pincode: true })
            setTimeout(() => {
                setErrorMsg({ ...errorMsg, pincode: false })
            }, 1200)
        }

        else {
            addShippingDetails(formData.town_cityInp,
                formData.pincodeInp,
                formData.stateInp === "" || formData.stateInp == undefined ? "Maharashtra" : formData.stateInp);
            setIsVisible(prev => !prev);
        }
    }

    useEffect(() => {
        setFormData(prevFormData => ({
            ...prevFormData,
            town_cityInp: shippingDetails.town_city,
            stateInp: shippingDetails.states,
            pincodeInp: shippingDetails.pincode,
        }));
    }, [shippingDetails.states, shippingDetails.pincode, shippingDetails.town_city])

    return (
        <>
            <div className=""  >
                <div
                    className="shippingFormCont flex flex-col gap-[18px] pt-[20px] " >
                    <div className="countryCont relative "  >
                        <InputBar label_text="Country" html_for="country" id="country" read_only={true} type="text" value="India" onclick_func={handlerCountryInp}
                        />
                        {
                            countryMsg &&
                            <p className='bg-[var(--primary-color)] text-white  absolute w-auto text-center top-[0px] left-[90px] text-[15px]/[21px] px-[16px] py-[10px] rounded-[12px]  ' >
                                Currently ships only within India.
                            </p>
                        }
                    </div>

                    <div className="stateCont  relative "  >
                        <SelectDropdown label_text="State" html_for="state" id="state"
                            options_arr={statesJSON}
                            value={formData.stateInp ? formData.stateInp : "Maharashtra"}
                            onchange_func={(e) => setFormData({ ...formData, stateInp: e.target.value })}
                        />
                    </div>

                    <div className="townCityCont relative "  >
                        <InputBar label_text="Town/City" html_for="town-city" id="town-city" type="text"
                            onChange_func={(e) => setFormData({ ...formData, town_cityInp: e.target.value })}
                            value={formData.town_cityInp ? formData.town_cityInp : ''}
                            on_input_func={(e) => e.target.value = e.target.value.replace(/[\d!@#$%^&*(),.?":{}|<>_\-\/\\\[\]`~+=;']/g, "")}
                        />
                        {
                            errorMsg.townCity &&
                            <p className='bg-red-800 text-white  absolute w-auto text-center top-[0px] left-[90px] text-[15px]/[21px] px-[16px] py-[10px] rounded-[12px]  ' >
                                Input field can not be empty!
                            </p>
                        }
                    </div>

                    <div className="pinCodeCont relative "  >
                        <InputBar label_text="PinCode" html_for="pincode" id="pincode" type="number"
                            onChange_func={(e) => setFormData({ ...formData, pincodeInp: Number(e.target.value) })}
                            value={formData.pincodeInp ? formData.pincodeInp : ''}
                            on_input_func={(e) => {
                                e.target.value = e.target.value.replace(/\D/g, "");
                                e.target.value.length > 6 ? e.target.value = e.target.value.slice(0, 6) : e.target.value;
                            }}
                        />
                        {
                            errorMsg.pincode &&
                            <p className='bg-red-800 text-white  absolute w-auto text-center top-[0px] left-[90px] text-[15px]/[21px] px-[16px] py-[10px] rounded-[12px]  ' >
                                Invalid Pincode!
                            </p>
                        }
                    </div>

                    {/* >>>>>>>>>>>>> Submit Button */}
                    <Button
                        btnWidth='w-fit'
                        handlerClickBtnComp={handlerSubmitForm}
                        text='Update Details'
                    />
                </div>
            </div>
        </>
    )
}

export default ShippingForm;
