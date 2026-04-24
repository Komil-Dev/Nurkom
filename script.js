// ═══════════════════════════════════════════════════════════════════
//  TRANSLATIONS  (UZ / EN / RU)
// ═══════════════════════════════════════════════════════════════════
const translations = {
  uz: {
    // Navigation
    "nav-home": "Asosiy",
    "nav-services": "Xizmatlar",
    "nav-about": "Statistika",
    "nav-portfolio": "Portfolio",
    "nav-contact": "Bog'lanish",
    // Hero
    "hero-modern": "Zamonaviy",
    "hero-digital": "Raqamli Yechimlar",
    "hero-description":
      "Professional veb-saytlar va Telegram botlar yaratish xizmati. Sizning biznesingiz uchun mukammal raqamli yechimlarga tayyormiz.",
    "hero-cta": "Biz bilan bog'laning",
    // Services
    "services-title": "Xizmatlar",
    "service1-title": "Veb-sayt Yaratish",
    "service1-description":
      "Zamonaviy va funktsional veb-saytlar yaratish xizmati. Bizneslarga mos keladigan yechimlar.",
    "service2-title": "Telegram Bot Yaratish",
    "service2-description":
      "Biznesingiz uchun maxsus Telegram botlar yaratish. Mijozlar bilan muloqot va xizmatlarni avtomatlashtirish.",
    "service3-title": "Backend Ishlab Chiqish",
    "service3-description":
      "Loyihangiz uchun kuchli va barqaror backend tizimlar yaratish. Ma'lumotlar bazasi va API integratsiyasi.",
    "service-order": "Buyurtma berish",
    // Stats
    statistika: "Statistika",
    "stats-subtitle": "Raqamlarda natijalarimiz",
    stat1: "Muvaffaqiyatli Loyihalar",
    stat2: "Mijozlar Mamnuniyati",
    stat3: "Tajribali Mutaxassislar",
    stat4: "Yillik Tajriba",
    // Portfolio section
    "portfolio-title": "Portfolio",
    "portfolio-subtitle": "Bizning bajarilgan loyihalarimiz",
    "portfolio-filter-all": "Barchasi",
    "portfolio-filter-website": "Veb-saytlar",
    "portfolio-filter-admin": "Admin Panellar",
    "portfolio-filter-bot": "Telegram Botlar",
    "portfolio-read-more": "Ko'proq ko'rish",
    "portfolio-close": "Yopish",
    // Portfolio card titles
    "portfolio-title-furniglass": "Furniglass",
    "portfolio-title-nurgarden": "Nur & Garden",
    "portfolio-title-studyfans": "Studyfans",
    "portfolio-title-muhibacademy": "Muhibacademy",
    "portfolio-title-urgutplays": "Urgut Plays - Admin Panel",
    "portfolio-title-hmmexport": "HMM Export",
    "portfolio-title-azb": "AZB Company",
    "portfolio-title-tca": "TCA Group",
    "portfolio-title-lentalar": "Biitiruvchi Lentalar",
    "portfolio-title-dustlikarena": "Do'stlik Arena Bot",
    "portfolio-title-sodiq": "Sodiq Consulting",
    // Portfolio short descriptions (card preview)
    "portfolio-short-furniglass":
      "Furniglass mebellar fabrikasi 25 yillik tajribaga ega bo'lib, zamonaviy mahsulotlar ishlab chiqaradi...",
    "portfolio-short-nurgarden":
      "Oziq-ovqat mahsulotlarini ishlab chiqaruvchi kompaniya uchun yaratilgan minimalistik veb-sayt...",
    "portfolio-short-studyfans":
      "Talabalarga konsalting xizmatlarini taqdim etuvchi platforma. Xorijiy universitetlar va grant imkoniyatlari...",
    "portfolio-short-muhibacademy":
      "Akademiya haqida ma'lumot beruvchi platforma. Mavjud kurslar karta ko'rinishida taqdim etiladi...",
    "portfolio-short-urgutplays":
      "UrgutPlace platformasi uchun maxsus yaratilgan boshqaruv tizimi. Do'konlarni va buyurtmalarni boshqarish...",
    "portfolio-short-hmmexport":
      "HMM Export kompaniyasi uchun yaratilgan veb-sayt. Mahsulotlar, buyurtma va yangiliklar...",
    "portfolio-short-azb":
      "Abdushukur Zamin Baraka firmasi uchun yaratilgan. Quruq mevalar, xizmatlar va qo'llab-quvvatlash...",
    "portfolio-short-tca":
      "TCA Group kompaniyasi uchun yaratilgan veb-sayt. Ilovalar portfeli va bog'lanish imkoniyatlari...",
    "portfolio-short-lentalar":
      "Bitiruvchi Lentalar kompaniyasi uchun yaratilgan. Mahsulotlar, buyurtma va kompaniya ma'lumotlari...",
    "portfolio-short-dustlikarena":
      "Mini stadion boti orqali o'yinlarni bron qilish, bekor qilish va statistikani ko'rish...",
    "portfolio-short-sodiq": "Kompaniya haqidagi ma'lumotlar, xizmatlar va qo'llab-quvvatlash imkoniyatlari...",
    // Portfolio full descriptions (modal)
    "portfolio-desc-furniglass":
      "Furniglass mebellar fabrikasi 25 yillik tajribaga ega bo'lib, zamonaviy va sifatli mahsulotlar ishlab chiqaradi. Saytda turli mebel turlari, dizayn yechimlari va buyurtma asosidagi xizmatlar haqida to'liq ma'lumot beriladi. Loyiha doirasida zamonaviy admin panel, mahsulot boshqaruv tizimi va mijozlar uchun qulay interfeys yaratildi.",
    "portfolio-desc-nurgarden":
      "Oziq-ovqat mahsulotlarini ishlab chiqaruvchi kompaniya uchun yaratilgan minimalistik veb-sayt. Saytda kompaniya haqida to'liq ma'lumot, ishlab chiqarilayotgan mahsulotlar, aloqa ma'lumotlari va hamkorlik imkoniyatlari keltirilgan. Zamonaviy dizayn va foydalanuvchiga qulay navigatsiya loyihaning asosiy ustunlari hisoblanadi.",
    "portfolio-desc-studyfans":
      "Talabalarga konsalting xizmatlarini taqdim etuvchi platforma. Saytda o'quv dasturlari, xorijiy universitetlar va grant imkoniyatlari haqida to'liq ma'lumot beriladi. Foydalanuvchilar osongina kerakli ma'lumotlarni topish va mutaxassislar bilan bog'lanish imkoniyatiga ega.",
    "portfolio-desc-muhibacademy":
      "Akademiya haqida ma'lumot beruvchi platforma. Mavjud kurslar karta ko'rinishida taqdim etiladi, har birida to'liq ma'lumot mavjud. Platforma orqali o'quvchilar kursga yozilish, jadval va narxlar bilan tanishish imkoniyatiga ega. Zamonaviy dizayn va qulay interfeys foydalanuvchi tajribasini yaxshilaydi.",
    "portfolio-desc-urgutplays":
      "UrgutPlace platformasi uchun maxsus yaratilgan boshqaruv tizimi. Admin panel orqali do'konlarni qo'shish va o'chirish, mahsulotlarni va kategoriyalarni boshqarish, foydalanuvchi so'rovlari va buyurtmalarini nazorat qilish imkoniyati yaratilgan. Tizim real vaqt rejimida ma'lumotlarni yangilash va hisobotlar chiqarish funksiyalariga ega.",
    "portfolio-desc-hmmexport":
      "HMM Export kompaniyasi uchun yaratilgan ushbu veb-sayt mijozlarga mahsulotlar bilan tanishish, buyurtma berish, kompaniya haqida ma'lumot olish va yangiliklaridan xabardor bo'lish imkonini beradi. Sayt ko'p tilli qo'llab-quvvatlash va zamonaviy eksport biznesiga mos professional dizayn bilan ta'minlangan.",
    "portfolio-desc-azb":
      "Abdushukur Zamin Baraka firmasi uchun yaratilgan sayt foydalanuvchilarga quruq mevalar haqidagi ma'lumotlar, xizmatlar, qo'llab-quvvatlash imkoniyatlari va yangiliklarni taqdim etadi. Sayt mahsulot katalogi, galereya va to'g'ridan-to'g'ri buyurtma berish imkoniyatlarini o'z ichiga oladi.",
    "portfolio-desc-tca":
      "TCA Group kompaniyasi uchun yaratilgan ushbu veb-sayt kompaniya haqida batafsil ma'lumot olish, ishlab chiqarilgan ilovalar portfelini ko'rish va bog'lanish imkoniyatlarini taqdim etadi. Sayt ilovalar showcase, jamoa va kompaniya tarixi bo'limlari bilan professional tarzda taqdim etilgan.",
    "portfolio-desc-lentalar":
      "Bitiruvchi Lentalar kompaniyasi uchun yaratilgan ushbu veb-sayt mijozlarga mahsulotlar bilan tanishish, buyurtma berish va kompaniya haqida ma'lumot olish imkonini beradi. Sayt bitiruvchilar va ota-onalar uchun qulay bo'lib, mahsulot tanlash va buyurtma jarayonini soddalashtiradi.",
    "portfolio-desc-dustlikarena":
      "Do'stlik Arena mini stadion boti orqali bugungi va ertangi o'yinlarni bron qilish, bekor qilish, stadion haqida ma'lumot olish, statistikani ko'rish mumkin va admin bilan bog'lanish imkoniyatini beradi. Bot o'yinchilar uchun qulay bron tizimi, avtomatik eslatmalar va to'lov integratsiyasini o'z ichiga oladi.",
    "portfolio-desc-sodiq":
      "Sodiq Consulting uchun yaratilgan sayt foydalanuvchilarga kompaniya haqidagi ma'lumotlar, ko'rsatiladigan xizmatlar, mijozlar uchun qo'llab-quvvatlash imkoniyatlari va sohadagi yangiliklarni taqdim etadi. Telegram bot orqali mijozlar tez va qulay tarzda konsultatsiya olish va savol berish imkoniyatiga ega.",
    // Portfolio categories
    "portfolio-cat-admin": "Admin Panel",
    "portfolio-cat-website": "Veb-sayt",
    "portfolio-cat-bot": "Telegram Bot",
    // Portfolio link labels
    "portfolio-link-furniglass": "Saytga o'tish",
    "portfolio-link-nurgarden": "Saytga o'tish",
    "portfolio-link-studyfans": "Saytga o'tish",
    "portfolio-link-muhibacademy": "Saytga o'tish",
    "portfolio-link-urgutplays": "Saytga o'tish",
    "portfolio-link-hmmexport": "Saytga o'tish",
    "portfolio-link-azb": "Saytga o'tish",
    "portfolio-link-tca": "Saytga o'tish",
    "portfolio-link-lentalar": "Saytga o'tish",
    "portfolio-link-dustlikarena": "Botga o'tish",
    "portfolio-link-sodiq": "Rasmiy Botga o'tish",
    // Pricing
    "pricing-title": "Narxlar",
    "pricing-subtitle": "Sizning ehtiyojlaringizga mos keladigan eng yaxshi tarifni tanlang",
    "badge-basic": "BASIC",
    "badge-popular": "MASHHUR",
    "badge-premium": "PREMIUM",
    "plan-basic-title": "Landing Page",
    "plan-basic-feature1": "1 sahifali veb-sayt",
    "plan-basic-feature2": "Responsive dizayn",
    "plan-basic-feature3": "Aloqa formasi",
    "plan-basic-feature4": "Asosiy SEO",
    "plan-basic-feature5": "2 hafta texnik yordam",
    "plan1-title": "Veb-sayt Yaratish",
    "plan1-feature1": "Zamonaviy dizayn",
    "plan1-feature2": "Responsive (mobil moslashuvchan)",
    "plan1-feature3": "5 sahifagacha",
    "plan1-feature4": "SEO optimizatsiya",
    "plan1-feature5": "1 oy bepul texnik yordam",
    "plan2-title": "Maxsus Loyiha",
    "plan2-price": "Custom",
    "plan2-feature1": "Barcha standart xususiyatlar",
    "plan2-feature2": "Cheksiz sahifalar",
    "plan2-feature3": "Maxsus funksionallik",
    "plan2-feature4": "Admin panel",
    "plan2-feature7": "Ustuvor qo'llab-quvvatlash",
    "plan-order": "Buyurtma berish",
    // Contact
    "contact-title": "Bog'lanish",
    "contact-subtitle": "Aloqaga chiqing",
    "contact-description": "Loyihangiz yoki xizmatlarimiz haqida ko'proq bilish uchun biz bilan bog'laning",
    "contact-address": "Manzil",
    "contact-form-title": "Xabar yuboring",
    "form-name": "ISM",
    "form-phone": "TELEFON",
    "form-telegram": "TELEGRAM",
    "form-message": "XABAR",
    "form-submit": "Yuborish",
    // Footer
    "footer-text": "© 2026 Nurkom — Barcha huquqlar himoyalangan.",
    // Order modal
    "order-modal-label": "Buyurtma",
    "order-modal-title": "Xizmat So'rovi",
    "order-form-name": "Ism",
    "order-form-phone": "Telefon",
    "order-form-telegram": "Telegram",
    "order-form-message": "Xabar",
    "order-form-submit": "Yuborish",
    "order-form-submitting": "Yuborilmoqda...",
    "order-form-placeholder-name": "Ismingiz",
    "order-form-placeholder-phone": "+998 90 000 00 00",
    "order-form-placeholder-telegram": "@username",
    "order-form-placeholder-message": "Loyiha haqida qisqacha...",
    // Service order labels
    "order-service-website": "Veb-sayt Yaratish",
    "order-service-bot": "Telegram Bot Yaratish",
    "order-service-backend": "Backend Ishlab Chiqish",
    "order-service-landing": "Landing Page — 500,000 UZS",
    "order-service-standard": "Veb-sayt Yaratish — 100$ USD",
    "order-service-custom": "Maxsus Loyiha — Custom",
    // Feedback modals
    "modal-success-title": "Muvaffaqiyat!",
    "modal-success-text": "Xabaringiz muvaffaqiyatli yuborildi. Tez orada siz bilan bog'lanamiz.",
    "modal-error-title": "Xatolik!",
    "modal-error-text": "Xabar yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.",
  },

  // ─────────────────────────── ENGLISH ───────────────────────────
  en: {
    "nav-home": "Home",
    "nav-services": "Services",
    "nav-about": "Statistics",
    "nav-portfolio": "Portfolio",
    "nav-contact": "Contact",
    "hero-modern": "Modern",
    "hero-digital": "Digital Solutions",
    "hero-description":
      "Professional website and Telegram bot development services. We are ready to provide perfect digital solutions for your business.",
    "hero-cta": "Get in Touch",
    "services-title": "Services",
    "service1-title": "Website Development",
    "service1-description": "Modern and functional website development services. Solutions tailored for businesses.",
    "service2-title": "Telegram Bot Development",
    "service2-description":
      "Custom Telegram bot development for your business. Automate customer communication and services.",
    "service3-title": "Backend Development",
    "service3-description":
      "Creating powerful and stable backend systems for your project. Database and API integration.",
    "service-order": "Place Order",
    statistika: "Statistics",
    "stats-subtitle": "Our results in numbers",
    stat1: "Successful Projects",
    stat2: "Client Satisfaction",
    stat3: "Experienced Specialists",
    stat4: "Years Experience",
    "portfolio-title": "Portfolio",
    "portfolio-subtitle": "Our completed projects",
    "portfolio-filter-all": "All",
    "portfolio-filter-website": "Websites",
    "portfolio-filter-admin": "Admin Panels",
    "portfolio-filter-bot": "Telegram Bots",
    "portfolio-read-more": "View More",
    "portfolio-close": "Close",
    "portfolio-title-furniglass": "Furniglass",
    "portfolio-title-nurgarden": "Nur & Garden",
    "portfolio-title-studyfans": "Studyfans",
    "portfolio-title-muhibacademy": "Muhibacademy",
    "portfolio-title-urgutplays": "Urgut Plays - Admin Panel",
    "portfolio-title-hmmexport": "HMM Export",
    "portfolio-title-azb": "AZB Company",
    "portfolio-title-tca": "TCA Group",
    "portfolio-title-lentalar": "Biitiruvchi Lentalar",
    "portfolio-title-dustlikarena": "Do'stlik Arena Bot",
    "portfolio-title-sodiq": "Sodiq Consulting",
    "portfolio-short-furniglass":
      "Furniglass furniture factory with 25 years of experience, producing modern and quality products...",
    "portfolio-short-nurgarden": "A minimalist website created for a food production company...",
    "portfolio-short-studyfans":
      "A platform providing consulting services to students. Foreign universities and grant opportunities...",
    "portfolio-short-muhibacademy":
      "A platform providing information about the academy. Available courses presented in card format...",
    "portfolio-short-urgutplays": "A custom management system for UrgutPlace platform. Managing stores and orders...",
    "portfolio-short-hmmexport": "A website created for HMM Export company. Products, orders and news...",
    "portfolio-short-azb": "Created for Abdushukur Zamin Baraka company. Dried fruits, services and support...",
    "portfolio-short-tca":
      "A website created for TCA Group company. Application portfolio and contact opportunities...",
    "portfolio-short-lentalar": "Created for Bitiruvchi Lentalar company. Products, orders and company information...",
    "portfolio-short-dustlikarena": "Book games, cancel bookings and view statistics through the mini stadium bot...",
    "portfolio-short-sodiq": "Company information, services and support opportunities...",
    "portfolio-desc-furniglass":
      "Furniglass furniture factory with 25 years of experience produces modern and high-quality products. The website provides complete information about various furniture types, design solutions and custom-made services. As part of the project, a modern admin panel, product management system and user-friendly interface were created.",
    "portfolio-desc-nurgarden":
      "A minimalist website created for a food production company. The site contains complete information about the company, manufactured products, contact details and partnership opportunities. Modern design and user-friendly navigation are the main pillars of the project.",
    "portfolio-desc-studyfans":
      "A platform providing consulting services to students. The website offers complete information about educational programs, foreign universities and grant opportunities. Users can easily find the information they need and connect with specialists.",
    "portfolio-desc-muhibacademy":
      "A platform providing information about the academy. Available courses are presented in card format, each containing complete information. Through the platform, students can enroll in courses, view schedules and pricing. Modern design and user-friendly interface improve the user experience.",
    "portfolio-desc-urgutplays":
      "A custom management system for the UrgutPlace platform. Through the admin panel, you can add and remove stores, manage products and categories, and monitor user requests and orders. The system has features for real-time data updates and report generation.",
    "portfolio-desc-hmmexport":
      "This website created for HMM Export company allows customers to get acquainted with products, place orders, get information about the company and stay updated with news. The site is equipped with multilingual support and a professional design suited for modern export business.",
    "portfolio-desc-azb":
      "The site created for Abdushukur Zamin Baraka company provides users with information about dried fruits, services, support opportunities and news. The site includes a product catalogue, gallery and direct ordering capabilities.",
    "portfolio-desc-tca":
      "This website created for TCA Group company provides detailed information about the company, viewing the portfolio of developed applications and contact opportunities. The site is professionally presented with application showcase, team and company history sections.",
    "portfolio-desc-lentalar":
      "This website created for Bitiruvchi Lentalar company allows customers to get acquainted with products, place orders and get information about the company. The site is convenient for graduates and parents, simplifying the product selection and ordering process.",
    "portfolio-desc-dustlikarena":
      "Through the Do'stlik Arena mini stadium bot, you can book today's and tomorrow's games, cancel bookings, get information about the stadium, view statistics and contact the admin. The bot includes a convenient booking system for players, automatic reminders and payment integration.",
    "portfolio-desc-sodiq":
      "The site created for Sodiq Consulting provides users with information about the company, services provided, support opportunities for clients and industry news. Through the Telegram bot, clients can quickly and conveniently get consultations and ask questions.",
    "portfolio-cat-admin": "Admin Panel",
    "portfolio-cat-website": "Website",
    "portfolio-cat-bot": "Telegram Bot",
    "portfolio-link-furniglass": "Visit Site",
    "portfolio-link-nurgarden": "Visit Site",
    "portfolio-link-studyfans": "Visit Site",
    "portfolio-link-muhibacademy": "Visit Site",
    "portfolio-link-urgutplays": "Visit Site",
    "portfolio-link-hmmexport": "Visit Site",
    "portfolio-link-azb": "Visit Site",
    "portfolio-link-tca": "Visit Site",
    "portfolio-link-lentalar": "Visit Site",
    "portfolio-link-dustlikarena": "Go to Bot",
    "portfolio-link-sodiq": "Go to Official Bot",
    "pricing-title": "Pricing",
    "pricing-subtitle": "Choose the best plan that suits your needs",
    "badge-basic": "BASIC",
    "badge-popular": "POPULAR",
    "badge-premium": "PREMIUM",
    "plan-basic-title": "Landing Page",
    "plan-basic-feature1": "1-page website",
    "plan-basic-feature2": "Responsive design",
    "plan-basic-feature3": "Contact form",
    "plan-basic-feature4": "Basic SEO",
    "plan-basic-feature5": "2 weeks technical support",
    "plan1-title": "Website Creation",
    "plan1-feature1": "Modern design",
    "plan1-feature2": "Responsive (mobile friendly)",
    "plan1-feature3": "Up to 5 pages",
    "plan1-feature4": "SEO optimization",
    "plan1-feature5": "1 month free technical support",
    "plan2-title": "Custom Project",
    "plan2-price": "Custom",
    "plan2-feature1": "All standard features",
    "plan2-feature2": "Unlimited pages",
    "plan2-feature3": "Custom functionality",
    "plan2-feature4": "Admin panel",
    "plan2-feature7": "Priority support",
    "plan-order": "Place Order",
    "contact-title": "Contact",
    "contact-subtitle": "Get in Touch",
    "contact-description": "Contact us to get advice on your project or learn more about our services.",
    "contact-address": "Address",
    "contact-form-title": "Send Message",
    "form-name": "NAME",
    "form-phone": "PHONE",
    "form-telegram": "TELEGRAM",
    "form-message": "MESSAGE",
    "form-submit": "Send",
    "footer-text": "© 2026 Nurkom — All rights reserved.",
    "order-modal-label": "Order",
    "order-modal-title": "Service Request",
    "order-form-name": "Name",
    "order-form-phone": "Phone",
    "order-form-telegram": "Telegram",
    "order-form-message": "Message",
    "order-form-submit": "Send",
    "order-form-submitting": "Sending...",
    "order-form-placeholder-name": "Your name",
    "order-form-placeholder-phone": "+998 90 000 00 00",
    "order-form-placeholder-telegram": "@username",
    "order-form-placeholder-message": "Brief description of your project...",
    "order-service-website": "Website Development",
    "order-service-bot": "Telegram Bot Development",
    "order-service-backend": "Backend Development",
    "order-service-landing": "Landing Page — 500,000 UZS",
    "order-service-standard": "Website Creation — 100$ USD",
    "order-service-custom": "Custom Project — Custom",
    "modal-success-title": "Success!",
    "modal-success-text": "Your message was sent successfully. We will contact you soon.",
    "modal-error-title": "Error!",
    "modal-error-text": "Failed to send message. Please try again.",
  },

  // ─────────────────────────── RUSSIAN ───────────────────────────
  ru: {
    "nav-home": "Главная",
    "nav-services": "Услуги",
    "nav-about": "Статистика",
    "nav-portfolio": "Портфолио",
    "nav-contact": "Контакты",
    "hero-modern": "Современные",
    "hero-digital": "Цифровые Решения",
    "hero-description":
      "Профессиональная разработка веб-сайтов и Telegram ботов. Мы готовы предоставить идеальные цифровые решения для вашего бизнеса.",
    "hero-cta": "Связаться с нами",
    "services-title": "Услуги",
    "service1-title": "Разработка Веб-сайтов",
    "service1-description":
      "Услуги по созданию современных и функциональных веб-сайтов. Решения, подходящие для бизнеса.",
    "service2-title": "Разработка Telegram Ботов",
    "service2-description":
      "Создание специальных Telegram ботов для вашего бизнеса. Автоматизация общения с клиентами и услуг.",
    "service3-title": "Backend Разработка",
    "service3-description":
      "Создание мощных и стабильных backend систем для вашего проекта. Интеграция баз данных и API.",
    "service-order": "Заказать",
    statistika: "Статистика",
    "stats-subtitle": "Наши результаты в цифрах",
    stat1: "Успешных Проектов",
    stat2: "Удовлетворённость Клиентов",
    stat3: "Опытных Специалистов",
    stat4: "Лет Опыта",
    "portfolio-title": "Портфолио",
    "portfolio-subtitle": "Наши завершённые проекты",
    "portfolio-filter-all": "Все",
    "portfolio-filter-website": "Веб-сайты",
    "portfolio-filter-admin": "Админ Панели",
    "portfolio-filter-bot": "Telegram Боты",
    "portfolio-read-more": "Подробнее",
    "portfolio-close": "Закрыть",
    "portfolio-title-furniglass": "Furniglass",
    "portfolio-title-nurgarden": "Nur & Garden",
    "portfolio-title-studyfans": "Studyfans",
    "portfolio-title-muhibacademy": "Muhibacademy",
    "portfolio-title-urgutplays": "Urgut Plays - Админ Панель",
    "portfolio-title-hmmexport": "HMM Export",
    "portfolio-title-azb": "AZB Company",
    "portfolio-title-tca": "TCA Group",
    "portfolio-title-lentalar": "Biitiruvchi Lentalar",
    "portfolio-title-dustlikarena": "Do'stlik Arena Бот",
    "portfolio-title-sodiq": "Sodiq Consulting",
    "portfolio-short-furniglass": "Мебельная фабрика Furniglass с 25-летним опытом производит современную продукцию...",
    "portfolio-short-nurgarden": "Минималистичный веб-сайт для компании по производству продуктов питания...",
    "portfolio-short-studyfans":
      "Платформа, предоставляющая консультационные услуги студентам. Зарубежные университеты и гранты...",
    "portfolio-short-muhibacademy": "Платформа с информацией об академии. Доступные курсы в виде карточек...",
    "portfolio-short-urgutplays":
      "Специальная система управления для платформы UrgutPlace. Управление магазинами и заказами...",
    "portfolio-short-hmmexport": "Веб-сайт для компании HMM Export. Продукты, заказы и новости...",
    "portfolio-short-azb": "Создан для компании Abdushukur Zamin Baraka. Сухофрукты, услуги и поддержка...",
    "portfolio-short-tca": "Веб-сайт для компании TCA Group. Портфолио приложений и контакты...",
    "portfolio-short-lentalar": "Для компании Bitiruvchi Lentalar. Продукты, заказы и информация о компании...",
    "portfolio-short-dustlikarena": "Бронирование игр, отмена и просмотр статистики через бот мини-стадиона...",
    "portfolio-short-sodiq": "Информация о компании, услуги и возможности поддержки...",
    "portfolio-desc-furniglass":
      "Мебельная фабрика Furniglass с 25-летним опытом производит современную и качественную продукцию. На сайте представлена полная информация о различных видах мебели, дизайнерских решениях и услугах по индивидуальному заказу. В рамках проекта была создана современная панель администратора, система управления продуктами и удобный интерфейс для пользователей.",
    "portfolio-desc-nurgarden":
      "Минималистичный веб-сайт, созданный для компании по производству продуктов питания. На сайте содержится полная информация о компании, производимых продуктах, контактные данные и возможности партнёрства. Современный дизайн и удобная навигация являются главными преимуществами проекта.",
    "portfolio-desc-studyfans":
      "Платформа, предоставляющая консультационные услуги студентам. На сайте представлена полная информация об образовательных программах, зарубежных университетах и грантовых возможностях. Пользователи могут легко найти нужную информацию и связаться со специалистами.",
    "portfolio-desc-muhibacademy":
      "Платформа, предоставляющая информацию об академии. Доступные курсы представлены в виде карточек, каждая из которых содержит полную информацию. Через платформу студенты могут записаться на курсы, ознакомиться с расписанием и ценами. Современный дизайн и удобный интерфейс улучшают пользовательский опыт.",
    "portfolio-desc-urgutplays":
      "Специальная система управления для платформы UrgutPlace. Через панель администратора можно добавлять и удалять магазины, управлять товарами и категориями, контролировать запросы пользователей и заказы. Система имеет функции обновления данных в режиме реального времени и формирования отчётов.",
    "portfolio-desc-hmmexport":
      "Этот веб-сайт, созданный для компании HMM Export, позволяет клиентам ознакомиться с продуктами, размещать заказы, получать информацию о компании и быть в курсе новостей. Сайт оснащён многоязычной поддержкой и профессиональным дизайном, соответствующим современному экспортному бизнесу.",
    "portfolio-desc-azb":
      "Сайт, созданный для компании Abdushukur Zamin Baraka, предоставляет пользователям информацию о сухофруктах, услугах, возможностях поддержки и новостях. Сайт включает каталог продуктов, галерею и возможности прямого заказа.",
    "portfolio-desc-tca":
      "Этот веб-сайт, созданный для компании TCA Group, предоставляет подробную информацию о компании, просмотр портфолио разработанных приложений и возможности связи. Сайт профессионально представлен с разделами витрины приложений, команды и истории компании.",
    "portfolio-desc-lentalar":
      "Этот веб-сайт, созданный для компании Bitiruvchi Lentalar, позволяет клиентам ознакомиться с продуктами, размещать заказы и получать информацию о компании. Сайт удобен для выпускников и родителей, упрощая процесс выбора продукта и оформления заказа.",
    "portfolio-desc-dustlikarena":
      "Через бот мини-стадиона Do'stlik Arena можно бронировать сегодняшние и завтрашние игры, отменять бронирование, получать информацию о стадионе, просматривать статистику и связываться с администратором. Бот включает удобную систему бронирования для игроков, автоматические напоминания и интеграцию платежей.",
    "portfolio-desc-sodiq":
      "Сайт, созданный для Sodiq Consulting, предоставляет пользователям информацию о компании, предоставляемых услугах, возможностях поддержки клиентов и новостях отрасли. Через Telegram бот клиенты могут быстро и удобно получать консультации и задавать вопросы.",
    "portfolio-cat-admin": "Админ Панель",
    "portfolio-cat-website": "Веб-сайт",
    "portfolio-cat-bot": "Telegram Бот",
    "portfolio-link-furniglass": "Посетить сайт",
    "portfolio-link-nurgarden": "Посетить сайт",
    "portfolio-link-studyfans": "Посетить сайт",
    "portfolio-link-muhibacademy": "Посетить сайт",
    "portfolio-link-urgutplays": "Посетить сайт",
    "portfolio-link-hmmexport": "Посетить сайт",
    "portfolio-link-azb": "Посетить сайт",
    "portfolio-link-tca": "Посетить сайт",
    "portfolio-link-lentalar": "Посетить сайт",
    "portfolio-link-dustlikarena": "Перейти к боту",
    "portfolio-link-sodiq": "Перейти к официальному боту",
    "pricing-title": "Цены",
    "pricing-subtitle": "Выберите лучший тариф, соответствующий вашим потребностям",
    "badge-basic": "BASIC",
    "badge-popular": "ПОПУЛЯРНЫЙ",
    "badge-premium": "PREMIUM",
    "plan-basic-title": "Landing Page",
    "plan-basic-feature1": "1-страничный сайт",
    "plan-basic-feature2": "Адаптивный дизайн",
    "plan-basic-feature3": "Форма обратной связи",
    "plan-basic-feature4": "Базовый SEO",
    "plan-basic-feature5": "2 недели технической поддержки",
    "plan1-title": "Создание Веб-сайта",
    "plan1-feature1": "Современный дизайн",
    "plan1-feature2": "Адаптивный (мобильная версия)",
    "plan1-feature3": "До 5 страниц",
    "plan1-feature4": "SEO оптимизация",
    "plan1-feature5": "1 месяц бесплатной технической поддержки",
    "plan2-title": "Индивидуальный Проект",
    "plan2-price": "По запросу",
    "plan2-feature1": "Все стандартные функции",
    "plan2-feature2": "Неограниченное количество страниц",
    "plan2-feature3": "Индивидуальный функционал",
    "plan2-feature4": "Панель администратора",
    "plan2-feature7": "Приоритетная поддержка",
    "plan-order": "Оформить заказ",
    "contact-title": "Контакты",
    "contact-subtitle": "Свяжитесь с нами",
    "contact-description":
      "Свяжитесь с нами, чтобы получить консультацию по вашему проекту или узнать больше о наших услугах.",
    "contact-address": "Адрес",
    "contact-form-title": "Отправить сообщение",
    "form-name": "ИМЯ",
    "form-phone": "ТЕЛЕФОН",
    "form-telegram": "TELEGRAM",
    "form-message": "СООБЩЕНИЕ",
    "form-submit": "Отправить",
    "footer-text": "© 2026 Nurkom — Все права защищены.",
    "order-modal-label": "Заказ",
    "order-modal-title": "Запрос на услугу",
    "order-form-name": "Имя",
    "order-form-phone": "Телефон",
    "order-form-telegram": "Telegram",
    "order-form-message": "Сообщение",
    "order-form-submit": "Отправить",
    "order-form-submitting": "Отправка...",
    "order-form-placeholder-name": "Ваше имя",
    "order-form-placeholder-phone": "+998 90 000 00 00",
    "order-form-placeholder-telegram": "@username",
    "order-form-placeholder-message": "Краткое описание вашего проекта...",
    "order-service-website": "Разработка Веб-сайта",
    "order-service-bot": "Разработка Telegram Бота",
    "order-service-backend": "Backend Разработка",
    "order-service-landing": "Landing Page — 500,000 UZS",
    "order-service-standard": "Создание Веб-сайта — 100$ USD",
    "order-service-custom": "Индивидуальный Проект — По запросу",
    "modal-success-title": "Успешно!",
    "modal-success-text": "Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.",
    "modal-error-title": "Ошибка!",
    "modal-error-text": "Не удалось отправить сообщение. Пожалуйста, попробуйте ещё раз.",
  },
};

