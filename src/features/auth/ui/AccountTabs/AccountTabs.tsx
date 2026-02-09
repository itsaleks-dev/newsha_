import * as S from "./AccountTabs.styled";

type TabKey = "profile" | "orders" | "settings";

interface Props {
  active: TabKey;
  onChange: (tab: TabKey) => void;
}

export function AccountTabs({ active, onChange }: Props) {
  return (
    <S.Tabs>
      <S.Tab $active={active === "profile"} onClick={() => onChange("profile")}>
        Профіль
      </S.Tab>
      <S.Tab $active={active === "orders"} onClick={() => onChange("orders")}>
        Замовлення
      </S.Tab>
      <S.Tab $active={active === "settings"} onClick={() => onChange("settings")}>
        Налаштування
      </S.Tab>
    </S.Tabs>
  );
}
