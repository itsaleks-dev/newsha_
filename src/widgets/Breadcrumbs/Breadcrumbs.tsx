import { Link, useLocation } from "react-router-dom";

import type { Breadcrumb } from "@/app/navigation/types";

import * as S from "./Breadcrumbs.styled";

interface Props {
  breadcrumbs: Breadcrumb;
}

export function Breadcrumbs({ breadcrumbs }: Props) {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  return (
    <S.Wrapper aria-label="Breadcrumbs">
      <S.List>
        {breadcrumbs.items
          .filter((item) => !item.hidden)
          .map((item, index) => {
            const isLast = index === breadcrumbs.items.length - 1;

            if (item.linkType === "external" && item.href) {
              return (
                <S.Item key={index}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                  {!isLast && <S.Separator>/</S.Separator>}
                </S.Item>
              );
            }

            if (item.href && !item.isActive) {
              return (
                <S.Item key={index}>
                  <Link to={item.href}>{item.label}</Link>
                  {!isLast && <S.Separator>/</S.Separator>}
                </S.Item>
              );
            }

            return (
              <S.Item key={index} data-active>
                {item.label}
              </S.Item>
            );
          })}
      </S.List>
    </S.Wrapper>
  );
}
