import type { SkillIcon } from "@/data/skills";

// Fixed light badge background in both themes, so brand icons (including the
// dark ones like Kafka, GitHub, Flask, Linux) stay visible everywhere.
const BADGE_BG = "#e8e1d3";

export function SkillBadge({ name, icon: Icon, color }: SkillIcon) {
  return (
    <div className="flex w-20 flex-col items-center gap-2 text-center">
      <div
        className="flex h-14 w-14 items-center justify-center rounded-full"
        style={{ backgroundColor: BADGE_BG }}
      >
        <Icon size={28} style={{ color: color ?? "#18181b" }} />
      </div>
      <span className="text-xs text-muted">{name}</span>
    </div>
  );
}
