import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import { getFeaturedProducts } from "@/data/mock";
import { Zap } from "lucide-react";

export function FeaturedSection() {
  const featured = getFeaturedProducts();
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)" }}
            >
              <Zap className="w-4 h-4 text-[#7C3AED]" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: "'Syne',sans-serif" }}>
                Produtos em destaque
              </h2>
              <p className="text-sm text-[#A1A1AA]">Seleção especial da semana</p>
            </div>
          </div>
          <Link href="/produtos" className="text-xs text-[#7C3AED] hover:text-[#9D5FF3] font-semibold transition-colors">
            Ver todos →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
