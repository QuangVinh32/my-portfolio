import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const navItems = [
  { name: "Trang chủ", href: "#hero" },
  { name: "Giới thiệu Về tôi", href: "#about" },
  { name: "Kỹ năng", href: "#skills" },
  { name: "Dự án", href: "#projects" },
  { name: "Học vấn", href: "#education" },
  { name: "Liên hệ", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={cn(
          "fixed w-full z-60 transition-all duration-300",
          isScrolled
            ? theme === "light"
              ? "py-4 bg-white  shadow-xs"
              : "py-4 bg-background  shadow-xs"
            : "py-4"
        )}
      >
        <div className="container flex items-center justify-between">
          <a className="text-xl font-bold text-primary" href="#hero">
            <span className="text-glow text-foreground">CV</span> Portfolio
          </a>

          {/* desktop nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* mobile button */}
          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            className="md:hidden p-2 text-foreground z-70"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center z-40 transition-all duration-500 ease-in-out transform",
          isMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >

        <div className="flex flex-col space-y-8 text-xl">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