// ═══════════════════════════════════════════════════════════════════
//  PORTFOLIO DATA  — single source of truth for all 11 projects
// ═══════════════════════════════════════════════════════════════════
const portfolioData = [
  {
    id: "furniglass",
    category: "admin",
    img: "./images/portfolio/furniglass.jpg",
    link: "https://furniglass.uz/",
    linkKey: "portfolio-link-furniglass",
    catKey: "portfolio-cat-admin",
  },
  {
    id: "nurgarden",
    category: "admin",
    img: "./images/portfolio/nurgarden.jpg",
    link: "https://www.nurandgarden.com/",
    linkKey: "portfolio-link-nurgarden",
    catKey: "portfolio-cat-admin",
  },
  {
    id: "studyfans",
    category: "website",
    img: "./images/portfolio/studyfans.jpg",
    link: "https://studyfans.uz/",
    linkKey: "portfolio-link-studyfans",
    catKey: "portfolio-cat-website",
  },
  {
    id: "muhibacademy",
    category: "website",
    img: "./images/portfolio/muhibacademy.jpg",
    link: "https://muhibacademy.uz/",
    linkKey: "portfolio-link-muhibacademy",
    catKey: "portfolio-cat-website",
  },
  {
    id: "urgutplays",
    category: "admin",
    img: "./images/portfolio/urgutplays.jpg",
    link: "#",
    linkKey: "portfolio-link-urgutplays",
    catKey: "portfolio-cat-admin",
  },
  {
    id: "hmmexport",
    category: "website",
    img: "./images/portfolio/hmmexport.jpg",
    link: "https://www.hmmexport.com",
    linkKey: "portfolio-link-hmmexport",
    catKey: "portfolio-cat-website",
  },
  {
    id: "azb",
    category: "website",
    img: "./images/portfolio/AZB.jpg",
    link: "https://www.abdushkurzaminbaraka710.uz/",
    linkKey: "portfolio-link-azb",
    catKey: "portfolio-cat-website",
  },
  {
    id: "tca",
    category: "website",
    img: "./images/portfolio/tca.jpg",
    link: "https://www.tcagroup.uz",
    linkKey: "portfolio-link-tca",
    catKey: "portfolio-cat-website",
  },
  {
    id: "lentalar",
    category: "website",
    img: "./images/portfolio/lentalar.jpg",
    link: "https://www.bitiruvchilenta.uz",
    linkKey: "portfolio-link-lentalar",
    catKey: "portfolio-cat-website",
  },
  {
    id: "dustlikarena",
    category: "bot",
    img: "./images/portfolio/dustlikarena.jpg",
    link: "https://t.me/DustlikArena_Bot",
    linkKey: "portfolio-link-dustlikarena",
    catKey: "portfolio-cat-bot",
  },
  {
    id: "sodiq",
    category: "bot",
    img: "./images/portfolio/SodiqConsulting.jpg",
    link: "https://t.me/Koreadesk_bot",
    linkKey: "portfolio-link-sodiq",
    catKey: "portfolio-cat-bot",
  },
];

