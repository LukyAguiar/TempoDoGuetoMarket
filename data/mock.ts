export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  categorySlug: string;
  tags: string[];
  affiliateLink: string;
  badge?: string;
  benefits: string[];
  forWho: string[];
  isBestSeller?: boolean;
  isTrending?: boolean;
  isFeatured?: boolean;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  emoji: string;
  description: string;
  productCount: number;
  color: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  authorAvatar: string;
  readTime: number;
  publishedAt: string;
  tags: string[];
}

export const categories: Category[] = [
  {
    id: "1",
    slug: "marketing-digital",
    name: "Marketing Digital",
    emoji: "📱",
    description: "Cursos para dominar o marketing online",
    productCount: 24,
    color: "#7C3AED",
  },
  {
    id: "2",
    slug: "renda-extra",
    name: "Renda Extra",
    emoji: "💰",
    description: "Aprenda a gerar renda trabalhando online",
    productCount: 18,
    color: "#059669",
  },
  {
    id: "3",
    slug: "programacao",
    name: "Programação",
    emoji: "💻",
    description: "Do zero ao desenvolvedor profissional",
    productCount: 31,
    color: "#2563EB",
  },
  {
    id: "4",
    slug: "inteligencia-artificial",
    name: "Inteligência Artificial",
    emoji: "🤖",
    description: "Domine as ferramentas de IA do futuro",
    productCount: 15,
    color: "#DC2626",
  },
  {
    id: "5",
    slug: "negocios",
    name: "Negócios",
    emoji: "🚀",
    description: "Empreendedorismo e gestão empresarial",
    productCount: 22,
    color: "#D97706",
  },
  {
    id: "6",
    slug: "saude-bem-estar",
    name: "Saúde & Bem-estar",
    emoji: "💪",
    description: "Emagrecimento, saúde e qualidade de vida",
    productCount: 19,
    color: "#0891B2",
  },
];

