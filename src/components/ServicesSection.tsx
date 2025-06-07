import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const services = [
    {
      icon: "Car" as const,
      title: "Тест-драйв",
      description: "Почувствуйте мощь и комфорт Mercedes-Benz на дороге",
    },
    {
      icon: "Wrench" as const,
      title: "Сервисное обслуживание",
      description: "Профессиональный уход за вашим автомобилем",
    },
    {
      icon: "Shield" as const,
      title: "Гарантия",
      description: "Полная защита и спокойствие на долгие годы",
    },
    {
      icon: "CreditCard" as const,
      title: "Финансирование",
      description: "Выгодные условия покупки и лизинга",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
            Наши услуги
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Полный спектр услуг для владельцев Mercedes-Benz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group text-center p-8 bg-card rounded-2xl hover:bg-card/80 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <Icon name={service.icon} size={32} className="text-primary" />
              </div>

              <h3 className="font-montserrat font-bold text-xl mb-4 text-card-foreground">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
