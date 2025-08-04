import { client, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { estimateReadingTime, formatReadingTime, extractTextFromBlocks } from '@/lib/reading-time'
import SocialShare from '@/components/SocialShare'
import FloatingSocialShare from '@/components/FloatingSocialShare'

// Revalidate every 60 seconds
export const revalidate = 60

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
  `, { slug }, {
    next: { revalidate: 60 }
  })
  
  return post
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPost(slug)
  
  if (!post) {
    return {}
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'
  const url = `${baseUrl}/blog/${slug}`
  
  // Generate OG image URL
  const imageUrl = post.mainImage 
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : `${baseUrl}/api/og?title=${encodeURIComponent(post.title)}&author=${encodeURIComponent(post.author?.name || 'Abdulrahman Dauda Gaya')}&category=${encodeURIComponent(post.categories?.[0] || 'Web Development')}`

  return {
    title: `${post.title} | Abdulrahman Dauda Gaya`,
    description: post.excerpt || `Read ${post.title} by ${post.author?.name || 'Abdulrahman Dauda Gaya'}`,
    keywords: post.categories?.join(', ') || 'web development, SaaS, startup',
    authors: [{ name: post.author?.name || 'Abdulrahman Dauda Gaya' }],
    openGraph: {
      title: post.title,
      description: post.excerpt || `Read ${post.title} by ${post.author?.name || 'Abdulrahman Dauda Gaya'}`,
      url,
      siteName: 'Abdulrahman Dauda Gaya',
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author?.name || 'Abdulrahman Dauda Gaya'],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.mainImage?.alt || post.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || `Read ${post.title} by ${post.author?.name || 'Abdulrahman Dauda Gaya'}`,
      images: [imageUrl],
      creator: '@doudgaya', // Replace with your Twitter handle
      site: '@doudgaya', // Replace with your Twitter handle
    },
    alternates: {
      canonical: url,
    },
  }
}

const components = {
  types: {
    image: ({ value }: any) => (
      <div className="my-10">
        <Image
          src={urlFor(value).url()}
          alt={value.alt || ''}
          width={800}
          height={500}
          className="rounded-xl w-full h-auto shadow-lg"
        />
        {value.caption && (
          <p className="text-sm text-muted-foreground text-center mt-3 italic">
            {value.caption}
          </p>
        )}
      </div>
    ),
    code: ({ value }: any) => (
      <div className="my-8">
        <pre className="bg-muted p-6 rounded-lg overflow-x-auto">
          <code className="text-sm font-mono">{value.code}</code>
        </pre>
      </div>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a 
        href={value.href} 
        className="text-primary hover:text-primary/80 underline underline-offset-4 decoration-2 transition-colors" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    strong: ({ children }: any) => (
      <strong className="font-bold text-foreground">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic">{children}</em>
    ),
    code: ({ children }: any) => (
      <code className="bg-muted px-2 py-1 rounded text-sm font-mono text-primary">
        {children}
      </code>
    ),
  },
  block: {
    normal: ({ children }: any) => (
      <p className="text-lg leading-relaxed mb-6 text-foreground">{children}</p>
    ),
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold my-8 text-foreground border-b border-border pb-4">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-semibold my-8 text-foreground">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-semibold my-6 text-foreground">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-semibold my-5 text-foreground">
        {children}
      </h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary bg-primary/5 pl-6 py-4 my-8 italic rounded-r-lg">
        <div className="text-lg text-foreground/90">
          {children}
        </div>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-3 my-6 pl-4">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-3 my-6 pl-4">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="text-lg leading-relaxed">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="text-lg leading-relaxed">{children}</li>
    ),
  },
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  // Calculate reading time
  const textContent = extractTextFromBlocks(post.body)
  const readingTime = estimateReadingTime(textContent)

  // Generate share URL
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'
  const shareUrl = `${baseUrl}/blog/${slug}`

  return (
    <>
      {/* Floating Social Share */}
      <FloatingSocialShare 
        url={shareUrl}
        title={post.title}
        description={post.excerpt || `Read ${post.title} by ${post.author?.name || 'Abdulrahman Dauda Gaya'}`}
      />

      <main className="bg-background min-h-screen">
      <div className="max-w-6xl mx-auto py-16 px-4">
        {/* Back to Blog */}
        <Link 
          href="/blog" 
          className="inline-flex items-center text-muted-foreground hover:text-primary mb-12 transition-colors text-lg font-medium"
        >
          ← Back to Blog
        </Link>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {post.categories.map((category: string) => (
                  <span 
                    key={category} 
                    className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-foreground">
              {post.title}
            </h1>
            
            {/* Excerpt */}
            {post.excerpt && (
              <div className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8 border-l-4 border-primary pl-6 italic">
                {post.excerpt}
              </div>
            )}
            
            {/* Author and Date */}
            <div className="flex items-center justify-center space-x-6 text-muted-foreground mb-10">
              {post.author?.image && (
                <Image
                  src={urlFor(post.author.image).width(50).height(50).url()}
                  alt={post.author.name}
                  width={50}
                  height={50}
                  className="rounded-full ring-2 ring-primary/20"
                />
              )}
              <div className="text-left">
                <p className="font-semibold text-foreground text-lg">{post.author?.name}</p>
                <div className="flex items-center space-x-3 text-base">
                  <time>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span>•</span>
                  <span>{formatReadingTime(readingTime)}</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            {post.mainImage && (
              <div className="relative h-64 md:h-96 lg:h-[500px] w-full mb-12 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={urlFor(post.mainImage).url()}
                  alt={post.mainImage.alt || post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </header>

          {/* Article Content */}
          <div className="prose prose-xl prose-enhanced max-w-none leading-relaxed">
            <PortableText value={post.body} components={components} />
          </div>

          {/* Social Share */}
          <div className="mt-12 mb-12">
            <SocialShare 
              url={shareUrl}
              title={post.title}
              description={post.excerpt || `Read ${post.title} by ${post.author?.name || 'Abdulrahman Dauda Gaya'}`}
            />
          </div>

          {/* Author Bio Footer */}
          {post.author && (
            <footer className="mt-16 pt-12 border-t border-border">
              <div className="bg-muted/30 rounded-xl p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    {post.author.image ? (
                      <Image
                        src={urlFor(post.author.image).width(80).height(80).url()}
                        alt={post.author.name}
                        width={80}
                        height={80}
                        className="rounded-full ring-4 ring-primary/20"
                      />
                    ) : (
                      <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl">
                        {post.author.name.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-xl mb-2">About {post.author.name}</h3>
                    {post.author.bio && (
                      <div className="text-muted-foreground text-lg leading-relaxed">
                        <PortableText value={post.author.bio} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </footer>
          )}
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
    </>
  )
}
