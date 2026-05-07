import Link from "next/link";
import { Flame, Globe, PlayCircle, MessageCircle } from "lucide-react";

const footerLinks = {
  cursos: [
    { label: "Marketing Digital", href: "/categoria/marketing-digital" },
    { label: "Programação", href: "/categoria/programacao" },
    { label: "Renda Extra", href: "/categoria/renda-extra" },
    { label: "Inteligência Artificial", href: "/categoria/inteligencia-artificial" },
    { label: "Negócios", href: "/categoria/negocios" },
  ],
  site: [
    { label: "Sobre nós", href: "/sobre" },
    { label: "Blog", href: "/blog" },
    { label: "Todos os produtos", href: "/produtos" },
    { label: "Contato", href: "/contato" },
  ],
  legal: [
    { label: "Política de Privacidade", href: "/privacidade" },
    { label: "Termos de Uso", href: "/termos" },
    { label: "Disclaimer de Afiliados", href: "/afiliados" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#151B23] border-t border-[#2A3441] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#7C3AED] rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                <Flame className="w-4 h-4 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-sm text-white" style={{ fontFamily: "'Syne',sans-serif" }}>Tempo do</span>
                <span className="font-bold text-sm gradient-text -mt-0.5" style={{ fontFamily: "'Syne',sans-serif" }}>Gueto</span>
              </div>
            </Link>
            <p className="text-sm text-[#A1A1AA] leading-relaxed mb-5">
              A melhor curadoria de cursos digitais do Brasil. Transformando vidas através da educação online.
            </p>
            <div className="flex items-center gap-3">
              {[Globe, PlayCircle, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-[#0B0F14] border border-[#2A3441] rounded-xl flex items-center justify-center text-[#A1A1AA] hover:text-white hover:border-[#7C3AED] hover:bg-[#7C3AED]/10 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Categorias</h4>
            <ul className="space-y-2.5">
              {footerLinks.cursos.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#A1A1AA] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Site</h4>
            <ul className="space-y-2.5">
              {footerLinks.site.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#A1A1AA] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#A1A1AA] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-5 border-t border-[#2A3441] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#64748B]">© {new Date().getFullYear()} Tempo do Gueto. Todos os direitos reservados.</p>
          <p className="text-xs text-[#64748B] text-center">
            Este site contém links de afiliados. Ao comprar através deles, podemos ganhar uma comissão sem custo adicional para você.
          </p>
        </div>
      </div>
    </footer>
  );
}
