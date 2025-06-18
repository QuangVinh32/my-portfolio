import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-6  from-primary/10 via-background to-primary/10 border-t mt-12 flex flex-col md:flex-row justify-between items-center gap-4 relative">
      <p className="text-sm text-muted-foreground tracking-wide">
        &copy; {new Date().getFullYear()} <span className="font-semibold text-primary">Pedrotech.co</span>. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-3 rounded-full bg-primary shadow-lg hover:bg-primary/80 text-white transition-colors duration-200 flex items-center justify-center"
        aria-label="Back to top"
      >
        <ArrowUp size={22} />
      </a>
    </footer>
  );
};
