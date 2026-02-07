import { Link, useLocation } from "react-router-dom";

import type { Breadcrumb } from "@/app/navigation/types";

import { Wrapper, List, Item, Separator } from "./Breadcrumbs.styled";

interface Props {
  breadcrumbs: Breadcrumb;
}

export function Breadcrumbs({ breadcrumbs }: Props) {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  return (
    <Wrapper aria-label="Breadcrumbs">
      <List>
        {breadcrumbs.items
          .filter((item) => !item.hidden)
          .map((item, index) => {
            const isLast = index === breadcrumbs.items.length - 1;

            if (item.linkType === "external" && item.href) {
              return (
                <Item key={index}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                  {!isLast && <Separator>/</Separator>}
                </Item>
              );
            }

            if (item.href && !item.isActive) {
              return (
                <Item key={index}>
                  <Link to={item.href}>{item.label}</Link>
                  {!isLast && <Separator>/</Separator>}
                </Item>
              );
            }

            return (
              <Item key={index} data-active>
                {item.label}
              </Item>
            );
          })}
      </List>
    </Wrapper>
  );
}
