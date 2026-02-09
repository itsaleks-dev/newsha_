import { useState } from "react";

import { AccountTabs } from "@/features/auth/ui/AccountTabs";
import { ProfileTab } from "@/features/auth/ui/AccountTabs/components/ProfileTab";
import { OrdersTab } from "@/features/auth/ui/AccountTabs/components/OrdersTab";
import { SettingsTab } from "@/features/auth/ui/AccountTabs/components/SettingsTab";

import { ACCOUNT_PAGE_TEXT } from "./config";
import * as S from "./AccountPage.styled";

type TabKey = "profile" | "orders" | "settings";

export function AccountPage() {
  const [tab, setTab] = useState<TabKey>("profile");

  return (
    <>
      <S.Header>
        <S.Title>{ACCOUNT_PAGE_TEXT.TITLE}</S.Title>
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
