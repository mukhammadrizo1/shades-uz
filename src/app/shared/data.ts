// Centralized Multilingual Data Store for SHADES (KISS & DRY)
// Supports UZ (Latin - Default), RU, EN

export interface LocalizedString {
  uz: string;
  ru: string;
  en: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  iconKey: string;
  title: LocalizedString;
  shortDesc: LocalizedString;
  fullDesc: LocalizedString;
  features: {
    uz: string[];
    ru: string[];
    en: string[];
  };
  turnaround: LocalizedString;
  minOrder: LocalizedString;
  tag: LocalizedString;
}

export interface PortfolioItem {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  images: string[];
}

export interface ProcessStep {
  step: string;
  iconKey: string;
  title: LocalizedString;
  desc: LocalizedString;
  duration: LocalizedString;
}

export interface AdvantageItem {
  iconKey: string;
  title: LocalizedString;
  desc: LocalizedString;
}

export interface StatItem {
  value: string;
  label: LocalizedString;
}

export interface FaqItem {
  question: LocalizedString;
  answer: LocalizedString;
}

export interface TestimonialItem {
  name: string;
  company: string;
  text: LocalizedString;
  rating: number;
  avatarText: string;
}

// Global Contact Details
export const CONTACT_INFO = {
  phone: '+998 (70) 114-10-10',
  phoneRaw: '+998701141010',
  email: 'shadesprintuz@gmail.com',
  telegramUser: '@shadesprint',
  telegramUrl: 'https://t.me/shadesprint',
  instagram: 'shades.uz',
  instagramUrl: 'https://instagram.com/shades.uz',
  chatUrl: 'https://t.me/uzshadeschat',
  catalogUrl: 'https://t.me/uzshades',
  workingHours: {
    uz: 'Dush - Shan: 09:00 - 19:00',
    ru: 'Пн - Сб: 09:00 - 19:00',
    en: 'Mon - Sat: 09:00 - 19:00'
  },
  address: {
    uz: "Toshkent shahri, Iftixor ko'chasi, 9-uy",
    ru: 'г. Ташкент, ул. Ифтихор, 9',
    en: 'Tashkent city, Iftikhor street, 9'
  },
  yandexMapUrl: 'https://yandex.uz/maps/-/CTtXFP9v',
  googleMapUrl: 'https://maps.google.com/?q=41.340518,69.269943',
  mapEmbedUrl: 'https://maps.google.com/maps?q=41.340518,69.269943&hl=uz&z=17&output=embed'
};

