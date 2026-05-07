import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/mock";
import { Clock } from "lucide-react";

export function BlogPreviewSection() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: "'Syne',sans-serif" }}>
              📝 Do blog
            </h2>
            <p className="text-sm text-[#A1A1AA] mt-1">Conteúdo gratuito para acelerar seus resultados</p>
          </div>
          <Link href="/blog" className="text-xs text-[#7C3AED] hover:text-[#9D5FF3] font-semibold transition-colors">
            Ver todos →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
              <article className="bg-[#151B23] border border-[#2A3441] rounded-2xl overflow-hidden card-hover h-full flex flex-col">
                <div className="relative h-[180px] overflow-hidden">
                  <Image src={post.image} alt={post.title} fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 400px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151B23] via-transparent to-transparent opacity-60" />
                  <span className="absolute top-3 left-3 bg-[#7C3AED]/90 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold text-white text-sm leading-snug line-clamp-2 mb-2 group-hover:text-[#9D5FF3] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-[#A1A1AA] line-clamp-2 mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src={post.authorAvatar} alt={post.author} className="w-6 h-6 rounded-full" />
                      <span className="text-xs text-[#A1A1AA]">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#64748B]">
                      <Clock className="w-3 h-3" />
                      <span className="text-xs">{post.readTime} min</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
