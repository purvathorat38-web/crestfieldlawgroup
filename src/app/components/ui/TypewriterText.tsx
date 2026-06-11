import { useEffect, useState } from "react";

interface TypewriterTextProps {
  phrases: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
  cursorColor?: string;
}

export function TypewriterText({
  phrases,
  className = "",
  typingSpeed = 60,
  deletingSpeed = 35,
  pauseMs = 1800,
  cursorColor = "#c9a227",
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed === current) {
      // Pause at end of phrase
      timeout = setTimeout(() => setIsDeleting(true), pauseMs);
    } else if (isDeleting && displayed === "") {
      // Move to next phrase
      setIsDeleting(false);
      setPhraseIdx((i) => (i + 1) % phrases.length);
    } else if (isDeleting) {
      timeout = setTimeout(
        () => setDisplayed((d) => d.slice(0, -1)),
        deletingSpeed
      );
    } else {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, phraseIdx, phrases, typingSpeed, deletingSpeed, pauseMs]);

  return (
    <span className={className}>
      {displayed}
      <span
        style={{
          color: cursorColor,
          animation: "cursor-blink 0.9s step-end infinite",
          marginLeft: "2px",
          display: "inline-block",
        }}
      >
        |
      </span>
    </span>
  );
}
