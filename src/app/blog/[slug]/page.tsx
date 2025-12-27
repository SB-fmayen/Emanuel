import { notFound } from "next/navigation";
import Image from "next/image";
import { blogPosts } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="relative h-[40vh] md:h-[50vh] w-full">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover"
          data-ai-hint={post.imageHint}
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
          <Badge variant="secondary" className="mb-4 text-sm bg-background/20 text-white backdrop-blur-sm">
            {post.category}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-white">
            {post.title}
          </h1>
        </div>
      </section>

      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center justify-between mb-8 text-sm text-muted-foreground border-b pb-4">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <span>{post.author}</span>
            </div>
            <span>{post.date}</span>
          </div>
          <div
            className="prose dark:prose-invert max-w-none text-lg text-foreground/80 space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </>
  );
}
