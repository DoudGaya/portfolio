# Testing Sanity Images as OG Images

## 🎯 Quick Test Guide

### Step 1: Create a Blog Post in Sanity Studio
1. Go to `http://localhost:3000/studio`
2. Click **"Posts"** in the sidebar
3. Click **"Create new Post"**
4. Fill in the required fields:
   - **Title**: "My Amazing Blog Post"
   - **Slug**: Let it auto-generate or set manually
   - **Main Image**: **Upload an image here** (this will be your OG image!)
   - **Body**: Add some content
   - **Author**: Select or create an author
   - **Published At**: Set the publish date

### Step 2: Publish and Test
1. Click **"Publish"** to save your post
2. Go to your blog post URL: `http://localhost:3000/blog/your-slug`
3. Right-click → **"View Page Source"**
4. Search for `og:image` - you should see your Sanity image URL!

### Step 3: Validate Social Sharing
Test your blog post URL with these tools:

#### Twitter Card Validator
- URL: https://cards-dev.twitter.com/validator
- Enter: `http://localhost:3000/blog/your-slug`
- Should show your Sanity image as a large card

#### Facebook Sharing Debugger  
- URL: https://developers.facebook.com/tools/debug/
- Enter your blog post URL
- Should display your Sanity image in the preview

## 🖼️ How It Works

### Image Priority System:
1. **Sanity Image (First Choice)**
   - Uses the "Main Image" from your Sanity post
   - Automatically optimized to 1200x630px for social media
   - High quality (90%) JPG format for best compatibility

2. **Dynamic SVG (Fallback)**
   - If no Sanity image is provided
   - Generates beautiful branded image with post title
   - Uses your brand colors and typography

### Image Optimization Features:
- ✅ **Perfect dimensions**: 1200x630px (Twitter/Facebook standard)
- ✅ **Smart cropping**: Centers the most important part of your image
- ✅ **Format optimization**: JPG for OG images, WebP for page display
- ✅ **Quality control**: 90% quality for social sharing
- ✅ **CDN delivery**: Fast loading through Sanity's global CDN

## 🔍 Troubleshooting

### Image Not Showing on Social Media?
1. **Check the image exists**: Visit the OG image URL directly
2. **Verify image format**: Should be JPG/PNG, under 5MB
3. **Clear social media cache**: Use Facebook Debugger "Scrape Again"
4. **Check accessibility**: Ensure your site is publicly accessible

### Finding Your OG Image URL:
1. Visit your blog post
2. View page source (Ctrl+U / Cmd+U)
3. Search for `<meta property="og:image"`
4. Copy the URL and test it directly

### Example OG Image URLs:
```
With Sanity Image:
https://cdn.sanity.io/images/project/dataset/your-image-id-1200x630.jpg?crop=center&fit=crop&format=jpg&q=90

Without Sanity Image (Fallback):
https://doudgaya.xyz/api/og?title=Blog%20Title&author=Your%20Name&category=Category
```

## 📱 Mobile Testing
- **WhatsApp**: Share your blog post link
- **iMessage**: Paste your blog post URL
- **Native sharing**: Use device share button on mobile

Your Sanity images will now display perfectly when shared on social media! 🎉
