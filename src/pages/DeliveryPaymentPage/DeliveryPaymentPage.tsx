import { DELIVERY_CONTENT, PAYMENT_CONTENT } from "./config";

import * as S from "./DeliveryPaymentPage.styled";

export function DeliveryPaymentPage() {
  return (
    <S.Page>
      <S.PageSection>
        <S.PageTitle>{DELIVERY_CONTENT.title}</S.PageTitle>

        <Section
          title={DELIVERY_CONTENT.deliveryTime.title}
          text={DELIVERY_CONTENT.deliveryTime.text}
        />

        <Section title={DELIVERY_CONTENT.geography.title} text={DELIVERY_CONTENT.geography.text} />

        <Section title={DELIVERY_CONTENT.receiving.title} text={DELIVERY_CONTENT.receiving.text} />
      </S.PageSection>

      <S.PageSection>
        <S.PageTitle>{PAYMENT_CONTENT.title}</S.PageTitle>

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

        <S.Note>{PAYMENT_CONTENT.deliveryCostNote.text}</S.Note>
      </S.PageSection>
    </S.Page>
  );
}

type SectionProps = {
  title: string;
  text: string[];
};

function Section({ title, text }: SectionProps) {
  return (
    <S.SectionBlock>
      <S.SectionTitle>{title}</S.SectionTitle>

      {text.map((paragraph, index) => (
        <S.Paragraph key={index}>{paragraph}</S.Paragraph>
      ))}
    </S.SectionBlock>
  );
}
