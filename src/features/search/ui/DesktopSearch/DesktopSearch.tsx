import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

import { openSearch, closeSearch, selectIsSearchOpen } from "@/features/search/model";
import { SearchInput } from "@/features/search/ui/SearchInput";

import { IconButton } from "@/shared/ui/IconButton";
import { icons } from "@/shared/theme/variables";

import { Wrapper, Popover } from "./DesktopSearch.styled";
import { SearchIcon } from "./SearchButton.styled";

export function DesktopSearch() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectIsSearchOpen);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") dispatch(closeSearch());
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, dispatch]);

  return (
    <Wrapper>
      <IconButton
        ariaLabel="Пошук"
        onClick={() => dispatch(isOpen ? closeSearch() : openSearch())}
        icon={<SearchIcon src={icons.ui.search} alt="" />}
      />

      {isOpen && (
        <Popover>
          <SearchInput autoFocus placeholder="Пошук…" />
        </Popover>
      )}
    </Wrapper>
  );
}
