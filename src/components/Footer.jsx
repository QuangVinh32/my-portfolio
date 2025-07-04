import { ArrowUp, Mail, Github, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

export const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Hiển thị nút scroll khi cuộn qua 300px
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Xử lý cuộn lên đầu trang mượt mà
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="w-full py-8 px-4 sm:px-6 bg-background border-t border-foreground/10 mt-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Thông tin bản quyền */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-sm text-muted-foreground tracking-wide text-center md:text-left mb-2">
              &copy; {new Date().getFullYear()} <span className="font-semibold text-primary">Lê Quang Vinh</span>. All rights reserved.
            </p>
            
            {/* Thêm liên kết mạng xã hội */}
            <div className="flex space-x-4 mt-2">
              <a 
                href="https://www.linkedin.com/in/vinh-le-575134373/" 
                aria-label="Email"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={18} />
              </a>
              <a 
                href="https://github.com/QuangVinh32" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={18} />
              </a>
              <a 
                href="#" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Back to top button với hiệu ứng xuất hiện */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className={`fixed bottom-6 right-6 p-3 rounded-full bg-primary shadow-lg hover:bg-primary/90 text-white transition-all duration-300 flex items-center justify-center ${
            showScrollTop ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}
        >
          <ArrowUp size={22} />
        </button>
      </div>
    </footer>
  );
};