import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/mock";
import { Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Conteúdo gratuito sobre marketing digital, renda online e cursos digitais.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: "'Syne',sans-serif" }}>Blog & Conteúdo</h1>
          <p className="text-[#A1A1AA]">Aprenda de graça e acelere seus resultados no digital</p>
        </div>

        <Link href={`/blog/${featured.slug}`} className="group block mb-10">
          <article className="grid grid-cols-1 md:grid-cols-2 bg-[#151B23] border border-[#2A3441] rounded-2xl overflow-hidden card-hover">
            <div className="relative h-60 md:h-full min-h-[240px]">
              <Image src={featured.image} alt={featured.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:768px) 100vw, 50vw" priority />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit" style={{ background: "rgba(124,58,237,0.1)", color: "#9D5FF3" }}>{featured.category}</span>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug group-hover:text-[#9D5FF3] transition-colors" style={{ fontFamily: "'Syne',sans-serif" }}>{featured.title}</h2>
              <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={featured.authorAvatar} alt={featured.author} className="w-7 h-7 rounded-full" />
                  <span className="text-xs text-[#A1A1AA]">{featured.author}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#7C3AED] text-sm font-semibold">Ler artigo <ArrowRight className="w-4 h-4" /></div>
              </div>
            </div>
          </article>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
              <article className="bg-[#151B23] border border-[#2A3441] rounded-2xl overflow-hidden card-hover h-full flex flex-col">
                <div className="relative h-[180px] overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:768px) 100vw, 400px" />
                  <span className="absolute top-3 left-3 bg-[#7C3AED]/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">{post.category}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold text-white text-sm line-clamp-2 mb-2 group-hover:text-[#9D5FF3] transition-colors">{post.title}</h3>
                  <p className="text-xs text-[#A1A1AA] line-clamp-2 mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src={post.authorAvatar} alt={post.author} className="w-6 h-6 rounded-full" />
                      <span className="text-xs text-[#A1A1AA]">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#64748B]">
                      <Clock className="w-3 h-3" /><span className="text-xs">{post.readTime} min</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