// ═══════════════════════════════════════════════════════════════════
//  LANGUAGE STATE
// ═══════════════════════════════════════════════════════════════════
let currentLang = localStorage.getItem("language") || "uz";
let currentOrderServiceKey = "";

// ─── Core translate helper ───
function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || key;
}

// ─── Apply all [data-key] elements ───
function applyTranslations() {
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    if (translations[currentLang] && translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });
}

// ─── Update portfolio card text ───
function updatePortfolioCards() {
  portfolioData.forEach((p) => {
    const card = document.querySelector(`.portfolio-item[data-portfolio-id="${p.id}"]`);
    if (!card) return;
    const titleEl = card.querySelector(".p-card-title");
    const shortEl = card.querySelector(".p-card-short");
    const btnEl = card.querySelector(".p-card-btn");
    if (titleEl) titleEl.textContent = t(`portfolio-title-${p.id}`);
    if (shortEl) shortEl.textContent = t(`portfolio-short-${p.id}`);
    if (btnEl) btnEl.textContent = t("portfolio-read-more");
  });
}

// ─── Update filter buttons ───
function updateFilterButtons() {
  const map = {
    all: "portfolio-filter-all",
    website: "portfolio-filter-website",
    admin: "portfolio-filter-admin",
    bot: "portfolio-filter-bot",
  };
  document.querySelectorAll(".category-btn").forEach((btn) => {
    const cat = btn.dataset.category;
    if (map[cat]) btn.textContent = t(map[cat]);
  });
}

