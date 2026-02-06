import { useState } from "react";

import { FAQ_PREVIEW_TEXT } from "./config";
import * as S from "./FAQPreview.styled";

export function FAQPreview() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <S.Section>
      <S.Header>
        <S.Title>{FAQ_PREVIEW_TEXT.TITLE}</S.Title>
        <S.SubTitle>{FAQ_PREVIEW_TEXT.SUBTITLE}</S.SubTitle>
      </S.Header>

      <S.List>
        {FAQ_PREVIEW_TEXT.ITEMS.map((item, index) => {
          const isOpen = activeIndex === index;

          return (
            <S.Item key={item.question}>
              <S.Question onClick={() => toggle(index)}>
                <span>{item.question}</span>
                <S.Arrow $open={isOpen}>›</S.Arrow>
              </S.Question>

              <S.Answer $open={isOpen}>
                <div>
                  <p>{item.answer}</p>
                </div>
              </S.Answer>
            </S.Item>
          );
        })}
      </S.List>
    </S.Section>
  );
}
