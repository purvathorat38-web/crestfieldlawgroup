import { useRef, CSSProperties } from "react";
import { motion, useInView } from "motion/react";

interface SplitTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  wordDelay?: number;
  once?: boolean;
  tag?: "h1" | "h2" | "h3" | "span" | "p";
}

export function SplitText({
  text,
  className,
  style,
  delay = 0,
  wordDelay = 0.08,
  once = true,
  tag = "span",
}: SplitTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.3 });

  const words = text.split(" ");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: wordDelay,
        delayChildren: delay,
      },
    },
  };

  const wordVariant = {
    hidden: { opacity: 0, y: 28, skewY: 3 },
    visible: {
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const Tag = tag as keyof JSX.IntrinsicElements;

  return (
    <Tag className={className} style={style}>
      <motion.span
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{ display: "inline", overflow: "hidden" }}
        aria-label={text}
      >
        {words.map((word, i) => (
          <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", paddingBottom: "0.2em", marginBottom: "-0.2em" }}>
            <motion.span
              variants={wordVariant}
              style={{ display: "inline-block" }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 && <span style={{ display: "inline-block", width: "0.3em" }} />}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}