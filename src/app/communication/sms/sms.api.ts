import type { SmsMessage } from "@/app/communication/types";

export const smsApi = {
  send(message: SmsMessage): void {
    console.group("📱 SMS MOCK");
    console.log("To:", message.to);
    console.log("Text:", message.text);
    console.groupEnd();
  },
};
