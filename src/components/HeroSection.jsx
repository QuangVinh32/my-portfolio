import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Xin chào, Tôi là</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Lê Quang
            </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Vinh
            </span>

          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Tôi tạo ra những trải nghiệm web tuyệt vời với công nghệ hiện đại. Chuyên về phát triển front-end và back-end, tôi xây dựng những giao diện vừa đẹp vừa hữu dụng.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a
              href="#projects"
              className="cosmic-button transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/50"
            >
              Thông tin của tôi
            </a>

          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Cuộn xuống </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