// ─── Update order modal UI ───
function updateOrderModal() {
  const fields = [
    ["orderModalLabel", "order-modal-label"],
    ["orderModalTitle", "order-modal-title"],
    ["orderFormNameLabel", "order-form-name"],
    ["orderFormPhoneLabel", "order-form-phone"],
    ["orderFormTelegramLabel", "order-form-telegram"],
    ["orderFormMessageLabel", "order-form-message"],
  ];
  fields.forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = t(key);
  });
  const btn = document.getElementById("orderSubmitBtn");
  if (btn && !btn.disabled) btn.textContent = t("order-form-submit");

  // Placeholders
  const form = document.getElementById("orderForm");
  if (form) {
    const inputs = {
      name: "order-form-placeholder-name",
      phone: "order-form-placeholder-phone",
      telegram: "order-form-placeholder-telegram",
      message: "order-form-placeholder-message",
    };
    Object.entries(inputs).forEach(([name, key]) => {
      const el = form.querySelector(`[name="${name}"]`);
      if (el) el.placeholder = t(key);
    });
  }
  // Refresh service label
  if (currentOrderServiceKey) {
    const sl = document.getElementById("orderServiceLabel");
    if (sl) sl.textContent = t(currentOrderServiceKey);
  }
}

// ─── Update feedback modal texts ───
function updateFeedbackModals() {
  const map = {
    "#successModal h3": "modal-success-title",
    "#successModal p": "modal-success-text",
    "#errorModal h3": "modal-error-title",
    "#errorModal p": "modal-error-text",
  };
  Object.entries(map).forEach(([sel, key]) => {
    const el = document.querySelector(sel);
    if (el) el.textContent = t(key);
  });
}

