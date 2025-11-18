// import { useState, useEffect } from "react";

// export default function Counter({ target, duration, start }) {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         if (!start) return;

//         let current = 0;
//         const stepTime = 20;
//         const steps = duration / stepTime;
//         const increment = target / steps;

//         const interval = setInterval(() => {
//             current += increment;
//             if (current >= target) {
//                 setCount(target);
//                 clearInterval(interval);
//             } else {
//                 setCount(Math.floor(current));
//             }
//         }, stepTime);

//         return () => clearInterval(interval);
//     }, [start, target, duration]);

//     return <h1>{count}</h1>;
// }
