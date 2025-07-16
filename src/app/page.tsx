"use client";

import { FadeInUp, FadeInDown, FadeIn, ScrollFadeInUp } from "@/components/animations";
import { AnimatedButton } from "@/components/animations/animated-button";
import { EmblaScaleReviews } from "@/components/ui/embla-scale-reviews";
import { FaqSectionWithCategories } from "@/components/ui/faq-with-categories";
import { ContactButtons } from "@/components/ui/contact-buttons";
import { SalonFeatureCarousel } from "@/components/ui/salon-feature-carousel";
import { ServicesGrid } from "@/components/ui/services-grid";
import { AnimatedText } from "@/components/ui/animated-text";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black">
        <FadeIn delay={0.2}>
          <div 
            className="absolute -top-[330px] sm:-top-[700px] lg:-top-[910px] left-1/2 -translate-x-1/2 
                       w-[900px] sm:w-[1400px] lg:w-[2100px] 
                       h-[600px] sm:h-[1300px] lg:h-[1400px] 
                       rounded-full pointer-events-none z-0" 
            style={{
              background: 'radial-gradient(circle, rgba(202, 142, 52, 0.7) 0%, transparent 60%)'
            }}
          />
        </FadeIn>
        
        {/* Контент поверх */}
        <div className="relative z-10 container mx-auto px-4 pt-12 pb-24 sm:pt-32 sm:pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInDown delay={0.3}>
              <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
                Добро пожаловать в Topiconic
              </div>
            </FadeInDown>
            
            <FadeInUp delay={0.4}>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Ты достойна быть
                <br />
                <AnimatedText
                  texts={["счастливой", "уверенной", "любимой", "безупречной", "вдохновлённой", "ухоженной"]}
                  type="rotating"
                  duration={2000}
                  textClassName="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent"
                />
              </h1>
            </FadeInUp>
            
            <FadeInUp delay={0.5}>
              <p className="text-base sm:text-xl text-muted-foreground mb-24 sm:mb-20 max-w-2xl mx-auto leading-relaxed">
              Уютное пространство, где вы можете расслабиться, довериться и стать лучшей версией себя.
              </p>
            </FadeInUp>
            
            <FadeInUp delay={0.7}>
              <div className="flex flex-row flex-wrap justify-center gap-4">
                <AnimatedButton 
                  className="w-full max-w-[180px] sm:w-auto bg-brand-primary text-white hover:bg-brand-primary/90 text-lg px-6 py-4 h-auto rounded-xl font-medium transition-colors shadow-lg hover:shadow-xl"
                  onClick={() => window.open('https://wa.me/79937775559', '_blank')}
                >
                  Записаться
                </AnimatedButton>
                <AnimatedButton 
                  variant="outline"
                  className="w-full max-w-[180px] sm:w-auto border-1 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white text-lg px-6 py-4 h-auto rounded-xl font-medium transition-all shadow-md hover:shadow-lg"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Посмотреть услуги
                </AnimatedButton>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <FadeInUp delay={0.3}>
        <section id="services" className="bg-black">
          <ServicesGrid />
        </section>
      </FadeInUp>

      {/* Salon Services Carousel Section */}
      <ScrollFadeInUp delay={0.3}>
        <section className="py-0 bg-black">
          <SalonFeatureCarousel />
        </section>
      </ScrollFadeInUp>

      {/* Embla Scale Reviews Section */}
      <ScrollFadeInUp delay={0.3}>
        <section className="py-20 sm:py-32 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold mb-4">
              Отзывы наших клиентов 
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Нам доверяют: 97% клиентов приходят снова
              </p>
            </div>
            
            <EmblaScaleReviews />
          </div>
        </section>
      </ScrollFadeInUp>

      {/* FAQ Section */}
      <ScrollFadeInUp delay={0.4}>
        <section className="py-0 sm:py-0 bg-black">
          <div className="container mx-auto px-4">
            <FaqSectionWithCategories
              title="Часто задаваемые вопросы"
              description="Ответы на самые популярные вопросы наших клиентов"
              items={[
                {
                  question: "Нужно ли записываться заранее или можно прийти без записи?",
                  answer: "Рекомендуем записываться заранее, чтобы мы могли гарантировать удобное для вас время и подготовить всё необходимое. Но если у нас есть свободное окно — с радостью примем и без записи!",
                },
                {
                  question: "С какими брендами косметики вы работаете?",
                  answer: "Мы используем только проверенные профессиональные бренды: L’Oréal Professionnel, Estel, OPI, CND, Holy Land, Christina и другие — в зависимости от услуги и типа кожи/волос клиента.",
                },
                {
                  question: "Есть ли у вас подарочные сертификаты?",
                  answer: "Да! Мы предлагаем подарочные сертификаты на любую сумму или на конкретные процедуры. Это отличный способ порадовать близкого человека заботой и приятными впечатлениями.",
                },
                {
                  question: "Что делать, если я опаздываю или не могу прийти?",
                  answer: "Пожалуйста, предупредите нас заранее — мы обязательно подберём другое удобное время. При опоздании более чем на 15 минут услуга может быть сокращена или перенесена.",
                },
                {
                  question: "Можно ли прийти с ребёнком или подругой?",
                  answer: "Конечно! У нас уютная атмосфера, и вы можете спокойно прийти с ребёнком или в компании — рядом можно присесть и подождать. Мы всегда рады создать комфорт не только для клиента, но и для его близких.",
                },
                {
                  question: "Сколько времени длится процедура?",
                  answer: "Продолжительность зависит от конкретной услуги. Например, стрижка занимает около 40 минут, окрашивание — от 1,5 часов, а маникюр с покрытием — примерно 1 час. Точный тайминг можно уточнить при записи — мы подскажем заранее.",
                }
              ]}
              contactInfo={{
                title: "Остались вопросы?",
                description: "Напишите нам — мы с радостью подскажем!",
                buttonText: "Связаться с нами"
              }}
            />
          </div>
        </section>
      </ScrollFadeInUp>

      {/* Contact Section */}
      <ScrollFadeInUp delay={0.4}>
        <section id="contacts" className="py-5 sm:py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold mb-4">
                Контакты
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Свяжитесь с нами любым удобным способом
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {/* Contact Information */}
              <div>
                <ContactButtons />
              </div>
              
              {/* Yandex Map */}
              <div>
                <div className="h-[526px] rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A14a6281f7bad364d9387bec393adc037e910fb4d021e11cde11b35d96769f6a0&amp;source=constructor"
                    width="650"
                    height="750"
                    frameBorder="0"
                    title="Салон TOPICONIC - Крымская ул., 19, корп. 1, рабочий посёлок Боброво"
                    className="w-full h-full max-w-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeInUp>
    </div>
  );
}
