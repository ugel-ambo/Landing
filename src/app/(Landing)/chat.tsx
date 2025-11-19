'use client';

import { useChat } from "@ai-sdk/react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDownCircle, X, Send, BotMessageSquare } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { DefaultChatTransport } from 'ai';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function ChatPage() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  const {
    messages,
    status,
    error,
    sendMessage
  } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
  });

  const isLoading = status === 'submitted';

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const toggleChat = () => setIsChatOpen(prev => !prev);

  const onSubmit = (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault();
    if (!input || !input.trim()) return;

    sendMessage({ text: input });
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit(e as React.FormEvent);
    }
  };

  const renderMessageContent = (message: ChatMessage) => {
    if (!message.parts) return '';

    return message.parts
      .filter((part: ChatPart) => part.type === 'text')
      .map((part: ChatPart) => part.text ?? '')
      .join('');
  };

  return (
    <div>
      {/* Botón flotante siempre visible con animación */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Button
            onClick={toggleChat}
            size="icon"
            className="rounded-full w-14 h-14 p-8 lg:p-10 shadow-2xl bg-linear-to-r from-[#049DD9] to-[#0284c7] hover:from-[#037bbd] hover:to-[#0369a1] text-white transition-all duration-300 hover:scale-110 relative"
            aria-label={isChatOpen ? "Cerrar chat" : "Abrir chat"}
          >
            {!isChatOpen ? (
              <>
                <BotMessageSquare className="w-7 h-7 lg:w-10 lg:h-10 size-14" aria-hidden="true" />
                {/* Pulso animado */}
                <motion.span
                  className="absolute inset-0 rounded-full bg-[#049DD9]/30"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </>
            ) : (
              <ArrowDownCircle className="w-7 h-7 lg:w-10 lg:h-10 size-14" aria-hidden="true" />
            )}
          </Button>
        </motion.div>
      </motion.div>

      {/* Chat modal */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, type: "spring" }}
            className="fixed bottom-28 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            <Card className="border-0 h-full px-0 py-0">
              <CardHeader className="bg-[#049DD9] text-white flex flex-row items-center justify-between space-y-0 pb-4 pt-4 px-5">
                <div className="flex items-center gap-2">
                  <BotMessageSquare className="w-5 h-5" />
                  <CardTitle className="text-sm font-semibold">Asistente Virtual</CardTitle>
                </div>
                <Button
                  onClick={toggleChat}
                  size="sm"
                  variant="ghost"
                  className="px-2 py-1 hover:bg-white/20 text-white rounded-full"
                  aria-label="Cerrar chat"
                >
                  <X className="w-4 h-4" />
                  <span className="sr-only">Cerrar el chat</span>
                </Button>
              </CardHeader>

              <CardContent className="p-0 bg-gray-50">
                <ScrollArea className="h-[250px] px-4 py-3">
                  {messages?.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-full text-center p-6">
                      <div className="bg-linear-to-br from-[#049DD9]/10 to-[#0284c7]/10 rounded-full p-4 mb-4">
                        <BotMessageSquare className="w-12 h-12 text-[#049DD9]" />
                      </div>
                      <p className="text-gray-600 font-medium mb-1">¡Hola! 👋</p>
                      <p className="text-gray-500 text-sm">Somos la UGEL Ambo, ¿en qué te podemos ayudar?</p>
                    </div>
                  )}

                  {messages?.map((message: ChatMessage, index: number) => (
                    <motion.div
                      key={message.id ?? index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex mb-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                          message.role === 'user'
                            ? 'bg-[#049DD9] text-white rounded-br-sm'
                            : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-sm'
                        }`}
                      >
                        <div className="text-sm leading-relaxed markdown-content">
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                              p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                              strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                              em: ({ children }) => <em className="italic">{children}</em>,
                              ul: ({ children }) => <ul className="list-disc list-inside mb-2 space-y-1">{children}</ul>,
                              ol: ({ children }) => <ol className="list-decimal list-inside mb-2 space-y-1">{children}</ol>,
                              li: ({ children }) => <li className="ml-2">{children}</li>,
                              code: ({ children, className }) => {
                                const isInline = !className;
                                return isInline ? (
                                  <code className="bg-gray-200 text-gray-800 px-1.5 py-0.5 rounded text-xs font-mono">
                                    {children}
                                  </code>
                                ) : (
                                  <code className="block bg-gray-900 text-gray-100 p-2 rounded text-xs font-mono overflow-x-auto mt-1 mb-2">
                                    {children}
                                  </code>
                                );
                              },
                              a: ({ children, href }) => (
                                <a
                                  href={href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[#049DD9] hover:underline"
                                >
                                  {children}
                                </a>
                              ),
                              blockquote: ({ children }) => (
                                <blockquote className="border-l-4 border-gray-300 pl-3 italic my-2">
                                  {children}
                                </blockquote>
                              ),
                            }}
                          >
                            {renderMessageContent(message)}
                          </ReactMarkdown>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start mb-4"
                    >
                      <div className="bg-white text-gray-800 shadow-sm border border-gray-100 rounded-2xl rounded-bl-sm px-4 py-3">
                        <div className="flex gap-1">
                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4"
                    >
                      <p className="text-red-800 text-sm font-medium mb-2">⚠️ Ocurrió un error</p>
                      <p className="text-red-600 text-xs">{error.message || 'Error desconocido'}</p>
                    </motion.div>
                  )}

                  <div ref={scrollRef} />
                </ScrollArea>
              </CardContent>

              <CardFooter className="bg-white border-t border-gray-200 p-4">
                <div className="w-full flex gap-2">
                  <Input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Escribe tu mensaje..."
                    disabled={isLoading}
                    className="flex-1 border-gray-300 focus:border-[#049DD9] focus:ring-[#049DD9] rounded-xl"
                  />
                  <Button
                    onClick={onSubmit}
                    disabled={isLoading || !input || !input.trim()}
                    className="w-10 h-10 rounded-xl bg-linear-to-r from-[#049DD9] to-[#0284c7] hover:from-[#037bbd] hover:to-[#0369a1] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                    size="icon"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

type ChatPart = {
  type: 'text' | string;
  text?: string;
};

type ChatMessage = {
  id?: string;
  role?: 'user' | 'assistant' | 'system' | string;
  parts?: ChatPart[];
};