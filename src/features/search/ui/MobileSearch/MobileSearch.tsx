import { useAppSelector } from "@/app/store/hooks";

import { selectSearchQuery } from "@/features/search/model";
import { useTypingPlaceholder } from "@/features/search/hooks";
import { SearchInput } from "@/features/search/ui/SearchInput";

import { SEARCH_PLACEHOLDERS } from "./config";
import { MobileSearchWrapper } from "./MobileSearch.styled";

export function MobileSearch() {
  const query = useAppSelector(selectSearchQuery);

  const typingPlaceholder = useTypingPlaceholder(SEARCH_PLACEHOLDERS, query.length === 0);

  return (
    <MobileSearchWrapper>
      <SearchInput placeholder={typingPlaceholder} />
    </MobileSearchWrapper>
  );
}
