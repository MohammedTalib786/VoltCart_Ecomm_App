import { Link } from 'react-router-dom';

import logo from '../../../assets/logo.svg';
import paymentOptImgs from '../../../assets/Footer/payment_gateway_options.png'


const TopFooter = () => {
    return (
        // <footer className=" w-full bg-white border-[#b9b9b9] border-t " >
        <footer className=" w-full border-[#b9b9b9] border-t border-b " >
            <div
                // 1440 Not Working => max-w-[1440px]
                className=" head_foot_cont_full w-full max-w-[1400px] mx-auto flex desktop:flex-nowrap gt-tab:flex-wrap flex-wrap  gt-tab:gap-[40px] tab:gap-[40px] gap-x-0 gap-y-[25px] pt-[40px] pb-[50px] desktop:px-[50px] gt-tab:px-[30px] tab:px-[30px] px-[20px] " >

                {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> First Col */}
                <div className="columns cols-1 desktop:w-[50%] gt-tab:w-[50%] tab:w-[45%] w-full flex flex-col gap-[15px] ">
                    <Link to='/' ><img src={logo} alt="logo" className='max-w-[170px] ' /></Link>
                    <p className='text-black font-[400] text-[16px]/[22px] desktop:w-full gt-tab:w-[75%] w-full  ' >At VoltCart, products are more than accessories. premium isn’t just a label for us, it’s a promise.</p>
                    <div className="socials flex gap-x-[30px] ">

                        <a target="_blank" href="https://api.whatsapp.com/send?phone=9987034815" className=' flex justify-center items-center rounded-[50px] cursor-pointer transition-all ' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                            </svg>
                        </a>

                        <a target="_blank" href="https://www.instagram.com/_talib__shaikh/" className=' flex justify-center items-center rounded-[50px] cursor-pointer transition-all ' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                            </svg>
                        </a>

                        <a target="_blank" href="https://www.linkedin.com/in/shaikh-mohammed-talib-b45275222/" className=' flex justify-center items-center rounded-[50px] cursor-pointer transition-all ' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                            </svg>
                        </a>

                        <a target="_blank" href="https://x.com/STalib01786/" className=' flex justify-center items-center rounded-[50px] cursor-pointer transition-all ' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                            </svg>
                        </a>

                    </div>
                </div>

                {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Quick Links */}
                <div className="columns cols-2 desktop:w-[20%] gt-tab:w-[20%] tab:w-[20%] w-[48%] " >
                    <h4 className='text-black font-[600] text-[16px]/[22px] pb-[12px]   ' >Quick Links</h4>
                    <ul className='flex flex-col gap-[7px] ' >

                        <li className=' text-black  font-[400] text-[16px]/[22px] transition-all ' >
                            <Link to="/about-us">About Us</Link>
                        </li>
                        <li className=' text-text-black  font-[400] text-[16px]/[22px] transition-all '  >
                            <Link to="/blogs">Blogs</Link>
                        </li>
                        <li className=' text-text-black  font-[400] text-[16px]/[22px] transition-all ' >
                            <Link to="/products">Products</Link>
                        </li>
                        <li className=' text-text-black  font-[400] text-[16px]/[22px] transition-all '  >
                            <Link to="/contact-us">Contact Us</Link>
                        </li>

                    </ul>
                </div>

                {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Help */}
                <div className="columns cols-2 desktop:w-[30%] gt-tab:w-[20%] tab:w-[20%] w-[47%] " >
                    <h4 className='text-black font-[600] text-[16px]/[22px] pb-[12px]   ' >Help</h4>
                    <ul className='flex flex-col gap-[7px] ' >

                        <li className=' text-black   font-[400] text-[16px]/[22px] transition-all '  >
                            <Link to="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li className=' text-black   font-[400] text-[16px]/[22px] transition-all '  >
                            <Link to="/cancellation-policy">Cancellation Policy</Link>
                        </li>
                        <li className=' text-black   font-[400] text-[16px]/[22px] transition-all '  >
                            <Link to="/terms-of-use">Terms of Use</Link>
                        </li>
                        <li className=' text-black   font-[400] text-[16px]/[22px] transition-all '  >
                            <Link to="/shipping-policy" >Shipping Policy</Link>
                        </li>
                        <li className=' text-black   font-[400] text-[16px]/[22px] transition-all '  >
                            <Link to="/help-and-support">Help and Support</Link>
                        </li>

                    </ul>
                </div>

                {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Contact */}
                <div className="columns cols-2 desktop:w-[40%] gt-tab:w-[50%] tab:w-[45%] ">
                    <h4 className='text-black font-[600] text-[16px]/[22px] pb-[12px]   ' >Contact</h4>
                    <ul className='flex flex-col gap-[14px] contact_info ' >

                        <li className=' text-black  font-[400] text-[16px]/[22px] flex justify-start items-start gap-[10px] transition-all ' >
                            <svg className='fill-para-black w-[25px] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z" /></svg>
                            <div className=" flex flex-col gap-[5px] ">
                                <a className=' text-[16px]/[24px] ' href="tel:+91 9987034815">+91 9987034815</a>
                                <a className=' text-[16px]/[24px] ' href="tel:+91 8454896170">+91 8454896170</a>
                            </div>
                        </li>

                        <li className=' text-black  font-[400] text-[16px]/[22px] flex justify-start items-center gap-[10px] transition-all ' >
                            <svg className='fill-para-black w-[25px] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z" /></svg>
                            <a href="mailto:info.voltcartt@gmail.com">info.voltcartt@gmail.com</a>
                        </li>

                    </ul>
                </div>

                {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Payment */}
                <div className="columns cols-2 desktop:w-[30%] gt-tab:w-[30%]  tab:w-[40%]  ">
                    <h4 className='text-black font-[600] text-[16px]/[22px] pb-[12px] ' >Payment Options</h4>
                    <img src={paymentOptImgs} alt="" />
                </div>

            </div>
        </footer>
    )
}

export default TopFooter;