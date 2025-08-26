import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/79000000000', '_blank');
  };

  const openTelegram = () => {
    window.open('https://t.me/garderoby', '_blank');
  };

  const openCatalog = () => {
    window.open('/catalog', '_blank');
  };

  const openConstructor = () => {
    window.open('/constructor', '_blank');
  };

  const services = [
    {
      title: "Проектирование гардеробных",
      description: "Индивидуальное планирование с учетом особенностей помещения",
      icon: "Ruler"
    },
    {
      title: "Изготовление на заказ", 
      description: "Качественные материалы и современные технологии производства",
      icon: "Hammer"
    },
    {
      title: "Установка и монтаж",
      description: "Профессиональная установка с гарантией качества",
      icon: "Wrench"
    },
    {
      title: "Консультации",
      description: "Помощь в выборе оптимального решения для вашего дома",
      icon: "MessageCircle"
    }
  ];

  const examples = [
    {
      title: "Современная гардеробная \"Элегия\"",
      description: "Просторная гардеробная с раздвижными дверями и LED-подсветкой",
      image: "/img/70d7fe38-b02b-4996-a7a8-192dd450123e.jpg"
    },
    {
      title: "Компактная система хранения",
      description: "Максимальная функциональность в ограниченном пространстве",
      image: "/img/70d7fe38-b02b-4996-a7a8-192dd450123e.jpg"
    },
    {
      title: "Угловая гардеробная",
      description: "Эффективное использование угловых зон помещения",
      image: "/img/70d7fe38-b02b-4996-a7a8-192dd450123e.jpg"
    }
  ];

  const advantages = [
    {
      title: "15+ лет опыта",
      description: "Проверенная экспертиза в области мебели",
      icon: "Award"
    },
    {
      title: "Качественные материалы",
      description: "Только проверенные поставщики и сертифицированная продукция", 
      icon: "CheckCircle"
    },
    {
      title: "Гарантия 5 лет",
      description: "Полная гарантия на все виды работ и материалы",
      icon: "Shield"
    },
    {
      title: "Бесплатный замер",
      description: "Выезд специалиста и составление проекта бесплатно",
      icon: "Gift"
    }
  ];

  const reviews = [
    {
      name: "Анна Смирнова",
      text: "Превосходное качество работы! Гардеробная получилась именно такой, как мы мечтали.",
      rating: 5
    },
    {
      name: "Дмитрий Козлов", 
      text: "Отличное соотношение цена-качество. Рекомендую всем друзьям и знакомым.",
      rating: 5
    },
    {
      name: "Мария Петрова",
      text: "Быстро, качественно, аккуратно. Специалисты настоящие профессионалы!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 font-rubik">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
              ГАРДЕРОБНЫЕ НОРИТА
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
              <a href="#examples" className="text-gray-700 hover:text-primary transition-colors">Примеры</a>
              <a href="#advantages" className="text-gray-700 hover:text-primary transition-colors">Преимущества</a>
              <a href="#reviews" className="text-gray-700 hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </div>
            <div className="flex space-x-4">
              <Button onClick={openCatalog} variant="outline" size="sm">
                <Icon name="Catalog" size={16} className="mr-2" />
                Каталог
              </Button>
              <Button onClick={openConstructor} size="sm">
                <Icon name="Settings" size={16} className="mr-2" />
                Конструктор
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-gradient-to-r from-orange-500 to-blue-500 text-white">
                ✨ Создайте гардероб своей мечты
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
                Гардеробные <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">на заказ</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Современные решения для хранения одежды. Индивидуальное проектирование, 
                качественные материалы и профессиональный монтаж.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button onClick={openWhatsApp} size="lg" className="bg-green-500 hover:bg-green-600">
                  <Icon name="Phone" size={20} className="mr-2" />
                  WhatsApp
                </Button>
                <Button onClick={openTelegram} size="lg" variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                  <Icon name="Send" size={20} className="mr-2" />
                  Telegram  
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <Icon name="CheckCircle" size={16} className="mr-2 text-green-500" />
                  Бесплатный замер
                </div>
                <div className="flex items-center">
                  <Icon name="Shield" size={16} className="mr-2 text-blue-500" />
                  Гарантия 5 лет
                </div>
              </div>
            </div>
            <div className="animate-slide-in">
              <img 
                src="/img/70d7fe38-b02b-4996-a7a8-192dd450123e.jpg" 
                alt="Современная гардеробная" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-600">Наши услуги</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Полный цикл работ
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              От проектирования до установки — мы обеспечиваем комплексный подход к созданию вашей гардеробной
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="examples" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-600">Примеры работ</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Наши проекты
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Посмотрите на реализованные проекты гардеробных с дверями от шкафов-купе
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {examples.map((example, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-48 bg-gray-100">
                  <img 
                    src={example.image} 
                    alt={example.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{example.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{example.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-600">Преимущества</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Почему выбирают нас
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Icon name={advantage.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-600">Отзывы клиентов</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Что говорят наши клиенты
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-6 bg-gradient-to-r from-orange-500 to-blue-500">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-white text-gray-800">Контакты</Badge>
          <h2 className="text-4xl font-bold text-white mb-8">
            Готовы обсудить ваш проект?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом для бесплатной консультации
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button onClick={openWhatsApp} size="lg" className="bg-green-500 hover:bg-green-600 text-white">
              <Icon name="Phone" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
            <Button onClick={openTelegram} size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Send" size={20} className="mr-2" />
              Написать в Telegram
            </Button>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 text-white">
            <div>
              <Icon name="Phone" size={24} className="mx-auto mb-4" />
              <p className="font-semibold">Телефон</p>
              <p>+7 (900) 000-00-00</p>
            </div>
            <div>
              <Icon name="Mail" size={24} className="mx-auto mb-4" />
              <p className="font-semibold">Email</p>
              <p>info@garderoby-norita.ru</p>
            </div>
            <div>
              <Icon name="MapPin" size={24} className="mx-auto mb-4" />
              <p className="font-semibold">Адрес</p>
              <p>г. Москва, ул. Примерная, д. 1</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent mb-4">
            ГАРДЕРОБНЫЕ НОРИТА  
          </div>
          <p className="text-gray-400 mb-4">© 2024 Все права защищены</p>
          <div className="flex justify-center space-x-6">
            <Button onClick={openCatalog} variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              Каталог
            </Button>
            <Button onClick={openConstructor} variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              Онлайн конструктор
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;