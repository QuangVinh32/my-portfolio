import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
  User, MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";


export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Liên <span className="text-primary"> hệ</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Bạn có dự án trong đầu hoặc muốn hợp tác? Hãy thoải mái liên hệ. Tôi luôn sẵn sàng thảo luận về những cơ hội mới.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Thông tin liên lạc
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="mt-2">
                  <span className="font-medium">Email: </span>
                  <a
                    href="mailto:hello@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    trcuong666@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="mt-2">
                  <span className="font-medium">Số điện thoại: </span>
                  <a
                    href="tel:+11234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    0357700838
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="mt-2">
                  <span className="font-medium">Địa chỉ: </span>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Ngõ 155 Cầu Giấy, Hà Nội
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-10">
              <h4 className="font-medium mb-5 text-lg">Kết nối với tôi</h4>
              <div className="flex justify-center gap-5">
                {[
                  { icon: <Linkedin />, href: "#" },
                  { icon: <Twitter />, href: "#" },
                  { icon: <Instagram />, href: "#" },
                  { icon: <Twitch />, href: "#" },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    className="p-3 rounded-full bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>



          <div className="bg-card p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
            <h3 className="text-2xl font-semibold mb-6"> Gửi tin nhắn</h3>

            <form className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className=" text-sm font-medium mb-2 flex items-start">
                  Tên của bạn
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="Lê Quang Vinh"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="flex items-start text-sm font-medium mb-2">
                  Email của bạn
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="trcuong666@gmail.com"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="flex items-start text-sm font-medium mb-2">
                  Tin nhắn của bạn
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-muted-foreground" size={18} />
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={1}
                    className="w-full pl-10 pr-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary focus:outline-none resize-y"
                    placeholder="Xin chào, tôi muốn nói về..."
                  />

                </div>
              </div>
              {/* Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button hover:shadow-lg hover:shadow-indigo-500/50 w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Gửi tin nhắn"}
                <Send size={16} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
