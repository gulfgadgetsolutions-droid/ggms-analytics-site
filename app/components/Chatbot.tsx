"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type AssistantStarProps = {
  size?: "small" | "medium" | "large";
};

function AssistantStar({ size = "medium" }: AssistantStarProps) {
  const sizeClass = {
    small: "text-sm",
    medium: "text-2xl",
    large: "text-[3.5rem]",
  }[size];

  return (
    <span className={`${sizeClass} leading-none text-cyan-400`} aria-hidden="true">
      ✦
    </span>
  );
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Welcome to GGMS Analytics. I can help you explore our services, understand our industry experience, or prepare for a project conversation.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  async function sendMessage(event: FormEvent) {
    event.preventDefault();

    const trimmedMessage = message.trim();

    if (!trimmedMessage || isLoading) return;

    setMessages((previous) => [
      ...previous,
      { role: "user", content: trimmedMessage },
    ]);

    setMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmedMessage,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content: data.response,
        },
      ]);
    } catch (error) {
      console.error("Chat error:", error);

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting right now. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {!isOpen && (
        <div className="group fixed bottom-24 right-5 z-[70] sm:right-6">
          <span className="pointer-events-none absolute right-[calc(100%+12px)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-slate-700/80 bg-slate-950/90 px-4 py-2 text-xs font-semibold text-white opacity-0 shadow-xl backdrop-blur-md transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 sm:block">
            Ask GGMS Analytics
          </span>
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open GGMS Analytics digital assistant"
            className="grid h-16 w-16 place-items-center text-cyan-400 transition duration-300 hover:scale-110 hover:text-cyan-300 focus-visible:rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            <AssistantStar size="large" />
          </button>
        </div>
      )}

      {isOpen && (
        <section aria-label="GGMS Analytics digital assistant" className="chatbot-shell fixed bottom-4 left-4 right-4 z-[70] flex h-[min(620px,calc(100dvh-7rem))] w-auto flex-col overflow-hidden rounded-[26px] border border-cyan-200/20 bg-slate-950 sm:bottom-6 sm:left-auto sm:right-6 sm:w-[400px] sm:max-w-[calc(100vw-2rem)]">
          <header className="relative flex items-center justify-between overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-[#071426] px-5 py-4">
            <div className="pointer-events-none absolute -right-10 -top-14 h-32 w-32 rounded-full bg-cyan-300/10 blur-2xl" />
            <div className="relative flex items-center gap-3.5">
              <span className="grid h-10 w-8 shrink-0 place-items-center">
                <AssistantStar size="medium" />
              </span>
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-[15px] font-semibold tracking-[-0.02em] text-white">GGMS Analytics</h2>
                <p className="mt-0.5 flex items-center gap-1.5 text-[11px] font-medium text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,.8)]" aria-hidden="true" />
                  AI digital assistant
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
              className="relative grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-xl text-slate-300 transition hover:border-cyan-300/35 hover:bg-cyan-300/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              ×
            </button>
          </header>

          <div className="chatbot-messages flex-1 space-y-4 overflow-y-auto bg-[radial-gradient(circle_at_90%_0%,rgba(34,211,238,.07),transparent_16rem),linear-gradient(180deg,#07111f,#050b15)] p-4" aria-live="polite">
            {messages.map((item, index) => (
              <div
                key={index}
                className={`flex ${
                  item.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                {item.role === "assistant" && (
                  <span className="mr-2 mt-2 grid w-5 shrink-0 place-items-start">
                    <AssistantStar size="small" />
                  </span>
                )}
                <div
                  className={`chatbot-message max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    item.role === "user"
                      ? "rounded-br-md border border-cyan-200/20 bg-gradient-to-br from-cyan-500 to-sky-600 text-slate-950 shadow-[0_16px_30px_-22px_rgba(34,211,238,.8)]"
                      : "rounded-bl-md border border-white/10 bg-slate-800/90 text-slate-100 shadow-[0_16px_30px_-24px_rgba(2,6,23,.9)]"
                  }`}
                >
                  {item.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <span className="mr-2 mt-2 grid w-5 shrink-0 place-items-start">
                  <AssistantStar size="small" />
                </span>
                <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-white/10 bg-slate-800/90 px-4 py-3" aria-label="Assistant is thinking">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300 [animation-delay:150ms]" />
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300 [animation-delay:300ms]" />
                </div>
              </div>
            )}

            {messages.length === 1 && !isLoading && (
              <div className="flex flex-wrap gap-2 pl-9">
                {["Explore our services", "Discuss data strategy", "Start a project"].map((suggestion) => (
                  <button key={suggestion} type="button" onClick={() => setMessage(suggestion)} className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-3 py-2 text-[11px] font-semibold text-cyan-100 transition hover:-translate-y-0.5 hover:border-cyan-300/45 hover:bg-cyan-300/10">
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={sendMessage}
            className="border-t border-white/10 bg-slate-900/95 p-3.5"
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="How can we help?"
                aria-label="Message GGMS Analytics assistant"
                className="min-w-0 flex-1 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:shadow-[0_0_0_3px_rgba(34,211,238,.08)]"
              />

              <button
                type="submit"
                disabled={isLoading || !message.trim()}
                aria-label="Send message"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cyan-300 to-sky-500 font-bold text-slate-950 shadow-[0_12px_24px_-14px_rgba(34,211,238,.8)] transition hover:-translate-y-0.5 hover:from-cyan-200 hover:to-cyan-400 disabled:cursor-not-allowed disabled:opacity-40"
              >
                ↗
              </button>
            </div>
            <p className="mt-2 px-1 text-[10px] leading-4 text-slate-500">For confidential or project-specific information, use our secure contact form.</p>
          </form>
        </section>
      )}
    </>
  );
}
