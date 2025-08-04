import { client, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

async function getBlogPost(slug: string) {
  const post = await client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      mainImage,
      body,
      publishedAt,
      categories,
      excerpt,
      author->{
        name,
        image,
        bio
      }
    }
  `, { slug })
  
  return post
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    return {}
  }

  return {
    title: `${post.title} | Abdulrahman Dauda Gaya`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.mainImage ? [urlFor(post.mainImage).url()] : [],
    },
  }
}

const components = {
  types: {
    image: ({ value }: any) => (
      <div className="my-8">
        <Image
          src={urlFor(value).url()}
          alt={value.alt || ''}
          width={800}
          height={400}
          className="rounded-lg w-full h-auto"
        />
      </div>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a href={value.href} className="text-primary hover:underline" target="_blank" rel="noopener">
        {children}
      </a>
    ),
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-3xl font-bold my-6">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-semibold my-5">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-semibold my-4">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-lg font-semibold my-3">{children}</h4>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary pl-4 py-2 my-4 italic bg-muted/50">
        {children}
      </blockquote>
    ),
  },
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="bg-background min-h-screen">
      <div className="max-w-3xl mx-auto py-12 px-4">
        {/* Back to Blog */}
        <Link 
          href="/blog" 
          className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          ← Back to Blog
        </Link>

        {/* Article Header */}
        <article>
          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories?.map((category: string) => (
                <span 
                  key={category} 
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md"
                >
                  {category}
                </span>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex items-center gap-4 text-muted-foreground mb-6">
              {post.author?.image && (
                <Image
                  src={urlFor(post.author.image).width(40).height(40).url()}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              )}
              <div>
                <p className="font-medium text-foreground">{post.author?.name}</p>
                <p className="text-sm">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>

            {post.mainImage && (
              <div className="relative h-64 md:h-96 w-full mb-8">
                <Image
                  src={urlFor(post.mainImage).url()}
                  alt={post.mainImage.alt || post.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <PortableText value={post.body} components={components} />
          </div>
        </article>

        {/* Call to Action */}
        <section className="mt-12 p-6 bg-muted/30 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-2">Need help with your SaaS project?</h3>
          <p className="text-muted-foreground mb-4">
            Let's discuss how I can help you build and scale your web platform
          </p>
          <Link 
            href="/#contact" 
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </main>
  )
}
