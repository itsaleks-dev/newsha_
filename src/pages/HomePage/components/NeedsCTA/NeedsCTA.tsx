import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { NEEDS_CATEGORIES, CONDITION_CATEGORIES } from "@/features/fakeBackend/category/data";

import { useSnapSlider } from "@/shared/hooks";

import * as S from "./NeedsCTA.styled";

export function NeedsCTA() {
  const navigate = useNavigate();
  const [activeNeed, setActiveNeed] = useState<string | null>(null);

  const needs = useMemo(
    () => NEEDS_CATEGORIES.filter((c) => c.parentId && c.isActive && c.slug !== "basic-needs"),
    [],
  );

  const { trackRef, active } = useSnapSlider({
    itemsCount: needs.length,
    gap: 12,
  });

  const conditions = useMemo(
    () => CONDITION_CATEGORIES.filter((c) => c.parentId && c.isActive),
    [],
  );

  return (
    <S.Section>
      <S.Track ref={trackRef}>
        {needs.map((need) => {
          const isActive = need.slug === activeNeed;

          return (
            <S.Pill
              key={need.id}
              $active={isActive}
              onClick={() => setActiveNeed(isActive ? null : need.slug)}
            >
              <span>{need.name}</span>
              <S.PillArrow $active={isActive}>›</S.PillArrow>
            </S.Pill>
          );
        })}
      </S.Track>

      <S.Progress>
        <S.ProgressBar
          style={{
            width: `${100 / needs.length}%`,
            transform: `translateX(${active * 100}%)`,
          }}
        />
      </S.Progress>

      {activeNeed && (
        <S.Dropdown>
          <S.DropdownList>
            {conditions.map((cond) => (
              <S.DropdownItem
                key={cond.id}
                onClick={() => navigate(`/catalog?need=${activeNeed}&condition=${cond.slug}`)}
              >
                {cond.name}
              </S.DropdownItem>
            ))}
          </S.DropdownList>
        </S.Dropdown>
      )}
    </S.Section>
  );
}
