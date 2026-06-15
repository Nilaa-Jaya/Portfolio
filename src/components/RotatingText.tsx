"use client";

import { useEffect, useState } from "react";

export function RotatingText({
  words,
  intervalMs = 2000,
  className,
}: {
  words: string[];
  intervalMs?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [words.length, intervalMs]);

  return (
    <span className="relative inline-grid align-bottom" aria-live="polite">
      {words.map((word, i) => (
        <span
          key={word}
          className={`col-start-1 row-start-1 transition-opacity duration-700 ${className ?? ""}`}
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i === index ? undefined : true}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
