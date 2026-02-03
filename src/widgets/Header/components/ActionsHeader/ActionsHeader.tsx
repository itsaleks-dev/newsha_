import { CartButton } from "@/widgets/Header/components/CartButton";
import { UserButton } from "@/widgets/Header/components/UserButton";

import { DesktopSearch } from "@/features/search/ui/DesktopSearch";

import { BlockActions } from "./ActionsHeader.styled";

export function ActionsHeader() {
  return (
    <BlockActions>
      <DesktopSearch />
      <UserButton />
      <CartButton />
    </BlockActions>
  );
}
