"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { skills } from "@/data/skills";

const WIDTH = 1000;
const HUB_R = 78;
const CX = WIDTH / 2;
const SIDE_GAP = 130;
const ROW = 48;
const TOP_PAD = 48;
const LINE_HEIGHT = 17;
const FONT_SIZE = 14;
const HUB_LINE_HEIGHT = 18;

function wrapLabel(text: string, maxChars = 18): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function hash(seed: string): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h << 5) - h + seed.charCodeAt(i);
    h |= 0;
  }
  return h;
}

function jitter(seed: string, range: number): number {
  const normalized = (hash(seed) % 1000) / 1000;
  return normalized * range;
}

function round(value: number): number {
  return Math.round(value * 1000) / 1000;
}

export function ExpertiseGraph() {
  const [index, setIndex] = useState(0);
  const group = skills[index];

  const goPrev = () => setIndex((i) => (i - 1 + skills.length) % skills.length);
  const goNext = () => setIndex((i) => (i + 1) % skills.length);

  const left = group.items.filter((_, i) => i % 2 === 0);
  const right = group.items.filter((_, i) => i % 2 === 1);
  const perSide = Math.max(left.length, right.length);

  const HEIGHT = Math.max(360, perSide * ROW + TOP_PAD * 2);
  const CY = HEIGHT / 2;

  // Each item gets its own evenly-spaced row (no vertical jitter, so nothing
  // overlaps). The right column is offset half a row so the two sides
  // interleave instead of lining up — that keeps it looking organic.
  const yFor = (i: number, count: number, side: "left" | "right") => {
    const colHeight = (count - 1) * ROW;
    const startY = CY - colHeight / 2 + (side === "right" ? ROW / 2 : 0);
    return startY + i * ROW;
  };

  // Only the horizontal distance varies, so dots sit at ragged distances from
  // the hub — organic, but labels still never collide.
  const pointFor = (item: string, i: number, count: number, side: "left" | "right") => {
    const y = yFor(i, count, side);
    const gap = SIDE_GAP + jitter(`${item}-gap`, 80);
    const x = side === "left" ? CX - HUB_R - gap : CX + HUB_R + gap;
    const r = 4 + jitter(`${item}-r`, 2);
    return { x: round(x), y: round(y), r: round(r) };
  };

  const points = [
    ...left.map((item, i) => ({
      item,
      side: "left" as const,
      ...pointFor(item, i, left.length, "left"),
    })),
    ...right.map((item, i) => ({
      item,
      side: "right" as const,
      ...pointFor(item, i, right.length, "right"),
    })),
  ];

  const hubLines = wrapLabel(group.category, 13);
  const hubStartY = CY - ((hubLines.length - 1) * HUB_LINE_HEIGHT) / 2;

  return (
    <div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous category"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex-1 overflow-x-auto">
          <svg
            viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
            width={WIDTH}
            height={HEIGHT}
            className="mx-auto block max-w-full"
            role="img"
            aria-label={`${group.category} skills graph`}
          >
            {points.map(({ item, x, y }) => {
              const angle = Math.atan2(y - CY, x - CX);
              const hubX = round(CX + Math.cos(angle) * HUB_R);
              const hubY = round(CY + Math.sin(angle) * HUB_R);
              return (
                <line
                  key={`line-${item}`}
                  x1={hubX}
                  y1={hubY}
                  x2={x}
                  y2={y}
                  className="stroke-border"
                  strokeWidth={1}
                />
              );
            })}

            {points.map(({ item, x, y, r, side }) => {
              const lines = wrapLabel(item, 20);
              const startY = y - ((lines.length - 1) * LINE_HEIGHT) / 2;
              const tx = side === "left" ? round(x - r - 8) : round(x + r + 8);
              const anchor = side === "left" ? "end" : "start";
              return (
                <g key={`label-${item}`}>
                  <circle cx={x} cy={y} r={r} className="fill-accent" />
                  <text
                    textAnchor={anchor}
                    dominantBaseline="middle"
                    fontSize={FONT_SIZE}
                    className="fill-foreground"
                  >
                    {lines.map((line, k) => (
                      <tspan key={k} x={tx} y={round(startY + k * LINE_HEIGHT)}>
                        {line}
                      </tspan>
                    ))}
                  </text>
                </g>
              );
            })}

            <circle cx={CX} cy={CY} r={HUB_R} className="fill-accent" />
            <text
              textAnchor="middle"
              className="fill-background font-serif text-[16px] font-semibold"
            >
              {hubLines.map((line, i) => (
                <tspan key={line} x={CX} y={round(hubStartY + i * HUB_LINE_HEIGHT)}>
                  {line}
                </tspan>
              ))}
            </text>
          </svg>
        </div>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next category"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {skills.map((s, i) => (
          <button
            key={s.category}
            type="button"
            aria-label={`Show ${s.category}`}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === index ? "bg-accent" : "bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