export const products: Product[] = [
  {
    id: "1",
    slug: "formula-negocio-online",
    name: "Fórmula Negócio Online",
    description: "O método mais completo para criar um negócio digital lucrativo do zero.",
    longDescription: "O Fórmula Negócio Online é o curso mais completo do Brasil para quem quer começar um negócio digital. Com mais de 10 anos de existência e milhares de alunos transformados, você aprenderá tudo que precisa para construir uma renda online sustentável.",
    price: 497,
    originalPrice: 997,
    rating: 4.9,
    reviewCount: 12840,
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=280&fit=crop",
    category: "Renda Extra",
    categorySlug: "renda-extra",
    tags: ["afiliados", "dropshipping", "infoprodutos"],
    affiliateLink: "https://hotmart.com/produto/formula-negocio-online",
    badge: "🏆 Mais Vendido",
    benefits: [
      "Mais de 200 aulas em vídeo HD",
      "Comunidade exclusiva de alunos",
      "Suporte por 1 ano",
      "Atualizações vitalícias",
      "Certificado de conclusão",
    ],
    forWho: [
      "Quem quer começar do zero no digital",
      "Quem busca renda extra online",
      "Quem quer sair do emprego CLT",
    ],
    isBestSeller: true,
    isFeatured: true,
  },
  {
    id: "2",
    slug: "chatgpt-para-negocios",
    name: "ChatGPT para Negócios",
    description: "Aprenda a usar IA para automatizar seu negócio e multiplicar seus resultados.",
    longDescription: "Descubra como usar o ChatGPT e outras ferramentas de IA para escalar seus negócios. Automatize tarefas, crie conteúdo em escala e economize horas de trabalho todo dia.",
    price: 197,
    originalPrice: 397,
    rating: 4.8,
    reviewCount: 3421,
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=280&fit=crop",
    category: "Inteligência Artificial",
    categorySlug: "inteligencia-artificial",
    tags: ["chatgpt", "ia", "automação"],
    affiliateLink: "https://hotmart.com/produto/chatgpt-negocios",
    badge: "🔥 Em Alta",
    benefits: [
      "100+ prompts prontos para usar",
      "Automações com IA",
      "Criação de conteúdo com IA",
      "Suporte da comunidade",
    ],
    forWho: [
      "Empreendedores que querem usar IA",
      "Criadores de conteúdo",
      "Profissionais que querem produtividade",
    ],
    isTrending: true,
    isFeatured: true,
  },
  {
    id: "3",
    slug: "dev-fullstack-2024",
    name: "Dev Fullstack Completo",
    description: "Do zero ao desenvolvedor fullstack com React, Node.js e muito mais.",
    longDescription: "O curso mais completo de desenvolvimento web do Brasil. Aprenda React, Next.js, Node.js, bancos de dados e tudo que o mercado exige. Saia empregado ou devolve o dinheiro.",
    price: 697,
    originalPrice: 1497,
    rating: 4.9,
    reviewCount: 8932,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=280&fit=crop",
    category: "Programação",
    categorySlug: "programacao",
    tags: ["react", "nodejs", "javascript"],
    affiliateLink: "https://hotmart.com/produto/dev-fullstack",
    badge: "💎 Premium",
    benefits: [
      "+400 horas de conteúdo",
      "Projetos reais no portfólio",
      "Mentoria ao vivo",
      "Indicação de empregos",
      "Garantia de 30 dias",
    ],
    forWho: [
      "Quem quer entrar na área de tech",
      "Programadores iniciantes",
      "Quem quer mudar de carreira",
    ],
    isBestSeller: true,
  },
  {
    id: "4",
    slug: "trafego-pago-masterclass",
    name: "Tráfego Pago Masterclass",
    description: "Domine Google Ads e Meta Ads para escalar qualquer negócio online.",
    longDescription: "Aprenda as estratégias avançadas de tráfego pago usadas pelos maiores especialistas do Brasil. Google Ads, Meta Ads, TikTok Ads e muito mais.",
    price: 397,
    originalPrice: 797,
    rating: 4.7,
    reviewCount: 5671,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=280&fit=crop",
    category: "Marketing Digital",
    categorySlug: "marketing-digital",
    tags: ["google ads", "meta ads", "trafego pago"],
    affiliateLink: "https://hotmart.com/produto/trafego-pago",
    badge: "📈 Top Vendas",
    benefits: [
      "Google Ads do zero ao avançado",
      "Meta Ads completo",
      "TikTok Ads",
      "Planilhas de gestão",
      "Comunidade de alunos",
    ],
    forWho: [
      "Gestores de tráfego iniciantes",
      "Donos de negócios online",
      "Agências digitais",
    ],
    isTrending: true,
  },
  {
    id: "5",
    slug: "emagrecimento-definitivo",
    name: "Emagrecimento Definitivo",
    description: "O método científico para perder peso de forma saudável e definitiva.",
    longDescription: "Baseado em ciência e desenvolvido por nutricionistas, o programa Emagrecimento Definitivo vai te guiar em cada passo da sua transformação.",
    price: 247,
    originalPrice: 497,
    rating: 4.8,
    reviewCount: 9234,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=280&fit=crop",
    category: "Saúde & Bem-estar",
    categorySlug: "saude-bem-estar",
    tags: ["emagrecimento", "dieta", "saude"],
    affiliateLink: "https://hotmart.com/produto/emagrecimento",
    badge: "⭐ Mais Amado",
    benefits: [
      "Plano alimentar personalizado",
      "Treinos adaptáveis",
      "Suporte nutricional",
      "App exclusivo",
      "Garantia de 30 dias",
    ],
    forWho: [
      "Quem quer perder peso com saúde",
      "Quem já tentou de tudo",
      "Quem não tem tempo para academia",
    ],
    isBestSeller: true,
  },
  {
    id: "6",
    slug: "copywriting-persuasivo",
    name: "Copywriting Persuasivo",
    description: "Escreva textos que vendem. A habilidade mais valiosa do marketing digital.",
    longDescription: "Aprenda as técnicas de copywriting usadas pelas maiores empresas do mundo para criar textos que convencem, engajam e vendem.",
    price: 297,
    originalPrice: 597,
    rating: 4.7,
    reviewCount: 4123,
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=280&fit=crop",
    category: "Marketing Digital",
    categorySlug: "marketing-digital",
    tags: ["copywriting", "vendas", "persuasao"],
    affiliateLink: "https://hotmart.com/produto/copywriting",
    badge: "✍️ Destaque",
    benefits: [
      "Fórmulas de copy testadas",
      "Templates prontos",
      "Revisão de textos",
      "Comunidade de writers",
    ],
    forWho: [
      "Empreendedores digitais",
      "Afiliados Hotmart",
      "Gestores de marketing",
    ],
    isTrending: true,
  },
  {
    id: "7",
    slug: "python-machine-learning",
    name: "Python & Machine Learning",
    description: "Torne-se um cientista de dados com Python e ML na prática.",
    longDescription: "Do básico de Python até modelos avançados de Machine Learning. Aprenda pandas, scikit-learn, TensorFlow e muito mais com projetos reais.",
    price: 547,
    originalPrice: 997,
    rating: 4.9,
    reviewCount: 6789,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=280&fit=crop",
    category: "Programação",
    categorySlug: "programacao",
    tags: ["python", "machine learning", "data science"],
    affiliateLink: "https://hotmart.com/produto/python-ml",
    badge: "🤖 IA",
    benefits: [
      "+300 horas de aulas",
      "Projetos com dados reais",
      "Certificado reconhecido",
      "Suporte da comunidade",
    ],
    forWho: [
      "Programadores que querem IA",
      "Analistas de dados",
      "Estudantes de computação",
    ],
  },
  {
    id: "8",
    slug: "dropshipping-escalavel",
    name: "Dropshipping Escalável",
    description: "Crie uma loja de dropshipping lucrativa sem estoque e sem investimento alto.",
    longDescription: "Aprenda o modelo de negócio de dropshipping que gera R$ 50k/mês ou mais. Encontre produtos vencedores, configure sua loja e escale com tráfego.",
    price: 347,
    originalPrice: 697,
    rating: 4.6,
    reviewCount: 3892,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=280&fit=crop",
    category: "Renda Extra",
    categorySlug: "renda-extra",
    tags: ["dropshipping", "ecommerce", "shopify"],
    affiliateLink: "https://hotmart.com/produto/dropshipping",
    badge: "💰 Lucrativo",
    benefits: [
      "Encontre produtos vencedores",
      "Setup completo da loja",
      "Estratégias de escala",
      "Suporte mensal",
    ],
    forWho: [
      "Iniciantes no e-commerce",
      "Quem quer renda extra",
      "Empreendedores digitais",
    ],
    isFeatured: true,
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "como-ganhar-dinheiro-como-afiliado",
    title: "Como Ganhar Dinheiro Como Afiliado Hotmart em 2024",
    excerpt: "Guia completo para iniciantes que querem começar a faturar com marketing de afiliados na maior plataforma do Brasil.",
    content: "",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop",
    category: "Marketing Digital",
    author: "Lucas Ferreira",
    authorAvatar: "https://i.pravatar.cc/40?img=33",
    readTime: 8,
    publishedAt: "2024-03-15",
    tags: ["afiliados", "hotmart", "renda online"],
  },
  {
    id: "2",
    slug: "melhores-ferramentas-ia-2024",
    title: "As 10 Melhores Ferramentas de IA Para Seu Negócio em 2024",
    excerpt: "ChatGPT, Midjourney, Claude e outras ferramentas que estão revolucionando os negócios digitais.",
    content: "",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=400&fit=crop",
    category: "Inteligência Artificial",
    author: "Ana Paula Costa",
    authorAvatar: "https://i.pravatar.cc/40?img=47",
    readTime: 12,
    publishedAt: "2024-03-10",
    tags: ["ia", "chatgpt", "ferramentas"],
  },
  {
    id: "3",
    slug: "trafego-pago-para-iniciantes",
    title: "Tráfego Pago para Iniciantes: Guia Prático 2024",
    excerpt: "Tudo que você precisa saber para começar a investir em tráfego pago e ter resultados reais.",
    content: "",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    category: "Marketing Digital",
    author: "Ricardo Santos",
    authorAvatar: "https://i.pravatar.cc/40?img=12",
    readTime: 10,
    publishedAt: "2024-03-05",
    tags: ["trafego pago", "ads", "marketing"],
  },
];

export const getFeaturedProducts = () => products.filter((p) => p.isFeatured);
export const getBestSellers = () => products.filter((p) => p.isBestSeller);
export const getTrending = () => products.filter((p) => p.isTrending);
export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);
export const getProductsByCategory = (categorySlug: string) =>
  products.filter((p) => p.categorySlug === categorySlug);
