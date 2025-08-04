# Abdulrahman Dauda Gaya - Portfolio

A high-converting portfolio website for attracting international tech clients. Built with Next.js 13, TypeScript, Tailwind CSS, and Sanity CMS.

## 🚀 Features

### Core Features
- **High-Converting Landing Page** - Optimized for $5K-$30K international contracts
- **Professional Service Pages** - Detailed service offerings with clear pricing
- **Project Showcase** - Comprehensive project portfolio with case studies
- **Blog System** - Sanity CMS integration for startup guides and success stories
- **SEO Optimized** - Dynamic sitemaps, robots.txt, and Open Graph images

### Technical Features
- **Next.js 13 App Router** - Latest React framework with server components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Sanity Studio** - Embedded CMS for content management
- **Responsive Design** - Mobile-first approach
- **Dark/Light Mode** - Theme switching capability

### SEO & Performance
- **Dynamic Sitemaps** - Automatically generated XML sitemaps
- **Robots.txt** - Dynamic robots.txt generation
- **Open Graph Images** - Dynamic social media preview images
- **Structured Data** - JSON-LD for better search visibility
- **Performance Optimized** - Fast loading times and Core Web Vitals

## 🛠️ Tech Stack

- **Frontend**: Next.js 13, TypeScript, Tailwind CSS
- **CMS**: Sanity Studio (embedded)
- **UI Components**: Radix UI, shadcn/ui
- **Icons**: React Icons
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
├── app/
│   ├── (routes)/
│   │   ├── about/          # About page
│   │   ├── blog/           # Blog listing and posts
│   │   ├── contact/        # Contact information
│   │   ├── projects/       # Project showcase
│   │   └── services/       # Service offerings
│   ├── studio/             # Embedded Sanity Studio
│   ├── og/                 # Open Graph image generation
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.txt/         # Dynamic robots.txt
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── Navbar.tsx          # Navigation component
│   ├── Projects.tsx        # Project showcase
│   └── TechStack.tsx       # Technology stack display
├── lib/
│   ├── sanity.ts           # Sanity client configuration
│   └── utils.tsx           # Utility functions and data
├── schemas/                # Sanity schema definitions
└── public/                 # Static assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Sanity account (for blog functionality)

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   ```
   Update the variables in `.env.local` with your actual values.

4. **Set up Sanity CMS** (optional, for blog functionality):
   ```bash
   npm install -g @sanity/cli
   sanity login
   sanity init --project-name "abdulrahman-portfolio"
   ```
   See `SANITY_SETUP.md` for detailed instructions.

5. **Start the development server**:
   ```bash
   npm run dev
   ```

6. **Open your browser**:
   Navigate to `http://localhost:3000`

## 📝 Content Management

### Blog Management
- Access the embedded Sanity Studio at `/studio`
- Create author profiles and blog posts
- Organize content with categories
- Publish and manage content directly from the site

### Project Updates
- Update project information in `lib/utils.tsx`
- Add project images to the `public/` directory
- Projects automatically appear on the homepage and projects page

### Service Information
- Modify service details in `app/services/page.tsx`
- Update pricing and features as needed

## 🔧 Customization

### Personal Information
1. Update personal details in `lib/utils.tsx`
2. Replace images in the `public/` directory
3. Modify contact information in `app/contact/page.tsx`
4. Update social media links in `lib/utils.tsx`

### Styling
- Customize colors in `tailwind.config.js`
- Modify components in `components/` directory
- Update global styles in `app/globals.css`

### SEO Configuration
- Update metadata in `app/layout.tsx`
- Modify structured data in `app/page.tsx`
- Customize Open Graph images in `app/og/route.tsx`

## 📈 SEO Features

### Automatic SEO
- **Dynamic Sitemaps**: Auto-generated XML sitemaps for all pages
- **Robots.txt**: Dynamic robots.txt with proper directives
- **Meta Tags**: Comprehensive meta tags for all pages
- **Open Graph**: Dynamic OG images for social sharing
- **Structured Data**: JSON-LD for better search understanding

### Blog SEO
- Individual meta tags for each blog post
- Category-based organization
- Author information and bios
- Featured images for social sharing

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
- Compatible with any Next.js hosting platform
- Ensure environment variables are properly set
- Build command: `npm run build`
- Start command: `npm start`

## 📊 Performance

- **Core Web Vitals Optimized**
- **Fast Loading Times**
- **Mobile-First Design**
- **SEO Score 95+**
- **Lighthouse Performance 90+**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For questions about this portfolio template:
- Email: doudgaya@gmail.com
- GitHub Issues: Create an issue in this repository

## 🎯 Business Impact

This portfolio is designed to:
- **Attract International Clients**: Professional design and clear value proposition
- **Showcase Expertise**: Detailed project case studies and technical skills
- **Build Trust**: Client testimonials and proven results
- **Generate Leads**: Clear CTAs and contact information
- **Establish Authority**: Blog content and thought leadership

Perfect for full-stack developers looking to attract high-value international contracts in the $5K-$30K range.
