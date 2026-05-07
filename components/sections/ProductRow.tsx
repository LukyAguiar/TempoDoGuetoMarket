"use client";
import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "@/components/product/ProductCard";
import type { Product } from "@/data/mock";

interface ProductRowProps {
  title: string;
  products: Product[];
  viewAllHref?: string;
  badge?: string;
}

export function ProductRow({ title, products, viewAllHref, badge }: ProductRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "right" ? 520 : -520, behavior: "smooth" });
  };

  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            {badge && <span className="text-lg">{badge}</span>}
            <h2 className="text-lg md:text-xl font-bold text-white" style={{ fontFamily: "'Syne',sans-serif" }}>
              {title}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {viewAllHref && (
              <Link href={viewAllHref} className="text-xs text-[#7C3AED] hover:text-[#9D5FF3] font-semibold transition-colors mr-2">
                Ver tudo →
              </Link>
            )}
            <button
              onClick={() => scroll("left")}
              className="hidden sm:flex w-8 h-8 bg-[#151B23] border border-[#2A3441] rounded-xl items-center justify-center text-[#A1A1AA] hover:text-white hover:border-[#7C3AED]/50 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="hidden sm:flex w-8 h-8 bg-[#151B23] border border-[#2A3441] rounded-xl items-center justify-center text-[#A1A1AA] hover:text-white hover:border-[#7C3AED]/50 transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto hide-scrollbar pb-2"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {products.map((product, index) => (
            // key usa slug + index para garantir unicidade mesmo se houver repetição acidental
            <div
              key={`${product.slug}-${index}`}
              className="flex-shrink-0"
              style={{ scrollSnapAlign: "start", width: "240px" }}
            >
              <ProductCard product={product} compact />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
