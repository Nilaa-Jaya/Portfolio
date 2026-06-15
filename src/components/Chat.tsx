"use client";

import { useEffect, useRef, useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { chatQA, chatGreeting, chatClosing } from "@/data/chat";

type Message = { role: "user" | "assistant"; content: string };

export function Chat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [asked, setAsked] = useState<number[]>([]);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const openChat = () => setOpen(true);
    window.addEventListener("open-chat", openChat);
    return () => window.removeEventListener("open-chat", openChat);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, typing, open]);

  function ask(i: number) {
    if (typing) return;
    const qa = chatQA[i];
    setMessages((m) => [...m, { role: "user", content: qa.q }]);
    setAsked((a) => [...a, i]);
    setTyping(true);
    const delay = Math.min(1300, 450 + qa.a.length * 7);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "assistant", content: qa.a }]);
      setTyping(false);
    }, delay);
  }

  const remaining = chatQA.map((_, i) => i).filter((i) => !asked.includes(i));

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Chat with Nilaa"
          className="fixed right-5 bottom-5 z-[90] flex items-center gap-2 rounded-full border border-border bg-accent px-4 py-3 text-sm font-medium text-background shadow-lg transition-transform hover:scale-105"
        >
          <MessageSquare size={18} />
          <span className="hidden sm:inline">Chat with me</span>
        </button>
      )}

      {open && (
        <div className="fixed right-4 bottom-4 z-[95] flex h-[70vh] max-h-[600px] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-background">
                <MessageSquare size={16} />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold">Chat with Nilaa</p>
                <p className="text-xs text-muted">Usually replies instantly 💬</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-muted transition-colors hover:text-foreground"
            >
              <X size={18} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4 text-sm">
            <div className="flex">
              <p className="max-w-[85%] rounded-2xl rounded-bl-sm bg-background px-3 py-2 text-foreground">
                {chatGreeting}
              </p>
            </div>

            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : ""}`}>
                <p
                  className={`max-w-[85%] whitespace-pre-wrap px-3 py-2 ${
                    m.role === "user"
                      ? "rounded-2xl rounded-br-sm bg-accent text-background"
                      : "rounded-2xl rounded-bl-sm bg-background text-foreground"
                  }`}
                >
                  {m.content}
                </p>
              </div>
            ))}

            {typing && (
              <div className="flex">
                <p className="rounded-2xl rounded-bl-sm bg-background px-3 py-2 text-muted">
                  <span className="cursor-blink">▋</span>
                </p>
              </div>
            )}

            {!typing && remaining.length > 0 && (
              <div className="flex flex-col gap-2 pt-1">
                {remaining.map((i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => ask(i)}
                    className="rounded-full border border-border px-3 py-1.5 text-left text-xs text-muted transition-colors hover:border-accent hover:text-foreground"
                  >
                    {chatQA[i].q}
                  </button>
                ))}
              </div>
            )}

            {!typing && remaining.length === 0 && (
              <div className="flex">
                <p className="max-w-[85%] rounded-2xl rounded-bl-sm bg-background px-3 py-2 text-foreground">
                  {chatClosing}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
