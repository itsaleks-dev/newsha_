export type EmailMessage = {
  to: string;
  subject: string;
  html: string;
  from?: string;
};

export type SmsMessage = {
  to: string;
  text: string;
  from?: string;
};
