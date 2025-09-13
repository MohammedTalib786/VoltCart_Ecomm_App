import { useEffect, useState } from 'react'
import statesJSON from '../../states_JSON/states.json'
import Button from '../../FormComp/Button';
import { useShippingDetails } from '../../../contexts/ShippingDetProvider';
import InputBar from '../../FormComp/InputBar';
import SelectDropdown from '../../FormComp/SelectDropdown';

const ShippingForm = ({
    setIsVisible
}) => {

    let { shippingDetails, addShippingDetails } = useShippingDetails();
    let [countryMsg, showCountryMsg] = useState(false);
    let [formData, setFormData] = useState({
        town_cityInp: "",
        pincodeInp: Number(""),
        stateInp: "Maharashtra"
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
        // console.log("Button CLicked");

        if (formData.town_cityInp === '' || !formData.town_cityInp) {
            // console.log('town city inp cant be empty!')
            // console.log('formData.town_cityInp', formData.town_cityInp)
            setErrorMsg({ ...errorMsg, townCity: true })
            setTimeout(() => {
                setErrorMsg({ ...errorMsg, townCity: false })
            }, 1200)
        }

        else if (!formData.pincodeInp || !regex.test(formData.pincodeInp)) {
            // console.log('Pincode Invalid!');
            setErrorMsg({ ...errorMsg, pincode: true })
            setTimeout(() => {
                setErrorMsg({ ...errorMsg, pincode: false })
            }, 1200)
        }

        else {
            // townCity, pincode, State
            addShippingDetails(formData.town_cityInp, formData.pincodeInp, formData.stateInp);
            setIsVisible(prev => !prev);
            // setFormData({ town_cityInp: '', pincodeInp: Number(""), stateInp: "" })
            // setFormData({ town_cityInp: '', pincodeInp: Number(""), stateInp: formData.stateInp })
        }
    }

    // console.log('Outside Scope', shippingDetails.states)

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
                                Currently Ships Only in India
                            </p>
                        }
                    </div>

                    <div className="stateCont  relative "  >
                        <SelectDropdown label_text="State" html_for="state" id="state" 
                        value={formData.stateInp}
                        onchange_func={(e) => setFormData({ ...formData, stateInp: e.target.value })} options_arr={statesJSON}
                        />
                    </div>

                    <div className="townCityCont relative "  >
                        <InputBar label_text="Town/City" html_for="town-city" id="town-city" type="text"
                            onChange_func={(e) => setFormData({ ...formData, town_cityInp: e.target.value })}
                            value={formData.town_cityInp?formData.town_cityInp:''}
                        />

                        {
                            errorMsg.townCity &&
                            <p className='bg-red-800 text-white  absolute w-auto text-center top-[0px] left-[90px] text-[15px]/[21px] px-[16px] py-[10px] rounded-[12px]  ' >
                                Input field Can not be Empty!
                            </p>
                        }
                    </div>

                    <div className="pinCodeCont relative "  >
                        <InputBar label_text="PinCode" html_for="pincode" id="pincode" type="number" 
                        onChange_func={(e) => setFormData({ ...formData, pincodeInp: Number(e.target.value) })}
                        value={formData.pincodeInp? formData.pincodeInp:''}
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
