
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const MESSAGES = [
    "¡La educación es el arma más poderosa para cambiar el mundo!",
    "UGEL Ambo: Trabajando por una educación de calidad.",
    "¡Estudia con dedicación y alcanzarás tus sueños!",
    "La lectura abre las puertas del conocimiento.",
    "El aprendizaje es un tesoro que te seguirá siempre.",
    "¡Participa activamente en tu comunidad educativa!",
    "La educación no cambia el mundo, cambia a las personas que van a cambiar el mundo.",
];

export default function Mascota() {
    const [isVisible, setIsVisible] = useState(false);
    const [message, setMessage] = useState("");
    const [isHovered, setIsHovered] = useState(false);

    // Schedule appearance
    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const schedule = () => {
            // Random delay between 20 and 50 seconds (more subtle/less frequent)
            const delay = Math.random() * 30000 + 20000;
            timeoutId = setTimeout(() => {
                setMessage(MESSAGES[Math.floor(Math.random() * MESSAGES.length)]);
                setIsVisible(true);
            }, delay);
        };

        if (!isVisible) {
            schedule();
        }

        return () => clearTimeout(timeoutId);
    }, [isVisible]);

    // Handle hiding
    useEffect(() => {
        if (isVisible && !isHovered) {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 6000); // Visible for 8 seconds
            return () => clearTimeout(timer);
        }
    }, [isVisible, isHovered]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 50, damping: 20 }}
                    className="fixed bottom-0 left-0 z-50 flex flex-col items-start p-4 pointer-events-none"
                >
                    <div
                        className="relative flex flex-col items-start pointer-events-auto cursor-pointer"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Speech Bubble */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="bg-white text-gray-800 p-4 rounded-2xl rounded-tl-none shadow-lg mb-2 max-w-xs "
                        >
                            <p className="text-sm font-medium text-center">{message}</p>
                        </motion.div>

                        {/* Mascot Image */}
                        <div className="relative w-32 h-48 md:w-40 md:h-56">
                            <Image
                                src="/niña.gif"
                                alt="Mascota UGEL Ambo"
                                fill
                                className="object-contain object-bottom"
                                priority
                                unoptimized
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
