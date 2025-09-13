import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import './cursor.css'

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClicked, setIsClicked] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY })

    const handleMouseDown = () => setIsClicked(true)
    const handleMouseUp = () => setIsClicked(false)

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    const registerCursorEvent = (event, handler) => document.addEventListener(event, handler)
    const removeCursorEvent = (event, handler) => document.removeEventListener(event, handler)

    let eventsArr = [
      { event: "mousemove", handler: handleMouseMove },
      { event: "mousedown", handler: handleMouseDown },
      { event: "mouseup", handler: handleMouseUp },
      { event: "mouseenter", handler: handleMouseEnter },
      { event: "mouseleave", handler: handleMouseLeave }
    ];

    eventsArr.forEach((elem) => registerCursorEvent(elem.event, elem.handler))

    return () => {
      eventsArr.forEach((elem) => removeCursorEvent(elem.event, elem.handler))
    }
  }, [])

  return (
    <>
      <motion.div
        className="cursor-outer"
        animate={{
          x: mousePosition.x - 25,
          y: mousePosition.y - 25,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 0.25,
          // duration: 0.20,
        }}
      />

      <motion.div
        className="cursor-inner"
        animate={{
          x: mousePosition.x - 7,
          y: mousePosition.y - 7,
          scale: isClicked ? 1.25 : 1,
          opacity: isVisible ? 1 : 0,
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

export default Cursor;
