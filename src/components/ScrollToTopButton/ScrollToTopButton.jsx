import { useState, useEffect } from 'react'
import { HiOutlineChevronUp } from "react-icons/hi2";

import './scrollToTopButton.css'


const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            setIsVisible(scrollTop > 100);

            if (docHeight > 0) {
                const scrolled = (scrollTop / docHeight) * 100;
                setProgress(scrolled);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    const radius = 26;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <>
            <button
                className={` ${isVisible ? "onScrollBtn" : ""}
                scrollToTopBtn bg-[#cacaca91] opacity-0 pointer-events-none w-[55px] h-[55px] text-white flex justify-center items-center fixed z-[9999] rounded-full cursor-pointer `}
                onClick={scrollToTop} >
                <svg
                    className="absolute top-0 left-0 rotate-[-90deg] pointer-events-none scale-[1.2] "
                    width="55"
                    height="55"
                    viewBox="0 0 60 60"
                >
                    <circle
                        cx="30"
                        cy="30"
                        r={radius - 2}
                        stroke="transparent"
                        strokeWidth="2"
                        fill="none"
                    />
                    <circle
                        cx="30"
                        cy="30"
                        r={radius - 2}
                        stroke="#0D6EFD"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                    />
                </svg>

                <HiOutlineChevronUp className=" stroke-[#0D6EFD] relative z-10 text-[28px]/[28px]" />
            </button>
        </>
    )
}

export default ScrollToTopButton;
