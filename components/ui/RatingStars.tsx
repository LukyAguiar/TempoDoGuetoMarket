"use client";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  rating: number;
  reviewCount?: number;
  size?: "sm" | "md" | "lg";
  showCount?: boolean;
  className?: string;
}

export function RatingStars({ rating, reviewCount, size = "sm", showCount = true, className }: RatingStarsProps) {
  const sizes = { sm: "w-3 h-3", md: "w-4 h-4", lg: "w-5 h-5" };
  const textSizes = { sm: "text-xs", md: "text-sm", lg: "text-base" };

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => {
          const filled = star <= Math.floor(rating);
          const partial = !filled && star <= rating + 0.5;
          return (
            <Star
              key={star}
              className={cn(sizes[size], {
                "fill-amber-400 text-amber-400": filled,
                "fill-amber-400/50 text-amber-400": partial,
                "fill-transparent text-gray-600": !filled && !partial,
              })}
            />
          );
        })}
      </div>
      <span className={cn("font-semibold text-white", textSizes[size])}>{rating.toFixed(1)}</span>
      {showCount && reviewCount !== undefined && (
        <span className={cn("text-[#A1A1AA]", textSizes[size])}>({reviewCount.toLocaleString("pt-BR")})</span>
      )}
    </div>
  );
}
