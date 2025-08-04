# Twitter Social Media Sharing Setup

## Testing Your Blog Post Sharing

### 1. Twitter Card Validator
Test your blog post social sharing with Twitter's Card Validator:
- Go to: https://cards-dev.twitter.com/validator
- Enter your blog post URL (e.g., `https://yourdomain.com/blog/your-post-slug`)
- Click "Preview card" to see how it will appear

### 2. Facebook Sharing Debugger  
Test with Facebook's sharing debugger:
- Go to: https://developers.facebook.com/tools/debug/
- Enter your blog post URL
- Click "Debug" to see preview and refresh cache

### 3. LinkedIn Post Inspector
Test with LinkedIn's Post Inspector:
- Go to: https://www.linkedin.com/post-inspector/
- Enter your blog post URL
- Click "Inspect" to see how it will appear

## What's Been Implemented

### ✅ Enhanced Open Graph Meta Tags
- **Dynamic titles and descriptions** for each blog post
- **High-quality images** (1200x630px) from Sanity or generated dynamically
- **Twitter Card support** with `summary_large_image`
- **Article metadata** including author and publish date
- **Canonical URLs** for SEO

### ✅ Social Sharing Components
- **Inline sharing buttons** after each blog post
- **Floating social sidebar** that appears while scrolling (desktop only)
- **Native sharing support** for mobile devices
- **Copy link functionality** with visual feedback

### ✅ Dynamic OG Image Generation
- **SVG-based API endpoint** at `/api/og` that creates beautiful Open Graph images
- **Fallback system** for posts without main images
- **Brand-consistent design** with gradients and your branding
- **Lightweight and fast** - uses SVG for crisp images at any size
- **Customizable** title, author, and category display
- **Brand-consistent design** with gradients and your branding

### ✅ Platform Support
- **Twitter/X** - Full card support with images
- **Facebook** - Rich link previews
- **LinkedIn** - Professional sharing format
- **WhatsApp** - Link previews with images
- **Native mobile sharing** - Uses device share sheet

## Environment Setup

Make sure your `.env.local` contains:
```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

Replace `https://yourdomain.com` with your actual domain.

## Updating Your Twitter Handle

In the blog post metadata, update:
```tsx
twitter: {
  creator: '@your_twitter_handle',
  site: '@your_twitter_handle',
}
```

## Testing Checklist

1. ✅ Create a test blog post in Sanity Studio
2. ✅ Visit the blog post page
3. ✅ Check social sharing buttons appear
4. ✅ Test each sharing platform
5. ✅ Validate with Twitter Card Validator
6. ✅ Test floating social share on desktop
7. ✅ Verify OG image generation at `/api/og?title=Test`

## Common Issues & Solutions

### Images Not Showing on Twitter
- Ensure your domain is accessible publicly
- Check Twitter Card Validator shows the image
- Verify image URLs are absolute (not relative)
- Images must be < 5MB and common formats (PNG, JPG, WEBP)

### Facebook Not Updating
- Use Facebook Sharing Debugger to clear cache
- Click "Scrape Again" to refresh
- Ensure OG tags are in the `<head>` section

### Dynamic OG Images Not Working
- Check `/api/og` endpoint works directly
- Verify Next.js OG library is properly installed
- Test with simple title parameter first
