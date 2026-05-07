import { Shield, RefreshCw, Headphones, Award } from "lucide-react";

const trusts = [
  { icon: Shield, title: "Compra 100% segura", desc: "Todos os produtos são verificados pela Hotmart" },
  { icon: RefreshCw, title: "Garantia de 7 a 30 dias", desc: "Sem perguntas, dinheiro de volta garantido" },
  { icon: Headphones, title: "Suporte dedicado", desc: "Tire suas dúvidas antes de comprar" },
  { icon: Award, title: "Avaliações reais", desc: "Avaliamos cada curso antes de recomendar" },
];

export function TrustBar() {
  return (
    <section className="py-8 border-y border-[#2A3441]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trusts.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)" }}>
                <Icon className="w-4 h-4 text-[#7C3AED]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white leading-snug">{title}</p>
                <p className="text-xs text-[#A1A1AA] mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
