import { SkeletonBlock } from "./Skeleton.styled";
import type { SkeletonProps } from "./skeleton.types";

export function Skeleton(props: SkeletonProps) {
  return <SkeletonBlock aria-busy="true" aria-live="polite" {...props} />;
}
