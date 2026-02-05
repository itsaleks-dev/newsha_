import { PUBLIC_OFFER_CONTENT } from "./config";

import {
  Page,
  PageSection,
  PageTitle,
  SectionBlock,
  SectionTitle,
  Paragraph,
} from "./PublicOfferPage.styled";

export function PublicOfferPage() {
  return (
    <Page>
      <PageSection>
        <PageTitle>{PUBLIC_OFFER_CONTENT.title}</PageTitle>

        {PUBLIC_OFFER_CONTENT.intro.map((text, index) => (
          <Paragraph key={index}>{text}</Paragraph>
        ))}
      </PageSection>

      <PageSection>
        <SectionTitle>{PUBLIC_OFFER_CONTENT.definitions.title}</SectionTitle>

        {PUBLIC_OFFER_CONTENT.definitions.items.map((item, index) => (
          <SectionBlock key={index}>
            <Paragraph>
              <strong>{item.term}</strong> — {item.description}
            </Paragraph>
          </SectionBlock>
        ))}
      </PageSection>

      <PageSection>
        <SectionTitle>{PUBLIC_OFFER_CONTENT.subject.title}</SectionTitle>

        {PUBLIC_OFFER_CONTENT.subject.text.map((text, index) => (
          <Paragraph key={index}>{text}</Paragraph>
        ))}
      </PageSection>

      <PageSection>
        <SectionTitle>{PUBLIC_OFFER_CONTENT.order.title}</SectionTitle>

        {PUBLIC_OFFER_CONTENT.order.text.map((text, index) => (
          <Paragraph key={index}>{text}</Paragraph>
        ))}

        <SectionBlock>
          <Paragraph>
            <strong>Обовʼязкові дані:</strong>
          </Paragraph>
          {PUBLIC_OFFER_CONTENT.order.requiredData.map((item, index) => (
            <Paragraph key={index}>• {item}</Paragraph>
          ))}
        </SectionBlock>

        <SectionBlock>
          {PUBLIC_OFFER_CONTENT.order.confirmation.map((text, index) => (
            <Paragraph key={index}>{text}</Paragraph>
          ))}
        </SectionBlock>
      </PageSection>

      <PageSection>
        <SectionTitle>{PUBLIC_OFFER_CONTENT.priceAndDelivery.title}</SectionTitle>

        {PUBLIC_OFFER_CONTENT.priceAndDelivery.text.map((text, index) => (
          <Paragraph key={index}>{text}</Paragraph>
        ))}
      </PageSection>

      <PageSection>
        <SectionTitle>{PUBLIC_OFFER_CONTENT.rightsAndDuties.title}</SectionTitle>

        <SectionBlock>
          <Paragraph>
            <strong>Продавець зобовʼязаний:</strong>
          </Paragraph>
          {PUBLIC_OFFER_CONTENT.rightsAndDuties.sellerDuties.map((item, index) => (
            <Paragraph key={index}>• {item}</Paragraph>
          ))}
        </SectionBlock>

        <SectionBlock>
          <Paragraph>
            <strong>Продавець має право:</strong>
          </Paragraph>
          {PUBLIC_OFFER_CONTENT.rightsAndDuties.sellerRights.map((item, index) => (
            <Paragraph key={index}>• {item}</Paragraph>
          ))}
        </SectionBlock>

        <SectionBlock>
          <Paragraph>
            <strong>Покупець зобовʼязується:</strong>
          </Paragraph>
          {PUBLIC_OFFER_CONTENT.rightsAndDuties.buyerDuties.map((item, index) => (
            <Paragraph key={index}>• {item}</Paragraph>
          ))}
        </SectionBlock>
      </PageSection>

      <PageSection>
        <SectionTitle>{PUBLIC_OFFER_CONTENT.guarantees.title}</SectionTitle>

        {PUBLIC_OFFER_CONTENT.guarantees.text.map((text, index) => (
          <Paragraph key={index}>{text}</Paragraph>
        ))}
      </PageSection>

      <PageSection>
        <SectionTitle>{PUBLIC_OFFER_CONTENT.liability.title}</SectionTitle>

        {PUBLIC_OFFER_CONTENT.liability.text.map((text, index) => (
          <Paragraph key={index}>{text}</Paragraph>
        ))}
      </PageSection>

      <PageSection>
        <SectionTitle>{PUBLIC_OFFER_CONTENT.privacy.title}</SectionTitle>

        {PUBLIC_OFFER_CONTENT.privacy.text.map((text, index) => (
          <Paragraph key={index}>{text}</Paragraph>
        ))}
      </PageSection>

      <PageSection>
        <SectionTitle>{PUBLIC_OFFER_CONTENT.other.title}</SectionTitle>

        {PUBLIC_OFFER_CONTENT.other.text.map((text, index) => (
          <Paragraph key={index}>{text}</Paragraph>
        ))}
      </PageSection>
    </Page>
  );
}
