"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";

export default function AniversarioModal() {
  const [mounted, setMounted] = useState(false);
  const [isZooming, setIsZooming] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // 1. Iniciar aparición y crecimiento progresivo
    setMounted(true);
    const zoomTimer = setTimeout(() => {
      setIsZooming(true);
      lanzarConfetiAniversario();
      reproducirSonidoFestivo();
    }, 150);

    // 2. Iniciar desvanecimiento automático tras 4.5 segundos
    const fadeTimer = setTimeout(() => {
      handleFadeOut();
    }, 4500);

    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(fadeTimer);
    };
  }, []);

  // Sonido de celebración sutil con Web Audio API (nativo, sin archivos externos)
  const reproducirSonidoFestivo = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;

      const ctx = new AudioCtx();
      // Notas musicales festivas ascendentes en arpegio (Do - Mi - Sol - Do agudo)
      const notas = [523.25, 659.25, 783.99, 1046.5];

      notas.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        const startTime = ctx.currentTime + index * 0.12;
        const duration = 0.5;

        // Volumen suave y desvanecimiento
        gain.gain.setValueAtTime(0.001, startTime);
        gain.gain.exponentialRampToValueAtTime(0.18, startTime + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + duration);
      });
    } catch {
      // Si el navegador bloquea el audio automático, no interrumpe la navegación
    }
  };

  const lanzarConfetiAniversario = () => {
    const goldColors = ["#FFD700", "#D4AF37", "#DAA520", "#FFF8DC", "#FFDF73", "#B8860B"];

    // Ráfaga lateral izquierda
    confetti({
      particleCount: 65,
      angle: 60,
      spread: 75,
      origin: { x: 0, y: 0.7 },
      colors: goldColors,
      shapes: ["star", "circle"],
      scalar: 1.25,
      zIndex: 999999,
      disableForReducedMotion: true,
    });

    // Ráfaga lateral derecha
    confetti({
      particleCount: 65,
      angle: 120,
      spread: 75,
      origin: { x: 1, y: 0.7 },
      colors: goldColors,
      shapes: ["star", "circle"],
      scalar: 1.25,
      zIndex: 999999,
      disableForReducedMotion: true,
    });

    // Lluvia suave central de estrellas doradas
    setTimeout(() => {
      confetti({
        particleCount: 45,
        spread: 110,
        origin: { x: 0.5, y: 0.2 },
        colors: goldColors,
        shapes: ["star", "circle"],
        gravity: 0.7,
        scalar: 1.3,
        zIndex: 999999,
        disableForReducedMotion: true,
      });
    }, 700);
  };

  const handleFadeOut = () => {
    setIsFadingOut(true);
    // Destruir completamente el componente tras la transición suave
    setTimeout(() => {
      setMounted(false);
    }, 800);
  };

  if (!mounted) return null;

  return (
    <div
      onClick={handleFadeOut}
      className={`fixed inset-0 z-[99998] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm cursor-pointer select-none transition-opacity duration-700 ease-out ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Contenedor flotante: Solo la imagen limpia agrandándose con resplandor dorado */}
      <div
        className={`relative max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl w-full flex items-center justify-center transition-all duration-[1400ms] cubic-bezier(0.16, 1, 0.3, 1) transform ${
          isZooming
            ? "scale-100 opacity-100 drop-shadow-[0_15px_40px_rgba(234,179,8,0.45)]"
            : "scale-40 opacity-0"
        } ${isFadingOut ? "scale-105" : ""}`}
      >
        <Image
          src="/13-aniversario/aniversario.png"
          alt="13 Aniversario UGEL Ambo"
          width={900}
          height={900}
          className="w-full h-auto max-h-[80vh] object-contain rounded-2xl pointer-events-none"
          priority
          quality={95}
        />
      </div>
    </div>
  );
}
