// import { useRef, useEffect, useState } from 'react';
// import Counter from './Counter';

// export default function IntersectionEx() {
//     const sectionRef = useRef(null);
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => setIsVisible(entry.isIntersecting),
//             { threshold: 0.5 }
//         );

//         if (sectionRef.current) observer.observe(sectionRef.current);
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <div>
//             <div style={{ height: '1000px' }}>Scroll down to see the counter</div>
//             <div ref={sectionRef} style={{ height: '200px', background: 'lightgray' }}>
//                 <Counter target={50} duration={1200} start={isVisible} />
//                 <Counter target={400} duration={1200} start={isVisible} />
//             </div>
//             <div style={{ height: '1000px' }}>Continue scrolling</div>
//         </div>
//     );
// }

