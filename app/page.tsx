import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { FeaturedSection } from "@/components/sections/FeaturedSection";
import { ProductRow } from "@/components/sections/ProductRow";
import { NewsletterBox } from "@/components/sections/NewsletterBox";
import { BlogPreviewSection } from "@/components/sections/BlogPreviewSection";
import { getBestSellers, getTrending, getProductsByCategory, products } from "@/data/mock";

export default function HomePage() {
  const bestSellers = getBestSellers();
  const trending = getTrending();
  const aiProducts = getProductsByCategory("inteligencia-artificial");
  const devProducts = getProductsByCategory("programacao");
  const rendaProducts = getProductsByCategory("renda-extra");

  // Evitar IDs duplicados nas rows — usar índice como sufixo de key no ProductRow
  // mas o problema real é passar arrays com produtos repetidos.
  // Aqui garantimos listas sem duplicatas por slug.
  const dedup = (list: typeof products) => {
    const seen = new Set<string>();
    return list.filter((p) => { if (seen.has(p.slug)) return false; seen.add(p.slug); return true; });
  };

  const aiRow = dedup([...aiProducts, ...products.filter((p) => !aiProducts.find((a) => a.id === p.id)).slice(0, 3)]);
  const devRow = dedup(devProducts.length ? devProducts : products.slice(2, 6));
  const rendaRow = dedup(rendaProducts.length ? rendaProducts : products.slice(0, 4));

  return (
    <>
      <HeroSection />
      <TrustBar />
      <CategoriesSection />
      <FeaturedSection />
      <ProductRow title="Mais Vendidos" badge="🏆" products={dedup(bestSellers)} viewAllHref="/produtos" />
      <ProductRow title="Em Alta Agora" badge="🔥" products={dedup(trending)} viewAllHref="/produtos" />
      <ProductRow title="Inteligência Artificial" badge="🤖" products={aiRow} viewAllHref="/categoria/inteligencia-artificial" />
      <ProductRow title="Programação" badge="💻" products={devRow} viewAllHref="/categoria/programacao" />
      <ProductRow title="Renda Extra" badge="💰" products={rendaRow} viewAllHref="/categoria/renda-extra" />
      <BlogPreviewSection />
      <NewsletterBox />
    </>
  );
}
