import { extractWordRoot } from "./extractWordRoot";
import { normalizeText } from "./normalizeText";

function safeMatch(text: string, keyword: string): boolean {
  if (keyword.includes(" ")) return text.includes(keyword);

  return text.split(" ").some((word) => {
    const wordRoot = extractWordRoot(word);
    const keyRoot = extractWordRoot(keyword);
    return word === keyword || wordRoot === keyRoot || word.startsWith(keyword);
  });
}

export function matchesKeyword(text: string, keyword: string): boolean {
  return safeMatch(text, normalizeText(keyword));
}
