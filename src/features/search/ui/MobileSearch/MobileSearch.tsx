import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

import { openSearch, selectIsSearchOpen } from "@/features/search/model";
import { SearchInput } from "@/features/search/ui/SearchInput";

import { MobileSearchWrapper } from "./MobileSearch.styled";

export function MobileSearch() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectIsSearchOpen);

  if (isOpen) return null;

  return (
    <MobileSearchWrapper>
      <SearchInput
        value=""
        placeholder="Пошук"
        onFocus={() => dispatch(openSearch())}
        onChange={() => {}}
      />
    </MobileSearchWrapper>
  );
}
