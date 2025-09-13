import React from 'react'

const InputBar = ({
    label_text,
    html_for = "",
    type = "text",
    read_only = false,
    // disabled=false,
    // class_name="w-full border border-[#737373] outline-0 px-[16px] py-[12px] text-[18px]/[26px] rounded-[6px]  focus:border-sky-500",
    // additionalClassName,
    class_name = `w-full border border-[#737373] outline-0 px-[16px] py-[12px] text-[18px]/[26px] rounded-[6px]  ${!read_only ? 'focus:border-sky-500' : ''} `,
    additionalClassName,
    id,
    placeholder,
    value,
    name,
    onclick_func,
    onChange_func
}) => {
    // let combinedClass = `${class_name} ${additionalClassName}`
    return (
        <>
            {/* <label htmlFor="country"> Country </label>
            <input
                type="text" readOnly name="" id="country" value="India"
                className=' w-full border border-[#737373] outline-0 px-[16px] py-[12px] text-[18px]/[26px] rounded-[6px]  '
                onClick={handlerCountryInp}
            /> */}

            {label_text && <label htmlFor={html_for} className='block mb-2 font-poppins text-[16px] font-medium text-black-1c  ' > {label_text} </label>}
            <input
                type={type} readOnly={read_only} name={name} id={id} value={value} placeholder={placeholder}
                className={`${class_name} ${additionalClassName}`}
                onClick={onclick_func}
                onChange={onChange_func}
            />
        </>
    )
}

export default InputBar;