// UI Translations
export const UI_TEXT = {
  nav: {
    services: { uz: 'Xizmatlar', ru: 'Услуги', en: 'Services' },
    portfolio: { uz: 'Ishlarimiz', ru: 'Портфолио', en: 'Portfolio' },
    process: { uz: 'Jarayon', ru: 'Процесс', en: 'Process' },
    advantages: { uz: 'Afzalliklar', ru: 'Преимущества', en: 'Why Us' },
    faq: { uz: 'Savol-Javob', ru: 'FAQ', en: 'FAQ' },
    contact: { uz: "Bog'lanish", ru: 'Контакты', en: 'Contact' },
    orderBtn: { uz: 'Buyurtma berish', ru: 'Оставить заказ', en: 'Place Order' },
  },
  hero: {
    slogan: {
      uz: 'IJOD · SIFAT · NATIJA — BIR YECHIMDA',
      ru: 'ТВОРЧЕСТВО · КАЧЕСТВО · РЕЗУЛЬТАТ — В ОДНОМ РЕШЕНИИ',
      en: 'CREATIVITY · QUALITY · RESULT — IN ONE SOLUTION'
    },
    titleLine1: {
      uz: 'Biznesingizga',
      ru: 'Придадим вашему бизнесу',
      en: 'We bring'
    },
    titleHighlight: {
      uz: "yorqin ranglar va zamonaviy ko'rinish",
      ru: 'яркие краски и современный вид',
      en: 'vibrant colors and a modern look'
    },
    titleLine2: {
      uz: 'beramiz',
      ru: '',
      en: 'to your business'
    },
    desc: {
      uz: 'Vizitkalar, flayerlar, futbolkalar va korporativ suvenirlarga yuqori sifatli tezkor bosma xizmatlar. Barcha turdagi tashqi reklama maxsulotlari va xizmatlari.',
      ru: 'Качественные и оперативные услуги печати на визитках, флаерах, футболках и корпоративных сувенирах. Все виды наружной рекламы и услуг.',
      en: 'High-quality fast printing services on business cards, flyers, apparel, and corporate merchandise. All types of outdoor advertising products and services.'
    },
    ctaOrder: { uz: 'Buyurtma berish', ru: 'Оформить заказ', en: 'Order Now' },
    ctaPortfolio: { uz: 'Ishlarimizni ko‘rish', ru: 'Смотреть работы', en: 'View Portfolio' },
    catalogBtn: { uz: 'Katalog va Narxlar', ru: 'Каталог и Цены', en: 'Catalog & Prices' }
  },
  servicesSection: {
    eyebrow: { uz: '01 / Xizmatlar', ru: '01 / Услуги', en: '01 / Services' },
    title: { uz: 'Biz taklif etadigan asosiy yo‘nalishlar', ru: 'Основные направления наших услуг', en: 'Our Core Printing Services' },
    subtitle: {
      uz: 'Kichik nusxalardan yirik korporativ tirajlargacha barcha talablarga mos xizmatlar.',
      ru: 'От единичных тиражей до крупных корпоративных объемов.',
      en: 'From small one-off batches to large-scale corporate print runs.'
    },
    detailBtn: { uz: 'Batafsil ma’lumot', ru: 'Подробнее', en: 'Details' },
    closeBtn: { uz: 'Yopish', ru: 'Закрыть', en: 'Close' },
    orderThis: { uz: 'Ushbu xizmatga buyurtma berish', ru: 'Заказать эту услугу', en: 'Order This Service' },
    turnaroundLabel: { uz: 'Tayyor bo‘lish vaqti:', ru: 'Срок изготовления:', en: 'Turnaround Time:' },
    minOrderLabel: { uz: 'Minimal buyurtma:', ru: 'Минимальный тираж:', en: 'Minimum Order:' },
  },
  portfolioSection: {
    eyebrow: { uz: '02 / Ishlarimiz', ru: '02 / Портфолио', en: '02 / Portfolio' },
    title: { uz: 'Mijozlarimiz uchun bajargan ishlarimiz', ru: 'Реализованные проекты для клиентов', en: 'Featured Client Projects' },
    subtitle: {
      uz: 'Har bir mahsulot — yuqori aniqlik, sifatli xomashyo va mukammal brending namunasi.',
      ru: 'Каждое изделие — это внимание к деталям, качественные материалы и стиль.',
      en: 'Each piece showcases sharp precision, premium materials, and distinctive branding.'
    },
    viewAllBtn: { uz: 'Barcha ishlar va namunalar', ru: 'Все работы и образцы', en: 'Explore all works & samples' },
    viewSamplesBtn: { uz: 'Katalogda ko‘rish', ru: 'Смотреть в каталоге', en: 'View in Catalog' }
  },
  processSection: {
    eyebrow: { uz: '03 / Jarayon', ru: '03 / Процесс', en: '03 / Process' },
    title: { uz: 'Buyurtmadan tayyor mahsulotgacha', ru: 'От заявки до готовой продукции', en: 'From Order to Delivery' },
    subtitle: {
      uz: '4 ta oddiy va shaffof bosqich orqali buyurtmangizni o‘z vaqtida topshiramiz.',
      ru: '4 простых и прозрачных шага для получения идеального результата в срок.',
      en: '4 straightforward and transparent steps to deliver your print on schedule.'
    }
  },
  advantagesSection: {
    eyebrow: { uz: '04 / Afzalliklar', ru: '04 / Преимущества', en: '04 / Why Us' },
    title: { uz: 'Nega aynan SHADES?', ru: 'Почему выбирают SHADES?', en: 'Why Choose SHADES?' },
    subtitle: {
      uz: 'Mijozlarimiz bizga ishonishining asosiy omillari.',
      ru: 'Ключевые преимущества, за которые нас ценят постоянные заказчики.',
      en: 'The key reasons our clients trust us with their brand identity.'
    }
  },
  faqSection: {
    eyebrow: { uz: '05 / Savol-Javob', ru: '05 / Частые Вопросы', en: '05 / FAQ' },
    title: { uz: 'Ko‘p beriladigan savollarga javoblar', ru: 'Ответы на часто задаваемые вопросы', en: 'Frequently Asked Questions' },
    subtitle: {
      uz: 'Buyurtma berishdan oldin bilishingiz kerak bo‘lgan muhim ma’lumotlar.',
      ru: 'Полезная информация перед оформлением заказа.',
      en: 'Essential details you need to know before placing an order.'
    }
  },
  contactSection: {
    eyebrow: { uz: '06 / Bog‘lanish', ru: '06 / Контакты', en: '06 / Contact Us' },
    title: { uz: 'Loyihangizni birgalikda muhokama qilamiz', ru: 'Давайте обсудим ваш проект', en: 'Let’s Discuss Your Project' },
    subtitle: {
      uz: 'Savollaringiz bormi yoki narx hisoblash kerakmi? Mutaxassislarimiz yordam berishga tayyor.',
      ru: 'Есть вопросы или нужен расчет стоимости? Наши специалисты с радостью помогут.',
      en: 'Have questions or need an estimate? Our team is ready to assist you right now.'
    },
    formName: { uz: 'Ismingiz', ru: 'Ваше имя', en: 'Your Name' },
    formPhone: { uz: 'Telefon raqamingiz', ru: 'Номер телефона', en: 'Phone Number' },
    formService: { uz: 'Qiziqtirgan xizmat turi', ru: 'Интересующая услуга', en: 'Service of Interest' },
    formMessage: { uz: 'Qisqacha izoh (tiraj, o‘lcham)', ru: 'Комментарий (тираж, размеры)', en: 'Notes (quantity, dimensions)' },
    submitBtn: { uz: 'Telegram orqali yuborish', ru: 'Отправить в Telegram', en: 'Send via Telegram' },
    directTelegram: { uz: 'To‘g‘ridan-to‘g‘ri Telegramda yozish', ru: 'Написать напрямую в Telegram', en: 'Message on Telegram' },
    successMsg: {
      uz: 'Rahmat! Xabaringiz qabul qilindi. Tez orada siz bilan bog‘lanamiz.',
      ru: 'Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.',
      en: 'Thank you! Your inquiry has been received. We will reach out shortly.'
    }
  },
  footer: {
    desc: {
      uz: 'SHADES — Zamonaviy poligrafiya, kiyim-kechaklarga sifatli bosma va korporativ suvenirlar ustaxonasi.',
      ru: 'SHADES — Современная типография, качественная печать на текстиле и корпоративные сувениры.',
      en: 'SHADES — Modern print house, high-definition apparel branding, and corporate merchandise.'
    },
    rights: {
      uz: 'Barcha huquqlar himoyalangan.',
      ru: 'Все права защищены.',
      en: 'All rights reserved.'
    }
  }
};

