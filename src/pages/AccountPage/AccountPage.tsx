import { useState } from "react";

import { AccountTabs, ProfileTab, OrdersTab, SettingsTab } from "@/features/auth/ui/AccountTabs";

import * as S from "./AccountPage.styled";

type TabKey = "profile" | "orders" | "settings";

export function AccountPage() {
  const [tab, setTab] = useState<TabKey>("profile");

  return (
    <>
      <S.Header>
        <S.Title>Мій кабінет</S.Title>
      </S.Header>

      <AccountTabs active={tab} onChange={setTab} />

      <S.Content>
        {tab === "profile" && <ProfileTab />}
        {tab === "orders" && <OrdersTab />}
        {tab === "settings" && <SettingsTab />}
      </S.Content>
    </>
  );
}
