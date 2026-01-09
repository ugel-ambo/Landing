"use client"

import React, { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { X, ChevronLeft, ChevronRight, ExternalLink, Clock } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { NewsItem } from "@/types/facebook.types"

interface StoriesViewerProps {
    stories: NewsItem[]
    initialIndex?: number
    onClose: () => void
}

export default function StoriesViewer({ stories, initialIndex = 0, onClose }: StoriesViewerProps) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex)
    const [isPaused, setIsPaused] = useState(false)
    const [progress, setProgress] = useState(0)

    const STORY_DURATION = 5000 // 5 seconds per story
    const UPDATE_INTERVAL = 50 // Update progress every 50ms

    const handleNext = useCallback(() => {
        if (currentIndex < stories.length - 1) {
            setCurrentIndex(prev => prev + 1)
            setProgress(0)
        } else {
            onClose()
        }
    }, [currentIndex, stories.length, onClose])

    const handlePrev = useCallback(() => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1)
            setProgress(0)
        }
    }, [currentIndex])

    useEffect(() => {
        if (isPaused) return

        const timer = setInterval(() => {
            setProgress(prev => {
                const newProgress = prev + (100 / (STORY_DURATION / UPDATE_INTERVAL))
                return newProgress > 100 ? 100 : newProgress
            })
        }, UPDATE_INTERVAL)

        return () => clearInterval(timer)
    }, [isPaused])

    useEffect(() => {
        if (progress >= 100) {
            handleNext()
        }
    }, [progress, handleNext])

    // Reset progress when index changes
    useEffect(() => {
        setProgress(0)
    }, [currentIndex])

    const currentStory = stories[currentIndex]

    if (!currentStory) return null

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center backdrop-blur-md"
        >
            {/* Close button */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 z-50 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            >
                <X className="w-8 h-8" />
            </button>

            {/* Main Container */}
            <div className="relative w-full h-full md:max-w-md md:h-[90vh] md:rounded-2xl overflow-hidden bg-gray-900 shadow-2xl">

                {/* Progress Bars */}
                <div className="absolute top-4 left-0 right-0 z-20 px-4 flex gap-1.5">
                    {stories.map((_, idx) => (
                        <div key={idx} className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-white"
                                initial={{ width: idx < currentIndex ? "100%" : "0%" }}
                                animate={{
                                    width: idx === currentIndex ? `${progress}%` : idx < currentIndex ? "100%" : "0%"
                                }}
                                transition={{ ease: "linear", duration: idx === currentIndex ? 0.05 : 0 }}
                            />
                        </div>
                    ))}
                </div>

                {/* Header Info */}
                <div className="absolute top-8 left-0 right-0 z-20 px-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm border-2 border-white/20">
                            UG
                        </div>
                        <div>
                            <p className="text-white font-semibold text-sm drop-shadow-md">UGEL Ambo</p>
                            <p className="text-white/70 text-xs flex items-center gap-1 drop-shadow-md">
                                <Clock className="w-3 h-3" /> {currentStory.time}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Story Content */}
                <div
                    className="relative w-full h-full cursor-pointer"
                    onMouseDown={() => setIsPaused(true)}
                    onMouseUp={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                            src={currentStory.image}
                            alt={currentStory.title}
                            fill
                            className="object-cover"
                            priority
                            unoptimized
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/90" />
                    </div>

                    {/* Navigation Tap Zones */}
                    <div className="absolute inset-0 flex z-10">
                        <div className="w-1/3 h-full" onClick={handlePrev} />
                        <div className="w-1/3 h-full" onClick={() => { }} /> {/* Center tap does nothing (or toggle pause) */}
                        <div className="w-1/3 h-full" onClick={handleNext} />
                    </div>

                    {/* Content Text */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20 pb-20 md:pb-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            key={currentStory.id}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-block px-3 py-1 rounded-full bg-blue-500/80 backdrop-blur-sm text-white text-xs font-bold mb-3 border border-white/20">
                                {currentStory.category}
                            </div>
                            <h2 className="text-white text-2xl font-bold mb-3 leading-tight drop-shadow-lg">
                                {currentStory.title}
                            </h2>
                            <p className="text-white/90 text-sm line-clamp-4 mb-6 leading-relaxed drop-shadow-md">
                                {currentStory.description}
                            </p>

                            {currentStory.url && (
                                <Button
                                    className="w-full bg-white text-black hover:bg-white/90 rounded-xl font-bold py-6 group transition-all duration-300"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        window.open(currentStory.url, '_blank')
                                    }}
                                >
                                    Leer más
                                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            )}
                        </motion.div>
                    </div>
                </div>

                {/* Desktop Navigation Arrows */}
                <div className="hidden md:block">
                    <button
                        onClick={(e) => { e.stopPropagation(); handlePrev() }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-all text-white border border-white/10"
                        disabled={currentIndex === 0}
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); handleNext() }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-all text-white border border-white/10"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>
                </div>
            </div>
        </motion.div>
    )
}
