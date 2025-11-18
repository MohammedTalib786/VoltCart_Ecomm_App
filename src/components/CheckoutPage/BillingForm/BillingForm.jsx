import { useEffect } from 'react';

import statesJSON from '../../states_JSON/states.json';
import { useShippingDetails } from '../../../contexts/ShippingDetProvider';
import InputBar from '../../FormComp/InputBar';
import SelectDropdown from '../../FormComp/SelectDropdown';


const BillingForm = ({ formData, setFormData, errorMsg }) => {
    let { shippingDetails, addShippingDetails } = useShippingDetails();
    let { pincode, states, town_city } = shippingDetails;

    useEffect(() => {
        if (pincode || states || town_city) {
            setFormData(prevFormData => ({
                ...prevFormData,
                town_cityInp: town_city,
                stateInp: states,
                pincodeInp: pincode
            }));
        }
    }, [pincode, states, town_city]);

    return (
        <>
            <div className=""  >
                <div
                    className="checkoutFormCont flex flex-col gap-[18px] pt-[20px] " >
                    <div className="nameCont relative flex tab:flex-row flex-col justify-between gap-[22px] "  >
                        <div className=" tab:w-[50%] w-full ">
                            <InputBar label_text="First Name" type="text" html_for="first_name" id="first_name"
                                onChange_func={(e) => setFormData({ ...formData, first_name: e.target.value })}
                                value={formData.first_name}
                                on_input_func={(e) => {
                                    e.target.value = e.target.value.replace(/[\d!@#$%^&*(),.?":{}|<>_\-\/\\\[\]`~+=;']/g, "");
                                    e.target.value.length > 20 ? e.target.value = e.target.value.slice(0, 20) : e.target.value;
                                }}
                            />
                            {
                                errorMsg.firstName &&
                                <p className='bg-red-800 text-white fixed top-[120px] desktop:right-[55%] gt-tab:right-[50%] tab:right-[30%] right-[50px] w-auto text-center text-[15px]/[21px] px-[16px] py-[10px] rounded-[12px] z-[9999] ' >
                                    Name field can not be empty!
                                </p>
                            }
                        </div>

                        <div className=" tab:w-[50%] w-full ">
                            <InputBar label_text="Last Name" type="text" html_for="last_name" id="last_name"
                                onChange_func={(e) => setFormData({ ...formData, last_name: e.target.value })}
                                value={formData.last_name}
                                on_input_func={(e) => {
                                    e.target.value = e.target.value.replace(/[\d!@#$%^&*(),.?":{}|<>_\-\/\\\[\]`~+=;']/g, "");
                                    e.target.value.length > 20 ? e.target.value = e.target.value.slice(0, 20) : e.target.value;
                                }}
                            />
                        </div>
                    </div>

                    <div className="emailCont  relative  "  >
                        <InputBar label_text="Email" type="email" html_for="email_address" id="email_address"
                            onChange_func={(e) => setFormData({ ...formData, email_address: e.target.value })}
                            value={formData.email_address}
                        />
                        {
                            errorMsg.email &&
                            <p className='bg-red-800 text-white fixed top-[120px] desktop:right-[55%] gt-tab:right-[50%] tab:right-[30%] right-[50px] w-auto text-center text-[15px]/[21px] px-[16px] py-[10px] rounded-[12px] z-[9999]  ' >
                                Invalid Email!
                            </p>
                        }
                    </div>

                    <div className="phoneCont relative "  >
                        <InputBar label_text="Phone" type="number" html_for="phone_number" id="phone_number"
                            onChange_func={(e) =>
                                setFormData({ ...formData, phone_number: e.target.value })
                            }
                            value={formData.phone_number ? formData.phone_number : ""}
                            on_input_func={(e) => {
                                e.target.value = e.target.value.replace(/\D/g, "")
                                e.target.value.length > 10 ? e.target.value = e.target.value.slice(0, 10) : e.target.value
                            }}
                        />
                        {
                            errorMsg.phone &&
                            <p className='bg-red-800 text-white fixed top-[120px] desktop:right-[55%] gt-tab:right-[50%] tab:right-[30%] right-[50px] w-auto text-center text-[15px]/[21px] px-[16px] py-[10px] rounded-[12px] z-[9999]  ' >
                                Invalid Phone Number!
                            </p>
                        }
                    </div>

                    <div className="countryCont relative "  >
                        <label htmlFor="country" className='' > Country </label>
                        <input
                            type="text" readOnly name="" id="country" value="India"
                            className=' w-full border-[0]  outline-0 px-[0] pt-[7px] pb-[0] text-[18px]/[26px] rounded-[6px] font-[600] '
                        />
                    </div>

                    <div className="streetAddress relative flex tab:flex-row flex-col gap-[22px] " >
                        <div className=" tab:w-[50%] w-full " >
                            <InputBar label_text="Street Address" type="text" html_for="streetAddress_1" id="streetAddress_1"
                                onChange_func={(e) => setFormData({ ...formData, street_address: e.target.value })}
                                value={formData.street_address}
                            />
                            {
                                errorMsg.streetAddress &&
                                <p className='bg-red-800 text-white fixed top-[120px] desktop:right-[55%] gt-tab:right-[50%] tab:right-[30%] right-[50px] w-auto text-center text-[15px]/[21px] px-[16px] py-[10px] rounded-[12px] z-[9999]  ' >
                                    Street address can not be blank!
                                </p>
                            }
                        </div>

                        <div className=" tab:w-[50%] w-full ">
                            <InputBar label_text="Town/City" type="text" html_for="town-city" id="town-city"
                                onChange_func={(e) => {
                                    let newTownCity = e.target.value;
                                    let updatedFormData = { ...formData, town_cityInp: newTownCity };
                                    setFormData(updatedFormData);
                                    addShippingDetails(updatedFormData.town_cityInp, updatedFormData.pincodeInp, updatedFormData.stateInp);
                                }}
                                value={formData.town_cityInp}
                                on_input_func={(e) => {
                                    e.target.value = e.target.value.replace(/[\d!@#$%^&*(),.?":{}|<>_\-\/\\\[\]`~+=;']/g, "")
                                }}
                            />
                            {
                                errorMsg.townCity &&
                                <p className='bg-red-800 text-white fixed top-[120px] desktop:right-[55%] gt-tab:right-[50%] tab:right-[30%] right-[50px] w-auto text-center text-[15px]/[21px] px-[16px] py-[10px] rounded-[12px] z-[9999]  ' >
                                    Town/City field can not be empty!
                                </p>
                            }
                        </div>

                    </div>

                    <div className="stateCont relative "  >
                        <SelectDropdown label_text="State" html_for="state" id="state"
                            options_arr={statesJSON}
                            onchange_func={(e) => {
                                let newState = e.target.value;
                                let updatedFormData = { ...formData, stateInp: newState };
                                setFormData(updatedFormData);
                                addShippingDetails(updatedFormData.town_cityInp, updatedFormData.pincodeInp, updatedFormData.stateInp);
                            }}
                            value={formData.stateInp}
                        />
                    </div>

                    <div className="pinCodeCont relative " >
                        <InputBar label_text="PinCode" type="number" html_for="pincode" id="pincode"
                            onChange_func={(e) => {
                                let newPincode = e.target.value;
                                let updatedFormData = { ...formData, pincodeInp: newPincode };
                                setFormData(updatedFormData);
                                addShippingDetails(updatedFormData.town_cityInp, updatedFormData.pincodeInp, updatedFormData.stateInp);
                            }}
                            value={formData.pincodeInp}
                            on_input_func={(e) => {
                                e.target.value = e.target.value.replace(/\D/g, "");
                                e.target.value.length > 6 ? e.target.value = e.target.value.slice(0, 6) : e.target.value;
                            }}
                        />
                        {
                            errorMsg.pincode &&
                            <p className='bg-red-800 text-white fixed top-[120px] desktop:right-[55%] gt-tab:right-[50%] tab:right-[30%] right-[50px] w-auto text-center text-[15px]/[21px] px-[16px] py-[10px] rounded-[12px] z-[9999]  ' >
                                Invalid Pincode!
                            </p>
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default BillingForm;
