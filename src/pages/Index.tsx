import PageLayout from "@/components/PageLayout";
import { FileText, Users, Palette, BarChart3, Share2, Crown, CheckCircle2 } from "lucide-react";

const features = [
  { icon: FileText, title: "Create invoices quickly", desc: "Build invoices with line items, taxes, and totals. Track status at a glance: unpaid, paid, partial, and overdue." },
  { icon: Users, title: "Clients & catalog", desc: "Save clients and reusable items or services to speed up every new invoice." },
  { icon: Palette, title: "Your brand, your document", desc: "Set up business info and settings so every document looks consistent and professional." },
  { icon: BarChart3, title: "Templates & reports", desc: "Use templates to match your style, and reports to understand how your business performs." },
  { icon: Share2, title: "Share & export", desc: "Generate and share documents including PDF and send them to customers when you're done." },
  { icon: Crown, title: "Invoiso Pro", desc: "Upgrade for the full premium experience and manage billing from the app." },
];

const bullets = [
  "Create and manage invoices and estimates",
  "Filter by paid, unpaid, partial, and overdue",
  "Client and item/service library",
  "Business profile and invoice settings",
  "Templates and reporting",
  "PDF generation and sharing",
  "Optional Invoiso Pro subscription",
];

const Index = () => (
  <PageLayout>
    {/* Hero */}
    <section className="container mx-auto px-6 py-20 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="opacity-0 animate-fade-up">
            <span className="inline-block glass px-4 py-1.5 text-xs font-medium text-primary mb-6">
              Available on Play Store & App Store
            </span>
          </div>
          <h1 className="opacity-0 animate-fade-up font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Simple invoicing for{" "}
            <span className="gradient-text">freelancers</span> & small businesses
          </h1>
          <p className="opacity-0 animate-fade-up-delay text-lg text-muted-foreground mb-8 max-w-lg">
            Create polished invoices and quotes, stay on top of payments, and keep your business organized — right from your phone.
          </p>
          <div className="opacity-0 animate-fade-up-delay-2 flex flex-wrap gap-4">
            <a href="#" className="gradient-btn inline-flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
              App Store
            </a>
            <a href="#" className="gradient-btn inline-flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3.61 1.814L13.793 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.61-.92zm10.893 9.476l2.838-2.838L5.718 1.362l8.785 9.928zm0 1.42l-8.785 9.928 11.623-7.09-2.838-2.838zm3.57-1.42l3.186-1.944a1 1 0 000-1.692l-3.187-1.944-3.062 3.062 3.062 3.518z"/></svg>
              Play Store
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
            <img
              src="/images/hero-mockup.png"
              alt="Invoiso app preview"
              className="relative w-72 sm:w-80 drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="container mx-auto px-6 py-20">
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-4">
        Everything you need to <span className="gradient-text">get paid</span>
      </h2>
      <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
        Whether you bill by project, by hour, or by service, Invoiso keeps invoicing fast so you can focus on your work.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="glass p-6 hover:border-primary/30 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Bullet list */}
    <section className="container mx-auto px-6 py-20">
      <div className="glass-strong p-8 sm:p-12 max-w-2xl mx-auto glow">
        <h2 className="font-heading text-2xl font-bold mb-8 text-center">What's inside</h2>
        <ul className="space-y-4">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <span className="text-secondary-foreground">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* CTA */}
    <section className="container mx-auto px-6 py-20 text-center">
      <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
        Ready to simplify your <span className="gradient-text">invoicing</span>?
      </h2>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">Download Invoiso today and start getting paid faster.</p>
      <div className="flex justify-center gap-4">
        <a href="#" className="gradient-btn">Get Invoiso Free</a>
      </div>
    </section>
  </PageLayout>
);

export default Index;
