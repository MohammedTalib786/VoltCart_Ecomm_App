
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import './cursor.css'


const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      {/* Outer trailing circle */}
      <motion.div
        className="cursor-outer"
        animate={{
          x: mousePosition.x - 25,
          y: mousePosition.y - 25,
        }}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 0.25,
        }}
      />

      {/* Inner dot */}
      <motion.div
        className="cursor-inner"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
    </>
  )
}

export default Cursor
