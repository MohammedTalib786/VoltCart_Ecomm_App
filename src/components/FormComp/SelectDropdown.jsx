
const SelectDropdown = ({
  label_text,
  html_for,
  id,
  // value="Maharashtra",
  value = "",
  onchange_func,
  options_arr = [],
}) => {
  return (
    <>
      <label htmlFor={html_for}> {label_text} </label>
      <div className=" select-wrapper ">
        <select
          name="" id={id}
          className='  w-full border border-[#737373] outline-0 px-[16px] py-[12px] text-[18px]/[26px] rounded-[6px]  '
          value={value}
          onChange={onchange_func}
        >
          {
            options_arr.map((elem) => {
              // console.log('Main State', elem.name)
              return <option key={elem.code} value={elem.name} >{elem.name}</option>
            })
          }
        </select>
      </div>
    </>
  )
}

export default SelectDropdown
