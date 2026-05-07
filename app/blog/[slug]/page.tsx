import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, products } from "@/data/mock";
import { formatDate } from "@/lib/utils";
import { CTAButton } from "@/components/ui/CTAButton";
import { ProductCard } from "@/components/product/ProductCard";
import { Clock, Calendar, ChevronRight, ArrowLeft } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post não encontrado" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [post.image] },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

const SAMPLE_CONTENT = `
O mercado de cursos digitais cresceu exponencialmente nos últimos anos, e com ele, as oportunidades para quem quer trabalhar online. Mas com tantas opções disponíveis, como saber por onde começar?

## Por que a Hotmart é a melhor plataforma

A Hotmart é hoje a maior plataforma de produtos digitais da América Latina, com milhões de alunos e produtores cadastrados. Isso significa segurança, variedade de produtos e uma estrutura robusta para quem quer comprar ou vender cursos online.

## O que você precisa saber antes de começar

Antes de tomar qualquer decisão, é importante entender o mercado no qual você quer atuar. Pesquise sobre as tendências, identifique seu nicho e estude a concorrência.

### Passo 1: Escolha seu nicho

O primeiro passo é escolher uma área que você tenha afinidade e que seja lucrativa. Os nichos mais promissores atualmente são marketing digital, programação, saúde e bem-estar, e desenvolvimento pessoal.

### Passo 2: Estude seus concorrentes

Analise os cursos que já existem no mercado. O que eles oferecem? Qual é o preço? Quais são os diferenciais?

### Passo 3: Comece com um orçamento baixo

Não é necessário investir muito para começar. Com R$ 300 a R$ 500, você já consegue criar seu primeiro produto e começar a vender.

## Como escolher os melhores cursos

Ao escolher um curso, leve em consideração os seguintes fatores: avaliações de outros alunos, credenciais do produtor, conteúdo do programa e política de garantia.

## Conclusão

O mercado de cursos digitais oferece oportunidades incríveis para quem está disposto a trabalhar e aprender. Com dedicação e a estratégia certa, é possível construir uma renda sólida e sustentável.
`;

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const featuredProduct = products[0];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors text-sm mt-6 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao blog
        </Link>

        {/* Category */}
        <span className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1.5 rounded-full mb-4">
          {post.category}
        </span>

        {/* Title */}
        <h1 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-border">
          <div className="flex items-center gap-2">
            <img src={post.authorAvatar} alt={post.author} className="w-8 h-8 rounded-full" />
            <span className="text-sm text-white font-medium">{post.author}</span>
          </div>
          <div className="flex items-center gap-1.5 text-text-muted">
            <Calendar className="w-3.5 h-3.5" />
            <span className="text-xs">{formatDate(post.publishedAt)}</span>
          </div>
          <div className="flex items-center gap-1.5 text-text-muted">
            <Clock className="w-3.5 h-3.5" />
            <span className="text-xs">{post.readTime} min de leitura</span>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-sm md:prose-base max-w-none">
          {SAMPLE_CONTENT.split("\n\n").map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2 key={i} className="font-display text-xl font-bold text-white mt-8 mb-4">
                  {block.replace("## ", "")}
                </h2>
              );
            }
            if (block.startsWith("### ")) {
              return (
                <h3 key={i} className="font-display text-lg font-bold text-white mt-6 mb-3">
                  {block.replace("### ", "")}
                </h3>
              );
            }
            if (block.trim()) {
              /* CTA in middle of content */
              if (i === 8) {
                return (
                  <div key={i}>
                    <p className="text-text-secondary leading-relaxed mb-6">{block}</p>
                    <div className="my-8 bg-surface border border-accent/20 rounded-2xl p-6 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent" />
                      <div className="relative z-10">
                        <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-2">
                          🔥 Recomendado para você
                        </p>
                        <h4 className="font-display text-lg font-bold text-white mb-2">
                          {featuredProduct.name}
                        </h4>
                        <p className="text-sm text-text-secondary mb-4">{featuredProduct.description}</p>
                        <CTAButton href={featuredProduct.affiliateLink} variant="primary" size="md" icon="external">
                          Conhecer o curso
                        </CTAButton>
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <p key={i} className="text-text-secondary leading-relaxed mb-4">
                  {block}
                </p>
              );
            }
            return null;
          })}
        </div>

        {/* Tags */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-surface border border-border text-text-secondary px-3 py-1.5 rounded-lg"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author box */}
        <div className="mt-8 bg-surface border border-border rounded-2xl p-6 flex items-start gap-4">
          <img src={post.authorAvatar} alt={post.author} className="w-14 h-14 rounded-full shrink-0" />
          <div>
            <p className="font-semibold text-white mb-1">{post.author}</p>
            <p className="text-sm text-text-secondary">
              Especialista em marketing digital e negócios online. Compartilha conteúdo gratuito para ajudar pessoas a transformarem suas vidas através do empreendedorismo digital.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
