import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);


  useEffect(() => {
    generateStars();
    generateMeteors();

    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);


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

      {isDarkMode ? (
        // 🌙 Mặt Trăng
        <div
          className="moon"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: "radial-gradient(circle at 30% 30%, #fff, #ccc)",
            position: "absolute",
            top: "10%",
            left: "8%",
            boxShadow: "0 0 40px rgba(255, 255, 200, 0.6)",
            zIndex: 1,
          }}
        />
      ) : (
        // ☀️ Mặt Trời
        <div
          className="sun"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: "radial-gradient(circle at 30% 30%, #FFD700, #FFA500)",
            position: "absolute",
            top: "10%",
            left: "8%",
            boxShadow: "0 0 50px rgba(255, 200, 0, 0.7)",
            zIndex: 1,
          }}
        />
      )}

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



      {stars.map((star) => (
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


      {meteors.map((meteor) => (
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
