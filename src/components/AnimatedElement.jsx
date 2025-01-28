"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function AnimatedElement({ children, animation = "fadeIn", delay = 0, duration = 0.5, className = "" }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const animations = {
    fadeIn: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration, delay, ease: "easeOut" },
      },
    },
    slideIn: {
      hidden: { opacity: 0, x: -50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration, delay, ease: "easeOut" },
      },
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration, delay, ease: "easeOut" },
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animations[animation]}
      className={className}
    >
      {children}
    </motion.div>
  )
}

