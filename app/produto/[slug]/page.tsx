import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getProductBySlug, getProductsByCategory, products } from "@/data/mock";
import { formatPrice, formatDiscount } from "@/lib/utils";
import { RatingStars } from "@/components/ui/RatingStars";
import { CTAButton } from "@/components/ui/CTAButton";
import { ProductCard } from "@/components/product/ProductCard";
import { CheckCircle, Users, Clock, Shield, Star, ChevronRight, Tag } from "lucide-react";

interface Props { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Produto não encontrado" };
  return { title: product.name, description: product.description, openGraph: { images: [product.image] } };
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();
  const related = getProductsByCategory(product.categorySlug).filter((p) => p.id !== product.id).slice(0, 4);
  const discount = product.originalPrice ? formatDiscount(product.originalPrice, product.price) : null;
  const fakeReviews = [
    { name: "Carlos M.", rating: 5, text: "Transformou minha vida. Em 3 meses já recuperei o investimento!", avatar: "https://i.pravatar.cc/40?img=33" },
    { name: "Fernanda S.", rating: 5, text: "Melhor curso que fiz. O suporte é incrível e o conteúdo é muito prático.", avatar: "https://i.pravatar.cc/40?img=47" },
    { name: "Paulo R.", rating: 4, text: "Conteúdo excelente! Vale muito o investimento.", avatar: "https://i.pravatar.cc/40?img=12" },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 py-5 text-xs text-[#64748B]">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/produtos" className="hover:text-white transition-colors">Produtos</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href={`/categoria/${product.categorySlug}`} className="hover:text-white transition-colors">{product.category}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#A1A1AA] truncate max-w-[200px]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-[#151B23]">
              <Image src={product.image} alt={product.name} fill className="object-cover" priority sizes="(max-width:1024px) 100vw, 66vw" />
              {product.badge && (
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white text-sm font-bold px-3 py-1.5 rounded-full border border-white/10">{product.badge}</div>
              )}
              {discount && (
                <div className="absolute top-4 right-4 bg-[#7C3AED] text-white font-bold px-3 py-1.5 rounded-full text-sm">-{discount}% OFF</div>
              )}
            </div>

            {/* Title */}
            <div>
              <Link href={`/categoria/${product.categorySlug}`}
                className="inline-flex items-center gap-1 text-[#7C3AED] text-xs font-semibold uppercase tracking-wider hover:text-[#9D5FF3] transition-colors mb-3">
                <Tag className="w-3 h-3" />{product.category}
              </Link>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight" style={{ fontFamily: "'Syne',sans-serif" }}>{product.name}</h1>
              <p className="text-[#A1A1AA] leading-relaxed mb-4">{product.description}</p>
              <RatingStars rating={product.rating} reviewCount={product.reviewCount} size="md" />
            </div>

            {/* Description */}
            <div className="bg-[#151B23] border border-[#2A3441] rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-4" style={{ fontFamily: "'Syne',sans-serif" }}>Sobre o curso</h2>
              <p className="text-[#A1A1AA] leading-relaxed">{product.longDescription}</p>
            </div>

            {/* Benefits */}
            <div className="bg-[#151B23] border border-[#2A3441] rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-4" style={{ fontFamily: "'Syne',sans-serif" }}>O que você vai aprender</h2>
              <ul className="space-y-3">
                {product.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                    <span className="text-sm text-[#A1A1AA]">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* For who */}
            <div className="bg-[#151B23] border border-[#2A3441] rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-4" style={{ fontFamily: "'Syne',sans-serif" }}>Para quem é esse curso</h2>
              <ul className="space-y-3">
                {product.forWho.map((w) => (
                  <li key={w} className="flex items-start gap-3">
                    <Users className="w-4 h-4 text-[#7C3AED] mt-0.5 shrink-0" />
                    <span className="text-sm text-[#A1A1AA]">{w}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reviews */}
            <div>
              <h2 className="text-lg font-bold text-white mb-5" style={{ fontFamily: "'Syne',sans-serif" }}>Avaliações de alunos</h2>
              <div className="space-y-4">
                {fakeReviews.map((review, i) => (
                  <div key={i} className="bg-[#151B23] border border-[#2A3441] rounded-2xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <img src={review.avatar} alt={review.name} className="w-9 h-9 rounded-full" />
                      <div>
                        <p className="text-sm font-semibold text-white">{review.name}</p>
                        <RatingStars rating={review.rating} size="sm" showCount={false} />
                      </div>
                    </div>
                    <p className="text-sm text-[#A1A1AA]">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="bg-[#151B23] border border-[#2A3441] rounded-2xl p-6">
                <div className="mb-4">
                  {product.originalPrice && (
                    <span className="text-sm text-[#64748B] line-through block">De {formatPrice(product.originalPrice)}</span>
                  )}
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold text-white">{formatPrice(product.price)}</span>
                    {discount && (
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full mb-1" style={{ background: "rgba(16,185,129,0.1)", color: "#10B981" }}>
                        -{discount}%
                      </span>
                    )}
                  </div>
                  {product.originalPrice && (
                    <p className="text-xs text-[#10B981] font-semibold mt-1">
                      Você economiza {formatPrice(product.originalPrice - product.price)}
                    </p>
                  )}
                </div>
                <CTAButton href={product.affiliateLink} variant="primary" size="xl" icon="external" fullWidth className="mb-3 text-base">
                  Acessar curso agora
                </CTAButton>
                <p className="text-xs text-[#64748B] text-center mb-4">Compra segura via Hotmart</p>
                <div className="space-y-2.5 border-t border-[#2A3441] pt-4">
                  {[
                    { icon: Shield, text: "Garantia de reembolso de 7 dias" },
                    { icon: Clock, text: "Acesso vitalício ao conteúdo" },
                    { icon: Users, text: `${product.reviewCount.toLocaleString("pt-BR")} alunos` },
                    { icon: Star, text: `Avaliação ${product.rating}/5` },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 text-[#7C3AED] shrink-0" />
                      <span className="text-xs text-[#A1A1AA]">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              {product.tags.length > 0 && (
                <div className="bg-[#151B23] border border-[#2A3441] rounded-2xl p-4">
                  <p className="text-xs font-semibold text-[#A1A1AA] mb-2.5 uppercase tracking-wider">Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-[#1C2430] border border-[#2A3441] text-[#A1A1AA] px-2.5 py-1 rounded-lg">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "'Syne',sans-serif" }}>Produtos relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