// ─── Master changeLanguage ───
function changeLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("language", lang);
  document.documentElement.lang = lang;

  applyTranslations();
  updatePortfolioCards();
  updateFilterButtons();
  updateOrderModal();
  updateFeedbackModals();

  // Update flag/label display
  const flagClass = `flag-${lang}`;
  const els = {
    "current-flag": (el) => (el.className = `language-flag ${flagClass}`),
    "mobile-current-flag": (el) => (el.className = `language-flag ${flagClass} w-4 h-3`),
    "current-lang": (el) => (el.textContent = lang.toUpperCase()),
    "mobile-current-lang": (el) => (el.textContent = lang.toUpperCase()),
  };
  Object.entries(els).forEach(([id, fn]) => {
    const el = document.getElementById(id);
    if (el) fn(el);
  });

  document.querySelectorAll(".language-option").forEach((opt) => {
    opt.classList.toggle("active", opt.dataset.lang === lang);
  });
}

// ═══════════════════════════════════════════════════════════════════
//  BUILD PORTFOLIO GRID  (renders cards from portfolioData)
// ═══════════════════════════════════════════════════════════════════
function buildPortfolioGrid() {
  const grid = document.getElementById("portfolioGrid");
  if (!grid) return;
  grid.innerHTML = "";

  portfolioData.forEach((p, i) => {
    const delay = 100 + i * 50;
    const card = document.createElement("div");
    card.className = "portfolio-item";
    card.dataset.category = p.category;
    card.dataset.portfolioId = p.id;
    card.setAttribute("data-aos", "fade-up");
    card.setAttribute("data-aos-duration", "800");
    card.setAttribute("data-aos-delay", String(delay));

    card.innerHTML = `
      <div class="portfolio-img">
        <img src="${p.img}" alt="${p.id}" loading="lazy" />
      </div>
      <div class="portfolio-content">
        <h3 class="p-card-title" style="font-size:1.25rem;font-weight:600;letter-spacing:-0.01em;margin-bottom:0.75rem;">
          ${t("portfolio-title-" + p.id)}
        </h3>
        <p class="p-card-short" style="font-size:0.875rem;line-height:1.6;color:rgba(255,255,255,0.6);margin-bottom:1.5rem;">
          ${t("portfolio-short-" + p.id)}
        </p>
        <span class="portfolio-button p-card-btn" style="font-size:0.875rem;font-weight:500;pointer-events:none;">
          ${t("portfolio-read-more")}
        </span>
      </div>
    `;

    card.addEventListener("click", () => openPortfolioModal(p));
    grid.appendChild(card);
  });
}

