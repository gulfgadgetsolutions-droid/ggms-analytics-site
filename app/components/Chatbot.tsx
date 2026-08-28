"use client";

import { FormEvent, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm the GGMS Analytics AI Assistant. How can I help you today?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

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
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open GGMS AI Assistant"
          className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-cyan-400"
        >
          <span className="text-2xl">✦</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex h-[600px] w-[380px] max-w-[calc(100vw-32px)] flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-700 bg-slate-900 px-5 py-4">
            <div>
              <h2 className="font-semibold text-white">
                GGMS AI Assistant
              </h2>
              <p className="text-xs text-cyan-400">
                ● Online
              </p>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
              className="text-xl text-slate-400 transition hover:text-white"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto bg-slate-950 p-4">
            {messages.map((item, index) => (
              <div
                key={index}
                className={`flex ${
                  item.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    item.role === "user"
                      ? "rounded-br-md bg-cyan-500 text-white"
                      : "rounded-bl-md border border-slate-700 bg-slate-900 text-slate-200"
                  }`}
                >
                  {item.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-400">
                  Thinking...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={sendMessage}
            className="border-t border-slate-700 bg-slate-900 p-3"
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Ask GGMS anything..."
                className="min-w-0 flex-1 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-500"
              />

              <button
                type="submit"
                disabled={isLoading || !message.trim()}
                className="rounded-xl bg-cyan-500 px-4 py-3 font-semibold text-white transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-40"
              >
                ↑
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}