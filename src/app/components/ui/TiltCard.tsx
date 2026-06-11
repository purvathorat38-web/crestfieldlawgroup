import { useRef, useState, ReactNode, MouseEvent } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  glare?: boolean;
}

export function TiltCard({
  children,
  className = "",
  maxTilt = 12,
  scale = 1.03,
  glare = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({});
  const [active, setActive] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;  // 0-1
    const y = (e.clientY - rect.top) / rect.height;   // 0-1
    const rotateX = (0.5 - y) * maxTilt * 2;
    const rotateY = (x - 0.5) * maxTilt * 2;

    setTransform(
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`
    );

    if (glare) {
      const angle = Math.atan2(y - 0.5, x - 0.5) * (180 / Math.PI);
      setGlareStyle({
        background: `linear-gradient(${angle}deg, rgba(255,255,255,0.18) 0%, transparent 70%)`,
        opacity: 1,
      });
    }
  };

  const handleMouseLeave = () => {
    setTransform(`perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)`);
    setGlareStyle({ opacity: 0 });
    setActive(false);
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: active ? "transform 0.08s ease" : "transform 0.5s ease",
        transformStyle: "preserve-3d",
        position: "relative",
        willChange: "transform",
      }}
    >
      {children}
      {glare && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 10,
            borderRadius: "inherit",
            transition: "opacity 0.3s ease",
            ...glareStyle,
          }}
        />
      )}
    </div>
  );
}
