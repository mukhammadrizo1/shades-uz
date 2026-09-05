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
  categoryKey: 'all' | 'textile' | 'souvenir' | 'print' | 'packaging';
  category: LocalizedString;
  image: string;
  size: 'normal' | 'wide' | 'tall';
  description: LocalizedString;
  badge: LocalizedString;
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
  phone: '(95) 828-33-93',
  phoneRaw: '+998958283393',
  telegramUser: '@MiryunusovBahrom',
  telegramUrl: 'https://t.me/MiryunusovBahrom',
  instagram: 'shades.uz',
  instagramUrl: 'https://instagram.com/shades.uz',
  chatUrl: 'https://t.me/uzshadeschat',
  catalogUrl: 'https://t.me/+dWjz_m5ZdT0zZTli',
  workingHours: {
    uz: 'Dush - Shan: 09:00 - 19:00',
    ru: 'Пн - Сб: 09:00 - 19:00',
    en: 'Mon - Sat: 09:00 - 19:00'
  },
  address: {
    uz: "Toshkent shahri, Mirobod tumani, Markaz (Demo manzil)",
    ru: 'г. Ташкент, Мирабадский район, Центр (Демо адрес)',
    en: 'Tashkent city, Mirabad district, Center (Demo Address)'
  },
  yandexMapUrl: 'https://yandex.uz/maps/10335/tashkent/?ll=69.279737%2C41.311081&z=15',
  googleMapUrl: 'https://maps.google.com/?q=41.311081,69.279737',
  mapEmbedUrl: 'https://maps.google.com/maps?q=41.311081,69.279737&hl=uz&z=15&output=embed'
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
    eyebrow: { uz: 'Raqamli & Ofset Poligrafiya', ru: 'Цифровая & Офсетная Полиграфия', en: 'Digital & Offset Printing' },
    titleLine1: { uz: 'Bosma mahsulotlaringizga', ru: 'Дарим вашей продукции', en: 'Giving your products' },
    titleHighlight: { uz: "yorqin ranglar va sifat", ru: 'яркие цвета и качество', en: 'vibrant colors & quality' },
    titleLine2: { uz: 'atamiz.', ru: '.', en: '.' },
    desc: {
      uz: "Vizitkalar, flayerlar, futbolkalar va korporativ suvenirlarga yuqori sifatli tezkor bosma xizmatlari. Toshkent bo'ylab sifat kafolati.",
      ru: 'Высококачественная печать на визитках, флаерах, футболках и корпоративных сувенирах. Гарантия безупречного качества.',
      en: 'High-precision printing on business cards, flyers, apparel, and corporate merchandise. Guaranteed top quality in Tashkent.'
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
    filterAll: { uz: 'Barchasi', ru: 'Все', en: 'All' },
    filterTextile: { uz: 'Tekstil & Futbolkalar', ru: 'Текстиль & Футболки', en: 'Textile & Apparel' },
    filterSouvenir: { uz: 'Suvenirlar & Krujkalar', ru: 'Сувениры & Кружки', en: 'Souvenirs & Mugs' },
    filterPrint: { uz: 'Poligrafiya & Vizitkalar', ru: 'Полиграфия & Визитки', en: 'Stationery & Cards' },
    viewAllBtn: { uz: 'Barcha ishlar va namunalar', ru: 'Все работы и образцы', en: 'Explore all works & samples' },
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
      uz: 'Poligrafiya & Vizitkalar',
      ru: 'Полиграфия & Визитки',
      en: 'Print & Business Cards'
    },
    shortDesc: {
      uz: 'Premium vizitkalar, bukletlar, kataloglar va korporativ blanklar.',
      ru: 'Премиальные визитки, буклеты, каталоги и фирменные бланки.',
      en: 'Luxury business cards, brochures, catalogs, and letterheads.'
    },
    fullDesc: {
      uz: 'Ofset va raqamli bosma texnologiyalari yordamida har qanday qog‘oz turida (bo‘rli, dizaynerlik, Soft-Touch laminatsiya, zarhalli folga) eng yuqori sifatli poligrafiya mahsulotlari tayyorlaymiz.',
      ru: 'Цифровая и офсетная печать на любых типах бумаги (мелованная, дизайнерская, софт-тач ламинация, тиснение фольгой).',
      en: 'Digital and offset production on fine paper stocks, with soft-touch lamination, hot foil stamping, and embossed detailing.'
    },
    features: {
      uz: ['Soft-Touch va mat laminatsiya', 'Zarhalli va kumush folga bosish', 'Dizaynerlik qog‘ozlari (Plike, Touch Cover)', 'Burchaklarni yumaloqlash va shaklli qirqish'],
      ru: ['Soft-Touch и матовая ламинация', 'Тиснение золотой и серебряной фольгой', 'Дизайнерские бумаги (Plike, Touch Cover)', 'Скругление углов и фигурная плоттерная резка'],
      en: ['Soft-Touch and matte finishes', 'Gold and silver foil stamping', 'Designer luxury papers', 'Custom die-cutting and rounded corners']
    },
    turnaround: { uz: '1-3 ish kuni', ru: '1-3 рабочих дня', en: '1-3 business days' },
    minOrder: { uz: '100 dona', ru: '100 шт', en: '100 pcs' },
    tag: { uz: 'Ommabop', ru: 'Популярно', en: 'Popular' }
  },
  {
    id: 'tshirt',
    number: '02',
    iconKey: 'shirt',
    title: {
      uz: 'Futbolka va Xudilarga Bosma',
      ru: 'Печать на Футболках и Худи',
      en: 'Apparel & T-Shirt Printing'
    },
    shortDesc: {
      uz: 'DTF, ipak to‘r (sholkografiya) va termotransfer bosma usullari.',
      ru: 'DTF, шелкография и термотрансферная печать любого тиража.',
      en: 'Direct-to-Film (DTF), screen printing, and heat transfer.'
    },
    fullDesc: {
      uz: 'Kompaniyangiz logotipi yoki individual dizaynni 100% paxta futbolkalar, polo, svitshot va xudilarga bardoshli, yuvilganda o‘chmaydigan qilib tushirib beramiz.',
      ru: 'Нанесение логотипов и принтов на качественный текстиль (футболки, поло, худи). Стойкость к многократным стиркам.',
      en: 'Long-lasting branding on 100% cotton tees, polo shirts, hoodies, and sweatshirts that endure 50+ washes without fading.'
    },
    features: {
      uz: ['Yuqori aniqlikdagi DTF bosma', '50+ marta yuvishga chidamli', 'Keng o‘lcham va ranglar assortimenti', 'Ekologik toza va xavfsiz bo‘yoqlar'],
      ru: ['Высокоточная DTF-печать', 'Стойкость более 50 стирок', 'Широкий ассортимент размеров и цветов', 'Экологичные сертифицированные краски'],
      en: ['Ultra-crisp DTF prints', 'Fade-resistant for 50+ wash cycles', 'Wide size and color assortment', 'Eco-friendly and skin-safe inks']
    },
    turnaround: { uz: '1-4 ish kuni', ru: '1-4 рабочих дня', en: '1-4 business days' },
    minOrder: { uz: '1 dona dan', ru: 'От 1 шт', en: 'From 1 pc' },
    tag: { uz: 'Xit xizmat', ru: 'Хит продаж', en: 'Best Seller' }
  },
  {
    id: 'flyers',
    number: '03',
    iconKey: 'fileText',
    title: {
      uz: 'Flayer va Bukletlar',
      ru: 'Флаеры и Буклеты',
      en: 'Flyers & Pamphlets'
    },
    shortDesc: {
      uz: 'A4, A5, A6 va evro-formatdagi yorqin reklama tarqatma materiallari.',
      ru: 'Яркие рекламные материалы формата А4, А5, А6 и евро-буклеты.',
      en: 'Promotional flyers, tri-folds, and leaflets in A4, A5, A6, and DL sizes.'
    },
    fullDesc: {
      uz: 'Aksiyalar, taqdimotlar va ko‘rgazmalar uchun mijozlar e’tiborini tortuvchi shirin ranglar va qulay formatdagi reklama materiallari.',
      ru: 'Привлекательные рекламные материалы для презентаций, выставок и промо-акций с сочными цветами.',
      en: 'Eye-catching promo collateral designed to engage prospects at events, presentations, and trade shows.'
    },
    features: {
      uz: ['Turli qalinlikdagi bo‘rli qog‘oz (115g-300g)', '1 yoki 2 buklamali bukletlar', 'Yorqin ofset va tezkor raqamli bosma', 'Katta tirajlarda maxsus chegirmalar'],
      ru: ['Мелованная бумага различной плотности (115–300 г/м²)', 'Буклеты с 1 или 2 фальцами', 'Яркий офсет и оперативная цифровая печать', 'Специальные цены на крупные тиражи'],
      en: ['Coated papers from 115gsm to 300gsm', 'Single and double folded brochures', 'High-speed digital and offset runs', 'Volume discount tiers']
    },
    turnaround: { uz: '1-2 ish kuni', ru: '1-2 рабочих дня', en: '1-2 business days' },
    minOrder: { uz: '500 dona', ru: '500 шт', en: '500 pcs' },
    tag: { uz: 'Tezkor', ru: 'Оперативно', en: 'Fast' }
  },
  {
    id: 'notebooks',
    number: '04',
    iconKey: 'bookOpen',
    title: {
      uz: 'Daftar va Bloknotlar',
      ru: 'Блокноты и Тетради',
      en: 'Custom Notebooks'
    },
    shortDesc: {
      uz: 'Spiral va qattiq muqovali brendlangan bloknotlar va kundaliklar.',
      ru: 'Фирменные блокноты на пружине, в твердом переплете и ежедневники.',
      en: 'Wire-o bound, spiral, and hardcover branded stationery & notebooks.'
    },
    fullDesc: {
      uz: 'Ofisingiz, seminarlar va mijozlar uchun eng foydali brendlangan korporativ esdalik sovg‘asi. Qattiq muqova, jiloli lak va xatcho‘p bilan.',
      ru: 'Полезный корпоративный сувенир для семинаров и партнеров. Твердый переплет, УФ-лак, шелкография и закладка-ляссе.',
      en: 'An indispensable corporate keepsake. Features soft/hard covers, selective UV varnish, and custom inner pages.'
    },
    features: {
      uz: ['Metall prujina yoki termo-yopishtirish', 'Ichki sahifalarda logotip tushirish', 'Qattiq va yumshoq charm muqovalar', 'UV-lak va bo‘rtma naqshlar'],
      ru: ['Металлическая пружина или термопереплет', 'Нанесение логотипа на внутренние листы', 'Твердая или экокожаная обложка', 'Выборочный УФ-лак и блинтовое тиснение'],
      en: ['Wire-o or case-bound options', 'Branded ruled or grid internal pages', 'Hardcover and eco-leather styles', 'Spot UV and debossed finishes']
    },
    turnaround: { uz: '3-5 ish kuni', ru: '3-5 рабочих дней', en: '3-5 business days' },
    minOrder: { uz: '50 dona', ru: '50 шт', en: '50 pcs' },
    tag: { uz: 'Korporativ', ru: 'Корпоративно', en: 'Corporate' }
  },
  {
    id: 'caps',
    number: '05',
    iconKey: 'sparkles',
    title: {
      uz: 'Kepka va Bosh Kiyimlar',
      ru: 'Кепки и Бейсболки',
      en: 'Caps & Headwear'
    },
    shortDesc: {
      uz: 'Kashta (vishivka), DTF va shevron usulidagi zamonaviy kepkalar.',
      ru: 'Машинная вышивка, шевроны и DTF-печать на бейсболках.',
      en: 'Custom embroidery, 3D puff patches, and transfers on baseball caps.'
    },
    fullDesc: {
      uz: 'Hodimlaringiz va promosiya tadbirlari uchun 5 va 6 panelli sifatli kepkalarga qavariq kashta va bosma tushirish xizmati.',
      ru: 'Качественные 5- и 6-панельные бейсболки для персонала и промо-мероприятий с объемной вышивкой или шевронами.',
      en: '5-panel and 6-panel structured caps branded with 3D embroidery or heat transfer for staff uniforms and events.'
    },
    features: {
      uz: ['3D qavariq kashta tikish', 'Paxta va sintetik kepka modellari', 'Metall qisqichli regulyator', 'Yuvish va quyosh nuriga chidamli'],
      ru: ['Объемная 3D-вышивка', 'Модели из 100% хлопка и смесовых тканей', 'Надежные металлические застежки', 'Устойчивость к выгоранию на солнце'],
      en: ['Raised 3D puff embroidery', '100% cotton twill fabrics', 'Premium metal buckle adjusters', 'Fade and UV-resistant dyes']
    },
    turnaround: { uz: '3-5 ish kuni', ru: '3-5 рабочих дней', en: '3-5 business days' },
    minOrder: { uz: '20 dona', ru: '20 шт', en: '20 pcs' },
    tag: { uz: 'Trend', ru: 'Тренд', en: 'Trending' }
  },
  {
    id: 'souvenirs',
    number: '06',
    iconKey: 'gift',
    title: {
      uz: 'Krujka va Korporativ Suvenirlar',
      ru: 'Кружки и Сувениры',
      en: 'Drinkware & Merchandise'
    },
    shortDesc: {
      uz: 'Keramik krujkalar, termoslar, ruchkalar va brendlangan sovg‘a qutilari.',
      ru: 'Кружки, термосы, ручки, флешки и брендированные подарочные наборы.',
      en: 'Ceramic mugs, insulated tumblers, engraved pens, and gift boxes.'
    },
    fullDesc: {
      uz: 'Mijozlaringiz xotirasida uzoq vaqt saqlanib qoluvchi sifatli korporativ sovg‘alar to‘plami. Sublimatsiya va UV-bosma.',
      ru: 'Подарки партнерам и клиентам, которые ежедневно напоминают о вашем бренде. Стойкая сублимация и круговая УФ-печать.',
      en: 'Memorable swag that keeps your brand top of mind every day. Sublimation, rotary UV, and laser engraving.'
    },
    features: {
      uz: ['Rangli va xameleon krujkalar', 'Metall termoslarga lazer o‘ymakorligi', 'To‘liq rangli aylanma UV-bosma', 'Brendlangan individual qadoq'],
      ru: ['Белые, цветные и кружки-хамелеоны', 'Лазерная гравировка на термосах', 'Полноцветная круговая УФ-печать', 'Индивидуальная подарочная упаковка'],
      en: ['White, colored, and magic heat-reveal mugs', 'Laser etching on stainless tumblers', '360° full-color rotary UV printing', 'Custom printed presentation boxes']
    },
    turnaround: { uz: '2-4 ish kuni', ru: '2-4 рабочих дня', en: '2-4 business days' },
    minOrder: { uz: '10 dona', ru: '10 шт', en: '10 pcs' },
    tag: { uz: 'Premium', ru: 'Премиум', en: 'Premium' }
  }
];

