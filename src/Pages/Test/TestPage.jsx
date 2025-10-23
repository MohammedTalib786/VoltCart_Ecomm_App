import React, { useState } from 'react'
import TestComp from './TestComp';
import ThreeScene from './ThreeScene';
import IPhoneLook from './IPhoneLook';
import IPhoneLookTwo from './IPhoneLookTwo';
import SingleIPhoneLook from './SingleIPhoneLook';
import WatchCanvas from './WatchCanvas';
import MainCanvas from './MainCanvas';


const TestPage = () => {

    return (
        <div className="bg-amber-200 " >

            <div className="cont flex p-[50px] min-h-[550px] " >
                <div className="w-[50%] bg-cyan-200 ">
                    <p>Using Single Canvas to for multiple Elements</p>
                </div>
                <div className="w-[50%] bg-blue-300 " >
                    <MainCanvas />
                </div>
            </div>

            <div className="cont flex p-[50px] min-h-[550px] " >
                <div className="w-[50%] bg-cyan-200 ">
                    Can be control by users
                </div>
                <div className="w-[50%] bg-blue-300 " >
                    <WatchCanvas />

                </div>
            </div>


            {/* <TestComp additionalclassName="class3 class4" />
            <ThreeScene /> */}

            {/* <div className="cont flex p-[50px] min-h-[550px] " >
                <div className="w-[50%] bg-amber-500 ">
                    Left
                </div>
                <div className="w-[50%] bg-pink-400 " >
                    <IPhoneLook />


                </div>
            </div> */}

            <div className="cont flex p-[50px] min-h-[550px] " >
                <div className="w-[50%] bg-amber-500 ">
                    Left
                </div>
                <div className="w-[50%] bg-pink-400 " >
                    <SingleIPhoneLook />
                </div>
            </div>

            <div className="py-[40px] bg-plain-bg-white " >
                <div className="py-[20px] bg-primary flex flex-col gap-8 text-center  ">
                <h2 className='font-inter ' >This is a Heading</h2>
                <p className='font-primary text-black ' >This is a Paragraph</p>
                </div>
            </div>



        </div>
    )
}

export default TestPage
