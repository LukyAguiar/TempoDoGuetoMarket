"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X, Flame } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Produtos", href: "/produtos" },
  { label: "Categorias", href: "/categorias" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0B0F14]/95 backdrop-blur-xl border-b border-[#2A3441] shadow-2xl"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[#7C3AED] rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform shadow-[0_0_20px_rgba(124,58,237,0.4)]">
              <Flame className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-base text-white tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                Tempo do
              </span>
              <span className="font-bold text-base tracking-tight -mt-0.5 gradient-text" style={{ fontFamily: "'Syne', sans-serif" }}>
                Gueto
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-[#A1A1AA] hover:text-white rounded-xl hover:bg-[#151B23] transition-all duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2.5 rounded-xl text-[#A1A1AA] hover:text-white hover:bg-[#151B23] transition-all duration-200"
            >
              <Search className="w-4 h-4" />
            </button>
            <CTAButton href="/produtos" variant="primary" size="sm" className="hidden sm:inline-flex text-xs">
              🔥 Ver cursos
            </CTAButton>
            <button
              className="md:hidden p-2.5 rounded-xl text-[#A1A1AA] hover:text-white hover:bg-[#151B23] transition-all"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        <div className={cn("overflow-hidden transition-all duration-300", searchOpen ? "max-h-20 pb-3" : "max-h-0")}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
            <input
              type="text"
              placeholder="Buscar cursos, categorias..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#151B23] border border-[#2A3441] rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-[#64748B] focus:outline-none focus:border-[#7C3AED] transition-colors"
              autoFocus={searchOpen}
            />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 border-t bg-[#0B0F14]/98 backdrop-blur-xl",
          mobileOpen ? "max-h-80 border-[#2A3441]" : "max-h-0 border-transparent"
        )}
      >
        <nav className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-[#A1A1AA] hover:text-white hover:bg-[#151B23] rounded-xl transition-all font-medium"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <CTAButton href="/produtos" variant="primary" size="md" fullWidth>
              🔥 Ver todos os cursos
            </CTAButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
