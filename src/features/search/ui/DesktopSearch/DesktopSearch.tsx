import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

import { SearchInput } from "@/features/search/ui/SearchInput";
import {
  openSearch,
  closeSearch,
  setSearchQuery,
  selectIsSearchOpen,
  selectSearchQuery,
} from "@/features/search/model";

import { IconButton } from "@/shared/ui/IconButton";
import { icons } from "@/shared/theme/variables";

import { Wrapper, Popover } from "./DesktopSearch.styled";
import { SearchIcon } from "./SearchButton.styled";

export function DesktopSearch() {
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector(selectIsSearchOpen);
  const query = useAppSelector(selectSearchQuery);

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
          <SearchInput
            value={query}
            autoFocus
            placeholder="Пошук…"
            onChange={(value) => dispatch(setSearchQuery(value))}
          />
        </Popover>
      )}
    </Wrapper>
  );
}
