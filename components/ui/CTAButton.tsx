"use client";
import { cn } from "@/lib/utils";
import { ExternalLink, ShoppingCart, ArrowRight } from "lucide-react";
import React from "react";

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  icon?: "external" | "cart" | "arrow" | "none";
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  /** Força renderização como <button> mesmo com href (para evitar <a> aninhado) */
  asButton?: boolean;
}

export function CTAButton({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  icon = "none",
  className,
  fullWidth = false,
  disabled = false,
  asButton = false,
}: CTAButtonProps) {
  const variants = {
    primary: "bg-[#7C3AED] hover:bg-[#9D5FF3] text-white",
    secondary: "bg-[#1C2430] hover:bg-[#2A3441] text-white border border-[#2A3441] hover:border-[#7C3AED]/50",
    outline: "bg-transparent border border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white",
    ghost: "bg-transparent hover:bg-[#151B23] text-[#A1A1AA] hover:text-white",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm rounded-lg",
    md: "px-5 py-2.5 text-sm rounded-xl",
    lg: "px-7 py-3.5 text-base rounded-xl",
    xl: "px-8 py-4 text-lg rounded-2xl",
  };
  const icons = {
    external: <ExternalLink className="w-4 h-4 flex-shrink-0" />,
    cart: <ShoppingCart className="w-4 h-4 flex-shrink-0" />,
    arrow: <ArrowRight className="w-4 h-4 flex-shrink-0" />,
    none: null,
  };

  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 cursor-pointer select-none active:scale-[0.98]",
    "focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className
  );

  // Se tem href e não forçou asButton, renderiza <a>
  if (href && !asButton) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        {icons[icon]}
      </a>
    );
  }

  // Button — se tem href abre em nova aba via JS
  const handleClick = (e: React.MouseEvent) => {
    if (href) {
      e.stopPropagation();
      window.open(href, "_blank", "noopener,noreferrer");
    }
    onClick?.();
  };

  return (
    <button onClick={handleClick} className={classes} disabled={disabled}>
      {children}
      {icons[icon]}
    </button>
  );
}