// 6 Core Services with Lucide Icons
export const SERVICES: ServiceItem[] = [
  {
    id: 'polygraphy',
    number: '01',
    iconKey: 'printer',
    title: {
      uz: 'Poligrafiya',
      ru: 'Полиграфия',
      en: 'Polygraphy & Printing'
    },
    shortDesc: {
      uz: 'Vizitkalar, flayerlar, bukletlar, kataloglar va korporativ qog‘oz mahsulotlari.',
      ru: 'Визитки, флаеры, буклеты, каталоги и фирменная полиграфическая продукция.',
      en: 'Business cards, flyers, brochures, catalogs, and corporate paper goods.'
    },
    fullDesc: {
      uz: 'Ofset va raqamli bosma texnologiyalari yordamida har qanday qog‘oz turida eng yuqori sifatli poligrafiya mahsulotlari tayyorlaymiz.',
      ru: 'Офсетная и цифровая печать полиграфической продукции любого формата и тиража с гарантией качества.',
      en: 'High-precision offset and digital production for all your business printing collateral.'
    },
    features: {
      uz: ['Vizitka', 'Flayer', 'Buklet', 'Doorhanger', 'Papka', 'Paket', 'Bloknot', 'Katalog', 'Menyu', 'Sticker', 'Kalendar'],
      ru: ['Визитка', 'Флаер', 'Буклет', 'Дорхенгер', 'Папка', 'Пакет', 'Блокнот', 'Каталог', 'Меню', 'Стикер', 'Календарь'],
      en: ['Business Card', 'Flyer', 'Brochure', 'Door Hanger', 'Folder', 'Bag', 'Notepad', 'Catalog', 'Menu', 'Sticker', 'Calendar']
    },
    turnaround: { uz: '1-3 ish kuni', ru: '1-3 рабочих дня', en: '1-3 business days' },
    minOrder: { uz: '100 dona', ru: '100 шт', en: '100 pcs' },
    tag: { uz: 'Ommabop', ru: 'Популярно', en: 'Popular' }
  },
  {
    id: 'trikotaj',
    number: '02',
    iconKey: 'shirt',
    title: {
      uz: 'Trikotaj',
      ru: 'Трикотаж & Текстиль',
      en: 'Apparel & Textiles'
    },
    shortDesc: {
      uz: 'Futbolkalar, kepkalar, svitshotlar va hudilarga sifatli bosma va kashta.',
      ru: 'Футболки, кепки, свитшоты и худи с долговечным брендированием и вышивкой.',
      en: 'Custom branded t-shirts, caps, sweatshirts, and hoodies with durable prints and embroidery.'
    },
    fullDesc: {
      uz: 'DTF, sholkografiya va 3D kashtachilik orqali sifatli matoga yuvishga chidamli qilib brendingizni tushiramiz.',
      ru: 'Нанесение логотипов на текстиль методами DTF, шелкографии и объемной вышивки. Стойкость к стиркам.',
      en: 'Premium textile branding via DTF, silk screen, and 3D embroidery that withstands frequent washing.'
    },
    features: {
      uz: ['Futbolka', 'Kepka', 'Svitshot', 'Hudi', 'Nimcha'],
      ru: ['Футболка', 'Кепка', 'Свитшот', 'Худи', 'Жилетка'],
      en: ['T-Shirt', 'Cap', 'Sweatshirt', 'Hoodie', 'Vest']
    },
    turnaround: { uz: '1-4 ish kuni', ru: '1-4 рабочих дня', en: '1-4 business days' },
    minOrder: { uz: '1 dona dan', ru: 'От 1 шт', en: 'From 1 pc' },
    tag: { uz: 'Xit xizmat', ru: 'Хит продаж', en: 'Best Seller' }
  },
  {
    id: 'souvenirs',
    number: '03',
    iconKey: 'gift',
    title: {
      uz: "Suvenir va sovg'alar",
      ru: 'Сувениры и подарки',
      en: 'Souvenirs & Gifts'
    },
    shortDesc: {
      uz: 'Ruchkalar, bloknotlar, krujkalar, termoslar va zamonaviy brendlangan aksessuarlar.',
      ru: 'Ручки, блокноты, кружки, термосы и стильные брендированные аксессуары.',
      en: 'Pens, notepads, mugs, thermoses, and modern branded corporate accessories.'
    },
    fullDesc: {
      uz: 'Mijozlaringiz va hamkorlaringiz xotirasida uzoq vaqt saqlanib qoluvchi sifatli korporativ sovg‘alar.',
      ru: 'Подарки партнерам и клиентам: лазерная гравировка, УФ-печать и тампопечать на любых сувенирах.',
      en: 'High-end corporate gift solutions featuring laser engraving, rotary UV, and tampo printing.'
    },
    features: {
      uz: ['Bloknot', 'Ruchka', 'Qalam', 'Bokal', 'Statuetka', 'Termos', 'Fleshka', 'Brilok', 'Hamyon', 'Cardholder', 'Powerbank', 'Soyabon', 'Sumka'],
      ru: ['Блокнот', 'Ручка', 'Карандаш', 'Бокал', 'Статуэтка', 'Термос', 'Флешка', 'Брелок', 'Кошелек', 'Картхолдер', 'Повербанк', 'Зонт', 'Сумка'],
      en: ['Notepad', 'Pen', 'Pencil', 'Mug', 'Statuette', 'Thermos', 'Flash Drive', 'Keychain', 'Wallet', 'Cardholder', 'Powerbank', 'Umbrella', 'Tote Bag']
    },
    turnaround: { uz: '2-4 ish kuni', ru: '2-4 рабочих дня', en: '2-4 business days' },
    minOrder: { uz: '10 dona', ru: '10 шт', en: '10 pcs' },
    tag: { uz: 'Premium', ru: 'Премиум', en: 'Premium' }
  },
  {
    id: 'branding',
    number: '04',
    iconKey: 'sparkles',
    title: {
      uz: 'Korporativ brendlash',
      ru: 'Корпоративный брендинг',
      en: 'Corporate Branding'
    },
    shortDesc: {
      uz: 'Roll Up, X Banner, bayroqlar, tablichkalar va ko‘rgazma jihozlari.',
      ru: 'Roll Up, X-баннеры, флаги, таблички, бейджи и выставочное оборудование.',
      en: 'Roll-ups, X-banners, flags, plates, badges, and complete exhibition setups.'
    },
    fullDesc: {
      uz: 'Kompaniyangiz tadbirlari, forumlari va ko‘rgazmalari uchun to‘liq brendlangan vizual mahsulotlar to‘plami.',
      ru: 'Комплексное оформление стендов, презентаций и корпоративных мероприятий под ключ.',
      en: 'Turnkey visual branding and display solutions for corporate conferences, expos, and presentations.'
    },
    features: {
      uz: ["Sovg'alar to'plami", 'X Banner (Pauk)', 'Roll Up', 'Bayroq', 'Tablichka', 'Beydjik', 'Kartina', 'Poster', "Ko'rgazma mahsulotlari"],
      ru: ['Подарочный набор', 'X-баннер (Паук)', 'Roll Up', 'Флаг', 'Табличка', 'Бейджик', 'Картина', 'Постер', 'Выставочные материалы'],
      en: ['Gift Set', 'X-Banner (Spider)', 'Roll Up', 'Flag', 'Nameplate', 'Badge', 'Wall Art', 'Poster', 'Exhibition Collateral']
    },
    turnaround: { uz: '2-5 ish kuni', ru: '2-5 рабочих дней', en: '2-5 business days' },
    minOrder: { uz: '1 to‘plam', ru: 'От 1 комплекта', en: 'From 1 set' },
    tag: { uz: 'Eksklyuziv', ru: 'Эксклюзив', en: 'Exclusive' }
  },
  {
    id: 'outdoor',
    number: '05',
    iconKey: 'layers',
    title: {
      uz: 'Tashqi reklama',
      ru: 'Наружная реклама',
      en: 'Outdoor Advertising'
    },
    shortDesc: {
      uz: 'Hajmli harflar, lightbox, bannerlar, stendlar va fasad reklamalari.',
      ru: 'Объемные буквы, лайтбоксы, баннеры, штендеры и фасадные конструкции.',
      en: '3D channel letters, lightboxes, banners, A-frame signs, and facade advertisements.'
    },
    fullDesc: {
      uz: 'Ko‘cha va binolar uchun uzoqdan ko‘zga tashlanadigan yorug‘likli va yorug‘liksiz barcha turdagi reklama konstruksiyalari.',
      ru: 'Световые и несветовые конструкции любой сложности для витрин, фасадов и городского пространства.',
      en: 'Illuminated and non-illuminated advertising structures for storefronts, building facades, and outdoors.'
    },
    features: {
      uz: ['Banner', 'Oracal', 'Hajmli harflar', 'Bayroq (parus)', 'Shtender', 'Psevdo harflar', 'Stend', 'Lightbox', 'Slimbox', 'Stella'],
      ru: ['Баннер', 'Оракал', 'Объемные буквы', 'Флаг (парус)', 'Штендер', 'Псевдообъемные буквы', 'Стенд', 'Лайтбокс', 'Слимбокс', 'Стелла'],
      en: ['Banner', 'Oracal Vinyl', '3D Volume Letters', 'Sail Flag', 'A-Frame Sign', 'Flat-Cut Letters', 'Display Stand', 'Lightbox', 'Slimbox', 'Pylon Sign']
    },
    turnaround: { uz: '3-7 ish kuni', ru: '3-7 рабочих дней', en: '3-7 business days' },
    minOrder: { uz: '1 dona', ru: 'От 1 шт', en: 'From 1 pc' },
    tag: { uz: 'Keng format', ru: 'Широкий формат', en: 'Large Format' }
  },
  {
    id: 'autobranding',
    number: '06',
    iconKey: 'truck',
    title: {
      uz: 'Avtobrending',
      ru: 'Автобрендинг',
      en: 'Vehicle Branding'
    },
    shortDesc: {
      uz: 'Kompaniya transport vositalarini vinil va oracal orqali harakatdagi reklamaga aylantirish.',
      ru: 'Брендирование корпоративного автопарка виниловыми пленками и наклейками.',
      en: 'Transform corporate fleets into mobile advertising with vinyl wraps and decals.'
    },
    fullDesc: {
      uz: 'Yengil avtomobillar, furalar, yuk mashinalari va mikroavtobuslarni yuqori sifatli oracal va laminatsiyalangan plyonkalar bilan brendlash.',
      ru: 'Полная и частичная оклейка легковых авто, фургонов, грузовиков и спецтехники стойкими пленками.',
      en: 'Partial and full wrapping for cars, vans, trucks, and trailers with UV-resistant laminated vinyl.'
    },
    features: {
      uz: ['Avtomobil brendlash', 'Vinil / Oracal yopishtirish', 'Magnit stikerlar', 'Fura va tentlarga reklama', "Qisman va to'liq brendlash"],
      ru: ['Брендирование авто', 'Оклейка винилом / оракалом', 'Магнитные наклейки', 'Реклама на фурах и тентах', 'Частичная и полная оклейка'],
      en: ['Car Branding', 'Vinyl & Oracal Wrapping', 'Magnetic Decals', 'Truck & Trailer Advertising', 'Partial & Full Vehicle Wraps']
    },
    turnaround: { uz: '2-5 ish kuni', ru: '2-5 рабочих дней', en: '2-5 business days' },
    minOrder: { uz: '1 avtomobil', ru: 'От 1 авто', en: 'From 1 vehicle' },
    tag: { uz: 'Trend', ru: 'Тренд', en: 'Trending' }
  }
];

