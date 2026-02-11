import { Input } from "./SearchInput.styled";

interface Props {
  value: string;
  placeholder?: string;
  autoFocus?: boolean;
  onChange: (value: string) => void;
  onFocus?: () => void;
}

export function SearchInput({ value, placeholder, autoFocus, onChange, onFocus }: Props) {
  return (
    <Input
      value={value}
      placeholder={placeholder}
      autoFocus={autoFocus}
      onFocus={onFocus}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
