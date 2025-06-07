import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  toggleTheme: () => void;
  isDark: boolean;
}

const Header = ({ toggleTheme, isDark }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    "Главная",
    "Модели",
    "Услуги",
    "О нас",
    "Контакты",
    "Тест-драйв",
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full flex items-center justify-center">
              <span className="text-gray-800 font-bold text-lg">MB</span>
            </div>
            <span className="font-montserrat font-bold text-lg lg:text-xl text-foreground">
              Mercedes-Benz
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-foreground/80 hover:text-foreground transition-colors duration-200 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors duration-200"
              aria-label="Переключить тему"
            >
              <Icon name={isDark ? "Sun" : "Moon"} size={20} />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md bg-muted hover:bg-muted/80 transition-colors duration-200"
              aria-label="Меню"
            >
              <Icon name={isOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 space-y-2 bg-background/95 backdrop-blur-md rounded-lg mt-2">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="block px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-all duration-200 rounded-md mx-2"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
