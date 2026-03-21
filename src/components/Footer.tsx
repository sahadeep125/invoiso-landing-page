import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border mt-24">
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/images/invoiso-logo.png" alt="Invoiso" className="w-8 h-8 rounded-lg" />
          <span className="font-heading font-bold gradient-text">Invoiso</span>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Use</Link>
          <Link to="/support" className="hover:text-foreground transition-colors">Support</Link>
        </div>
        <p className="text-sm text-muted-foreground">© 2025 Invoiso. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
