import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function BlurText({ text, className, delay = 0, duration = 0.8, once = true }: BlurTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.3 });

  return (
    <motion.p
      ref={ref}
      className={className}
      initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
      animate={
        isInView
          ? { opacity: 1, filter: "blur(0px)", y: 0 }
          : { opacity: 0, filter: "blur(10px)", y: 10 }
      }
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {text}
    </motion.p>
  );
}