// ═══════════════════════════════════════════════════════════════════
//  PORTFOLIO DETAIL MODAL
// ═══════════════════════════════════════════════════════════════════
function openPortfolioModal(p) {
  const modal = document.getElementById("portfolioModal");
  if (!modal) return;

  document.getElementById("pModal-img").src = p.img;
  document.getElementById("pModal-img").alt = t("portfolio-title-" + p.id);
  document.getElementById("pModal-title").textContent = t("portfolio-title-" + p.id);
  document.getElementById("pModal-category").textContent = t(p.catKey);
  document.getElementById("pModal-desc").textContent = t("portfolio-desc-" + p.id);

  const link = document.getElementById("pModal-link");
  link.href = p.link;
  link.textContent = t(p.linkKey);
  link.target = "_blank";

  const closeBtn = document.getElementById("pModal-close-btn");
  if (closeBtn) closeBtn.textContent = t("portfolio-close");

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closePortfolioModal() {
  const modal = document.getElementById("portfolioModal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "";
}

// ═══════════════════════════════════════════════════════════════════
//  ORDER MODAL
// ═══════════════════════════════════════════════════════════════════
// Called from HTML with a translation key like "order-service-website"
function openOrderModal(serviceKey) {
  currentOrderServiceKey = serviceKey;

  const serviceLabel = document.getElementById("orderServiceLabel");
  if (serviceLabel) serviceLabel.textContent = t(serviceKey);

  const form = document.getElementById("orderForm");
  if (form) form.reset();

  updateOrderModal();

  const modal = document.getElementById("orderModal");
  if (!modal) return;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeOrderModal() {
  const modal = document.getElementById("orderModal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "";
}

// ═══════════════════════════════════════════════════════════════════
//  LANGUAGE SWITCHER
// ═══════════════════════════════════════════════════════════════════
function initLanguageSwitcher() {
  const langBtn = document.getElementById("language-btn");
  const mobileLangBtn = document.getElementById("mobile-language-btn");
  const langDropdown = document.getElementById("language-dropdown");
  const mobileLangDropdown = document.getElementById("mobile-language-dropdown");

  const toggle = (dd) => dd.classList.toggle("show");
  const close = (dd) => dd.classList.remove("show");

  if (langBtn)
    langBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggle(langDropdown);
      close(mobileLangDropdown);
    });
  if (mobileLangBtn)
    mobileLangBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggle(mobileLangDropdown);
      close(langDropdown);
    });

  document.querySelectorAll(".language-option").forEach((opt) => {
    opt.addEventListener("click", (e) => {
      e.preventDefault();
      changeLanguage(opt.dataset.lang);
      close(langDropdown);
      close(mobileLangDropdown);
    });
  });

  document.addEventListener("click", () => {
    close(langDropdown);
    close(mobileLangDropdown);
  });
  if (langDropdown) langDropdown.addEventListener("click", (e) => e.stopPropagation());
  if (mobileLangDropdown) mobileLangDropdown.addEventListener("click", (e) => e.stopPropagation());
}

