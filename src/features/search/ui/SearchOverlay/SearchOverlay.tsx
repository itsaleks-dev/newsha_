import { Link, useNavigate } from "react-router-dom";

import { useSearchOverlay } from "@/features/search/hooks";
import { SEARCH_CONFIG } from "@/features/search/config";

import { SEARCH_OVERLAY_TEXT } from "./config";
import * as S from "./SearchOverlay.styled";

const { MIN_CHARS } = SEARCH_CONFIG;

export function SearchOverlay() {
  const navigate = useNavigate();

  const {
    isOpen,
    query,
    status,
    results,
    typedPlaceholder,
    isValidQuery,
    hasSearched,
    handleChange,
    handleClose,
  } = useSearchOverlay();

  if (!isOpen) return null;

  const goToSearchPage = () => {
    if (!isValidQuery) return;
    handleClose();
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <>
      <S.Overlay onClick={handleClose} />

      <S.Panel onClick={(e) => e.stopPropagation()}>
        <S.TopRow>
          <S.Input
            autoFocus
            value={query}
            placeholder={query ? "" : typedPlaceholder}
            onChange={(e) => handleChange(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && goToSearchPage()}
          />
          <S.CloseButton onClick={handleClose}>×</S.CloseButton>
        </S.TopRow>

        <S.Results>
          {query.length > 0 && !isValidQuery && (
            <S.EmptyState>{SEARCH_OVERLAY_TEXT.MIN_QUERY(MIN_CHARS)}</S.EmptyState>
          )}

          {isValidQuery && status === "loading" && (
            <S.LoadingText>{SEARCH_OVERLAY_TEXT.LOADING}</S.LoadingText>
          )}

          {hasSearched && isValidQuery && status !== "loading" && results.length === 0 && (
            <S.EmptyState>{SEARCH_OVERLAY_TEXT.EMPTY}</S.EmptyState>
          )}

          {isValidQuery &&
            results.map((item) => (
              <S.ResultItem
                key={item.id}
                as={Link}
                to={`/products/${item.slug}`}
                onClick={handleClose}
              >
                <S.Thumb>
                  <img src={item.image} alt={item.nameEn} loading="lazy" />
                </S.Thumb>

                <S.Info>
                  <S.Title>{item.nameEn}</S.Title>

                  {item.nameUa && (
                    <S.SubTitle>
                      {item.nameUa} — {item.volume.label ?? `${item.volume.value} мл`}
                    </S.SubTitle>
                  )}
                </S.Info>
              </S.ResultItem>
            ))}
        </S.Results>

        {isValidQuery && results.length > 0 && (
          <S.Footer>
            <S.ViewAllButton onClick={goToSearchPage}>
              {SEARCH_OVERLAY_TEXT.VIEW_ALL}
            </S.ViewAllButton>
          </S.Footer>
        )}
      </S.Panel>
    </>
  );
}
