import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    XIcon,
    TelegramShareButton,
    TelegramIcon,
    WhatsappIcon,
    WhatsappShareButton,
} from "react-share";


const BlogShareComp = ({ currentLocalShareURL }) => {
    return (
        <div className="share_blog flex items-center gap-[15px]  pt-[15px] desktop:pb-[100px] gt-tab:pb-[80px] pb-[60px] ">
            <h4>Share It:</h4>

            <div className="share_btns flex gap-[10px] ">

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
                    {/* <TwitterIcon size={35} round /> */}
                    <XIcon size={35} round />
                </TwitterShareButton>

                {/* Telegram Share */}
                <TelegramShareButton url={currentLocalShareURL} className='telegram_icon'  >
                    <TelegramIcon size={35} round />
                </TelegramShareButton>
            </div>
        </div>
    )
}

export default BlogShareComp;
