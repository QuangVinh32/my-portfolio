import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Giới thiệu về<span className="text-primary"> tôi</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Nhà phát triển web đam mê & Người sáng tạo công nghệ
            </h3>

            <p className="text-muted-foreground">
              Với hơn 2 năm kinh nghiệm trong lĩnh vực phát triển web, tôi chuyên tạo ra các ứng dụng web có khả năng phản hồi, dễ truy cập và hiệu suất cao bằng các công nghệ hiện đại.
            </p>

            <p className="text-muted-foreground">
              Tôi đam mê tạo ra các giải pháp tinh tế cho các vấn đề phức tạp và không ngừng học hỏi các công nghệ và kỹ thuật mới để luôn đi đầu trong bối cảnh web luôn thay đổi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                  Tạo các trang web và ứng dụng web có khả năng phản hồi cao với các nền tảng hiện đại.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                  Thiết kế giao diện người dùng trực quan và trải nghiệm người dùng liền mạch.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Chỉ đạo các dự án từ khâu hình thành đến khi hoàn thành bằng phương pháp linh hoạt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
