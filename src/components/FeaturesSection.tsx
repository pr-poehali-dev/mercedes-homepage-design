import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const FeaturesSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const element = document.getElementById("features-section");
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: "Zap" as const,
      title: "EQS - Электрическая роскошь",
      description: "До 770 км на одном заряде. Будущее уже здесь.",
      image:
        "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: "770 км",
    },
    {
      icon: "Shield" as const,
      title: "Безопасность PRE-SAFE®",
      description: "Интеллектуальные системы защиты нового поколения.",
      image:
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: "5★ NCAP",
    },
    {
      icon: "Cpu" as const,
      title: "MBUX Hyperscreen",
      description: "56-дюймовый изогнутый дисплей с ИИ-ассистентом.",
      image:
        "https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: '56"',
    },
  ];

  return (
    <section
      id="features-section"
      className="relative py-32 bg-gradient-to-b from-background to-muted/20 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          style={{ transform: `translateX(${scrollY * 0.1}px)` }}
        />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/3 rounded-full blur-3xl"
          style={{ transform: `translateX(${-scrollY * 0.15}px)` }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <span className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
              <Icon name="Star" size={16} className="mr-2" />
              Инновации
            </span>
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground">
              Технологии
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                будущего
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Каждый Mercedes-Benz оснащен передовыми технологиями, которые
              делают каждую поездку безопасной и комфортной
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative bg-card/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/10 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image with Parallax */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Floating Stats */}
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20">
                  <span className="text-white font-bold text-lg">
                    {feature.stats}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon
                      name={feature.icon}
                      size={24}
                      className="text-primary"
                    />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-card-foreground">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>

                <button className="group/btn flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-300">
                  <span className="font-medium">Узнать больше</span>
                  <Icon
                    name="ArrowRight"
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform duration-300"
                  />
                </button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
