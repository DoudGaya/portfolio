export const runtime = 'edge'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title') || 'Hire Full Stack Developer | Abdulrahman Dauda Gaya'
    const description = searchParams.get('description') || 'Full-stack developer & CTO specializing in SaaS, fintech, and real estate platforms'

    // Simple HTML response for OG image generation
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              width: 1200px;
              height: 630px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-family: 'Inter', sans-serif;
              color: white;
              margin: 0;
              padding: 40px;
              box-sizing: border-box;
            }
            .container {
              background: rgba(255, 255, 255, 0.1);
              border-radius: 20px;
              padding: 60px;
              backdrop-filter: blur(10px);
              border: 1px solid rgba(255, 255, 255, 0.2);
              text-align: center;
              max-width: 800px;
            }
            .title {
              font-size: 48px;
              font-weight: bold;
              margin-bottom: 20px;
              line-height: 1.2;
            }
            .description {
              font-size: 24px;
              opacity: 0.9;
              line-height: 1.4;
              margin-bottom: 30px;
            }
            .tech {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 15px;
              font-size: 18px;
              opacity: 0.8;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="title">${title}</div>
            <div class="description">${description}</div>
            <div class="tech">
              <div>🚀 Next.js</div>
              <div>⚡ TypeScript</div>
              <div>🎯 SaaS Expert</div>
            </div>
          </div>
        </body>
      </html>
    `

    return new Response(html, {
      headers: {
        'Content-Type': 'text/html',
      },
    })
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
