import Link from "next/link";
import { CategoryCard } from "@/components/product/CategoryCard";
import { categories } from "@/data/mock";

export function CategoriesSection() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: "'Syne',sans-serif" }}>
              Explorar por categoria
            </h2>
            <p className="text-sm text-[#A1A1AA] mt-1">Encontre o curso perfeito para você</p>
          </div>
          <Link href="/categorias" className="text-xs text-[#7C3AED] hover:text-[#9D5FF3] font-semibold transition-colors">
            Ver todas →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((cat) => <CategoryCard key={cat.id} category={cat} />)}
        </div>
      </div>
    </section>
  );
}
