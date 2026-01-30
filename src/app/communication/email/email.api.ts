import type { EmailMessage } from "@/app/communication/types";

export const emailApi = {
  send(message: EmailMessage): void {
    console.group("📧 EMAIL MOCK");
    console.log("To:", message.to);
    console.log("Subject:", message.subject);
    console.log("Body:", message.html);
    console.groupEnd();
  },
};
