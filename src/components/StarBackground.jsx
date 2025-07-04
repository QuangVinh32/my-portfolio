import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);


  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    checkDarkMode();

    const observer = new MutationObserver(() => {
      checkDarkMode();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const handleResize = () => {
      if (isDarkMode) {
        generateStars();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      generateStars();
      generateMeteors();
    } else {
      // ✅ Clear stars & meteors khi chuyển về sáng
      setStars([]);
      setMeteors([]);
    }
  }, [isDarkMode]);



  const generateSingleStar = (id) => ({
    id,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.5,
    twinkleDuration: Math.random() * 4 + 2 + "s",
  });

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push(generateSingleStar(i));
    }

    setStars(newStars);
  };
  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      <div
        className={`absolute rounded-full 
          transition-all duration-300 ease-in-out
          w-[8vw] h-[8vw] min-w-[32px] min-h-[32px] max-w-[50px] max-h-[50px]
          top-[8vh] left-[8vw]
          sm:top-[10vh] sm:left-[8vw]
          ${isDarkMode
            ? "bg-gradient-to-br from-white to-gray-300 shadow-[0_0_40px_rgba(255,255,200,0.6)]"
            : "bg-gradient-to-br from-yellow-400 to-orange-400 shadow-[0_0_50px_rgba(255,200,0,0.7)]"}
     `}
      />

      {isDarkMode && (
        <div
          className="aurora"
          style={{
            position: "absolute",
            top: "0%",
            left: "0%",
            width: "100%",
            height: "100%",
            background: "radial-gradient(ellipse at 50% 0%, rgba(0,255,128,0.2), transparent 70%)",
            mixBlendMode: "screen",
            animation: "auroraWave 10s ease-in-out infinite",
            zIndex: 0.5,
            pointerEvents: "none",
          }}
        />
      )}

      {isDarkMode &&
        stars.map((star) => (
          <div
            key={star.id}
            className="twinkle"
            style={{
              position: "absolute",
              width: star.size + "px",
              height: star.size + "px",
              borderRadius: "50%",
              backgroundColor: "#fff",
              left: star.x + "%",
              top: star.y + "%",
              opacity: star.opacity,
              animationDuration: star.twinkleDuration,
            }}
          />
        ))}

      {isDarkMode &&
        meteors.map((meteor) => (
          <div
            key={meteor.id}
            className="meteor animate-meteor"
            style={{
              width: meteor.size * 50 + "px",
              height: meteor.size * 2 + "px",
              left: meteor.x + "%",
              top: meteor.y + "%",
              animationDelay: meteor.delay,
              animationDuration: meteor.animationDuration + "s",
            }}
          />
        ))}

    </div>
  );
};