// Portfolio Items Categorized
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'poligrafiya',
    title: {
      uz: 'Poligrafiya',
      ru: 'Полиграфия',
      en: 'Polygraphy & Printing'
    },
    description: {
      uz: 'Vizitkalardan tortib kataloglargacha — Shades uslubini aks ettiruvchi va brendingizni professional namoyish etuvchi poligrafiya mahsulotlarini yaratamiz.',
      ru: 'От визиток до каталогов — создаём полиграфию, которая передаёт стиль Shades и помогает вашему бренду выглядеть профессионально.',
      en: 'From business cards to catalogs — we create polygraphy that reflects the Shades style and helps your brand look professional.'
    },
    images: [
      'assets/poligrafiya/20230421_195644.jpg',
      'assets/poligrafiya/20231021_162631.jpg',
      'assets/poligrafiya/20231111_114412.jpg',
      'assets/poligrafiya/20231113_210159.jpg',
      'assets/poligrafiya/20240106_015712.jpg',
      'assets/poligrafiya/a0f57e4bb66b8dacf5c42a1ae637d1bb.jpg',
      'assets/poligrafiya/photo_2024-10-23_14-19-15.jpg',
      'assets/poligrafiya/photo_2024-10-23_14-19-15 (2).jpg'
    ]
  },
  {
    id: 'sovga',
    title: {
      uz: 'Sovg‘alar',
      ru: 'Подарки',
      en: 'Corporate Gifts & Souvenirs'
    },
    description: {
      uz: 'Mijozlar, hamkorlar va jamoangiz uchun brendlangan sovg‘alar. Yoqimli taassurot qoldiradigan va esda qoladigan mahsulotlarni yaratamiz.',
      ru: 'Брендированные подарки для клиентов, партнёров и команды. Создаём вещи, которые приятно дарить и легко запомнить.',
      en: 'Branded gifts for clients, partners, and your team. We create memorable products that leave a lasting impression.'
    },
    images: [
      'assets/sovga/20230620_120830.jpg',
      'assets/sovga/20231028_180424.jpg',
      'assets/sovga/20231220_173138.jpg',
      'assets/sovga/20231222_050629.jpg',
      'assets/sovga/20231224_144504.jpg',
      'assets/sovga/20240128_212930.jpg',
      'assets/sovga/IMG_20231109_114129_870.jpg',
      'assets/sovga/IMG_20240614_150806_780.jpg',
      'assets/sovga/IMG_20240614_150913_552.jpg',
      'assets/sovga/photo_2025-06-10_17-56-57.jpg',
      'assets/sovga/photo_2026-01-23_18-49-12.jpg',
      'assets/sovga/photo_2026-01-23_18-49-21.jpg'
    ]
  },
  {
    id: 'tashqi-reklama',
    title: {
      uz: 'Tashqi reklama',
      ru: 'Наружная реклама',
      en: 'Outdoor Advertising'
    },
    description: {
      uz: 'Peshlavhalar, bannerlar, hajmli harflar va reklama konstruksiyalari — brendingizni kerakli joyda yanada ko‘rinadigan qilamiz.',
      ru: 'Вывески, баннеры, объёмные буквы и рекламные конструкции — делаем ваш бреnd заметным там, где его должны увидеть.',
      en: 'Signboards, banners, 3D channel letters, and ad structures — making your brand prominent right where it needs to be seen.'
    },
    images: [
      'assets/tashqi reklama/IMG_0424.mp4',
      'assets/tashqi reklama/20240617_224018.jpg',
      'assets/tashqi reklama/photo_2023-06-04_22-47-31.jpg',
      'assets/tashqi reklama/photo_2025-10-14_14-01-01.jpg',
      'assets/tashqi reklama/photo_2025-10-14_14-16-02.jpg',
      'assets/tashqi reklama/photo_2025-12-13_14-38-09.jpg',
      'assets/tashqi reklama/photo_2025-12-13_14-38-10.jpg',
      'assets/tashqi reklama/photo_2026-04-21_17-01-00.jpg',
      'assets/tashqi reklama/photo_2026-04-29_14-51-00.jpg',
      'assets/tashqi reklama/photo_2026-05-11_13-54-19.jpg',
      'assets/tashqi reklama/photo_2026-05-19_18-10-10.jpg',
      'assets/tashqi reklama/photo_2026-06-13_11-08-54.jpg',
      'assets/tashqi reklama/photo_2026-07-11_18-07-42.jpg',
      'assets/tashqi reklama/photo_2026-07-11_18-07-42 (2).jpg',
      'assets/tashqi reklama/photo_2026-07-11_18-09-03.jpg',
      'assets/tashqi reklama/photo_2026-07-11_18-09-03 (2).jpg',
      'assets/tashqi reklama/photo_2026-07-20_15-42-45.jpg'
    ]
  },
  {
    id: 'korporativ-brending',
    title: {
      uz: 'Korporativ brending',
      ru: 'Корпоративный брендинг',
      en: 'Corporate Branding'
    },
    description: {
      uz: 'Kompaniyaning yagona vizual qiyofasini yaratamiz — alohida elementlardan tortib makon va kommunikatsiyalarni to‘liq brendlashgacha.',
      ru: 'Создаём единый визуальный образ компании — от отдельных элементов до полного оформления пространства и коммуникаций.',
      en: 'We create a unified visual identity for companies — from individual elements to complete spatial and brand communication design.'
    },
    images: [
      'assets/korporativ brending/photo_2026-09-20_korporativ-set.jpg',
      'assets/korporativ brending/20230422_134439.jpg',
      'assets/korporativ brending/20231021_113816.jpg',
      'assets/korporativ brending/20231021_113819.jpg',
      'assets/korporativ brending/20231021_113829.jpg',
      'assets/korporativ brending/photo_2023-12-20_21-49-06.jpg',
      'assets/korporativ brending/photo_2025-09-03_17-43-25.jpg',
      'assets/korporativ brending/photo_2026-05-06_17-30-47.jpg'
    ]
  },
  {
    id: 'trikotaj',
    title: {
      uz: 'Trikotaj',
      ru: 'Трикотаж',
      en: 'Branded Apparel & Textiles'
    },
    description: {
      uz: 'Futbolkalar, xudilar, pololar va boshqa kiyimlar — brendingiz bilan. Qulay kiyimlar brendingizning ajralmas qismiga aylanadi.',
      ru: 'Футболки, худи, поло и другая одежда с вашим брендингом. Комфортная одежда, которая становится частью вашего бренда.',
      en: 'T-shirts, hoodies, polo shirts, and custom apparel with your branding. Comfortable garments that become a seamless part of your brand.'
    },
    images: [
      'assets/trikotaj/14101.30_2_1000x1000 (1).jpg',
      'assets/trikotaj/333.png',
      'assets/trikotaj/f39c890accbf07571ac9b6061c9604b1 (2).jpg',
      'assets/trikotaj/photo_2025-10-18_17-55-07.jpg',
      'assets/trikotaj/rakhmanov oq.png'
    ]
  },
  {
    id: 'avtobrending',
    title: {
      uz: 'Avtobrending',
      ru: 'Автобрендинг',
      en: 'Vehicle Branding'
    },
    description: {
      uz: 'Avtomobillar va korporativ transportni brendlaymiz, har bir yo‘lni brendingiz haqida gapirish imkoniyatiga aylantiramiz.',
      ru: 'Брендируем автомобили и корпоративный транспорт, превращая каждый маршрут в возможность рассказать о вашем бренде.',
      en: 'We brand cars and commercial transport, turning every journey into an opportunity to showcase your brand.'
    },
    images: [
      'assets/avtobrending/photo_2024-10-23_16-32-17.jpg',
      'assets/avtobrending/photo_2024-10-23_16-32-17 (2).jpg',
      'assets/avtobrending/photo_2025-10-23_17-00-53.jpg',
      'assets/avtobrending/photo_2025-10-23_17-00-54.jpg',
      'assets/avtobrending/photo_2026-07-14_19-35-52.jpg',
      'assets/avtobrending/photo_2026-07-14_20-58-48.jpg',
      'assets/avtobrending/photo_2026-07-16_11-17-53.jpg',
      'assets/avtobrending/photo_2026-07-16_11-17-53 (2).jpg'
    ]
  }
];