// Portfolio Items Categorized
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'tshirt-mockup',
    categoryKey: 'textile',
    title: {
      uz: 'SHADES Brendlangan Futbolkalar',
      ru: 'Фирменные Футболки SHADES',
      en: 'SHADES Branded T-Shirts'
    },
    category: {
      uz: 'Tekstil & Kiyim',
      ru: 'Текстиль & Одежда',
      en: 'Textile & Apparel'
    },
    image: 'assets/branded-tshirt.jpg',
    size: 'wide',
    description: {
      uz: 'To‘q ko‘k paxta matoga yuqori aniqlikdagi to‘q sariq SHADES DTF logotipi bosilgan futbolkalar.',
      ru: 'Плотный хлопковый трикотаж с ярким оранжевым принтом логотипа методом DTF.',
      en: 'Heavyweight cotton tees customized with vibrant orange SHADES logo via premium DTF.'
    },
    badge: { uz: 'DTF Bosma', ru: 'DTF Печать', en: 'DTF Print' }
  },
  {
    id: 'mug-mockup',
    categoryKey: 'souvenir',
    title: {
      uz: 'Keramik Krujkalar Kolleksiyasi',
      ru: 'Коллекция Керамических Кружек',
      en: 'Custom Ceramic Mugs'
    },
    category: {
      uz: 'Suvenirlar',
      ru: 'Сувениры',
      en: 'Merchandise'
    },
    image: 'assets/branded-mug.jpg',
    size: 'normal',
    description: {
      uz: 'Qora mat keramik krujkaga to‘q sariq SHADES naqshini sublimatsiya usulida tushirish.',
      ru: 'Матовая керамика с долговечным сублимационным нанесением фирменной символики.',
      en: 'Matte black finish mugs featuring crisp sublimation orange brand graphics.'
    },
    badge: { uz: 'Sublimatsiya', ru: 'Сублимация', en: 'Sublimation' }
  },
  {
    id: 'notebook-mockup',
    categoryKey: 'print',
    title: {
      uz: 'Korporativ Bloknot & Qalamlar',
      ru: 'Корпоративные Блокноты',
      en: 'Corporate Notebook Sets'
    },
    category: {
      uz: 'Ofis Poligrafiyasi',
      ru: 'Офисная Полиграфия',
      en: 'Office Stationery'
    },
    image: 'assets/branded-notebook.jpg',
    size: 'normal',
    description: {
      uz: 'Soft-touch qattiq muqovali, to‘q sariq bo‘rtma SHADES belgisi tushirilgan kundaliklar.',
      ru: 'Твердая soft-touch обложка с фирменным оранжевым тиснением и закладкой.',
      en: 'Soft-touch hardcover journals with tactile debossed orange emblem and ribbon bookmark.'
    },
    badge: { uz: 'Qattiq Muqova', ru: 'Твердый переплет', en: 'Hardcover' }
  },
  {
    id: 'cards-mockup',
    categoryKey: 'print',
    title: {
      uz: 'Premium Vizitkalar To‘plami',
      ru: 'Премиум Визитные Карточки',
      en: 'Executive Business Cards'
    },
    category: {
      uz: 'Poligrafiya',
      ru: 'Полиграфия',
      en: 'Print Stationery'
    },
    image: 'assets/business-cards.jpg',
    size: 'normal',
    description: {
      uz: '450g paxtali qora kartonda to‘q sariq zarhalli folga bosilgan elita vizitkalar.',
      ru: 'Плотный дизайнерский картон 450 г/м² с горячим оранжевым тиснением фольгой.',
      en: 'Ultra-thick 450gsm dark cotton board highlighted with metallic orange foil.'
    },
    badge: { uz: 'Zarhalli Folga', ru: 'Тиснение фольгой', en: 'Foil Stamping' }
  },
  {
    id: 'showcase-mockup',
    categoryKey: 'all',
    title: {
      uz: 'To‘liq Korporativ Brending To‘plami',
      ru: 'Полный Корпоративный Комплект',
      en: 'Full Corporate Merch Kit'
    },
    category: {
      uz: 'Kompleks Loyiha',
      ru: 'Комплексный проект',
      en: 'Full Identity Kit'
    },
    image: 'assets/products-showcase.jpg',
    size: 'tall',
    description: {
      uz: 'Yagona brend uslubida tayyorlangan kiyimlar, idishlar, kanselyariya va qadoqlar.',
      ru: 'Единая концепция фирменного стиля: текстиль, посуда, канцелярия и упаковка.',
      en: 'Unified identity kit spanning apparel, drinkware, stationery, and packaging.'
    },
    badge: { uz: 'Total Look', ru: 'Total Look', en: 'Total Look' }
  },
  {
    id: 'flyers-mockup',
    categoryKey: 'print',
    title: {
      uz: 'Reklama Flayerlari & Evro-Bukletlar',
      ru: 'Рекламные Флаеры и Евробуклеты',
      en: 'Promotional Flyers & Tri-Fold Brochures'
    },
    category: {
      uz: 'Reklama Poligrafiyasi',
      ru: 'Рекламная полиграфия',
      en: 'Commercial Print'
    },
    image: 'assets/branded-flyers.jpg',
    size: 'wide',
    description: {
      uz: 'Yorqin bo‘rli qog‘ozda chop etilgan 3 qatlamli evro-bukletlar va A5 formatdagi aksiyalar flayerlari.',
      ru: 'Глянцевые евробуклеты в 3 сложения и яркие флаеры формата А5 для презентаций и выставок.',
      en: 'Glossy tri-fold brochures and promotional A5 flyers with rich saturation and razor-sharp text.'
    },
    badge: { uz: 'Evro-Buklet', ru: 'Евробуклет', en: 'Tri-Fold' }
  },
  {
    id: 'cap-mockup',
    categoryKey: 'textile',
    title: {
      uz: 'SHADES Kashtali Brend Kepkalar',
      ru: 'Фирменные Бейсболки с Вышивкой',
      en: 'Custom Embroidered Baseball Caps'
    },
    category: {
      uz: 'Bosh Kiyimlar',
      ru: 'Головные уборы',
      en: 'Headwear & Caps'
    },
    image: 'assets/branded-cap.jpg',
    size: 'normal',
    description: {
      uz: 'To‘q ko‘k 100% paxtali premium kepkaga to‘q sariq qavariq 3D kashta (vishivka) tushirilgan namuna.',
      ru: 'Плотный хлопковый твил с объемной 3D-вышивкой оранжевого логотипа SHADES на лобной части.',
      en: 'Heavyweight cotton twill cap customized with tactile 3D puff embroidery and structured fit.'
    },
    badge: { uz: '3D Kashta', ru: '3D Вышивка', en: '3D Embroidery' }
  },
  {
    id: 'badge-mockup',
    categoryKey: 'souvenir',
    title: {
      uz: 'Korporativ Beyjik & Lenta To‘plami',
      ru: 'Корпоративные Бейджи с Ланъярдом',
      en: 'Executive Badge & Lanyard Kit'
    },
    category: {
      uz: 'Aksessuarlar & Merch',
      ru: 'Аксессуары и Мерч',
      en: 'Corporate Accessories'
    },
    image: 'assets/branded-badge.jpg',
    size: 'normal',
    description: {
      uz: 'Shaffof akril korpusli xodimlar beyjigi va logotip tushirilgan qulay to‘q ko‘k bo‘yin lentasi.',
      ru: 'Акриловый бейдж с голографической защитой и брендированная лента на шею с металлическим карабином.',
      en: 'Clear acrylic card holder paired with custom woven dark navy neck lanyard featuring vibrant logos.'
    },
    badge: { uz: 'Akril & Lenta', ru: 'Акрил и Лента', en: 'ID Badge Kit' }
  },
  {
    id: 'calendar-mockup',
    categoryKey: 'print',
    title: {
      uz: 'Ofis Stol Kalendari (Spiral Muqovali)',
      ru: 'Фирменный Настольный Календарь',
      en: 'Corporate Spiral Desk Calendar'
    },
    category: {
      uz: 'Kalendarlar',
      ru: 'Календарная продукция',
      en: 'Desk Stationery'
    },
    image: 'assets/branded-calendar.jpg',
    size: 'normal',
    description: {
      uz: 'Metall prujinali, qattiq taglikli, to‘q rangli sahifalar va to‘q sariq aksentli korporativ stol kalendari.',
      ru: 'Перекидной настольный календарь на металлической пружине в фирменной темной стилистике с оранжевыми датами.',
      en: 'Twin-wire bound tent desk calendar styled with deep navy sheets and bold pumpkin date grid highlights.'
    },
    badge: { uz: 'Stol Kalendari', ru: 'Настольный', en: 'Desk Calendar' }
  },
  {
    id: 'workshop-view',
    categoryKey: 'all',
    title: {
      uz: 'SHADES Bosmaxona Jarayoni',
      ru: 'Производство SHADES',
      en: 'SHADES Production Lab'
    },
    category: {
      uz: 'Ustaxona',
      ru: 'Производство',
      en: 'In-House Studio'
    },
    image: 'assets/workshop.jpg',
    size: 'normal',
    description: {
      uz: 'Zamonaviy Yaponiya va Germaniya uskunalarida buyurtmalarni aniq va o‘z vaqtida bajarish.',
      ru: 'Высокоточное японское и немецкое печатное оборудование для идеальных тиражей.',
      en: 'Cutting-edge Japanese and German digital printing machinery calibrated for accuracy.'
    },
    badge: { uz: 'Haqiqiy Sex', ru: 'Собственный цех', en: 'In-House' }
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
      uz: 'Maket va Tasdiqlash',
      ru: 'Макет и Согласование',
      en: 'Proofing & Approval'
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
      uz: 'Bosish va Ishlab Chiqarish',
      ru: 'Печать и Производство',
      en: 'Print & Fabrication'
    },
    desc: {
      uz: 'Zamonaviy uskunalarimizda har bir nusxa sifat nazoratidan o‘tib, aniq vaqtida chop etiladi.',
      ru: 'Запуск тиража на современном оборудовании со строгим контролем каждого экземпляра.',
      en: 'Your batch goes to press on advanced machinery with strict quality verification at each stage.'
    },
    duration: { uz: '1-3 kun', ru: '1-3 дня', en: '1-3 days' }
  },
  {
    step: '04',
    iconKey: 'truck',
    title: {
      uz: 'Qadoqlash va Yetkazish',
      ru: 'Упаковка и Доставка',
      en: 'Packaging & Delivery'
    },
    desc: {
      uz: 'Tayyor mahsulotlarni ehtiyotkorlik bilan qadoqlaymiz va Toshkent bo‘ylab manzilga yetkazib beramiz.',
      ru: 'Аккуратно упаковываем готовую продукцию и доставляем прямо в ваш офис или домой.',
      en: 'Securely boxed and delivered directly to your doorstep across Tashkent.'
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
      uz: 'Har bir buyurtma texnik nazoratdan o‘tadi. Yaroqsiz mahsulotga darhol almashtirib berish kafolati bor.',
      ru: 'Контроль брака на всех этапах. Перепечатка за наш счет в случае производственного дефекта.',
      en: 'Every item passes rigorous QC. Any defect is reprinted immediately without hesitation.'
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
      uz: 'O‘z ustaxonamiz sababli ortiqcha vositachilarsiz narxlar va doimiy mijozlarga moslashuvchan chegirmalar.',
      ru: 'Собственное производство без посредников и гибкая система скидок для постоянных партнеров.',
      en: 'Direct in-house pricing with no middleman markups, plus tiered discounts for loyal partners.'
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
      uz: 'Futbolkalar va kiyimlarga bosma 1 donadan boshlanadi. Vizitkalar minimal 100 dona, flayerlar 500 dona, krujkalar 10 dona, daftarlar esa 50 donadan buyurtma qilinishi mumkin.',
      ru: 'Печать на футболках и худи возможна от 1 штуки. Визитки от 100 шт, флаеры от 500 шт, кружки от 10 шт, блокноты от 50 шт.',
      en: 'Apparel printing starts at just 1 piece. Business cards start at 100 pcs, flyers at 500 pcs, mugs at 10 pcs, and notebooks at 50 pcs.'
    }
  },
  {
    question: {
      uz: 'Tayyor bo‘lish muddatlari qancha davom etadi?',
      ru: 'Сколько времени занимает изготовление?',
      en: 'How long does production take?'
    },
    answer: {
      uz: 'Oddiy raqamli bosma va futbolkalar 1-2 ish kunida tayyor bo‘ladi. Katta hajmdagi ofset yoki murakkab suvenirlar 3-5 ish kunini tashkil qiladi. Shoshilinch buyurtmalar 24 soatda topshirilishi mumkin.',
      ru: 'Стандартный срок для цифровой печати и текстиля — 1-2 рабочих дня. Сложные сувениры и офсетные тиражи — 3-5 дней. Доступен срочный заказ за 24 часа.',
      en: 'Standard digital prints and apparel take 1-2 business days. Complex souvenir batches or offset runs take 3-5 days. 24-hour rush service is also available.'
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
      uz: 'Barcha qulay to‘lov usullari mavjud: Click, Payme, Uzum, korporativ mijozlar uchun hisob-raqam orqali shartnoma bilan pul o‘tkazish (perechisleniye) va naqd pul.',
      ru: 'Любые удобные способы: Click, Payme, Uzum, безналичный расчет с НДС/без НДС по договору для компаний, а также наличными.',
      en: 'We accept Click, Payme, Uzum Bank, corporate bank wire transfers under contract, and cash.'
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