// ═══════════════════════════════════════════════════════════════════
//  MOBILE MENU
// ═══════════════════════════════════════════════════════════════════
function initMobileMenu() {
  const btn = document.getElementById("mobile-menu-button");
  const closeBtn = document.getElementById("close-menu-button");
  const menu = document.getElementById("mobile-menu");
  const overlay = document.getElementById("menu-overlay");
  if (!btn || !menu) return;

  const open = () => {
    menu.classList.remove("translate-x-full");
    if (overlay) overlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    document.querySelectorAll(".mobile-menu-item").forEach((item, i) => {
      setTimeout(() => item.classList.add("mobile-menu-enter"), 100 + i * 50);
    });
  };
  const closeMenu = () => {
    menu.classList.add("translate-x-full");
    document.querySelectorAll(".mobile-menu-item").forEach((item) => item.classList.remove("mobile-menu-enter"));
    setTimeout(() => {
      if (overlay) overlay.classList.add("hidden");
      document.body.style.overflow = "";
    }, 500);
  };

  btn.addEventListener("click", open);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  if (overlay) overlay.addEventListener("click", closeMenu);
  document.querySelectorAll(".mobile-menu-item").forEach((item) => item.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}

// ═══════════════════════════════════════════════════════════════════
//  PORTFOLIO CATEGORY FILTER
// ═══════════════════════════════════════════════════════════════════
function initPortfolioFilter() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".category-btn");
    if (!btn) return;
    const cat = btn.dataset.category;
    document.querySelectorAll(".category-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    document.querySelectorAll(".portfolio-item").forEach((item) => {
      item.classList.toggle("hidden", !(cat === "all" || item.dataset.category === cat));
    });
  });
}

