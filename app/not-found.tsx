import Link from "next/link";
import { CTAButton } from "@/components/ui/CTAButton";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl font-bold gradient-text mb-4" style={{ fontFamily: "'Syne',sans-serif" }}>404</div>
        <h1 className="text-2xl font-bold text-white mb-2">Página não encontrada</h1>
        <p className="text-[#A1A1AA] mb-8 max-w-sm mx-auto">A página que você está procurando não existe ou foi movida.</p>
        <CTAButton href="/" variant="primary" size="lg" icon="arrow">Voltar para home</CTAButton>
      </div>
    </div>
  );
}
