import PageLayout from "@/components/PageLayout";
import { ExternalLink, Mail, MessageCircle } from "lucide-react";

const Support = () => (
  <PageLayout>
    <section className="container mx-auto px-6 py-20 max-w-2xl text-center">
      <h1 className="font-heading text-4xl font-bold mb-4 gradient-text">Support</h1>
      <p className="text-muted-foreground mb-12">Need help? We're here for you.</p>

      <div className="glass-strong p-8 sm:p-12 glow space-y-8">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
          <MessageCircle className="w-8 h-8 text-primary" />
        </div>
        <p className="text-secondary-foreground leading-relaxed">
          For any questions, issues, or feedback about Invoiso, please reach out through our support channel.
        </p>
        <a
          href="mailto:support@invoiso.app"
          className="gradient-btn inline-flex items-center gap-2"
        >
          <Mail className="w-5 h-5" />
          support@invoiso.app
        </a>
        <div className="pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground">
            You can also visit our help center for FAQs and guides:
          </p>
          <a
            href="https://invoiso.app/support"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline mt-2 text-sm font-medium"
          >
            https://invoiso.app/support
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Support;
