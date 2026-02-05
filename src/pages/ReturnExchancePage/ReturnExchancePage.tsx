import { RETURN_CONTENT } from "./config";

import {
  Page,
  PageSection,
  PageTitle,
  SectionBlock,
  SectionTitle,
  Paragraph,
  Note,
} from "./ReturnExchancePage.styled";

export function ReturnExchancePage() {
  return (
    <Page>
      <PageSection>
        <PageTitle>{RETURN_CONTENT.title}</PageTitle>

        <SectionBlock>
          <SectionTitle>{RETURN_CONTENT.generalRule.title}</SectionTitle>

          <Paragraph>{RETURN_CONTENT.generalRule.legalNote}</Paragraph>
          <Paragraph>{RETURN_CONTENT.generalRule.description}</Paragraph>

          {RETURN_CONTENT.generalRule.allowedCases.map((item, index) => (
            <Paragraph key={index}>• {item}</Paragraph>
          ))}
        </SectionBlock>
      </PageSection>

      <PageSection>
        <SectionTitle>{RETURN_CONTENT.mistakeOrDefect.title}</SectionTitle>

        <SectionBlock>
          <SectionTitle>{RETURN_CONTENT.mistakeOrDefect.onReceive.title}</SectionTitle>

          {RETURN_CONTENT.mistakeOrDefect.onReceive.text.map((text, index) => (
            <Paragraph key={index}>{text}</Paragraph>
          ))}
        </SectionBlock>

        <SectionBlock>
          <SectionTitle>{RETURN_CONTENT.mistakeOrDefect.afterReceive.title}</SectionTitle>

          {RETURN_CONTENT.mistakeOrDefect.afterReceive.steps.map((step, index) => (
            <Paragraph key={index}>• {step}</Paragraph>
          ))}
        </SectionBlock>

        <SectionBlock>
          <SectionTitle>{RETURN_CONTENT.mistakeOrDefect.defectiveProduct.title}</SectionTitle>

          <Paragraph>{RETURN_CONTENT.mistakeOrDefect.defectiveProduct.text}</Paragraph>

          {RETURN_CONTENT.mistakeOrDefect.defectiveProduct.requirements.map((req, index) => (
            <Paragraph key={index}>• {req}</Paragraph>
          ))}
        </SectionBlock>

        <SectionBlock>
          <SectionTitle>{RETURN_CONTENT.mistakeOrDefect.refundProcess.title}</SectionTitle>

          {RETURN_CONTENT.mistakeOrDefect.refundProcess.text.map((text, index) => (
            <Paragraph key={index}>{text}</Paragraph>
          ))}
        </SectionBlock>
      </PageSection>

      <PageSection>
        <SectionTitle>{RETURN_CONTENT.notReturnable.title}</SectionTitle>

        <SectionBlock>
          {RETURN_CONTENT.notReturnable.cases.map((item, index) => (
            <Paragraph key={index}>• {item}</Paragraph>
          ))}
        </SectionBlock>
      </PageSection>

      <PageSection>
        <SectionTitle>{RETURN_CONTENT.support.title}</SectionTitle>
        <Paragraph>{RETURN_CONTENT.support.text}</Paragraph>
        <Note>
          Телефон / Telegram:{" "}
          <a href={`tel:${RETURN_CONTENT.support.contacts.phone.replace(/[^+\d]/g, "")}`}>
            {RETURN_CONTENT.support.contacts.phone}
          </a>
          <br />
          Email:{" "}
          <a href={`mailto:${RETURN_CONTENT.support.contacts.email}`}>
            {RETURN_CONTENT.support.contacts.email}
          </a>
        </Note>{" "}
      </PageSection>
    </Page>
  );
}
