import Image from 'next/image';
import design  from '@/public/design.jpg'




export default function Design() {
  return (
    <main className="bg-background min-h-screen">
      <div className="max-w-2xl mx-auto py-12 px-4 w-full">
        <section className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Design Materials & References</h1>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Curated resources, guides, and inspiration for UI/UX, branding, and product design. Explore the essentials to elevate your design skills and workflow.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Recommended Resources</h2>
          <ul className="space-y-3 text-base">
            <li>
              <a href="https://refactoringui.com/" target="_blank" rel="noopener" className="text-primary underline hover:text-primary/80">Refactoring UI</a> – Practical tips for designing beautiful user interfaces.
            </li>
            <li>
              <a href="https://www.behance.net/" target="_blank" rel="noopener" className="text-primary underline hover:text-primary/80">Behance</a> – Portfolio inspiration and trending design projects.
            </li>
            <li>
              <a href="https://www.figma.com/community" target="_blank" rel="noopener" className="text-primary underline hover:text-primary/80">Figma Community</a> – Free design files, UI kits, and plugins.
            </li>
            <li>
              <a href="https://www.awwwards.com/" target="_blank" rel="noopener" className="text-primary underline hover:text-primary/80">Awwwards</a> – Award-winning web design inspiration.
            </li>
            <li>
              <a href="https://fonts.google.com/" target="_blank" rel="noopener" className="text-primary underline hover:text-primary/80">Google Fonts</a> – Free, open-source fonts for your projects.
            </li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Sample Reference</h2>
          <div className="rounded-lg overflow-hidden border border-border bg-muted/30 flex items-center justify-center">
            <Image src={design} alt="Design reference" className="object-cover w-full h-64" />
          </div>
        </section>
      </div>
    </main>
  );
}
