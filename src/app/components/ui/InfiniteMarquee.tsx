import { ReactNode } from "react";

interface InfiniteMarqueeProps {
  items: ReactNode[];
  speed?: number;
  className?: string;
  direction?: "left" | "right";
  gap?: string;
}

export function InfiniteMarquee({
  items,
  speed = 35,
  className = "",
  direction = "left",
  gap = "3rem",
}: InfiniteMarqueeProps) {
  const animName = direction === "left" ? "marquee-left" : "marquee-right";

  return (
    <div className={`overflow-hidden ${className}`} style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
      <div
        style={{
          display: "flex",
          gap,
          animation: `${animName} ${speed}s linear infinite`,
          width: "max-content",
        }}
      >
        {/* Render 4 copies for seamless loop */}
        {[...Array(4)].map((_, setIdx) =>
          items.map((item, i) => (
            <div key={`${setIdx}-${i}`} style={{ flexShrink: 0 }}>
              {item}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
