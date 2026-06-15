import { site } from "@/data/site";

export function ResumeViewer() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <span className="h-3 w-3 rounded-full bg-green-500/70" />
        <span className="ml-2 font-mono text-xs text-muted">resume.pdf</span>
      </div>
      <iframe
        src={`${site.resume}#toolbar=0&navpanes=0&view=FitH`}
        title={`${site.name}'s Resume`}
        className="flex-1 bg-white"
      />
    </div>
  );
}
