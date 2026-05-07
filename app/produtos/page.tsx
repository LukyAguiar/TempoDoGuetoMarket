"use client";
import { useState, useMemo } from "react";
import { ProductCard } from "@/components/product/ProductCard";
import { products, categories } from "@/data/mock";
import { Search, SlidersHorizontal, X, ChevronDown } from "lucide-react";

const SORT_OPTIONS = [
  { value: "relevancia", label: "Relevância" },
  { value: "menor-preco", label: "Menor preço" },
  { value: "maior-preco", label: "Maior preço" },
  { value: "melhor-avaliacao", label: "Melhor avaliação" },
  { value: "mais-vendidos", label: "Mais vendidos" },
];

export default function ProdutosPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sort, setSort] = useState("relevancia");
  const [minRating, setMinRating] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];
    if (search) {
      const q = search.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    }
    if (selectedCategory) list = list.filter((p) => p.categorySlug === selectedCategory);
    if (minRating > 0) list = list.filter((p) => p.rating >= minRating);
    if (sort === "menor-preco") list.sort((a, b) => a.price - b.price);
    else if (sort === "maior-preco") list.sort((a, b) => b.price - a.price);
    else if (sort === "melhor-avaliacao") list.sort((a, b) => b.rating - a.rating);
    else if (sort === "mais-vendidos") list.sort((a, b) => b.reviewCount - a.reviewCount);
    return list;
  }, [search, selectedCategory, sort, minRating]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: "'Syne',sans-serif" }}>
            Todos os cursos
          </h1>
          <p className="text-[#A1A1AA]">{filtered.length} curso{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}</p>
        </div>

        <div className="flex gap-3 mb-6 flex-wrap">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
            <input type="text" placeholder="Buscar cursos..." value={search} onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#151B23] border border-[#2A3441] rounded-xl pl-10 pr-10 py-2.5 text-sm text-white placeholder:text-[#64748B] focus:outline-none focus:border-[#7C3AED] transition-colors" />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-white">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="relative">
            <select value={sort} onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-[#151B23] border border-[#2A3441] rounded-xl px-4 py-2.5 pr-8 text-sm text-white focus:outline-none focus:border-[#7C3AED] transition-colors cursor-pointer">
              {SORT_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B] pointer-events-none" />
          </div>
          <button onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex items-center gap-2 bg-[#151B23] border border-[#2A3441] rounded-xl px-4 py-2.5 text-sm text-[#A1A1AA] hover:text-white transition-colors">
            <SlidersHorizontal className="w-4 h-4" /> Filtros
          </button>
        </div>

        <div className="flex gap-6">
          <aside className={`${sidebarOpen ? "block" : "hidden"} lg:block w-56 shrink-0`}>
            <div className="bg-[#151B23] border border-[#2A3441] rounded-2xl p-5 sticky top-24">
              <h3 className="text-sm font-semibold text-white mb-4">Categoria</h3>
              <div className="space-y-1 mb-6">
                <button onClick={() => setSelectedCategory(null)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-sm transition-all ${!selectedCategory ? "bg-[#7C3AED] text-white font-medium" : "text-[#A1A1AA] hover:text-white hover:bg-[#1C2430]"}`}>
                  Todos
                </button>
                {categories.map((cat) => (
                  <button key={cat.id} onClick={() => setSelectedCategory(cat.slug === selectedCategory ? null : cat.slug)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-sm transition-all flex items-center gap-2 ${selectedCategory === cat.slug ? "bg-[#7C3AED] text-white font-medium" : "text-[#A1A1AA] hover:text-white hover:bg-[#1C2430]"}`}>
                    <span>{cat.emoji}</span>{cat.name}
                  </button>
                ))}
              </div>
              <h3 className="text-sm font-semibold text-white mb-3">Avaliação mínima</h3>
              <div className="space-y-1">
                {[0, 4, 4.5, 4.8].map((r) => (
                  <button key={r} onClick={() => setMinRating(r)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-sm transition-all ${minRating === r ? "bg-[#7C3AED] text-white font-medium" : "text-[#A1A1AA] hover:text-white hover:bg-[#1C2430]"}`}>
                    {r === 0 ? "Qualquer avaliação" : `${r}+ ⭐`}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="text-center py-20 text-[#A1A1AA]">
                <div className="text-4xl mb-4">🔍</div>
                <p className="font-semibold text-white mb-1">Nenhum curso encontrado</p>
                <p className="text-sm">Tente buscar por outro termo ou categoria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {filtered.map((product) => <ProductCard key={product.id} product={product} />)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
