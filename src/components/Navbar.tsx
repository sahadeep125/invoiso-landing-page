import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/invoiso-logo.png" alt="Invoiso" className="w-10 h-10 rounded-xl" />
          <span className="font-heading text-xl font-bold gradient-text">Invoiso</span>
        </Link>
        <div className="flex items-center gap-1">
          {[
            { path: "/", label: "Home" },
            { path: "/privacy", label: "Privacy" },
            { path: "/terms", label: "Terms" },
            { path: "/support", label: "Support" },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                isActive(path)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
