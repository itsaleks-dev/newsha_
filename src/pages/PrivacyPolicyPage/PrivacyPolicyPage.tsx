import { PERSONAL_DATA_POLICY_CONTENT } from "./config";

import {
  Page,
  PageSection,
  PageTitle,
  SectionBlock,
  SectionTitle,
  Paragraph,
  Note,
} from "./PrivacyPolicyPage.styled";

export function PrivacyPolicyPage() {
  const {
    title,
    contents,
    general,
    databases,
    purpose,
    consent,
    location,
    disclosure,
    protection,
    rights,
    requests,
    registration,
  } = PERSONAL_DATA_POLICY_CONTENT;

  return (
    <Page>
      <PageSection>
        <PageTitle>{title}</PageTitle>
      </PageSection>

      <PageSection>
        <SectionTitle>{contents.title}</SectionTitle>

        <SectionBlock>
          {contents.items.map((item, index) => (
            <Paragraph key={index}>{item}</Paragraph>
          ))}
        </SectionBlock>
      </PageSection>

      <PageSection>
        <SectionTitle>{general.title}</SectionTitle>

        <SectionBlock>
          {general.definitions.map((def, index) => (
            <Paragraph key={index}>
              <strong>{def.term}</strong> — {def.description}
              {def.note ? ` (${def.note})` : ""}
            </Paragraph>
          ))}

          <Note>{general.scope}</Note>
        </SectionBlock>
      </PageSection>

      <PageSection>
        <SectionTitle>{databases.title}</SectionTitle>

        <SectionBlock>
          {databases.items.map((item, index) => (
            <Paragraph key={index}>• {item}</Paragraph>
          ))}
        </SectionBlock>
      </PageSection>

      <PageSection>
        <SectionTitle>{purpose.title}</SectionTitle>

        <SectionBlock>
          {purpose.text.map((text, index) => (
            <Paragraph key={index}>{text}</Paragraph>
          ))}
        </SectionBlock>
      </PageSection>

      <PageSection>
        <SectionTitle>{consent.title}</SectionTitle>

        <SectionBlock>
          <Paragraph>
            <strong>{consent.formsTitle}</strong>
          </Paragraph>
          {consent.forms.map((form, index) => (
            <Paragraph key={index}>• {form}</Paragraph>
          ))}

          <Paragraph>
            <strong>{consent.rulesTitle}</strong>
          </Paragraph>
          {consent.rules.map((rule, index) => (
            <Paragraph key={index}>• {rule}</Paragraph>
          ))}
        </SectionBlock>
      </PageSection>

      <PageSection>
        <SectionTitle>{location.title}</SectionTitle>

        <SectionBlock>
          <Paragraph>{location.text}</Paragraph>
        </SectionBlock>
      </PageSection>

      <PageSection>
        <SectionTitle>{disclosure.title}</SectionTitle>

        <SectionBlock>
          {disclosure.text.map((item, index) => (
            <Paragraph key={index}>{item}</Paragraph>
          ))}
        </SectionBlock>
      </PageSection>

      <PageSection>
        <SectionTitle>{protection.title}</SectionTitle>

        <SectionBlock>
          {protection.measures.map((item, index) => (
            <Paragraph key={index}>• {item}</Paragraph>
          ))}
        </SectionBlock>
      </PageSection>

      <PageSection>
        <SectionTitle>{rights.title}</SectionTitle>

        <SectionBlock>
          {rights.items.map((item, index) => (
            <Paragraph key={index}>• {item}</Paragraph>
          ))}
        </SectionBlock>
      </PageSection>

      <PageSection>
        <SectionTitle>{requests.title}</SectionTitle>

        <SectionBlock>
          {requests.rules.map((rule, index) => (
            <Paragraph key={index}>{rule}</Paragraph>
          ))}
        </SectionBlock>
      </PageSection>

      <PageSection>
        <SectionTitle>{registration.title}</SectionTitle>

        <SectionBlock>
          <Paragraph>{registration.text}</Paragraph>
        </SectionBlock>
      </PageSection>
    </Page>
  );
}
