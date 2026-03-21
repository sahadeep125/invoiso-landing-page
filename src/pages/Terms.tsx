import PageLayout from "@/components/PageLayout";

const Terms = () => (
  <PageLayout>
    <section className="container mx-auto px-6 py-20 max-w-3xl">
      <h1 className="font-heading text-4xl font-bold mb-2 gradient-text">Terms of Use</h1>
      <p className="text-muted-foreground mb-12">Last updated: March 2025</p>

      <div className="glass-strong p-8 sm:p-12 space-y-8">
        {[
          { t: "Acceptance of Terms", p: "By downloading or using Invoiso, you agree to be bound by these Terms of Use. If you do not agree, please do not use the app." },
          { t: "Use of the App", p: "Invoiso is provided for personal and business invoicing purposes. You agree not to misuse the app, reverse engineer it, or use it for any unlawful purpose." },
          { t: "Invoiso Pro", p: "Invoiso Pro is an optional subscription that unlocks premium features. Subscriptions are managed through the App Store or Google Play and are subject to their respective terms." },
          { t: "Intellectual Property", p: "All content, design, and code within Invoiso are the property of Invoiso and protected by applicable intellectual property laws." },
          { t: "Limitation of Liability", p: "Invoiso is provided 'as is' without warranties of any kind. We are not liable for any damages arising from the use or inability to use the app." },
          { t: "Changes to Terms", p: "We may update these Terms from time to time. Continued use of the app after changes constitutes acceptance of the new terms." },
          { t: "Contact", p: "For questions about these Terms, please visit our Support page." },
        ].map(({ t, p }) => (
          <div key={t}>
            <h2 className="font-heading text-xl font-semibold mb-3">{t}</h2>
            <p className="text-muted-foreground leading-relaxed">{p}</p>
          </div>
        ))}
      </div>
    </section>
  </PageLayout>
);

export default Terms;
