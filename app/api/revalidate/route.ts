import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(request: NextRequest) {
  try {
    // Get the webhook secret from environment variables
    const webhookSecret = process.env.SANITY_WEBHOOK_SECRET
    
    if (webhookSecret) {
      // Verify webhook secret if configured
      const providedSecret = request.headers.get('authorization')?.replace('Bearer ', '')
      
      if (providedSecret !== webhookSecret) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
      }
    }

    // Get the document type from the request body
    const body = await request.json()
    const documentType = body._type

    // Revalidate blog pages when blog posts are updated
    if (documentType === 'post') {
      // Revalidate the blog listing page
      revalidatePath('/blog')
      
      // If we have a slug, revalidate the specific blog post page
      if (body.slug?.current) {
        revalidatePath(`/blog/${body.slug.current}`)
      }
      
      console.log(`Revalidated blog pages for document: ${body._id}`)
    }

    // Revalidate homepage if any content changes (optional)
    revalidatePath('/')

    return NextResponse.json({ 
      message: 'Revalidation successful',
      revalidated: true,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Revalidation error:', error)
    return NextResponse.json({ 
      message: 'Error revalidating',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
