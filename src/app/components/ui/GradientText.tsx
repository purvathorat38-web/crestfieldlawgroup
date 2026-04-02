import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export function GradientText({ children, className = "", animate = true }: GradientTextProps) {
  return (
    <span
      className={className}
      style={{
        background: "linear-gradient(120deg, #8b6914 0%, #c9a227 25%, #f0d878 50%, #c9a227 75%, #8b6914 100%)",
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        animation: animate ? "gradient-shimmer 4s linear infinite" : undefined,
        display: "inline",
      }}
    >
      {children}
    </span>
  );
}
