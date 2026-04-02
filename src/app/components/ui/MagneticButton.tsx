import { useRef, useState, ReactNode } from "react";
import { motion } from "motion/react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: "div" | "span";
}

export function MagneticButton({
  children,
  className = "",
  strength = 0.25,
  as = "div",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setPos({ x, y });
  };

  const handleMouseLeave = () =>
    setPos({ x: 0, y: 0 });

  const Tag = as === "span" ? motion.span : motion.div;

  return (
    <Tag
      ref={ref as any}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.5 }}
      style={{ display: "inline-block" }}
    >
      {children}
    </Tag>
  );
}
