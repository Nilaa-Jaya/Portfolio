"use client";

import { useEffect, useRef, useState, type ReactNode, type KeyboardEvent } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { SquareTerminal } from "lucide-react";
import { site } from "@/data/site";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { projects } from "@/data/projects";

const BOOT_LINES = [
  "[OK] Initializing system kernel...",
  "[OK] Mounting file systems...",
  "[OK] Loading user profile: nilaa_raghunathan",
  "[OK] Starting shell session...",
  "[OK] Welcome to NilaaOS v1.0 (AI Engineer Edition)",
  "[OK] Type 'help' to see available commands.",
];

const PROMPT_HOST = "visitor@nilaa-portfolio";

type HistoryEntry = {
  type: "input" | "output";
  content: ReactNode;
};

const COMMANDS: [string, string][] = [
  ["help, hint", "Show this list of commands"],
  ["chat", "Ask my AI assistant anything"],
  ["about", "A short bio"],
  ["experience", "Work experience"],
  ["education", "Education history"],
  ["skills", "Tools & technologies"],
  ["projects", "Featured projects"],
  ["contact", "Contact info"],
  ["resume", "Open my resume"],
  ["socials", "Social links"],
  ["whoami", "Who am I?"],
  ["clear", "Clear the terminal"],
  ["exit", "Close the terminal"],
];

