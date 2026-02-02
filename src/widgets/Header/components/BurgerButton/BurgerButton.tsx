import { useAppDispatch } from "@/app/store/hooks";
import { openBurger } from "@/features/burgerUI/model";

import { IconButton } from "@/shared/ui/IconButton";
import { icons } from "@/shared/theme/variables";

import { BurgerIcon } from "./BurgerButton.styled";

export function BurgerButton() {
  const dispatch = useAppDispatch();

  return (
    <IconButton
      ariaLabel="Меню"
      onClick={() => dispatch(openBurger())}
      icon={<BurgerIcon src={icons.ui.menu} alt="" />}
    />
  );
}
