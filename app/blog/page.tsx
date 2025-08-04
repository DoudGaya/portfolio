import Link from 'next/link'
import { client } from '@/lib/sanity'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { estimateReadingTime, formatReadingTime, extractTextFromBlocks } from '@/lib/reading-time'

// Revalidate every 60 seconds
export const revalidate = 60

async function getBlogPosts() {
  const posts = await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      categories,
      author->{
        name,
        image
      }
    }
  `, {}, {
    next: { revalidate: 60 }
  })
  return posts
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <main className="bg-background min-h-screen">
      <div className="max-w-6xl mx-auto py-16">
        {/* Header */}
        <section className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Latest Insights
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Thoughts on web development, SaaS architecture, and building scalable platforms
          </p>
        </section>

        {/* Blog Posts Grid */}
        <section className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {posts.map((post: any) => (
            <Link 
              href={`/blog/${post.slug.current}`} 
              key={post._id}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
            >
              {post.mainImage && (
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.mainImage.alt || post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              )}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.categories?.slice(0, 2).map((category: string) => (
                    <span 
                      key={category} 
                    className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                )}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <time>
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </time>
                    <span>•</span>
                    <span>{formatReadingTime(estimateReadingTime(extractTextFromBlocks(post.body)))}</span>
                  </div>
                  <span className="text-sm font-medium text-primary group-hover:translate-x-1 transition-transform">
                    Read more →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* Empty State */}
        {posts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No blog posts yet</h3>
            <p className="text-muted-foreground mb-4">
              Check back soon for insights on startup development and SaaS best practices
            </p>
            <Link 
              href="/studio" 
              className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Create First Post
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}
