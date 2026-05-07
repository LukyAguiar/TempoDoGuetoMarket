import { CTAButton } from "@/components/ui/CTAButton";
import { Star, TrendingUp, Users, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "50K+", label: "Alunos transformados" },
  { icon: Award, value: "200+", label: "Cursos curados" },
  { icon: TrendingUp, value: "R$2M+", label: "Economizados em promoções" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden">
      {/* Purple glow top-right */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)" }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-up"
            style={{ background: "rgba(124,58,237,0.1)", borderColor: "rgba(124,58,237,0.25)", color: "#9D5FF3" }}>
            <span className="w-2 h-2 bg-[#7C3AED] rounded-full animate-pulse" />
            🔥 Os melhores cursos do Brasil em um só lugar
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.05] mb-6 animate-fade-up animation-delay-100"
            style={{ fontFamily: "'Syne', sans-serif" }}>
            Aprenda.{" "}
            <span className="gradient-text">Cresça.</span>
            <br />
            Fature online.
          </h1>

          <p className="text-lg md:text-xl text-[#A1A1AA] leading-relaxed mb-8 max-w-xl animate-fade-up animation-delay-200">
            Curadoria dos melhores cursos digitais da Hotmart com os menores preços e avaliações reais de quem já transformou a vida.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-12 animate-fade-up animation-delay-300">
            <CTAButton href="/produtos" variant="primary" size="lg" icon="arrow">Explorar cursos</CTAButton>
            <CTAButton href="/categoria/renda-extra" variant="secondary" size="lg">💰 Renda extra</CTAButton>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-3 mb-12 animate-fade-up animation-delay-400">
            <div className="flex -space-x-2">
              {[33, 47, 12, 68, 22].map((n) => (
                <img key={n} src={`https://i.pravatar.cc/32?img=${n}`} alt=""
                  className="w-8 h-8 rounded-full border-2 border-[#0B0F14]" />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-0.5 mb-0.5">
                {[1,2,3,4,5].map((s) => <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-xs text-[#A1A1AA]">
                <span className="text-white font-semibold">4.9/5</span> · +12.000 avaliações
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 animate-fade-up animation-delay-500">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.25)" }}>
                  <Icon className="w-4 h-4 text-[#7C3AED]" />
                </div>
                <div>
                  <p className="text-base font-bold text-white leading-none">{value}</p>
                  <p className="text-xs text-[#A1A1AA] mt-0.5">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
