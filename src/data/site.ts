// Real client facts only (veon/client.json). Nothing here is invented.
export const phones = [
  { label: "(067) 170-1-888", href: "tel:+380671701888" },
  { label: "(093) 170-1-888", href: "tel:+380931701888" },
  { label: "(099) 170-1-888", href: "tel:+380991701888" },
] as const;
export const mainPhone = phones[0];
// C-004: call-centre hours (partner article ITC, 07.10.2025; client to confirm, R-005).
export const hours = "Пн–Сб 08:00–21:00, Нд 09:00–20:00";
export const appStore = "https://apps.apple.com/app/id1608885426";
export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/exist_ua/" },
  { label: "Facebook", href: "https://www.facebook.com/www.exist.ua/" },
  { label: "YouTube", href: "https://www.youtube.com/c/existua" },
  { label: "TikTok", href: "https://www.tiktok.com/@exist_ua" },
  { label: "Telegram", href: "https://t.me/exist_ua" },
  { label: "X", href: "https://x.com/existua" },
] as const;
export const nav = [
  { label: "Каталог", href: "#katalog" },
  { label: "Пошук запчастин", href: "#poshuk" },
  { label: "Сервіси", href: "#servisy" },
  { label: "Акції", href: "#aktsii" },
  { label: "Доставка і магазини", href: "#merezha" },
  { label: "Контакти", href: "#kontakty" },
] as const;
export const utility = ["Оплата", "Повернення та гарантія", "Допомога", "Блог"] as const;
export const maintenance = ["Моторна олива", "Запчастини для ТО", "Гальмівні колодки", "Щітки склоочисника", "Амортизатори"] as const;
export const departments = [
  "Автозапчастини",
  "Кузовні запчастини",
  "Автохімія та технічні рідини",
  "Шини та диски",
  "Автосвітло",
  "Аудіо та електроніка",
  "Інтер'єр",
] as const;
// Brands shown first on the current homepage (audit/screens/home-desktop-s05.png); 149 in total (C-004).
export const brands = ["Audi", "BMW", "Chery", "Chevrolet", "Ford", "Honda", "Hyundai", "Kia", "Lexus"] as const;
// company.geography[0]: branch map on the current homepage.
export const cities = [
  "Київ", "Бориспіль", "Біла Церква", "Житомир", "Коростень", "Луцьк", "Рівне", "Львів",
  "Тернопіль", "Хмельницький", "Вінниця", "Івано-Франківськ", "Чернівці", "Кам'янець-Подільський",
  "Умань", "Черкаси", "Кременчук", "Полтава", "Харків", "Кропивницький", "Дніпро", "Кривий Ріг", "Запоріжжя",
] as const;
export const SOON = "Розділ у розробці";
