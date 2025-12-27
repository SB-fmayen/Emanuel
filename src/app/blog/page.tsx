import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/lib/data";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 -left-40 w-80 h-80 bg-gradient-to-br from-violet-200 to-violet-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
          <div className="absolute top-40 -right-32 w-96 h-96 bg-gradient-to-br from-purple-200 to-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
          <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-indigo-200 to-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-blog" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(139, 92, 246, 0.05)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-blog)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <AnimateOnScroll>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-slate-900 mb-4">
              Noticias y Eventos
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-transparent rounded-full" />
              <div className="w-3 h-3 bg-purple-600 rounded-full" />
              <div className="h-1 w-12 bg-gradient-to-l from-purple-500 to-transparent rounded-full" />
            </div>
            <p className="mt-4 text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
              Mantén al día con las últimas noticias, eventos y logros de la comunidad del Instituto Emanuel.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <AnimateOnScroll key={post.slug} delay={index * 0.1}>
                <Card className="overflow-hidden flex flex-col transition-all hover:shadow-xl hover:-translate-y-1 h-full">
                  <Link href={`/blog/${post.slug}`} className="block group">
                    <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={post.imageUrl}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={post.imageHint}
                        />
                    </div>
                  </Link>
                  <CardContent className="pt-6 flex-grow">
                    <Badge variant="secondary" className="mb-2">
                      {post.category}
                    </Badge>
                    <CardTitle className="font-headline text-xl">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="mt-2 line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </CardFooter>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
