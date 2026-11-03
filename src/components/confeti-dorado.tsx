"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function ConfetiDorado() {
  useEffect(() => {
    // Paleta de tonos dorados elegantes
    const goldColors = ["#FFD700", "#D4AF37", "#DAA520", "#F5D77F", "#FFF8DC"];

    // Ráfaga izquierda
    const launchConfetti = () => {
      // Disparo desde la izquierda
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 70,
        origin: { x: 0, y: 0.8 },
        colors: goldColors,
        zIndex: 99999,
        disableForReducedMotion: true,
      });

      // Disparo desde la derecha
      confetti({
        particleCount: 60,
        angle: 120,
        spread: 70,
        origin: { x: 1, y: 0.8 },
        colors: goldColors,
        zIndex: 99999,
        disableForReducedMotion: true,
      });

      // Lluvia suave central dorada
      confetti({
        particleCount: 40,
        spread: 100,
        origin: { x: 0.5, y: 0.2 },
        colors: goldColors,
        gravity: 0.8,
        scalar: 1.1,
        zIndex: 99999,
        disableForReducedMotion: true,
      });
    };

    // Pequeño retardo de 400ms para que la página renderice primero
    const timer = setTimeout(() => {
      launchConfetti();
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return null;
}

