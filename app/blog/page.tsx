import Link from 'next/link'
import { client } from '@/lib/sanity'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

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
  `)
  return posts
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <main className="bg-background min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-4">
        {/* Header */}
        <section className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Startup & SaaS Development Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, guides, and success stories from building scalable web platforms for startups
          </p>
        </section>

        {/* Blog Posts Grid */}
        <section className="grid md:grid-cols-2 gap-8">
          {posts.map((post: any) => (
            <Link 
              href={`/blog/${post.slug.current}`} 
              key={post._id}
              className="group border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {post.mainImage && (
                <div className="relative h-48 w-full">
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.mainImage.alt || post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.categories?.map((category: string) => (
                    <span 
                      key={category} 
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <span>Read more →</span>
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
