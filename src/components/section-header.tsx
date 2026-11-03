import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badgeIcon?: React.ReactNode;
  badgeText: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  className?: string;
}

export default function SectionHeader({
  badgeIcon,
  badgeText,
  title,
  titleHighlight,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("text-center mb-10 md:mb-12 flex flex-col items-center", className)}>
      {/* 🏷️ Chip Superior Temático */}
      <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-[#049DD9]/10 text-[#049DD9] border border-[#049DD9]/20 shadow-xs mb-3 select-none">
        {badgeIcon && <span className="shrink-0">{badgeIcon}</span>}
        <span>{badgeText}</span>
      </div>

      {/* ✏️ Título Principal Institucional */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#223F59] tracking-tight">
        {title}{" "}
        {titleHighlight && (
          <span className="text-[#049DD9]">{titleHighlight}</span>
        )}
      </h2>

      {/* ─── Línea decorativa bicolor UGEL ─── */}
      <div className="w-16 h-1 mt-3 mb-3 rounded-full bg-gradient-to-r from-[#049DD9] via-[#049DD9] to-[#D4AF37]" />

      {/* 📝 Subtítulo / Descripción */}
      {description && (
        <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

