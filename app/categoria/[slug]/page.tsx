import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categories, getProductsByCategory, products } from "@/data/mock";
import { ProductCard } from "@/components/product/ProductCard";
import { CategoryCard } from "@/components/product/CategoryCard";

interface Props { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = categories.find((c) => c.slug === params.slug);
  if (!cat) return { title: "Categoria não encontrada" };
  return { title: cat.name, description: cat.description };
}

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default function CategoriaPage({ params }: Props) {
  const category = categories.find((c) => c.slug === params.slug);
  if (!category) notFound();
  const categoryProducts = getProductsByCategory(params.slug);
  const displayProducts = categoryProducts.length > 0 ? categoryProducts : products.slice(0, 6);
  const otherCategories = categories.filter((c) => c.slug !== params.slug);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="relative rounded-3xl overflow-hidden mb-10 p-8 md:p-12"
          style={{ background: `linear-gradient(135deg, ${category.color}18, ${category.color}05)`, border: `1px solid ${category.color}25` }}>
          <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl" style={{ background: category.color }} />
          <div className="relative z-10">
            <div className="text-5xl mb-4">{category.emoji}</div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: "'Syne',sans-serif" }}>{category.name}</h1>
            <p className="text-[#A1A1AA] mb-4">{category.description}</p>
            <span className="inline-block text-sm font-semibold px-3 py-1.5 rounded-full"
              style={{ color: category.color, background: `${category.color}15` }}>
              {displayProducts.length} curso{displayProducts.length !== 1 ? "s" : ""} disponíveis
            </span>
          </div>
        </div>

        <h2 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "'Syne',sans-serif" }}>
          Cursos em {category.name}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {displayProducts.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "'Syne',sans-serif" }}>Outras categorias</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {otherCategories.map((cat) => <CategoryCard key={cat.id} category={cat} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
