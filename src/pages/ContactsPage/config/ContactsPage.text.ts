export const CONTACTS_PAGE_TEXT = {
  hero: {
    title: "Контакти",
    subtitle: "Ми завжди раді допомогти та проконсультувати Вас",
  },

  workTime: {
    title: "Графік роботи",
    schedule: [
      { days: "Пн – Пт", time: "09:00 – 18:00" },
      { days: "Сб – Нд", time: "Вихідні" },
    ],
  },

  address: {
    title: "Адреса",
    city: "Київ",
    street: "бул. Тараса Шевченка, 35",
  },

  contacts: {
    title: "Контактна інформація",
    phone: {
      label: "Телефон",
      value: "+380 50 412 30 42",
    },
    email: {
      label: "Email",
      value: "info@beauty-point.com.ua",
      description: "У вас є питання? Напишіть нам",
    },
  },

  social: {
    title: "Ми в соцмережах",
    items: [
      {
        name: "Instagram",
        url: "https://instagram.com/",
      },
      {
        name: "Telegram",
        url: "https://t.me/",
      },
    ],
  },

  form: {
    title: "Залишити повідомлення",
    fields: {
      name: {
        label: "Ваше імʼя",
        placeholder: "Введіть ваше імʼя",
      },
      email: {
        label: "Email",
        placeholder: "Введіть email",
      },
      phone: {
        label: "Телефон",
        placeholder: "+380",
      },
      message: {
        label: "Ваше питання",
        placeholder: "Напишіть ваше повідомлення...",
      },
    },
    submit: "Відправити",
  },

  advantages: {
    title: "Чому обирають нас",
    client: [
      "Офіційний дистрибʼютор NEWSHA в Україні",
      "Преміальна косметика з Німеччини",
      "Преміальний рівень обслуговування клієнтів",
      "Швидка доставка та якісний сервіс",
    ],
    professional: [
      "Сертифікована продукція для професіоналів",
      "Навчальні програми та технологічна підтримка",
      "Професійна консультація технологів бренду",
      "Експертна підтримка для салонів краси",
    ],
  },
} as const;
