import PageLayout from "@/components/PageLayout";

const Privacy = () => (
  <PageLayout>
    <section className="container mx-auto px-6 py-20 max-w-3xl">
      <h1 className="font-heading text-4xl font-bold mb-2 gradient-text">Privacy Policy</h1>
      <p className="text-muted-foreground mb-12">Last updated: March 2025</p>

      <div className="glass-strong p-8 sm:p-12 space-y-8">
        {[
          { t: "Information We Collect", p: "Invoiso collects only the data you provide within the app — such as business details, client information, and invoice data. We do not collect personal data beyond what is necessary to provide the service." },
          { t: "How We Use Your Data", p: "Your data is used solely to generate invoices, estimates, and reports within the app. We do not sell, share, or rent your personal information to third parties." },
          { t: "Data Storage", p: "All data is stored securely on your device. If you use cloud sync features, data is encrypted in transit and at rest using industry-standard protocols." },
          { t: "Third-Party Services", p: "Invoiso may integrate with third-party payment processors or analytics tools. These services have their own privacy policies and we encourage you to review them." },
          { t: "Your Rights", p: "You can delete all your data at any time by uninstalling the app or using the data management options within the app settings." },
          { t: "Contact", p: "If you have questions about this Privacy Policy, please reach out via our Support page." },
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

export default Privacy;
