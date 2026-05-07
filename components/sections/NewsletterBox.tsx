"use client";
import { useState } from "react";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";

export function NewsletterBox() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="relative bg-[#151B23] border border-[#2A3441] rounded-3xl p-8 md:p-12 overflow-hidden text-center">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.12) 0%, transparent 70%)" }} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-0.5"
            style={{ background: "linear-gradient(90deg, transparent, #7C3AED, transparent)" }} />

          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
              style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)" }}>
              <Mail className="w-6 h-6 text-[#7C3AED]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Syne',sans-serif" }}>
              Ofertas exclusivas no seu email
            </h2>
            <p className="text-[#A1A1AA] mb-8 max-w-md mx-auto">
              Receba promoções, lançamentos e conteúdo gratuito sobre os melhores cursos digitais.
            </p>
            {submitted ? (
              <div className="flex items-center justify-center gap-3 text-[#10B981] animate-fade-in">
                <CheckCircle className="w-6 h-6" />
                <span className="font-semibold">Inscrição confirmada! Bem-vindo(a) 🎉</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Seu melhor email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-[#0B0F14] border border-[#2A3441] rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#64748B] focus:outline-none focus:border-[#7C3AED] transition-colors"
                />
                <button type="submit" disabled={loading}
                  className="flex items-center justify-center gap-2 bg-[#7C3AED] hover:bg-[#9D5FF3] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 disabled:opacity-70 shrink-0">
                  {loading
                    ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    : <><span>Inscrever</span><ArrowRight className="w-4 h-4" /></>}
                </button>
              </form>
            )}
            <p className="text-xs text-[#64748B] mt-4">Sem spam. Cancele quando quiser. 🔒 Seus dados estão seguros.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
