import { useState } from "react";

import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon,
    TelegramShareButton,
    TelegramIcon,
    PinterestShareButton,
    PinterestIcon,
    WhatsappIcon,
    WhatsappShareButton,
} from "react-share";

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { TfiClose } from "react-icons/tfi";

import "./share_comp.css"

const ShareComponent = ({
    shareComp,
    openShareComp,
    currentLocalShareURL
}) => {

    return (
        <motion.div
            className="share_component   "
            animate={{ opacity: shareComp.opacity, pointerEvents: shareComp.pointerEvents }}
            transition={{ type: 'spring', stiffness: 300, damping: 35, }}
            style={{ opacity: shareComp.opacity, pointerEvents: shareComp.pointerEvents }}

        >

            <div className="inside_share_cont">
                <TfiClose className='text-[26px]/[26px] absolute top-[15px] right-[20px] cursor-pointer  '
                    onClick={() => openShareComp({ opacity: 0, pointerEvents: "none" })}
                />

                <h4 className='font-montserrat text-[22px]/[30px] text-black font-[500] ' >Share this Product</h4>

                <div className="share_btns">

                    {/* WhatsApp Share */}
                    <WhatsappShareButton url={currentLocalShareURL} className='whatsapp_icon'
                    // title={title}
                    // separator=" - "
                    // quote={title}
                    >
                        <WhatsappIcon size={35} round />
                    </WhatsappShareButton>

                    {/* Facebook Share */}
                    <FacebookShareButton url={currentLocalShareURL} className='fb_icon' >
                        <FacebookIcon size={35} round />
                    </FacebookShareButton>

                    {/* LinkedIn Share */}
                    <LinkedinShareButton url={currentLocalShareURL} className='linked_in_icon'  >
                        <LinkedinIcon size={35} round />
                    </LinkedinShareButton>

                    {/* Twitter Share */}
                    <TwitterShareButton url={currentLocalShareURL} className='x_twit__icon'  >
                        <TwitterIcon size={35} round />
                    </TwitterShareButton>

                    {/* Telegram Share */}
                    <TelegramShareButton url={currentLocalShareURL} className='telegram_icon'  >
                        <TelegramIcon size={35} round />
                    </TelegramShareButton>

                    {/* Pinterest Share (Not Working from Library) */}
                    {/* <PinterestShareButton url={currentLocalShareURL} className='pinterest_icon'  >
                        <PinterestIcon size={35} round />
                    </PinterestShareButton> */}

                </div>

            </div>
        </motion.div>
    )
}

export default ShareComponent