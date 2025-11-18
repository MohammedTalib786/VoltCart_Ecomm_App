import Button from './Button'


const NewsletterInput = () => {
    return (
        <div className="">
            <input type="text" name="" id="" />
            <button>Subscribe</button>
            <Button
                text="Subscribe"
                borderClr='border-black'
                bgClr="bg-black"
                textClr="text-white"
                hoverBgClr="bg-white"
                hoverTextClr="text-black"
                btnWidth="w-100"
            />
        </div>
    )
}

export default NewsletterInput;
