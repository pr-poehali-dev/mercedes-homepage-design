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
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80)",
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />

      {/* Animated Geometric Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-pulse"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse"
          style={{ animationDelay: "2s", animationDuration: "5s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 animate-fade-in">
        <div className="mb-6">
          <span className="inline-flex items-center px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 font-medium border border-white/20">
            <Icon name="Crown" size={16} className="mr-2" />С 1886 года
          </span>
        </div>

        <h1 className="font-montserrat font-bold text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
          Новый уровень
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-300">
            роскоши
          </span>
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed">
          Откройте мир премиальных автомобилей Mercedes-Benz.
          <br className="hidden md:block" />
          Традиции качества и инноваций с 1886 года.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group bg-white text-black px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-white/20">
            <span className="flex items-center space-x-3">
              <span>Каталог моделей</span>
              <Icon
                name="ArrowRight"
                size={22}
                className="group-hover:translate-x-2 transition-transform duration-500"
              />
            </span>
          </button>

          <button className="group border-2 border-white/50 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-black transition-all duration-500 transform hover:scale-105 backdrop-blur-sm">
            <span className="flex items-center space-x-3">
              <Icon name="Play" size={22} />
              <span>Смотреть видео</span>
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center text-white/70 group cursor-pointer">
          <span className="text-sm mb-3 group-hover:text-white/90 transition-colors duration-300">
            Прокрутите вниз
          </span>
          <div className="animate-bounce">
            <Icon
              name="ChevronDown"
              size={28}
              className="group-hover:text-white/90 transition-colors duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
