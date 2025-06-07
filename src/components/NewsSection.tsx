import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const NewsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("news-section");
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % news.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const news = [
    {
      title: "Новый EQS SUV 2024",
      description:
        "Премиальный электрический внедорожник с запасом хода до 660 км",
      image:
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      date: "15 ноября 2024",
      category: "Новинки",
    },
    {
      title: "Mercedes-AMG ONE",
      description:
        "Гиперкар с технологиями Формулы 1 теперь доступен для заказа",
      image:
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      date: "8 ноября 2024",
      category: "AMG",
    },
    {
      title: "Устойчивое развитие",
      description:
        "Mercedes-Benz стремится к углеродной нейтральности к 2039 году",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      date: "1 ноября 2024",
      category: "Экология",
    },
  ];

  return (
    <section id="news-section" className="py-32 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <span className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
              <Icon name="Newspaper" size={16} className="mr-2" />
              Новости
            </span>
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground">
              Последние
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                события
              </span>
            </h2>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main News Slider */}
          <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden group">
            {news.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === activeIndex
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-primary font-medium text-sm border border-primary/30">
                      {item.category}
                    </span>
                    <span className="text-white/80 text-sm">{item.date}</span>
                  </div>

                  <h3 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-4">
                    {item.title}
                  </h3>

                  <p className="text-white/90 text-lg mb-6 max-w-2xl">
                    {item.description}
                  </p>

                  <button className="group/btn bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center space-x-2 border border-white/20">
                    <span>Читать далее</span>
                    <Icon
                      name="ArrowRight"
                      size={16}
                      className="group-hover/btn:translate-x-1 transition-transform duration-300"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {news.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() =>
              setActiveIndex((prev) => (prev - 1 + news.length) % news.length)
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>

          <button
            onClick={() => setActiveIndex((prev) => (prev + 1) % news.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
