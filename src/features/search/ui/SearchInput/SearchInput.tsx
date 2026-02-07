import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

import { selectSearchQuery, setSearchQuery } from "@/features/search/model";

import { Input } from "./SearchInput.styled";

interface Props {
  placeholder?: string;
  autoFocus?: boolean;
}

export function SearchInput({ placeholder, autoFocus }: Props) {
  const dispatch = useAppDispatch();
  const query = useAppSelector(selectSearchQuery);

  return (
    <Input
      value={query}
      onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      placeholder={placeholder}
      autoFocus={autoFocus}
    />
  );
}