// ═══════════════════════════════════════════════════════════════════
//  SCROLL EFFECTS & SMOOTH SCROLL
// ═══════════════════════════════════════════════════════════════════
function initScrollEffects() {
  const header = document.querySelector("header");
  if (!header) return;
  let last = 0;
  window.addEventListener("scroll", () => {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    header.classList.toggle("shadow-xl", top > last && top > 100);
    last = top;
  });
}

function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#") return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

// ═══════════════════════════════════════════════════════════════════
//  TELEGRAM API
// ═══════════════════════════════════════════════════════════════════
const BOT_TOKEN = "8081090929:AAHbcMpCn9Hs5PEFsUbNA6dhR5JRotkUiYM";
const CHAT_ID = "7241567559";

async function sendToTelegram(message) {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const data = { chat_id: CHAT_ID, text: message, parse_mode: "HTML" };

  try {
    const res = await fetch(proxy + url, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Requested-With": "XMLHttpRequest" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error();
    return (await res.json()).ok;
  } catch {
    try {
      const fd = new FormData();
      fd.append("chat_id", CHAT_ID);
      fd.append("text", message);
      fd.append("parse_mode", "HTML");
      await fetch(url, { method: "POST", mode: "no-cors", body: fd });
      return true;
    } catch {
      return false;
    }
  }
}

// ═══════════════════════════════════════════════════════════════════
//  FEEDBACK MODALS
// ═══════════════════════════════════════════════════════════════════
function showSuccessModal() {
  document.getElementById("successModal")?.classList.remove("hidden");
}
function showErrorModal() {
  document.getElementById("errorModal")?.classList.remove("hidden");
}
function hideModals() {
  document.getElementById("successModal")?.classList.add("hidden");
  document.getElementById("errorModal")?.classList.add("hidden");
}

// ═══════════════════════════════════════════════════════════════════
//  CONTACT FORM
// ═══════════════════════════════════════════════════════════════════
function initContactForm() {
  const form = document.getElementById("contactForm");
  const btn = document.getElementById("submitBtn");
  if (!form || !btn) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    btn.disabled = true;
    const span = btn.querySelector("span");
    if (span) span.textContent = t("order-form-submitting");

    const fd = new FormData(form);
    const date = new Date().toLocaleString("uz-UZ");
    let msg = `<b>🆕 Yangi xabar Nurkom saytidan</b>\n\n<b>📅 Sana:</b> ${date}\n<b>👤 Ism:</b> ${fd.get("name")}\n<b>📞 Telefon:</b> ${fd.get("phone")}`;
    if (fd.get("telegram")?.trim()) msg += `\n<b>📱 Telegram:</b> ${fd.get("telegram")}`;
    if (fd.get("message")?.trim()) msg += `\n<b>💬 Xabar:</b>\n${fd.get("message")}`;

    const ok = await sendToTelegram(msg);
    btn.disabled = false;
    if (span) span.textContent = t("form-submit");
    if (ok) {
      form.reset();
      showSuccessModal();
    } else {
      showErrorModal();
    }
  });
}

// ═══════════════════════════════════════════════════════════════════
//  ORDER FORM
// ═══════════════════════════════════════════════════════════════════
function initOrderForm() {
  const form = document.getElementById("orderForm");
  const btn = document.getElementById("orderSubmitBtn");
  if (!form || !btn) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    btn.disabled = true;
    btn.textContent = t("order-form-submitting");

    const fd = new FormData(form);
    const date = new Date().toLocaleString("uz-UZ");
    const serviceName = t(currentOrderServiceKey);
    let msg = `<b>🛒 Yangi buyurtma — Nurkom</b>\n\n<b>📦 Xizmat:</b> ${serviceName}\n<b>📅 Sana:</b> ${date}\n<b>👤 Ism:</b> ${fd.get("name")}\n<b>📞 Telefon:</b> ${fd.get("phone")}`;
    if (fd.get("telegram")?.trim()) msg += `\n<b>📱 Telegram:</b> ${fd.get("telegram")}`;
    if (fd.get("message")?.trim()) msg += `\n<b>💬 Xabar:</b>\n${fd.get("message")}`;

    const ok = await sendToTelegram(msg);
    btn.disabled = false;
    btn.textContent = t("order-form-submit");
    closeOrderModal();
    if (ok) {
      showSuccessModal();
    } else {
      showErrorModal();
    }
  });
}

// ═══════════════════════════════════════════════════════════════════
//  MODAL CLOSE EVENTS
// ═══════════════════════════════════════════════════════════════════
function initModalEvents() {
  // Portfolio modal
  document.getElementById("pModal-close")?.addEventListener("click", closePortfolioModal);
  document.getElementById("pModal-close-btn")?.addEventListener("click", closePortfolioModal);
  document.getElementById("portfolioModal")?.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closePortfolioModal();
  });

  // Order modal
  document.getElementById("orderModal-close")?.addEventListener("click", closeOrderModal);
  document.getElementById("orderModal")?.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeOrderModal();
  });

  // Success / Error modals
  document.getElementById("closeModal")?.addEventListener("click", hideModals);
  document.getElementById("closeErrorModal")?.addEventListener("click", hideModals);
  document.getElementById("successModal")?.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) hideModals();
  });
  document.getElementById("errorModal")?.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) hideModals();
  });

  // Escape key closes everything
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closePortfolioModal();
      closeOrderModal();
      hideModals();
    }
  });
}

// ═══════════════════════════════════════════════════════════════════
//  ANIMATIONS
// ═══════════════════════════════════════════════════════════════════
function initAnimations() {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.style.animationPlayState = "running";
      }),
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
  );
  document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
}

// ═══════════════════════════════════════════════════════════════════
//  INIT  —  runs when DOM is ready
// ═══════════════════════════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", function () {
  buildPortfolioGrid(); // 1. render cards
  changeLanguage(currentLang); // 2. apply all translations (includes cards, filters, modals)
  initLanguageSwitcher(); // 3. lang switcher dropdown
  initMobileMenu(); // 4. hamburger menu
  initContactForm(); // 5. main contact form
  initOrderForm(); // 6. order modal form
  initPortfolioFilter(); // 7. category filter buttons
  initScrollEffects(); // 8. header scroll shadow
  initSmoothScrolling(); // 9. smooth anchor scrolling
  initModalEvents(); // 10. all modal close handlers
  initAnimations(); // 11. intersection observer animations
});
