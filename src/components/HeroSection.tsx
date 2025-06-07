import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Car Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80)",
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 animate-fade-in">
        <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
          Новый уровень
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
            роскоши
          </span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Откройте мир премиальных автомобилей Mercedes-Benz. Традиции качества
          с 1886 года.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <span className="flex items-center space-x-2">
              <span>Каталог моделей</span>
              <Icon
                name="ArrowRight"
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </span>
          </button>

          <button className="group border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
            <span className="flex items-center space-x-2">
              <Icon name="Play" size={20} />
              <span>Смотреть видео</span>
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white/60">
          <span className="text-sm mb-2">Прокрутите вниз</span>
          <Icon name="ChevronDown" size={24} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
