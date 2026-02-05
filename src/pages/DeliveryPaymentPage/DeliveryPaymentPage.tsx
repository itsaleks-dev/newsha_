import { DELIVERY_CONTENT, PAYMENT_CONTENT } from "./config";

import {
  Page,
  PageSection,
  PageTitle,
  SectionBlock,
  SectionTitle,
  Paragraph,
  Note,
} from "./DeliveryPaymentPage.styled";

export function DeliveryPaymentPage() {
  return (
    <Page>
      <PageSection>
        <PageTitle>{DELIVERY_CONTENT.title}</PageTitle>

        <Section
          title={DELIVERY_CONTENT.deliveryTime.title}
          text={DELIVERY_CONTENT.deliveryTime.text}
        />

        <Section title={DELIVERY_CONTENT.geography.title} text={DELIVERY_CONTENT.geography.text} />

        <Section title={DELIVERY_CONTENT.receiving.title} text={DELIVERY_CONTENT.receiving.text} />
      </PageSection>

      <PageSection>
        <PageTitle>{PAYMENT_CONTENT.title}</PageTitle>

        <Section
          title={PAYMENT_CONTENT.cashOnDelivery.title}
          text={PAYMENT_CONTENT.cashOnDelivery.text}
        />

        <Section
          title={PAYMENT_CONTENT.cashlessOnline.title}
          text={PAYMENT_CONTENT.cashlessOnline.text}
        />

        <Section
          title={PAYMENT_CONTENT.postOfficeCash.title}
          text={PAYMENT_CONTENT.postOfficeCash.text}
        />

        <Note>{PAYMENT_CONTENT.deliveryCostNote.text}</Note>
      </PageSection>
    </Page>
  );
}

type SectionProps = {
  title: string;
  text: string[];
};

function Section({ title, text }: SectionProps) {
  return (
    <SectionBlock>
      <SectionTitle>{title}</SectionTitle>

      {text.map((paragraph, index) => (
        <Paragraph key={index}>{paragraph}</Paragraph>
      ))}
    </SectionBlock>
  );
}
