import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  selectBurgerOpen,
  selectBurgerExpanded,
  toggleBurger,
  toggleExpanded,
  closeBurger,
} from "@/features/burgerUI/model";

export function useBurgerUI() {
  const dispatch = useAppDispatch();

  const open = useAppSelector(selectBurgerOpen);
  const expanded = useAppSelector(selectBurgerExpanded);

  return {
    open,
    expanded,
    toggle: () => dispatch(toggleBurger()),
    close: () => dispatch(closeBurger()),
    toggleExpanded: (id: string) => dispatch(toggleExpanded(id)),
  };
}
