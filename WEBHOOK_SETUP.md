# Sanity Webhook Setup for Instant Revalidation

This guide explains how to set up Sanity webhooks for instant content updates on your live website.

## What This Does

- **Automatic Updates**: When you publish/update content in Sanity Studio, your website updates instantly
- **Performance**: Combines Next.js ISR (Incremental Static Regeneration) with on-demand revalidation
- **No Delays**: Content appears immediately without waiting for the revalidation timer

## Setup Steps

### 1. Add Webhook Secret (Optional but Recommended)

Add a webhook secret to your environment variables for security:

```bash
# In your .env.local file
SANITY_WEBHOOK_SECRET=your-super-secret-webhook-key-here
```

Generate a secure random string for the webhook secret.

### 2. Configure Webhook in Sanity

1. Go to [Sanity Management Console](https://www.sanity.io/manage)
2. Select your project (`1jj2a0lu`)
3. Go to **API** → **Webhooks**
4. Click **Create webhook**
5. Configure:
   - **Name**: Portfolio Revalidation
   - **URL**: `https://yourdomain.com/api/revalidate`
   - **Dataset**: production
   - **HTTP method**: POST
   - **API version**: v2021-06-07
   - **Include drafts**: No
   - **HTTP Headers** (if using webhook secret):
     ```
     Authorization: Bearer your-super-secret-webhook-key-here
     ```
   - **Filter**: `_type == "post"` (only trigger for blog posts)

### 3. Test the Setup

1. Publish a new blog post in Sanity Studio
2. Check your deployment logs to see the revalidation happening
3. Visit your blog page - the new post should appear immediately

## How It Works

### Revalidation Strategy

1. **Time-based Revalidation**: Pages revalidate every 60 seconds automatically
2. **On-demand Revalidation**: Webhook triggers instant revalidation when content changes
3. **Targeted Revalidation**: Only revalidates affected pages (blog listing + specific post)

### API Endpoint

The webhook hits `/api/revalidate` which:
- Verifies the webhook secret (if configured)
- Checks the document type
- Revalidates relevant pages using `revalidatePath()`
- Returns success/error response

## Troubleshooting

### Webhook Not Triggering

1. Check webhook URL is correct and accessible
2. Verify webhook secret matches environment variable
3. Check Sanity webhook logs for errors
4. Ensure filter matches your document types

### Pages Not Updating

1. Check deployment logs for revalidation messages
2. Verify the revalidation API endpoint is working
3. Test the webhook URL manually with a POST request
4. Clear browser cache and try again

## Testing Locally

To test webhooks locally, use a tool like ngrok:

```bash
# Install ngrok
npm install -g ngrok

# Expose your local server
ngrok http 3000

# Use the ngrok URL in Sanity webhook settings
# Example: https://abc123.ngrok.io/api/revalidate
```

## Production Deployment

When deploying to production:

1. Update `NEXT_PUBLIC_SITE_URL` in environment variables
2. Add `SANITY_WEBHOOK_SECRET` to your hosting platform
3. Update the webhook URL in Sanity to your production domain
4. Test with a content update to ensure it works

## Benefits

- **Instant Updates**: Content appears immediately on your live site
- **Better SEO**: Fresh content is indexed faster
- **User Experience**: Visitors always see the latest content
- **Performance**: Combines static generation with dynamic updates