// Process Steps (4 Simple transparent steps)
export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    iconKey: 'messageSquare',
    title: {
      uz: 'Buyurtma va Maslahat',
      ru: 'Заявка и Консультация',
      en: 'Inquiry & Consultation'
    },
    desc: {
      uz: 'Siz Telegram yoki telefon orqali murojaat qilasiz. Biz tiraj, o‘lcham va material bo‘yicha maslahat berib, optimal narxni hisoblaymiz.',
      ru: 'Вы связываетесь с нами в Telegram или по телефону. Мы подбираем материалы и рассчитываем точную стоимость.',
      en: 'Reach out via Telegram or phone. We recommend optimal materials and deliver an exact price quote.'
    },
    duration: { uz: '15-30 daqiqa', ru: '15-30 минут', en: '15-30 mins' }
  },
  {
    step: '02',
    iconKey: 'palette',
    title: {
      uz: 'Maket dizayni',
      ru: 'Дизайн макета',
      en: 'Layout & Design'
    },
    desc: {
      uz: 'Dizayningizni bosmaga tayyorlaymiz yoki yangi maket chizamiz. Ranglar va joylashuvni to‘liq tasdiqlaysiz.',
      ru: 'Готовим файл к печати или создаем дизайн с нуля. Согласовываем точные цвета и расположение.',
      en: 'We prepress your artwork or build a custom layout. You review and greenlight the digital mockup.'
    },
    duration: { uz: '1-4 soat', ru: '1-4 часа', en: '1-4 hours' }
  },
  {
    step: '03',
    iconKey: 'cpu',
    title: {
      uz: 'Ishlab chiqarish',
      ru: 'Производство',
      en: 'Production'
    },
    desc: {
      uz: 'Zamonaviy uskunalarimizda har bir nusxa sifat nazoratidan o‘tib, aniq vaqtida chop etiladi.',
      ru: 'Запуск тиража на современном оборудовании со строгим контролем каждого экземпляра.',
      en: 'Your batch goes to press on advanced machinery with strict quality verification at each stage.'
    },
    duration: { uz: '1-7 kun', ru: '1-7 дней', en: '1-7 days' }
  },
  {
    step: '04',
    iconKey: 'truck',
    title: {
      uz: 'Yetkazish',
      ru: 'Доставка',
      en: 'Delivery'
    },
    desc: {
      uz: "O'zbekiston bo'ylab yetkazib berish xizmatlari orqali yetkaziladi.",
      ru: 'Доставка по всему Узбекистану через надежные службы доставки.',
      en: 'Delivered across Uzbekistan through reliable delivery services.'
    },
    duration: { uz: 'Tezkor', ru: 'Оперативно', en: 'Prompt' }
  }
];

