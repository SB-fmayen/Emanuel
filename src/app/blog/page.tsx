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
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl md:text-5xl font-headline font-bold">
              Noticias y Eventos
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
              Mantente al día con las últimas noticias, eventos y logros de la comunidad del Instituto Emanuel.
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
