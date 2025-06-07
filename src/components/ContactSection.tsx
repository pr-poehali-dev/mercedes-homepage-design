import { useState } from "react";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    model: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Здесь будет логика отправки формы
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const models = [
    "A-Class",
    "C-Class",
    "E-Class",
    "S-Class",
    "GLE",
    "GLS",
    "EQS",
    "AMG GT",
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-muted/10 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 2px, transparent 2px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <span className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Связаться с нами
              </span>
              <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 text-foreground">
                Начните свой путь
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                  с Mercedes-Benz
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Наши эксперты помогут подобрать идеальный автомобиль и расскажут
                о всех возможностях финансирования
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-card/50 rounded-xl border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon name="MapPin" size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">Адрес</h4>
                  <p className="text-muted-foreground">
                    ул. Тверская, 1, Москва
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-card/50 rounded-xl border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon name="Phone" size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">
                    Телефон
                  </h4>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-card/50 rounded-xl border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon name="Clock" size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">
                    Время работы
                  </h4>
                  <p className="text-muted-foreground">
                    Пн-Пт: 9:00-21:00, Сб-Вс: 10:00-18:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50">
            <h3 className="font-montserrat font-bold text-2xl mb-6 text-card-foreground">
              Оставьте заявку
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Имя *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200"
                    placeholder="Ваше имя"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Интересующая модель
                </label>
                <select
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200"
                >
                  <option value="">Выберите модель</option>
                  {models.map((model) => (
                    <option key={model} value={model}>
                      Mercedes-Benz {model}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Сообщение
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200 resize-none"
                  placeholder="Расскажите о ваших предпочтениях..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Отправить заявку</span>
                <Icon name="Send" size={18} />
              </button>
            </form>

            <p className="text-xs text-muted-foreground mt-4 text-center">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
