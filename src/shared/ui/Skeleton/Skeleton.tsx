import type { SkeletonProps } from "./types";

import { SkeletonBlock } from "./Skeleton.styled";

export function Skeleton(props: SkeletonProps) {
  return <SkeletonBlock aria-busy="true" aria-live="polite" {...props} />;
}
