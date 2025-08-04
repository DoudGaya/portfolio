import { MetadataRoute } from 'next'

export function GET(): Response {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${process.env.NEXT_PUBLIC_SITE_URL || 'https://doudgaya.xyz'}/sitemap.xml

# Disallow admin routes
Disallow: /studio
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

# Allow important pages
Allow: /
Allow: /about
Allow: /services
Allow: /projects
Allow: /blog
Allow: /contact
`

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
