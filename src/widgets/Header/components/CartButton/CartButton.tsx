import { useAppDispatch } from "@/app/store/hooks";

import { openCart } from "@/features/cart/model";

import { IconButton } from "@/shared/ui/IconButton";
import { icons } from "@/shared/theme/variables";

import { CartIcon } from "./CartButton.styled";

export function CartButton() {
  const dispatch = useAppDispatch();

  return (
    <IconButton
      ariaLabel="Кошик"
      onClick={() => dispatch(openCart())}
      icon={<CartIcon src={icons.user.bag} alt="" />}
    />
  );
}
