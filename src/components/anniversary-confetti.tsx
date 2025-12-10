'use client';

import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

export default function AnniversaryConfetti() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

        const randomInRange = (min: number, max: number) => {
            return Math.random() * (max - min) + min;
        };

        const interval: NodeJS.Timeout = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);

            // Confetti from bottom corners
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            });
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            });

            // Confetti from sides of the text (middle)
            confetti({
                ...defaults,
                particleCount: particleCount * 0.5,
                gravity: 0.8,
                scalar: 0.8,
                origin: { x: 0.2, y: 0.5 },
            });
            confetti({
                ...defaults,
                particleCount: particleCount * 0.5,
                gravity: 0.8,
                scalar: 0.8,
                origin: { x: 0.8, y: 0.5 },
            });
        }, 250);

        // Hide text after animation
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 4000);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div
            onClick={() => setIsVisible(false)}
            className="fixed inset-0 z-[9998] flex flex-col items-center justify-center gap-2 cursor-pointer"
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/80 -z-10" />

            <h2 className="text-xl md:text-3xl font-medium text-white drop-shadow-md tracking-[0.2em] uppercase">
                Mes de Aniversario
            </h2>
            <h1 className="text-4xl md:text-7xl font-extrabold text-primary drop-shadow-2xl tracking-tight uppercase">
                Cumplimos 12 Años
            </h1>
        </div>
    );
}