// Advantages
export const ADVANTAGES: AdvantageItem[] = [
  {
    iconKey: 'shieldCheck',
    title: {
      uz: '100% Sifat Kafolati',
      ru: '100% Гарантия Качества',
      en: '100% Quality Assurance'
    },
    desc: {
      uz: 'Har bir buyurtma texnik nazoratdan o‘tadi. Yaroqsiz mahsulotni darhol almashtirib berish kafolati bor.',
      ru: 'Контроль брака на всех этапах. Перепечатка или замена за наш счет в случае любого дефекта.',
      en: 'Every item passes rigorous QC. Any defect is replaced immediately without hesitation.'
    }
  },
  {
    iconKey: 'clock',
    title: {
      uz: 'Aniq Muddat va Tezlik',
      ru: 'Точные Сроки и Скорость',
      en: 'Punctual & Fast Turnaround'
    },
    desc: {
      uz: 'Kelishilgan vaqtdan kechikmaymiz. Shoshilinch buyurtmalarni 24 soat ichida bajarish imkoniyati.',
      ru: 'Никаких срывов дедлайнов. Возможность экспресс-печати срочных заказов за 24 часа.',
      en: 'No missed deadlines. Rush production available within 24 hours when time is of the essence.'
    }
  },
  {
    iconKey: 'award',
    title: {
      uz: 'Premium Xomashyolar',
      ru: 'Премиальные Материалы',
      en: 'Top-Grade Raw Materials'
    },
    desc: {
      uz: 'Faqat sertifikatlangan, yuvilganda tushmaydigan bo‘yoqlar, sifatli paxta va dizaynerlik qog‘ozlari.',
      ru: 'Только проверенные стойкие краски, 100% плотный хлопок и сертифицированная бумага.',
      en: 'Proven durable inks, heavyweight ring-spun cotton, and certified luxury paper stocks.'
    }
  },
  {
    iconKey: 'layers',
    title: {
      uz: 'Qulay Narx va Individual Yondashuv',
      ru: 'Выгодные Цены и Лояльность',
      en: 'Direct Pricing & Flexibility'
    },
    desc: {
      uz: 'Optimal narxlar va doimiy mijozlarga moslashuvchan chegirmalar.',
      ru: 'Оптимальные цены и гибкая система скидок для постоянных клиентов.',
      en: 'Optimal pricing and flexible discounts for regular customers.'
    }
  }
];

