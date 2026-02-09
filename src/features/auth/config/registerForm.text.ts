export const REGISTER_FORM_TEXT = {
  TITLE: "Реєстрація",
  SUBMIT: "Створити акаунт",
  SUBMIT_LOADING: "Реєстрація…",
  NAME_LABEL: "Ім'я",
  NAME_PLACEHOLDER: "Ваше ім'я",
  PHONE_LABEL: "Телефон",
  PHONE_PLACEHOLDER: "+380",
  EMAIL_LABEL: "Email",
  EMAIL_PLACEHOLDER: "name@example.com",
  PASSWORD_LABEL: "Пароль",
  PASSWORD_PLACEHOLDER: "Введіть пароль",
  PASSWORD2_LABEL: "Підтвердіть пароль",
  PASSWORD2_PLACEHOLDER: "Повторіть пароль",
} as const;

export const REGISTER_VALIDATION_TEXT = {
  REQUIRED: "Обовʼязкове поле",
  NAME_MIN: "Мінімум 2 символи",
  EMAIL_INVALID: "Невірний формат email",
  PASSWORD_MIN: "Мінімум 6 символів",
  PASSWORDS_NOT_MATCH: "Паролі не співпадають",
  CONFIRM_REQUIRED: "Підтвердіть пароль",
} as const;
