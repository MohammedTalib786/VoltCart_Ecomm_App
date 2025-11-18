const InputBar = ({
    label_text,
    html_for = "",
    type = "text",
    read_only = false,
    class_name = `w-full border border-[#737373] outline-0 px-[12px] py-[8px] text-[18px]/[26px] rounded-[6px]  ${!read_only ? 'focus:border-sky-500' : ''} `,
    additionalClassName,
    id,
    placeholder,
    value,
    name,
    onclick_func,
    onChange_func,
    on_input_func
}) => {
    return (
        <>
            {label_text && <label htmlFor={html_for} className='block mb-2 font-body text-[16px] font-medium text-black  ' > {label_text} </label>}
            <input
                type={type} readOnly={read_only} name={name} id={id} value={value} placeholder={placeholder}
                className={`${class_name} ${additionalClassName}`}
                onClick={onclick_func}
                onChange={onChange_func}
                onInput={on_input_func}
            />
        </>
    )
}

export default InputBar;
