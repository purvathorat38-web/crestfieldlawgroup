import { ReactNode } from "react";

interface ShinyButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  as?: "button" | "div";
  href?: string;
}

export function ShinyButton({
  children,
  className = "",
  onClick,
  as = "button",
}: ShinyButtonProps) {
  const shineEl = (
    <span
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 0,
        left: "-80%",
        width: "45%",
        height: "100%",
        background:
          "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.22) 50%, transparent 100%)",
        transform: "skewX(-20deg)",
        animation: "shine-sweep 3.5s ease-in-out infinite",
        pointerEvents: "none",
      }}
    />
  );

  if (as === "div") {
    return (
      <div
        className={className}
        onClick={onClick}
        style={{ position: "relative", overflow: "hidden", cursor: "pointer" }}
      >
        {shineEl}
        {children}
      </div>
    );
  }

  return (
    <button
      className={className}
      onClick={onClick}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {shineEl}
      {children}
    </button>
  );
}
