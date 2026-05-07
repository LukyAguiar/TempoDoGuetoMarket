"use client";
import Link from "next/link";
import type { Category } from "@/data/mock";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href={`/categoria/${category.slug}`} className="block group">
      <div className="relative bg-[#151B23] border border-[#2A3441] rounded-2xl p-5 card-hover cursor-pointer overflow-hidden">
        {/* Glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"
          style={{ background: category.color }}
        />
        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-60 group-hover:opacity-100 transition-opacity"
          style={{ background: category.color }}
        />
        <div className="relative z-10">
          <div className="text-3xl mb-3">{category.emoji}</div>
          <h3 className="font-semibold text-white text-sm mb-1">{category.name}</h3>
          <p className="text-xs text-[#A1A1AA] line-clamp-2 mb-3">{category.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold" style={{ color: category.color }}>
              {category.productCount} cursos
            </span>
            <span className="text-xs text-[#64748B] group-hover:text-[#A1A1AA] transition-colors">Ver todos →</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function CategoryCardSkeleton() {
  return (
    <div className="bg-[#151B23] border border-[#2A3441] rounded-2xl p-5">
      <div className="shimmer h-8 w-8 rounded mb-3" />
      <div className="shimmer h-4 w-24 rounded mb-2" />
      <div className="shimmer h-3 w-full rounded mb-1" />
      <div className="shimmer h-3 w-3/4 rounded mb-4" />
      <div className="shimmer h-3 w-16 rounded" />
    </div>
  );
}
