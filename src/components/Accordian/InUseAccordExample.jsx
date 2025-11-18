import Accordian from './Accordian'


const InUseAccordExample = () => {
    let arr = [
        {
            tab_title: "Tab Title Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
            tab_desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ut aliquid non sequi ipsum voluptates illo totam a recusandae dignissimos!"
        },
        {
            tab_title: "Tab Title 22222 Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
            tab_desc: "Lorem ipsum 22222222 dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ut aliquid non sequi ipsum voluptates illo totam a recusandae dignissimos!"
        },
        {
            tab_title: "Tab Title 3333333 Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
            tab_desc: "Lorem ipsum 33333 dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ut aliquid non sequi ipsum voluptates illo totam a recusandae dignissimos!"
        }
    ];

    return (
        <>
            <div>InUseAccord</div>
            <div className="flex flex-col gap-[20px] " >
                {
                    arr.map(elem => <Accordian tab_title={elem.tab_title} tab_desc={elem.tab_desc} />)
                }
            </div>
        </>
    )
}

export default InUseAccordExample;
