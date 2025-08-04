import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title') || 'Blog Post'
    const author = searchParams.get('author') || 'Abdulrahman Dauda Gaya'
    const category = searchParams.get('category') || 'Web Development'

    // For now, return a simple SVG-based Open Graph image
    const svg = `
      <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#667eea"/>
            <stop offset="100%" style="stop-color:#764ba2"/>
          </linearGradient>
          <radialGradient id="pattern1" cx="25%" cy="25%" r="50%">
            <stop offset="0%" style="stop-color:rgba(255,255,255,0.1)"/>
            <stop offset="50%" style="stop-color:transparent"/>
          </radialGradient>
          <radialGradient id="pattern2" cx="75%" cy="75%" r="50%">
            <stop offset="0%" style="stop-color:rgba(255,255,255,0.1)"/>
            <stop offset="50%" style="stop-color:transparent"/>
          </radialGradient>
        </defs>
        
        <!-- Background -->
        <rect width="100%" height="100%" fill="url(#bg)"/>
        <rect width="100%" height="100%" fill="url(#pattern1)"/>
        <rect width="100%" height="100%" fill="url(#pattern2)"/>
        
        <!-- Category Badge -->
        <rect x="500" y="120" width="200" height="40" rx="20" fill="rgba(255,255,255,0.2)"/>
        <text x="600" y="145" text-anchor="middle" fill="white" font-family="system-ui, sans-serif" font-size="18" font-weight="500">${category}</text>
        
        <!-- Title -->
        <text x="600" y="220" text-anchor="middle" fill="white" font-family="system-ui, sans-serif" font-size="${title.length > 50 ? '48' : '64'}" font-weight="bold">
          <tspan x="600" dy="0">${title.length > 80 ? title.substring(0, 80) + '...' : title}</tspan>
        </text>
        
        <!-- Author -->
        <text x="600" y="380" text-anchor="middle" fill="white" font-family="system-ui, sans-serif" font-size="24" opacity="0.9">by ${author}</text>
        
        <!-- Website -->
        <text x="600" y="420" text-anchor="middle" fill="white" font-family="system-ui, sans-serif" font-size="20" opacity="0.8">doudgaya.com</text>
        
        <!-- Bottom Accent -->
        <rect x="0" y="622" width="1200" height="8">
          <defs>
            <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:#ff6b6b"/>
              <stop offset="25%" style="stop-color:#4ecdc4"/>
              <stop offset="50%" style="stop-color:#45b7d1"/>
              <stop offset="75%" style="stop-color:#96ceb4"/>
              <stop offset="100%" style="stop-color:#ffeaa7"/>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#accent)"/>
        </rect>
      </svg>
    `

    return new Response(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch (error) {
    console.error('Error generating OG image:', error)
    return new Response('Failed to generate image', { status: 500 })
  }
}