// Stats
export const STATS: StatItem[] = [
  { value: '5+', label: { uz: 'Yillik tajriba', ru: 'Лет опыта', en: 'Years on Market' } },
  { value: '1,200+', label: { uz: 'Mamnun mijozlar', ru: 'Довольных клиентов', en: 'Happy Clients' } },
  { value: '500k+', label: { uz: 'Chop etilgan mahsulot', ru: 'Отпечатанной продукции', en: 'Printed Products' } },
  { value: '99.4%', label: { uz: 'O‘z vaqtida topshirish', ru: 'Сдано точно в срок', en: 'On-Time Rate' } }
];

// FAQ
export const FAQS: FaqItem[] = [
  {
    question: {
      uz: 'Minimal buyurtma miqdori qancha?',
      ru: 'Каков минимальный объем заказа?',
      en: 'What is the minimum order quantity?'
    },
    answer: {
      uz: 'Trikotaj mahsulotlari 10 tadan. Vizitka, papka, paket, bloknot va ruchkalar 100 tadan. Flayer, buklet, doorhanger 1000 tadan. Sovg‘a to‘plamlari 10 tadan.',
      ru: 'Трикотажные изделия от 10 шт. Визитки, папки, пакеты, блокноты и ручки от 100 шт. Флаеры, буклеты, дорхенгеры от 1000 шт. Подарочные наборы от 10 шт.',
      en: 'Apparel items from 10 pcs. Business cards, folders, bags, notepads, and pens from 100 pcs. Flyers, brochures, and door hangers from 1,000 pcs. Gift sets from 10 pcs.'
    }
  },
  {
    question: {
      uz: 'Tayyor bo‘lish muddatlari qancha davom etadi?',
      ru: 'Сколько времени занимает изготовление?',
      en: 'How long does production take?'
    },
    answer: {
      uz: 'Oddiy raqamli bosma va futbolkalar 3-5 ish kunida tayyor bo‘ladi. Katta hajmdagi ofset yoki murakkab suvenirlar 5-7 ish kunini tashkil qiladi. Shoshilinch buyurtmalar 24 soatda topshirilishi mumkin.',
      ru: 'Стандартная цифровая печать и футболки готовы за 3-5 рабочих дней. Крупные офсетные тиражи или сложные сувениры занимают 5-7 рабочих дней. Срочные заказы могут быть выполнены за 24 часа.',
      en: 'Standard digital printing and apparel are ready in 3-5 business days. Large offset batches or complex souvenirs take 5-7 business days. Rush orders can be completed in 24 hours.'
    }
  },
  {
    question: {
      uz: 'Maketim bo‘lmasa dizayn chizib berasizlarmi?',
      ru: 'Что делать, если у меня нет готового макета?',
      en: 'What if I do not have a ready-made print file?'
    },
    answer: {
      uz: 'Albatta! Bizning professional grafik dizaynerlarimiz sizning talablaringiz asosida noldan boshlab logotip yoki mahsulot maketini tayyorlab, tasdiqlash uchun taqdim etadi.',
      ru: 'Да, конечно! Наши дизайнеры разработают макет с нуля или адаптируют ваш логотип под требования печати.',
      en: 'Absolutely! Our in-house graphic artists can create an artwork from scratch or adapt your existing logo for flawless printing.'
    }
  },
  {
    question: {
      uz: 'Toshkent bo‘ylab va viloyatlarga yetkazib berish bormi?',
      ru: 'Есть ли доставка по Ташкенту и в регионы?',
      en: 'Do you deliver across Tashkent and provinces?'
    },
    answer: {
      uz: 'Ha, Toshkent shahri bo‘ylab kuryerlik yetkazib berish xizmati mavjud. O‘zbekistonning boshqa viloyatlariga esa pochta yoki BTS kurerlik xizmatlari orqali yuboramiz.',
      ru: 'Да, по Ташкенту действует курьерская доставка до двери. В регионы Узбекистана отправляем проверенными службами доставки (BTS и др.).',
      en: 'Yes, we provide door-to-door courier delivery in Tashkent and reliable regional shipping across all provinces of Uzbekistan.'
    }
  },
  {
    question: {
      uz: 'To‘lov usullari qanday?',
      ru: 'Какие способы оплаты принимаются?',
      en: 'What payment methods do you accept?'
    },
    answer: {
      uz: 'Barcha qulay to‘lov usullari mavjud: Online to‘lov sistemalari, karta orqali, korporativ mijozlar uchun hisob-raqam orqali shartnoma bilan pul o‘tkazish (perechisleniye) va naqd pul.',
      ru: 'Все удобные способы оплаты: онлайн платежные системы, банковские карты, безналичный расчет по договору для корпоративных клиентов (перечисление) и наличный расчет.',
      en: 'All convenient payment methods are available: online payment systems, bank cards, corporate bank wire transfers under contract (invoicing), and cash.'
    }
  },
  {
    question: {
      uz: 'Mahsulot namunasini (proba) ko‘rish mumkinmi?',
      ru: 'Можно ли увидеть сигнальный образец перед тиражом?',
      en: 'Can I see a physical proof sample before the full batch?'
    },
    answer: {
      uz: 'Ha, yirik korporativ tirajlar yoki maxsus buyurtmalar oldidan bitta namunaga sinov bosmasini (proba) amalga oshirib, sizga sifatini ko‘rsatib tasdiqlatamiz.',
      ru: 'Да, перед запуском крупного тиража мы изготавливаем сигнальный образец, чтобы вы лично оценили плотность, цвета и качество нанесения.',
      en: 'Yes, for large corporate batches or custom merchandise, we can print a single proof sample for your evaluation and sign-off.'
    }
  }
];
