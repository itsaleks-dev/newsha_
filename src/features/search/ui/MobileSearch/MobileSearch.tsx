import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { selectSearchQuery } from "@/features/search/model";
import { setSearchQuery } from "@/features/search/model";

import { useTypingPlaceholder } from "@/features/search/hooks";

import { SEARCH_PLACEHOLDERS } from "./config";
import { MobileSearchWrapper, SearchInput } from "./MobileSearch.styled";

export function MobileSearch() {
  const dispatch = useAppDispatch();
  const query = useAppSelector(selectSearchQuery);

  const typingPlaceholder = useTypingPlaceholder(SEARCH_PLACEHOLDERS, query.length === 0);

  return (
    <MobileSearchWrapper>
      <SearchInput
        value={query}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        placeholder={typingPlaceholder}
        autoFocus
      />
    </MobileSearchWrapper>
  );
}
