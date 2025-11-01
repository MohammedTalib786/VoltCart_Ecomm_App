
import Button from '../../FormComp/Button'

const Slides = ({ title, source }) => {
    return (
        <div className="  max-w-[1440px] mx-auto w-full p-[50px] flex justify-between items-center " >
            <div className=" w-full text_cont flex flex-col justify-center items-start gap-[22px]  ">
                <h2 className='text-[60px]/[70px] font-light' dangerouslySetInnerHTML={{ __html: title }} />
                <Button text="SHOP NOW" />
            </div>
            <img src={source} alt="" className='w-[500px]' />
        </div>
    )
}

export default Slides