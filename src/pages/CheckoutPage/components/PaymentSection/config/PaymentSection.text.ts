export const CARD_FORM_TEXT = {
  NUMBER: {
    PLACEHOLDER: "0000 0000 0000 0000",
  },

  EXPIRY: {
    PLACEHOLDER: "MM / YY",
  },

  CVC: {
    PLACEHOLDER: "CVC",
  },

  PAY_BUTTON: "Сплатити",
} as const;

export const PAYMENT_SECTION_TEXT = {
  TITLE: "Оплата",

  METHODS: {
    COD: {
      TITLE: "Оплата при отриманні",
      DESCRIPTION: "Готівкою або карткою при доставці",
    },
    CARD: {
      TITLE: "Visa / Mastercard",
      DESCRIPTION: "Оплата банківською карткою",
    },
  },
} as const;
