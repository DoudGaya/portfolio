import Link from 'next/link'
import { socials } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface Social {
  name: string;
  link: string;
  icon: React.ReactNode;
}

const contactMethods = [
  {
    type: 'Email',
    value: 'doudgaya@gmail.com',
    href: 'mailto:doudgaya@gmail.com',
    description: 'Primary contact for project inquiries',
    response: '24 hours'
  },
  {
    type: 'Phone/WhatsApp',
    value: '+234 XXX XXX XXXX',
    href: 'tel:+234XXXXXXXXX',
    description: 'Direct contact for urgent matters',
    response: 'Same day'
  },
  {
    type: 'LinkedIn',
    value: 'linkedin.com/in/doudgaya',
    href: 'https://linkedin.com/in/doudgaya',
    description: 'Professional networking and updates',
    response: '1-2 days'
  },
  {
    type: 'Location',
    value: 'Jigawa State, Nigeria',
    href: '#',
    description: 'Available for remote work globally',
    response: 'UTC+1 timezone'
  }
]

const faqs = [
  {
    question: 'What is your typical project timeline?',
    answer: 'MVP projects typically take 4-8 weeks, while full platforms take 8-16 weeks. Timeline depends on complexity and feature requirements.'
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Yes! I work with clients across Nigeria, UK, US, and other countries. All communication is in English and I\'m comfortable with different time zones.'
  },
  {
    question: 'What is your payment structure?',
    answer: 'I typically work with 50% upfront and 50% on completion for smaller projects. Larger projects can be broken into milestone-based payments.'
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes, I provide post-launch support and offer ongoing maintenance packages. Most projects include 2-4 weeks of free support after launch.'
  },
  {
    question: 'Can you help with an existing project?',
    answer: 'Absolutely! I can review, optimize, and add features to existing codebases. I work with various tech stacks and can adapt to your current setup.'
  }
]

export default function ContactPage() {
  return (
    <main className="bg-background min-h-screen">
      <div className="max-w-6xl mx-auto py-12 px-4">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Let's Build Something Amazing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to turn your idea into a successful platform? Let's discuss your project and how I can help you achieve your goals.
          </p>
        </section>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="p-6 border rounded-lg hover:shadow-md transition-shadow">
                    <h3 className="font-semibold text-lg mb-2">{method.type}</h3>
                    <p className="text-primary font-medium mb-2">
                      {method.href.startsWith('http') || method.href.startsWith('mailto:') || method.href.startsWith('tel:') ? (
                        <a href={method.href} target={method.href.startsWith('http') ? '_blank' : undefined} className="hover:underline">
                          {method.value}
                        </a>
                      ) : (
                        method.value
                      )}
                    </p>
                    <p className="text-sm text-muted-foreground mb-1">{method.description}</p>
                    <p className="text-xs text-muted-foreground">Response time: {method.response}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Social Media */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Follow Me</h2>
              <div className="flex gap-4">
                {socials.map((social: Social) => (
                  <Link
                    href={social.link}
                    target="_blank"
                    key={social.name}
                    className="flex items-center gap-3 p-4 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    {social.icon}
                    <span className="font-medium">{social.name}</span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Quick Actions */}
            <section className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Button asChild className="w-full">
                  <a href="mailto:doudgaya@gmail.com?subject=Project Inquiry&body=Hi Abdulrahman, I'd like to discuss a project...">
                    Send Project Brief
                  </a>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <a href="mailto:doudgaya@gmail.com?subject=Free Consultation Request">
                    Schedule Consultation
                  </a>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/services">
                    View Services & Pricing
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/projects">
                    See Previous Work
                  </Link>
                </Button>
              </div>
            </section>
          </div>

          {/* FAQ Sidebar */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-border pb-4">
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Availability Status */}
            <section className="p-6 bg-muted/30 rounded-lg">
              <h3 className="font-semibold mb-4">Current Availability</h3>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Available for new projects</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Currently accepting projects starting in Q1 2025. Book your consultation early to secure your spot.
              </p>
              <Button size="sm" asChild className="w-full">
                <a href="mailto:doudgaya@gmail.com">Reserve Your Spot</a>
              </Button>
            </section>

            {/* Response Guarantee */}
            <section className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Response Guarantee</h3>
              <p className="text-sm text-muted-foreground">
                I respond to all project inquiries within 24 hours. If you don't hear back, 
                please check your spam folder or try an alternative contact method.
              </p>
            </section>
          </div>
        </div>

        {/* Project Brief Template */}
        <section className="mt-16 p-8 bg-muted/30 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Project Brief Template</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground mb-6 text-center">
              To help me provide you with an accurate quote and timeline, please include the following information in your inquiry:
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Project Overview</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Brief description of your business</li>
                  <li>• Main goals of the project</li>
                  <li>• Target audience</li>
                  <li>• Expected launch timeline</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Technical Requirements</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Key features needed</li>
                  <li>• Integrations required</li>
                  <li>• Preferred tech stack (if any)</li>
                  <li>• Estimated budget range</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