function CommandList() {
  return (
    <div>
      <p>Available commands:</p>
      <div className="mt-1 grid grid-cols-[max-content_1fr] gap-x-6 gap-y-0.5">
        {COMMANDS.map(([name, desc]) => (
          <div key={name} className="contents">
            <span className="text-accent">{name}</span>
            <span className="text-muted">{desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function getOutput(cmd: string, arg: string): ReactNode | "CLEAR" | "EXIT" | "CHAT" {
  switch (cmd) {
    case "help":
    case "hint":
      return <CommandList />;
    case "chat":
      return "CHAT";
    case "whoami":
      return "nilaa_raghunathan — AI Engineer & Data Scientist building intelligent systems with LLMs, RAG, and large-scale data platforms.";
    case "about":
      return (
        <div className="space-y-2">
          {site.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      );
    case "experience":
      return (
        <div className="space-y-3">
          {experience.map((item) => (
            <div key={item.role}>
              <p className="text-accent">
                {item.start} – {item.end} · {item.role} @ {item.org}
              </p>
              <p className="text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      );
    case "education":
      return (
        <div className="space-y-3">
          {education.map((item) => (
            <div key={item.school}>
              <p className="text-accent">
                {item.school} — {item.degree}
              </p>
              <p className="text-muted">
                {item.start} – {item.end} · {item.location}
              </p>
            </div>
          ))}
        </div>
      );
    case "skills":
      return (
        <div className="space-y-1">
          <p>Languages: Python, SQL, R, Java, Scala, C++, C</p>
          <p>AI / ML: PyTorch, TensorFlow, Scikit-learn, Hugging Face, LangChain</p>
          <p>Data & Cloud: PostgreSQL, MongoDB, Apache Spark, AWS, Docker, Kubernetes</p>
          <p className="text-muted">See the Skills section for the full interactive breakdown.</p>
        </div>
      );
    case "projects":
      return (
        <div className="space-y-3">
          {projects.map((p) => (
            <div key={p.title}>
              <p className="text-accent">{p.title}</p>
              <p className="text-muted">{p.description}</p>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline"
              >
                {p.github}
              </a>
            </div>
          ))}
        </div>
      );
    case "contact":
      return (
        <div className="space-y-1">
          <p>
            email:{" "}
            <a href={`mailto:${site.contact.email}`} className="text-accent underline">
              {site.contact.email}
            </a>
          </p>
          <p>
            github:{" "}
            <a href={site.contact.github} target="_blank" rel="noopener noreferrer" className="text-accent underline">
              {site.contact.github}
            </a>
          </p>
          <p>
            linkedin:{" "}
            <a href={site.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent underline">
              {site.contact.linkedin}
            </a>
          </p>
        </div>
      );
    case "socials":
      return (
        <div className="space-y-1">
          <a href={site.contact.github} target="_blank" rel="noopener noreferrer" className="block text-accent underline">
            {site.contact.github}
          </a>
          <a href={site.contact.linkedin} target="_blank" rel="noopener noreferrer" className="block text-accent underline">
            {site.contact.linkedin}
          </a>
        </div>
      );
    case "resume":
      if (typeof window !== "undefined") window.open(site.resume, "_blank");
      return "Opening resume.pdf in a new tab...";
    case "date":
      return new Date().toString();
    case "echo":
      return arg;
    case "sudo":
      return "Permission denied: nice try. You are not root on this machine.";
    case "coffee":
      return "Brewing a fresh cup... ☕ Enjoy!";
    case "":
      return "";
    case "clear":
      return "CLEAR";
    case "exit":
      return "EXIT";
    default:
      return `command not found: ${cmd}. Type 'help' for a list of commands.`;
  }
}

export function Terminal() {
  const [open, setOpen] = useState(false);
  const [bootedCount, setBootedCount] = useState(0);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [cmdIndex, setCmdIndex] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const githubHandle = site.contact.github.split("/").filter(Boolean).pop();

  useEffect(() => {
    if (!open) return;
    setBootedCount(0);
    setHistory([]);
    const interval = setInterval(() => {
      setBootedCount((c) => {
        const next = c + 1;
        if (next >= BOOT_LINES.length) {
          clearInterval(interval);
          setTimeout(() => inputRef.current?.focus(), 50);
        }
        return next;
      });
    }, 280);
    return () => clearInterval(interval);
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: "end" });
  }, [history, bootedCount]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const ready = bootedCount >= BOOT_LINES.length;

  function run(raw: string) {
    const trimmed = raw.trim();
    if (!trimmed) return;
    const [cmd, ...args] = trimmed.split(/\s+/);

    setHistory((h) => [...h, { type: "input", content: trimmed }]);
    setCmdHistory((h) => [...h, trimmed]);
    setCmdIndex(null);

    const output = getOutput(cmd.toLowerCase(), args.join(" "));
    if (output === "CLEAR") {
      setHistory([]);
      return;
    }
    if (output === "EXIT") {
      setHistory((h) => [...h, { type: "output", content: "Closing terminal..." }]);
      setTimeout(() => setOpen(false), 300);
      return;
    }
    if (output === "CHAT") {
      setHistory((h) => [
        ...h,
        { type: "output", content: "Opening AI assistant..." },
      ]);
      setTimeout(() => {
        setOpen(false);
        window.dispatchEvent(new CustomEvent("open-chat"));
      }, 300);
      return;
    }
    setHistory((h) => [...h, { type: "output", content: output }]);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      run(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const newIndex = cmdIndex === null ? cmdHistory.length - 1 : Math.max(0, cmdIndex - 1);
      setCmdIndex(newIndex);
      setInput(cmdHistory[newIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (cmdIndex === null) return;
      const newIndex = cmdIndex + 1;
      if (newIndex >= cmdHistory.length) {
        setCmdIndex(null);
        setInput("");
      } else {
        setCmdIndex(newIndex);
        setInput(cmdHistory[newIndex]);
      }
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed top-20 right-6 z-40 flex items-center gap-2 rounded-full border border-muted/40 bg-card py-1 pr-2 pl-1 shadow-lg transition-colors hover:border-accent sm:right-8 sm:pr-4"
        aria-label="Open interactive developer terminal"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-background">
          <SquareTerminal size={16} className="text-green-400" />
        </span>
        <span className="hidden text-sm font-medium text-accent sm:inline">Terminal</span>
        <span className="hidden font-mono text-accent cursor-blink sm:inline">_</span>
      </button>

      {open &&
        createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/85 p-4 backdrop-blur-sm sm:p-8"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close terminal"
            className="absolute top-4 right-4 flex items-center gap-2 rounded-full border border-border bg-card px-2 py-2 text-sm text-foreground shadow-lg transition-colors hover:border-accent hover:text-accent sm:top-8 sm:right-8 sm:pr-4"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-background">
              <SquareTerminal size={15} />
            </span>
            <span className="hidden sm:inline">Exit</span>
          </button>

          <div
            className="flex max-h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl sm:h-[600px] sm:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col border-b border-border p-6 text-center sm:w-72 sm:shrink-0 sm:border-b-0 sm:border-r">
              <div className="flex flex-1 flex-col items-center justify-center">
                <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-accent">
                  <Image
                    src={site.profileImage}
                    alt={site.name}
                    fill
                    sizes="112px"
                    className="object-cover object-[center_25%]"
                  />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold">{site.name}</h3>
                <p className="text-sm text-accent">@{githubHandle}</p>
                <div className="mt-4 space-y-1 text-xs text-muted">
                  <p>{site.rolePrefix}</p>
                  {site.roles.map((r) => (
                    <p key={r}>{r}</p>
                  ))}
                </div>
              </div>
              <div className="mt-6 w-full space-y-2 border-t border-border pt-4 text-left text-xs">
                <div className="flex justify-between">
                  <span className="text-muted">Status</span>
                  <span className="text-green-400">Online</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Architecture</span>
                  <span>Transformer</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Framework</span>
                  <span>PyTorch 2.x</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Mode</span>
                  <span>Always Learning</span>
                </div>
              </div>
            </div>

            <div className="flex min-h-0 flex-1 flex-col">
              <div className="flex items-center border-b border-border px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <span className="h-3 w-3 rounded-full bg-green-500/70" />
                </div>
                <span className="flex-1 text-center font-mono text-xs text-muted">
                  {PROMPT_HOST}: ~
                </span>
                <div className="w-12" />
              </div>
              <div
                className="flex-1 overflow-y-auto p-4 font-mono text-sm"
                onClick={() => inputRef.current?.focus()}
              >
                {BOOT_LINES.slice(0, bootedCount).map((line, i) => (
                  <div key={i} className="text-foreground">
                    <span className="text-green-400">[OK]</span>
                    {line.replace(/^\[OK\]/, "")}
                  </div>
                ))}
                {history.map((entry, i) => (
                  <div key={i} className="mt-1">
                    {entry.type === "input" ? (
                      <p>
                        <span className="text-accent">➜ ~</span> {entry.content}
                      </p>
                    ) : (
                      <div className="text-foreground">{entry.content}</div>
                    )}
                  </div>
                ))}
                {ready && (
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-accent">➜ ~</span>
                    <input
                      ref={inputRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="flex-1 bg-transparent text-foreground outline-none"
                      style={{ caretColor: "var(--accent)" }}
                      autoFocus
                      spellCheck={false}
                      autoComplete="off"
                      aria-label="Terminal input"
                    />
                  </div>
                )}
                <div ref={bottomRef} />
              </div>
            </div>
          </div>
        </div>,
          document.body
        )}
    </>
  );
}
