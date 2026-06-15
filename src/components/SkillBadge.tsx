import type { SkillIcon } from "@/data/skills";

export function SkillBadge({ name, icon: Icon, color }: SkillIcon) {
  return (
    <div className="flex w-20 flex-col items-center gap-2 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cream">
        <Icon size={28} style={{ color: color ?? "#18181b" }} />
      </div>
      <span className="text-xs text-muted">{name}</span>
    </div>
  );
}
