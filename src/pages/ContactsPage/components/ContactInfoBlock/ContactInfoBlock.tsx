import { CONTACTS_PAGE_TEXT } from "@/pages/ContactsPage/config";

import * as S from "./ContactInfoBlock.styled";

export function ContactInfoBlock() {
  const { workTime, address, contacts } = CONTACTS_PAGE_TEXT;

  return (
    <S.Section>
      <S.Grid>
        <S.Block>
          <S.Title>{workTime.title}</S.Title>

          {workTime.schedule.map(({ days, time }) => (
            <S.Row key={days}>
              <S.Label>{days}</S.Label>
              <S.Value>{time}</S.Value>
            </S.Row>
          ))}
        </S.Block>

        <S.Block>
          <S.Title>{address.title}</S.Title>
          <S.Text>{address.city}</S.Text>
          <S.Text>{address.street}</S.Text>
        </S.Block>

        <S.Block>
          <S.Title>{contacts.title}</S.Title>

          <S.Text>
            {contacts.phone.label}: <S.Value>{contacts.phone.value}</S.Value>
          </S.Text>

          <S.Text>
            {contacts.email.label}: <S.Value>{contacts.email.value}</S.Value>
          </S.Text>

          {contacts.email.description && <S.Text>{contacts.email.description}</S.Text>}
        </S.Block>
      </S.Grid>
    </S.Section>
  );
}
