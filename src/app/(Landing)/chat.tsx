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

type ChatPart = {
  type: 'text' | string;
  text?: string;
};

type ChatMessage = {
  id?: string;
  role?: 'user' | 'assistant' | 'system' | string;
  parts?: ChatPart[];
};

export default function ChatPage() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [input, setInput] = useState('');
  const [showNotification, setShowNotification] = useState(false);
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

  useEffect(() => {
    if (isChatOpen) {
      setShowNotification(false);
      return;
    }

    const initialTimer = setTimeout(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000);
    }, 5000); 

    const interval = setInterval(() => {
      if (!isChatOpen) {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 5000);
      }
    }, 30000); 

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [isChatOpen]);

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
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">

        {/* Notificación flotante */}
        <AnimatePresence>
          {showNotification && !isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              className="bg-white/80 backdrop-blur-md px-4 py-3 rounded-xl shadow-xl border border-white/20 mb-2 relative mr-2 max-w-[200px]"
            >
              <div className="absolute bottom-0 right-6 translate-y-1/2 rotate-45 w-4 h-4 bg-white/80 border-r border-b border-white/20 backdrop-blur-md"></div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-50/80 p-1.5 rounded-full shrink-0 backdrop-blur-sm">
                  <BotMessageSquare className="w-4 h-4 text-[#049DD9]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">¿Necesitas ayuda?</p>
                  <p className="text-xs text-gray-600 mt-0.5">Estoy aquí para responder tus dudas.</p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowNotification(false);
                  }}
                  className="text-gray-400 hover:text-gray-600 -mt-1 -mr-1"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
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
              className="rounded-full w-14 h-14 p-8 lg:p-10 shadow-2xl bg-[#049DD9]/90 hover:bg-[#037bbd]/90 backdrop-blur-md text-white transition-all duration-300 relative border border-white/20"
              aria-label={isChatOpen ? "Cerrar chat" : "Abrir chat"}
            >
              {!isChatOpen ? (
                <>
                  <BotMessageSquare className="w-7 h-7 lg:w-10 lg:h-10 size-14 relative z-10" aria-hidden="true" />
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
                  <motion.span
                    className="absolute inset-0 rounded-full bg-white/20"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                </>
              ) : (
                <ArrowDownCircle className="w-7 h-7 lg:w-10 lg:h-10 size-14 relative z-10" aria-hidden="true" />
              )}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Chat modal */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20, rotateX: 10 }}
            transition={{ duration: 0.4, type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-28 right-6 z-50 w-80 sm:w-96 h-[500px] flex flex-col overflow-hidden rounded-3xl shadow-2xl border border-white/20 backdrop-blur-xl bg-white/80 supports-backdrop-filter:bg-white/60"
          >
            <Card className="border-0 h-full px-0 py-0 bg-transparent shadow-none flex flex-col">
              <CardHeader className="bg-[#049DD9]/90 backdrop-blur-md text-white flex flex-row items-center justify-between space-y-0 pb-4 pt-4 px-5 border-b border-white/10 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-1.5 rounded-lg backdrop-blur-sm">
                    <BotMessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-sm font-bold">Asistente Virtual</CardTitle>
                    <p className="text-xs text-blue-100/80 font-medium">En línea</p>
                  </div>
                </div>
                <Button
                  onClick={toggleChat}
                  size="sm"
                  variant="ghost"
                  className="px-2 py-1 hover:bg-white/20 text-white rounded-full transition-colors"
                  aria-label="Cerrar chat"
                >
                  <X className="w-4 h-4" />
                  <span className="sr-only">Cerrar el chat</span>
                </Button>
              </CardHeader>

              <CardContent className="p-0 flex-1 overflow-hidden relative bg-linear-to-b from-transparent to-white/40">
                <ScrollArea className="h-full px-4 py-3">
                  {messages?.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-full text-center p-6 mt-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="bg-linear-to-br from-[#049DD9]/20 to-[#0284c7]/20 rounded-2xl p-6 mb-4 backdrop-blur-sm shadow-inner border border-white/40"
                      >
                        <BotMessageSquare className="w-12 h-12 text-[#049DD9]" />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <p className="text-gray-800 font-bold text-lg mb-1">¡Hola! 👋</p>
                        <p className="text-gray-600 text-sm">Somos la UGEL Ambo.<br />¿En qué te podemos ayudar hoy?</p>
                      </motion.div>
                    </div>
                  )}

                  {messages?.map((message: ChatMessage, index: number) => (
                    <motion.div
                      key={message.id ?? index}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className={`flex mb-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm backdrop-blur-sm ${message.role === 'user'
                          ? 'bg-[#049DD9]/90 text-white rounded-br-sm border border-blue-400/30'
                          : 'bg-white/80 text-gray-800 border border-white/60 rounded-bl-sm'
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
                                  <code className={`px-1.5 py-0.5 rounded text-xs font-mono ${message.role === 'user' ? 'bg-blue-600/30 text-white' : 'bg-gray-200/70 text-gray-800'}`}>
                                    {children}
                                  </code>
                                ) : (
                                  <code className="block bg-gray-900/90 text-gray-100 p-2 rounded-lg text-xs font-mono overflow-x-auto mt-1 mb-2 border border-white/10">
                                    {children}
                                  </code>
                                );
                              },
                              a: ({ children, href }) => (
                                <a
                                  href={href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`${message.role === 'user' ? 'text-blue-100 hover:text-white' : 'text-[#049DD9] hover:text-[#037bbd]'} underline decoration-1 underline-offset-2`}
                                >
                                  {children}
                                </a>
                              ),
                              blockquote: ({ children }) => (
                                <blockquote className={`border-l-4 pl-3 italic my-2 ${message.role === 'user' ? 'border-white/40' : 'border-gray-300'}`}>
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
                      <div className="bg-white/80 text-gray-800 shadow-sm border border-white/60 rounded-2xl rounded-bl-sm px-4 py-3 backdrop-blur-sm">
                        <div className="flex gap-1.5">
                          <span className="w-2 h-2 bg-[#049DD9]/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                          <span className="w-2 h-2 bg-[#049DD9]/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                          <span className="w-2 h-2 bg-[#049DD9]/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-red-50/90 border border-red-200/60 rounded-xl p-4 mb-4 backdrop-blur-sm"
                    >
                      <p className="text-red-800 text-sm font-medium mb-2">⚠️ Ocurrió un error</p>
                      <p className="text-red-600 text-xs">{error.message || 'Error desconocido'}</p>
                    </motion.div>
                  )}

                  <div ref={scrollRef} />
                </ScrollArea>
              </CardContent>

              <CardFooter className="bg-white/60 border-t border-white/20 p-4 backdrop-blur-md shrink-0">
                <div className="w-full flex gap-2">
                  <Input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Escribe tu mensaje..."
                    disabled={isLoading}
                    className="flex-1 border-gray-200/60 focus:border-[#049DD9] focus:ring-[#049DD9] rounded-xl bg-white/70 backdrop-blur-sm shadow-inner"
                  />
                  <Button
                    onClick={onSubmit}
                    disabled={isLoading || !input || !input.trim()}
                    className="w-10 h-10 rounded-xl bg-[#049DD9] hover:bg-[#037bbd] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                    size="icon"
                  >
                    <Send className="w-4 h-4 text-white" />
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