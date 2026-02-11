import type { SkeletonProps } from "./types";

import * as S from "./Skeleton.styled";

export function Skeleton(props: SkeletonProps) {
  return <S.SkeletonBlock aria-busy="true" aria-live="polite" {...props} />;
}
