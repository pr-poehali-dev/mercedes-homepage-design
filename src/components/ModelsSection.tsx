import Icon from "@/components/ui/icon";

const ModelsSection = () => {
  const models = [
    {
      name: "A-Class",
      price: "от 2 890 000 ₽",
      image:
        "https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Компактный премиум",
    },
    {
      name: "C-Class",
      price: "от 3 490 000 ₽",
      image:
        "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Бизнес-седан",
    },
    {
      name: "E-Class",
      price: "от 4 290 000 ₽",
      image:
        "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Представительский класс",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
            Наши модели
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите автомобиль, который отражает ваш стиль жизни
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <div
              key={model.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-montserrat font-bold text-xl text-card-foreground">
                    Mercedes-Benz {model.name}
                  </h3>
                  <Icon name="Star" size={20} className="text-yellow-500" />
                </div>

                <p className="text-muted-foreground mb-4">
                  {model.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg text-primary">
                    {model.price}
                  </span>
                  <button className="group/btn bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center space-x-2">
                    <span>Подробнее</span>
                    <Icon
                      name="ArrowRight"
                      size={16}
                      className="group-hover/btn:translate-x-1 transition-transform duration-300"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;
