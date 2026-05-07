"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { RatingStars } from "@/components/ui/RatingStars";
import { formatPrice, formatDiscount } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import type { Product } from "@/data/mock";

// Sem <Link> nem <a> aninhados — o card inteiro é clicável via router.push
// e o botão CTA usa um <button> que abre o afiliado numa nova aba

export function ProductCard({ product, compact = false }: { product: Product; compact?: boolean }) {
  const router = useRouter();
  const discount = product.originalPrice ? formatDiscount(product.originalPrice, product.price) : null;

  const goToProduct = () => router.push(`/produto/${product.slug}`);
  const goToAffiliate = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(product.affiliateLink, "_blank", "noopener,noreferrer");
  };

  if (compact) {
    return (
      <div
        onClick={goToProduct}
        className="bg-[#151B23] border border-[#2A3441] rounded-2xl overflow-hidden card-hover cursor-pointer w-[240px] flex-shrink-0 group"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && goToProduct()}
      >
        <div className="relative h-[140px] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="240px"
          />
          {product.badge && (
            <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-white/10">
              {product.badge}
            </div>
          )}
          {discount && (
            <div className="absolute top-2 right-2 bg-[#7C3AED] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              -{discount}%
            </div>
          )}
        </div>
        <div className="p-3">
          <p className="text-[10px] text-[#7C3AED] font-semibold uppercase tracking-wider mb-1">{product.category}</p>
          <h3 className="text-sm font-semibold text-white leading-snug line-clamp-2 mb-2 group-hover:text-[#9D5FF3] transition-colors">
            {product.name}
          </h3>
          <RatingStars rating={product.rating} size="sm" showCount={false} />
          <div className="mt-2">
            {product.originalPrice && (
              <span className="text-[10px] text-[#A1A1AA] line-through block">{formatPrice(product.originalPrice)}</span>
            )}
            <span className="text-base font-bold text-white">{formatPrice(product.price)}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={goToProduct}
      className="bg-[#151B23] border border-[#2A3441] rounded-2xl overflow-hidden card-hover cursor-pointer flex flex-col group"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && goToProduct()}
    >
      <div className="relative h-[180px] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width:768px) 100vw, 300px"
        />
        {product.badge && (
          <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full border border-white/10">
            {product.badge}
          </div>
        )}
        {discount && (
          <div className="absolute top-3 right-3 bg-[#7C3AED] text-white text-xs font-bold px-2.5 py-1 rounded-full">
            -{discount}%
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#151B23] via-transparent to-transparent opacity-60" />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <p className="text-[11px] text-[#7C3AED] font-semibold uppercase tracking-wider mb-1.5">{product.category}</p>
        <h3 className="text-base font-semibold text-white leading-snug line-clamp-2 mb-2 group-hover:text-[#9D5FF3] transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-[#A1A1AA] line-clamp-2 mb-3 flex-1">{product.description}</p>
        <RatingStars rating={product.rating} reviewCount={product.reviewCount} size="sm" className="mb-3" />
        <div className="flex items-end justify-between">
          <div>
            {product.originalPrice && (
              <span className="text-xs text-[#A1A1AA] line-through block">{formatPrice(product.originalPrice)}</span>
            )}
            <span className="text-xl font-bold text-white">{formatPrice(product.price)}</span>
          </div>
          {/* <button> em vez de <a> para evitar <a> dentro de <a> */}
          <button
            onClick={goToAffiliate}
            className="inline-flex items-center gap-1.5 bg-[#7C3AED] hover:bg-[#9D5FF3] text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 shrink-0 active:scale-[0.97]"
          >
            Ver curso <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="bg-[#151B23] border border-[#2A3441] rounded-2xl overflow-hidden">
      <div className="shimmer h-[180px]" />
      <div className="p-4 space-y-3">
        <div className="shimmer h-3 w-16 rounded" />
        <div className="shimmer h-5 w-full rounded" />
        <div className="shimmer h-4 w-1/2 rounded" />
        <div className="flex justify-between items-center mt-4">
          <div className="shimmer h-7 w-20 rounded" />
          <div className="shimmer h-8 w-24 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
