import { GraduationCap, School } from "lucide-react";

export const EducationSection = () => {
  const educationData = [
    {
      title: "Đại học Xây Dựng Hà Nội",
      subtitle: "Khoa Công nghệ Thông tin",
      time: "2020 - 2024",
      desc: "Chuyên ngành Kỹ thuật phần mềm. Tập trung vào backend, thiết kế giao diện, kiến trúc phần mềm, cơ sở dữ liệu và bảo mật ứng dụng web/app.",
    },
    {
      title: "Ngoại ngữ",
      subtitle: "TOEIC: 650 – IELTS: 5.5",
      time: "2023",
      desc: "",
    },
  ];

  const certificateData = [
    {
      title: "Java FullStack Developer - VTI",
      time: "2023 - 2024",
      desc: "Spring Boot, Spring JPA, Spring Core, Hibernate, Spring Security, REST API, JWT, OAuth2, React, TailwindCSS, Docker, MySQL.",
    },
    {
      time: "2023",
      desc: "Thiết kế & tối ưu cơ sở dữ liệu quan hệ, ERD, normalization, Bloc(Flutter), hook(ReactJs), MVC, MVVM, 3Layer(Spring), SOLID.",
    },
  ];

  return (
    <section id="education" className="py-24 px-4 bg-secondary/30 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Học <span className="text-primary">vấn</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Dưới đây là quá trình học tập và các chứng chỉ đã đạt được.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Timeline */}
          <div className="relative">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="text-primary" /> Quá trình học tập
            </h3>

            {educationData.map((edu, i) => (
              <div key={i} className="mb-8 relative">
                <h4 className="text-lg font-semibold">{edu.title}</h4>
                {edu.subtitle && (
                  <p className="text-sm text-muted-foreground">{edu.subtitle}</p>
                )}
                {edu.time && (
                  <p className="text-xs text-primary font-medium">{edu.time}</p>
                )}
                {edu.desc && <p className="text-sm mt-1">{edu.desc}</p>}
              </div>
            ))}
          </div>

          {/* Certificates */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <School className="text-primary" /> Khóa học & Chứng chỉ
            </h3>

            {certificateData.map((cert, i) => (
              <div
                key={i}
                className="bg-card p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <h4 className="text-base font-medium">{cert.title}</h4>
                <p className="text-xs text-primary font-medium">{cert.time}</p>
                <p className="text-sm mt-1">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};