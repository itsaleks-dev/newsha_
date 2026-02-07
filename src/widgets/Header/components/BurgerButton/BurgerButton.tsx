import { useBurgerUI } from "@/features/burgerUI/hooks";

import { IconButton } from "@/shared/ui/IconButton";
import { icons } from "@/shared/theme/variables";

import { BurgerIcon } from "./BurgerButton.styled";

export function BurgerButton() {
  const { toggle } = useBurgerUI();

  return (
    <IconButton
      ariaLabel="Меню"
      onClick={toggle}
      icon={<BurgerIcon src={icons.ui.menu} alt="" />}
    />
  );
}
