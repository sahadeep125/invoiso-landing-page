import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PageLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen relative overflow-hidden">
    {/* Background orbs */}
    <div className="fixed inset-0 -z-10">
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl animate-glow-pulse" style={{ animationDelay: "2s" }} />
    </div>
    <Navbar />
    <main className="pt-24">{children}</main>
    <Footer />
  </div>
);

export default PageLayout;
