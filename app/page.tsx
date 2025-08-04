import Link from 'next/link';
import { Projects } from '@/components/Projects';
import { socials } from '@/lib/utils';
import { TechStack } from '@/components/TechStack';
import { Button } from '@/components/ui/button';

interface Social {
  name: string;
  link: string;
  icon: React.ReactNode;
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Abdulrahman Dauda Gaya",
    "jobTitle": "Full Stack Developer & CTO",
    "description": "Full-stack developer & CTO with 8+ years building SaaS, fintech, and real estate platforms",
    "url": "https://doudgaya.com",
    "sameAs": [
      "https://github.com/doudgaya",
      "https://linkedin.com/in/doudgaya",
      "https://twitter.com/doudgaya"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Jigawa State ICT"
    },
    "offers": [
      {
        "@type": "Service",
        "name": "MVP Development",
        "description": "Get your product to market fast with a robust, scalable foundation",
        "priceRange": "$5,000 - $15,000"
      },
      {
        "@type": "Service", 
        "name": "Full Platform Build",
        "description": "Complete web application with admin dashboard, payments, and integrations",
        "priceRange": "$15,000 - $30,000"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            I help startups build fast,{' '}
            <span className="text-primary">scalable web and mobile platforms</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Full-stack developer & CTO with 8+ years building SaaS, fintech, and real estate platforms. 
            I turn your ideas into production-ready applications that scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="px-8 py-3 text-lg">
              <a href="#contact">Get Started - Free Consultation</a>
            </Button>
            <Button variant="outline" asChild size="lg" className="px-8 py-3 text-lg">
              <a href="#projects">View My Work</a>
            </Button>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            {socials.map((social: Social) => (
              <Link
                href={social.link}
                target="_blank"
                key={social.name}
                aria-label={social.name}
                className="p-3 rounded-full hover:bg-secondary transition-colors"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Abdulrahman Dauda Gaya</h2>
              <p className="text-md text-muted-foreground mb-4">
                CTO at Jigawa State ICT with 8+ years of experience building web platforms for startups and enterprises. 
                I specialize in turning complex business requirements into clean, scalable code.
              </p>
              <p className="text-md text-muted-foreground mb-6">
                My clients include SaaS founders, fintech startups, and real estate businesses across Nigeria, UK, and the US. 
                I've helped them raise funding, scale their platforms, and achieve sustainable growth.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-primary">$2M+</div>
                  <div className="text-sm text-muted-foreground">Revenue Generated for Clients</div>
                </div>
              </div>
            </div>
            <div>
              <TechStack />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How I Can Help Your Startup</h2>
            <p className="text-xl text-muted-foreground">
              From MVP to scale, I provide end-to-end development solutions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">MVP Development</h3>
              <p className="text-muted-foreground mb-4">
                Get your product to market fast with a robust, scalable foundation.
              </p>
              <div className="text-2xl font-bold text-primary mb-2">$5,000 - $15,000</div>
              <div className="text-sm text-muted-foreground">4-8 weeks delivery</div>
            </div>
            <div className="p-6 border dark:border-gray-700  rounded-lg hover:shadow-lg transition-shadow bg-primary/5">
              <h3 className="text-xl font-semibold mb-3">Full Platform Build</h3>
              <p className="text-muted-foreground mb-4">
                Complete web application with admin dashboard, payments, and integrations.
              </p>
              <div className="text-2xl font-bold text-primary mb-2">$15,000 - $30,000</div>
              <div className="text-sm text-muted-foreground">8-16 weeks delivery</div>
            </div>
            <div className="p-6 border dark:border-gray-700  rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Scale & Optimize</h3>
              <p className="text-muted-foreground mb-4">
                Performance optimization, infrastructure scaling, and team augmentation.
              </p>
              <div className="text-2xl font-bold text-primary mb-2">$3,000/month</div>
              <div className="text-sm text-muted-foreground">Ongoing retainer</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Recent Projects</h2>
            <p className="text-xl text-muted-foreground">
              Real platforms, real results for startups and businesses
            </p>
          </div>
          <Projects />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border dark:border-gray-700 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Abdulrahman delivered our real estate platform ahead of schedule and under budget. 
                The code quality is exceptional, and we've had zero downtime since launch."
              </p>
              <div className="font-semibold">Sarah Johnson</div>
              <div className="text-sm text-muted-foreground">CEO, PropTech Startup</div>
            </div>
            <div className="p-6 border dark:border-gray-700 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Working with Abdulrahman was a game-changer. He understood our fintech requirements 
                and built a secure, compliant platform that helped us raise $2M in funding."
              </p>
              <div className="font-semibold">Michael Chen</div>
              <div className="text-sm text-muted-foreground">Founder, FinanceFlow</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-muted/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your project and how I can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="px-8 py-3 text-lg">
              <a href="mailto:doudgaya@gmail.com">Schedule Free Consultation</a>
            </Button>
            <Button variant="outline" asChild size="lg" className="px-8 py-3 text-lg">
              <a href="mailto:doudgaya@gmail.com">Email Me</a>
            </Button>
          </div>
          <div className="mt-8 p-6 border dark:border-gray-700  rounded-lg bg-background">
            <h3 className="font-semibold mb-2">Quick Response Guarantee</h3>
            <p className="text-muted-foreground">
              I respond to all project inquiries within 24 hours. Let's turn your idea into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Latest Insights</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Startup guides, SaaS development tips, and success stories from the field
          </p>
          <Button asChild size="lg" className="px-8">
            <Link href="/blog">Read My Blog</Link>
          </Button>
        </div>
      </section>
    </main>
    </>
  );
}
