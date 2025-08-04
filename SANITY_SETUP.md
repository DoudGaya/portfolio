# Sanity Studio Setup

This project includes an embedded Sanity Studio for managing blog content.

## Setup Instructions

1. **Create a Sanity account** at [sanity.io](https://sanity.io)

2. **Install Sanity CLI** globally:
   ```bash
   npm install -g @sanity/cli
   ```

3. **Login to Sanity**:
   ```bash
   sanity login
   ```

4. **Create a new Sanity project**:
   ```bash
   sanity init --project-name "abdulrahman-portfolio"
   ```

5. **Update environment variables**:
   - Copy `.env.example` to `.env.local`
   - Replace `your-project-id` with your actual Sanity project ID
   - Update other variables as needed

6. **Access the Studio**:
   - Navigate to `/studio` in your browser
   - Start creating blog posts and author profiles

## Features

- **Blog Management**: Create and manage blog posts with rich text content
- **Author Profiles**: Manage author information and bios
- **Categories**: Organize posts by categories (SaaS, Startup, Technical, etc.)
- **SEO Optimization**: Meta descriptions, slugs, and featured images
- **Embedded Studio**: Manage content directly from your portfolio site

## Content Types

- **Blog Posts**: Title, slug, content, featured image, categories, publish date
- **Authors**: Name, bio, profile image
- **Rich Content**: Support for images, links, headings, and formatted text
