import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import HeroSection from "@/components/HeroSection";
import ModelsSection from "@/components/ModelsSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/ContactSection";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const breadcrumbItems = [{ label: "Главная" }];

  return (
    <div className="min-h-screen bg-background">
      <Header toggleTheme={toggleTheme} isDark={isDark} />

      <main>
        <HeroSection />

        <div className="container mx-auto px-4 pt-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <ModelsSection />
        <ServicesSection />
        <FeaturesSection />
        <NewsSection />
        <ContactSection />
      </main>

      <ScrollToTop />
    </div>
  );
};

export default Index;
